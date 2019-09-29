<template>
    <div class="lock dis-flex flex-column just-start align-center" :style='{ backgroundImage: "url("+ defaultLockPic +")" }'>
        <el-form class="lock-form" label-width="80px"  @submit.native.prevent="unlock">
            <el-form-item>
                <el-input type="password" v-model="password" placeholder="当前处于锁屏状态。">
                    <template slot="prepend"><icon-svg :className="['lock-icon']"  name="lock1" /></template>
                </el-input>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            defaultLockPic: require('@/assets/lock.jpeg'),
            password: null,
        }
    },
    methods: {
        unlock() {
            this.$store.dispatch('app/unlock', this.password)
                .then(rst => {
                    console.log(rst)
                    if (!rst) this.$message.error('输入密码错误！');
                    else {
                        this.$router.replace(rst)
                    }
                })
        }
    }
}   
</script>
<style lang="scss">
.lock {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    .lock-form {
        width: 320px;
        margin-top: 15%;
        .lock-icon {
            padding-top: 5px;
        }
    }
}
</style>