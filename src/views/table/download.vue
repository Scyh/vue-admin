<template>
    <div id="table_download_page">
        <el-table
            :data="table"
            v-loading="tableLoading"
            border
            style="width: 100%"
            height="85vh"
            @selection-change="selectionChangeHandle">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="name" label="姓名"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
            <el-table-column prop="phone" label="手机号"></el-table-column>
            <el-table-column prop="number" label="随机数"></el-table-column>
            <el-table-column>
                <template slot="header" slot-scope="scope">
                    <el-dropdown>
                        <el-button size="mini" @click="downloadAsCsv" v-loading="downloadCSVLoading" icon="el-icon-download">csv下载</el-button>
                        <el-dropdown-menu slot="dropdown"></el-dropdown-menu>
                    </el-dropdown>

                    <el-dropdown @command="downloadAsXslx">
                        <el-button @click="downloadAsXslx" size="mini" icon="el-icon-download">xslx下载</el-button>
                        <el-dropdown-menu slot="dropdown">
                            <!-- <el-dropdown-item @click="downloadAsXslx({ cHeader: true })">含有中文表头</el-dropdown-item> -->
                            <el-dropdown-item :command="{ cHeader: true }">含有中文表头</el-dropdown-item>
                            <!-- <el-dropdown-item @click="downloadAsXslx({ header: false })">没有表头</el-dropdown-item> -->
                            <el-dropdown-item :command="{ header: false }">没有表头</el-dropdown-item>
                            <!-- <el-dropdown-item @click="downloadAsXslx({ numberFormat: true })">数字列格式化（精确两位小数点）</el-dropdown-item> -->
                            <el-dropdown-item :command="{ numberFormat: true }">数字列格式化（精确两位小数点）</el-dropdown-item>
                            <!-- <el-dropdown-item @click="downloadAsXslx({ setColWidth: true })">设置列宽</el-dropdown-item> -->
                            <el-dropdown-item :command="{ setColWidth: true }">设置列宽</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    
                </template>
            </el-table-column>
  </el-table>
    </div>
</template>
<script>
import XLSX from 'xlsx'
import { getTable } from '@/api'
export default {
    data() {
        return {
            table: [],
            selection: [],
            tableLoading: false,
            downloadCSVLoading: false,
            downloadXLSXLoading: false,
        }
    },
    created() {
        this.getTable();
    },
    methods: {
        async getTable() {
            this.tableLoading = true;
            setTimeout( async() => {
                let { data } = await getTable({pageSize: 1000});
                this.table = Object.freeze(data)
                this.tableLoading = false;
            })
        },

        selectionChangeHandle(val) {
            this.selection = val;
        },
        downloadAsCsv() {
            this.downloadCSVLoading = true
            let tableCopy = this.table.map(i => Object.values(i)),
                csvContent = 'data:text/csv;charset=utf-8,' + tableCopy.map(i => i.join(',')).join('\n');
            
            let aLink = document.createElement('a');
            aLink.style.display = 'none';
            aLink.herf = encodeURI(csvContent)
            aLink.download = 'table_download.csv'
            document.body.appendChild(aLink);
            aLink.click();
            this.downloadCSVLoading = false;
            document.body.removeChild(aLink);
        },
        downloadAsXslx(options) {
            // 新建 workbook
            let wb = XLSX.utils.book_new();

            /* aoa_to_sheet */
            /*
            let tableCopyAOA = this.table.map(i => Object.values(i)),

                

                // 新建 worksheet
                ws = XLSX.utils.aoa_to_sheet(tableCopyAOA, {
                    origin: 'A3'
                });
            */


           /* json_to_sheet */
            let tableCopyJson = JSON.parse(JSON.stringify(this.table)),
                wsName = 'sheet1',
                wsConfig = {}
    
            if (options) {

                if (options.cHeader) {
                    tableCopyJson.unshift({ id: '编号', name: '姓名', address: '地址', phone: '电话', number: '数字'})
                    wsConfig['skipHeader'] = true
                }

                if (!options.header) {
                    wsConfig['skipHeader'] = true
                }
                
            }

            let ws = XLSX.utils.json_to_sheet(tableCopyJson, wsConfig);
            

            if (options) {

                // 格式化数字列
                if (options.numberFormat) {
                    Object.keys(ws).forEach(i => {
                        if (/^E\d+/.test(i)) {
                            ws[i]['z'] = "0.00"
                        }
                    })
                }

                // 设置列宽
                if (options.setColWidth) {
                    ws['!cols'] = [
                        {
                            width: '37px',
                        },
                        {},
                        {
                            width: '40px',
                        },
                        {
                            width: '20px',
                        }
                    ]
                }
            }


            ws['A1'].s = {
                fill: {
                    bgColor:'#ff0000'
                },
                font: {
                    sz: 50
                }
            }

        
            // 向 book 中添加 sheet
            XLSX.utils.book_append_sheet(wb, ws, wsName);

            // 写文件
            XLSX.write(wb, {bookType: 'xlsx', bookSST:true, type: 'base64'}) 
            XLSX.writeFile(wb, 'table_download.xlsx')
        },
        downloadHandle(type) {
            if (this.selection.length > 0) {
                this.$confirm('是否下载选中数据？', '提示', {
                    confirmButtonText: '是',
                    cancelButtonText: '否',
                    type: 'warning'
                }).then(() => {
                   
                }).catch(() => {
                });
            } else {

            }

        }
    }
}
</script>