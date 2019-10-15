<template>
    <div id="error_log_page">

        <el-badge is-dot class="debug" @click.native="dialogVisible = true">
            <icon-svg name="debug" />
        </el-badge>
    
        <el-dialog
                title="错误日志"
                :visible.sync="dialogVisible"
                :append-to-body='true'
                width="30%">
            <el-table
                :data="log"
                style="width: 100%">
                <el-table-column type="expand">
                    <template slot-scope="props">
                        {{ props.row.error.stack }}
                    </template>
                </el-table-column>
                <el-table-column prop="error" label="message">
                    <template slot-scope="scope">{{scope.row.error}}</template>
                </el-table-column>
                <el-table-column prop="time" label="date"></el-table-column>
            </el-table>
            <span slot="footer" class="dialog-footer">
                <el-button size="mini" @click="dialogVisible = false">查看</el-button>
                <el-button size="mini" type="primary" @click="dialogVisible = false">关闭</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    created() {
        throw 'some err'
    },
    data() {
        return {
            dialogVisible: false,
        }
    },
    computed: {
        ...mapGetters({
            log: 'app/errorLog'
        })
    }
}
</script>
<style lang="scss" scoped>
.debug {
    margin: 0 10px;
    color: #d81e06
}
</style>