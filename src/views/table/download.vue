<template>
    <div id="table_download_page">
        <el-table
            :data="table"
            border
            style="width: 100%"
            height="85vh"
            @selection-change="selectionChangeHandle">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="name" label="姓名"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
            <el-table-column>
                <template slot="header" slot-scope>
                    <el-button size="mini" @click="downloadAsCsv">csv下载</el-button>
                </template>
            </el-table-column>
  </el-table>
    </div>
</template>
<script>
import { getTable } from '@/api'
export default {
    data() {
        return {
            table: [],
            selection: [],
        }
    },
    async created() {
        const { data } = await getTable({pageSize: 500});
        this.table = data
    },
    methods: {
        selectionChangeHandle(val) {
            console.log('select val:', this.selection);
            this.selection = val;
        },

        downloadAsCsv() {
            // let csvContent = 'data:text/csv;charset=utf-8,' + this.table.map(i => {
                
                
            // }).join('\n');
            
            // let aLink = document.createElement('a');
            // aLink.style.display = 'none';
            // aLink.herf = encodeURI(csvContent)
            // aLink.download = 'table_download.csv'
            // document.body.appendChild(aLink);
            // aLink.click();
            // document.body.removeChild(aLink);
        }
    }
}
</script>