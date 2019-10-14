<template>
    <div id="table_import_page">
        <upload class="upload"
            @upload="uploadHandle"
            :accept='"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"'/>
        
        <template v-if="table.length > 0">
            <el-table
                v-for="i in table"
                :key="i.name"
                :data="i.data"
                :show-header="false"
                border
                style="width: 100%">
                <el-table-column v-for="col in i.cols" :key="col" :prop="col"></el-table-column>
            </el-table>    
        </template>
    </div>
</template>

<script>
import XLSX from 'xlsx'
import upload from '@/components/upload'
export default {
    components: {
        upload
    },
    data() {
        return {
            table: []
        }
    },
    methods: {

        // 文件上传
        uploadHandle(files) {
            let reader = new FileReader();
            reader.readAsBinaryString(files[0]);
            reader.onload = () =>{
                let wb = XLSX.read(reader.result, { type: 'binary' });
                this.ws2table(wb)
            };
        },
        ws2table(workbook) {
            console.log(workbook)
            if(!workbook) return;
            let { SheetNames, Sheets } = workbook;
            if (SheetNames.length <= 0) return this.$message.wraning('上传表格中没有数据');

            this.table = this.table.concat(SheetNames.map(i => {
                var data = XLSX.utils.sheet_to_json(Sheets[i], {header: 'A'})
                return {
                    data,
                    name: i,
                    cols: Object.keys(data[0])
                }
            }))
        }
    }
}
</script>

<style scoped>
.upload {
    width: 100%;
}
</style>