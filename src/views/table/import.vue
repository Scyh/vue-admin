<template>
    <div id="table_import_page">
        <upload class="upload"
            @upload="uploadHandle"
            :accept='"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"'/>
        <!-- <el-table
            :data="table"
            border
            style="width: 100%">
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
        </el-table> -->
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
            console.log(files)
            let reader = new FileReader();
            reader.readAsBinaryString(files[0]);
            reader.onload = () =>{
                let wb = XLSX.read(reader.result, { type: 'binary' });
                
            };
        }
    }
}
</script>

<style scoped>
.upload {
    width: 100%;
}
</style>