<template>
    <div id="self_page">
        <el-card>
            <section class="self-box dis-flex just-center">
                <div class="self-avatar dis-flex align-center">
                    <el-avatar shape="square" :size="128" icon="el-icon-user" src></el-avatar>
                </div>
                <div class="flex-1 font-14">
                    <el-row>
                        <el-col :span="8">
                            <el-row :gutter="20">
                                
                                <el-col :span="12" v-for="i in user" :key="i.key">
                                    <div class="user-info-item">
                                        <p class="color-normal mg-b-5">
                                            {{i.text}}
                                            <!-- <icon-svg name="lock" /> -->
                                        </p>
                                        <p>{{ i.value }}</p>
                                    </div>
                                </el-col>
                            </el-row>
                        </el-col>
                        <el-col :span="1" class='text-left'>
                            <icon-svg name="edit1" />
                        </el-col>
                    </el-row>
                </div>
            </section>
        </el-card>
    </div>
</template>
<script>
export default {
    data() {
        return {
            user: [
                {
                    text: '真实姓名',
                    key: 'name',
                    value: '张三'
                },
                {
                    text: '性别',
                    key: 'sex',
                    value: '男'
                },
                {
                    text: '生日',
                    key: 'birthday',
                    value: '2019-09-30'
                },
                {
                    text: '个人网站',
                    key: 'web',
                    value: 'xxxxxxx@xx.xxx'
                },
                {
                    text: '联系电话',
                    phone: 'name',
                    value: '13xxxxxxxx'
                },
                {
                    text: '个人邮箱',
                    key: 'email',
                    value: 'xxxxxxx@xx.xxx'
                }
            ],
        };
    }
};
</script>
<style lang="scss">
.user-info-item {
    margin: 10px 20px;
    color: #000;
}    
</style>