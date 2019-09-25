<template>
    <div :class='["right-side", { "open": rightSideOpening }]'>
        <ul>
            <li class="setting-item" v-for="i in settings" :key="i.name">
                <el-row type="flex">
                    <el-col tag="span" :span="10" class="setting-text">{{i.name}}</el-col>
                    <el-col :span="14">
                        <el-switch  active-text="on" inactive-text="off"  v-model="i.value"></el-switch>
                    </el-col>
                </el-row>
            </li>
        </ul>
    </div>
</template>
<script>
import appMixin from '@/layout/mixin/app'
export default {
    data() {
        return {
            settings: [
                {
                    name: '设置一',
                    value: false,
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
    mixins: [appMixin],
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
        font-size: 12px;
        .setting-text {
            line-height: 20px;
        }
    }
}
.right-side.open {
    right: 0;
}
</style>