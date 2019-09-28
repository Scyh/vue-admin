<template>
    <div id="login_page">
        <p>登录页面</p>
        <el-row type="flex" justify="center">
            <el-col :span="6">
                <el-form ref="form" :model="form" :rules="rules" label-width="80px" @submit="login"  @keyup.13.native="login">
                    <el-form-item label="用户名" prop="user_name">
                        <el-input v-model="form.user_name" placeholder="请输入用户名"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input v-model="form.password" placeholder="请输入密码"></el-input>
                    </el-form-item>
                        <el-button type="primary" @click="login">登录</el-button>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form: {
                user_name: 'admin',
                password: 'admin'
            },
            rules: {
                user_name: [
                    { required: true, message: '请输入用户名', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 5, max: 13, trigger: 'blur', mesasge: '密码长度5-13位' }
                ]
            }
        } 
    },
    methods: {
        login() {
            this.$refs.form.validate(valid => {
                if (valid) {
                    this.$store.dispatch('user/login', this.form)
                    .then(userInfo => {
                        this.$router.push({ path: '/' })
                    }).catch(err => {
                        console.log('login err: ', err);
                        this.$message.error('登录失败！')
                    })
                }
            })
            
        }
    }
};
</script>