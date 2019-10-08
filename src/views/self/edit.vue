<template>
    <el-dialog title="编辑个人信息" 
        :visible.sync="show"
        width="300px"
        top="10vh"
        :before-close="close">

        <div class="info-edit">
            <el-form size="mini">
                <el-form-item label="真实姓名">
                    <el-input v-model="user.name"></el-input>
                </el-form-item>
                <el-form-item label="性别">
                    <el-input v-model="user.sex"></el-input>
                </el-form-item>
                <el-form-item label="生日">
                    <el-input v-model="user.birthday"></el-input>
                </el-form-item>
                <el-form-item label="个人网站">
                    <el-input v-model="user.web"></el-input>
                </el-form-item>
                <el-form-item label="联系电话">
                    <el-input v-model="user.phone"></el-input>
                </el-form-item>
                <el-form-item label="个人邮箱">
                    <el-input v-model="user.email"></el-input>
                </el-form-item>
            </el-form>
        </div>

        <div slot="footer" class="dialog-footer">
            <el-button size="mini" @click="close">取消</el-button>
            <el-button size="mini" type="primary" @click="close">确认修改</el-button>
        </div>
    </el-dialog>
</template>
<script>
export default {
    props: {
        show: {
            required: true,
        }
    },
    data() {
        return {
            user: {
                name: '张三',
                sex: '男',
                birthday: '2019-09-30',
                web: 'xxxxxxx@xx.xxx',
                phone: '13xxxxxxxx',
                email: 'xxxxxxx@xx.xxx'
            }
        }
    },
    methods: {
        close(done) {
            this.$emit('update:show', false);
        }
    }
}
</script>
<style lang="scss">
.info-edit {
    .edit-avatar {
        border: 1px dashed #ccc;
        width: 100%;
        height: 150px;
        box-sizing: border-box;
    }

}
</style>