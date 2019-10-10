<template>
    <div id="table_page">
        <template>
        <el-table
            v-loading="loading"
            :data="table"
            height="75vh"
            border
            style="width: 100%">
            <el-table-column prop="name" label="姓名"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>

        <el-pagination
            :page-size="20"
            :current-page="page"
            layout="prev, pager, next"
            :total="1000"
            @current-change="getTable">
        </el-pagination>
</template>
    </div>
</template>
<script>
import { getTable } from '@/api'
export default {
    data() {
        return {
            table: [],
            loading: false,
            page: 1,
            pageSize: 20,
        }
    },
    async created() {
        
    },
    methods: {
        async getTable() {
            this.loading = true;
            let {data} = await getTable({
                pageSize: this.pageSize,
                page: this.page
            });
            this.table = Object.freeze(data);
            this.loading = false;
        }
    }
}
</script>
<style lang="scss">
    
</style>