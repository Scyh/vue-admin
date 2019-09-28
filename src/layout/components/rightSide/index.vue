<template>
    <div class="right-side">
        <ul>
            <li class="setting-item" v-for="i in settings" :key="i.name">
                <el-row>
                    <el-col tag="span" :span="12" class="setting-text font-12 color-white mg-b-5">{{i.name}}</el-col>
                    <el-col :span="12">
                        <el-switch active-text="on" inactive-text="off" v-model="i.value" @change="changeHandle(i.changeFn)" ></el-switch>
                    </el-col>
                    <el-col tag="span" :span="24" class="setting-text font-12 color-normal mg-b-10">{{i.description}}</el-col>
                </el-row>
            </li>
        </ul>
    </div>
</template>
<script>
import appMixin from '@/layout/mixin/app'
export default {
    mixins: [appMixin],
    data() {
        return {
            settings: [
                {
                    name: '导航栏固定',
                    description: '固定后，导航栏会固定在页面的顶部',
                    value: this.headerFixed,
                    changeFn: 'toggleHeaderFixed'
                },
                {
                    name: '设置二',
                    value: false,
                },
                {
                    name: '设置三',
                    value: false,
                },
                {
                    name: '设置四',
                    value: false,
                },
                {
                    name: '设置五',
                    value: false,
                }
            ]
        }
    },
    methods: {
        changeHandle: function(fnName) {
            fnName && this[fnName] && this[fnName]();
        }
    }
}
</script>
<style lang="scss" scoped>
.right-side {
    position: fixed;
    top: 0;
    bottom: 0;
    z-index: 1000;
    right: -$rightSideWidth;
    width: $rightSideWidth;
    padding: 20px;
    background: $sidebarBgColor;
    color: $sidebarTextColor;

    .setting-item {
        margin: 30px 10px;
        .setting-text {
            text-indent: 3px;
            line-height: 20px;
        }
    }
}
</style>