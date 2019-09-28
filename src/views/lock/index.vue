<template>
    <div class="lock">
        <el-form class="lock-form" label-width="80px">
            <el-form-item label="锁屏密码">
                <el-input type="password" v-model="password"></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            password: null,
        }
    }
}   
</script>
<style lang="scss">
.lock {
}
</style>