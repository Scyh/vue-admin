<template>
    <header class="lo-header">
        <div v-show="logo" :class="['lo-header-left', 'logo', { 'collapse': sidebarOpening }]">BRAND</div>
        <div class="lo-header-right">
            <span class="meau-collapse">
                <icon-svg @click="toggleSidebar"  :name="sidebarOpening ? 'menuon' : 'menuoff'" />
            </span>
            <div class="lo-header-right-user">
                <el-badge is-dot class="user-meta user-email">
                    <icon-svg name="email" />
                </el-badge>
                <el-badge is-dot class="user-meta user-email">
                    <icon-svg name="bell" />
                </el-badge>
                <div class="user-meta user-name">
                    username
                </div>
                <div class="user-meta user-profile w-32">
                    <img class="circle" src="../../../assets/profile.png">
                </div>
            </div>
        </div>
    </header>
</template>
<script>
import appMixin from '@/layout/mixin/app'
export default {
    mixins: [appMixin],
}
</script>
<style lang="scss" scoped>
.lo-header {
    height: $headerHeight;
    line-height: $headerHeight;
    box-shadow: 0 1px 4px $borderColor;
    .lo-header-left {
        position: fixed;
        top: 0;
        left: 0;
        width: $sidebarWidth;
        text-align: center;
        border-right: 1px solid $borderColor;
        @include transition-collapse;
    }
    .lo-header-left.collapse {
        left: -$sidebarWidth;
    }
    .lo-header-left.collapse + .lo-header-right {
        margin-left: 0;
    }
    .lo-header-right {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-left: $sidebarWidth;
        @include transition-collapse;
        .lo-header-right-user {
            line-height: 1;
            display: flex;
            justify-content: flex-end;
            .user-meta {
                margin: 0 10px;
            }
            .user-profile {
                border-radius: 50%;
                > img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }

    /* logo */
    .logo {
        font-size: 20px;
        cursor: pointer;
        &:hover {
            &::before {
                margin-right: 15px;
            }
            &::after {
                margin-left: 15px;
            }
        }
        &::before {
            content: '[';
            margin-right: 5px;
            font-size: 22px;
            color: aquamarine;
            @include transition-collapse
        }
        &::after {
            content: ']';
            margin-left: 5px;
            font-size: 22px;
            color: aquamarine;
            @include transition-collapse
        }
    }
    
    /* 折叠菜单按钮 */
    .meau-collapse {
        width: $sidebarCollapse;
        display: inline-block;
        text-align: center;
        font-size: 24px;
        cursor: pointer;
        border-right: 1px solid $borderColor;
    }

}
</style>