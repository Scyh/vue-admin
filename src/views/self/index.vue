<template>
    <div id="self_page">
        <el-card class="self-card">
            <span class="self-edit" @click="isEdit = true">
                <icon-svg name="edit1" />
            </span>

            <el-avatar @click.native="isChangeAvatar = true" class="self-avatar" shape="square" :size="128" icon="el-icon-user" :src="avatar"></el-avatar>

            <div class="user-info font-14">
                <ul>
                    <li>
                        <p>真实姓名：</p>
                        <p>{{ user.name }}</p>
                    </li>
                    <li>
                        <p>性别：</p>
                        <p>{{ user.sex }}</p>
                    </li>
                    <li>
                        <p>生日：</p>
                        <p>{{ user.birthday }}</p>
                    </li>
                    <li>
                        <p>个人网站：</p>
                        <p>{{ user.web }}</p>
                    </li>
                    <li>
                        <p>联系电话：</p>
                        <p>{{ user.phone }}</p>
                    </li>
                    <li>
                        <p>个人邮箱：</p>
                        <p>{{ user.email }}</p>
                    </li>
                </ul>
            </div>
        </el-card>

        <edit-info :show.sync="isEdit" />
        <edit-avatar :show.sync="isChangeAvatar" />
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    components: {
        'edit-info': () => import('./edit'),
        'edit-avatar': () => import('./avatar')
    },
    computed: {
        ...mapGetters(['avatar'])
    },
    data() {
        return {
            isEdit: false,
            isChangeAvatar: false,
            user: {
                name: '张三',
                sex: '男',
                birthday: '2019-09-30',
                web: 'xxxxxxx@xx.xxx',
                phone: '13xxxxxxxx',
                email: 'xxxxxxx@xx.xxx'
            }
        };
    }
};
</script>
<style lang="scss">
.self-card {
    width: 450px;
}
.self-avatar {
    display: inline-block;
}
.user-info-item {
    margin: 10px 20px;
    color: #000;
}
.self-edit {
    float: right;
}
.user-info {
    width: 100%;
    display: inline-block;
    > ul {
        display: flex;
        flex-wrap: wrap;
        li {
            flex: 0 0 50%;
            display: inline-block;
            margin: 10px 0;
            > p:first-child {
                color: #999;
            }
            > p:last-child {
                // color: ;
            }
        }
    }
}
</style>