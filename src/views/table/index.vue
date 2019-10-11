<template>
    <div id="table_page">
        <template>
        <el-table
            v-loading="loading"
            :data="table.filter(i => !searchKey || i.name.includes(searchKey) || i.address.includes(searchKey) || i.phone.includes(searchKey))"
            height="80vh"
            border
            style="width: 100%">
            <el-table-column prop="name" label="姓名"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
            <el-table-column prop="phone" label="联系电话"></el-table-column>
            <el-table-column align="center">
                <template slot="header" slot-scope="scope">
                    <el-input size="mini" placeholder="搜索该页面数据" prefix-icon="el-icon-search" v-model="searchKey"></el-input>
                </template>
                <template slot-scope="scope">
                    <el-button size="mini" type="danger" @click="delHandle(scope.row.id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-pagination
            :page-size="pageSize"
            :current-page="page"
            :total="count"
            :page-sizes="[50,60,80,100,200,400]"
            layout="sizes, prev, pager, next"
            @current-change="pageChagneHandle"
            @size-change="sizeChangeHandle"
            @prev-click="pageChagneHandle(null, -1)"
            @next-click="pageChagneHandle(null, 1)">
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
            pageSize: 50,
            count: 0,
            searchKey: ''
        }
    },
    created() {
        this.getTable()
    },
    methods: {
        async getTable() {
            this.loading = true;
            const { data, count } = await getTable({
                pageSize: this.pageSize,
                page: this.page,
            });
            this.table = Object.freeze(data);
            this.count = count
            // setTimeout(() => {
                this.loading = false;
            // }, 10000)
        },

        pageChagneHandle(currentPage, step) {
            currentPage ? this.page = currentPage
                        : this.page += step;
            this.getTable();
        },

        sizeChangeHandle(pageSize) {
            this.pageSize = pageSize;
            this.getTable();
        }
    }
}
</script>
<style lang="scss">
    
</style>