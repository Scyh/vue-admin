<template>
<!-- rightSideOpening -->
    <header class="lo-header">
        <div :class="['lo-header-left', 'logo', { 'collapse': sidebarClosing }]">BRAND</div>
        <div class="lo-header-right">
            <div class="meau-collapse" @click="toggleSidebar">
                <icon-svg :name="sidebarClosing ? 'menuon' : 'menuoff'" />
            </div>
            <div class="lo-header-right-user">
                <div class="user">
                    <el-badge is-dot class="user-meta user-email">
                        <icon-svg name="email" />
                    </el-badge>
                    <el-badge is-dot class="user-meta user-email">
                        <icon-svg name="bell" />
                    </el-badge>
                    <div class="user-meta user-name">{{user.user_name}}</div>
                    <div class="user-meta user-profile w-32">
                        <img class="circle" src="@/assets/avatar.png">
                    </div>
                </div>
                <div class="setting" @click="toggleRightSide">
                    <icon-svg name="setting" />
                </div>
            </div>
        </div>
    </header>
</template>
<script>
import appMixin from '@/layout/mixin/app'
import { mapGetters } from 'vuex'
export default {
    mixins: [appMixin],
    computed: {
        ...mapGetters(['user'])
    }
}
</script>
<style lang="scss" scoped>
.lo-header {
    height: $headerHeight;
    line-height: $headerHeight;
    background: $headerColor;
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
        box-shadow: 0 1px 4px $borderColor;
        @include transition-collapse;
        .lo-header-right-user {
            display: flex;
            justify-content: flex-end;
            align-items: center;
        }
        .user {
            line-height: 1;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            .user-meta {
                margin: 0 10px;
            }
            .user-profile {
                border-radius: 50%;
                line-height: 0;
                > img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .setting {
            width: $sidebarCollapse;
            border-left: 1px solid $borderColor;
            text-align: center;
            color: $lightBlue;
            font-size: 25px;
            cursor: pointer;
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