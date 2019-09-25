<template>
    <div id="page_index">
        <el-row :gutter="20">
            <el-col :xs="24" :md="12" :lg="6" v-for="i in medias" class="media-item" :key="i.title">
                <media-card :bgColor="i.bgColor">
                    <template v-slot:mediaLeft>
                        <icon-svg :className='["media-icon"]' :name="i.icon" />
                    </template>
                    <template v-slot:title>
                        {{i.title}}
                    </template>
                    <template v-slot:content>
                        <countTo :endVal="i.content.num" :prefix="i.content.prefix" :suffix="i.content.suffix" />
                    </template>
                    <template v-slot:footer>
                        {{i.footer}}
                    </template>
                </media-card>
            </el-col>
            
        </el-row>

        <el-row :gutter="20">
            <el-col :span="16">
                <!-- 图表 -->
                <el-card class="box-card">
                    <v-chart :options="option" :autoresize="true" />
                </el-card>

                <el-card class="box-card">
                    <p class="card-title">这里是标题</p>
                    <p class="card-subtitle mg-b-15">这是副标题</p>
                    
                    <el-table :data="tableData" style="width: 100%" :show-header="false">
                        <el-table-column label="日期" >
                            <template slot-scope="scope">
                                <el-avatar :size="36" :src="scope.row.avatar" :key="scope.row.avatar"></el-avatar>
                            </template>
                        </el-table-column>
                        <el-table-column prop="username"></el-table-column>
                        <el-table-column prop="date"></el-table-column>
                        <el-table-column >
                            <template slot-scope="scope">
                                <el-avatar :size="36" :src="scope.row.avatar" :key="scope.row.avatar"></el-avatar>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-card>

            </el-col>

            <el-col :span="8">
                <el-card class="box-card">
                    <p class="card-title">这里是标题</p>
                    <p class="card-subtitle mg-b-15">这是副标题</p>
                    <div class="progress-box">
                        <ul>
                            <li v-for="i in progresses" :key="i.title">
                                <p class="font-14">{{i.title}}</p>
                                <el-progress :percentage="i.progress" :class='[i.type]'></el-progress>
                            </li>
                        </ul>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import mediaCard from '@/components/media'
import { option } from './option'
export default {
    components: {
        mediaCard,
    },
    data() {
        return {
            medias: [
                { title: '这是标题一', content: { num: 1202 },  icon: 'home', bgColor: '#00b297' },
                { title: '这是标题二', content: { num: 2200, prefix: '$' }, icon: 'home', bgColor: '#dc3545' },
                { title: '这是标题三', content: { num: 54.3, suffix: '%' }, icon: 'home', bgColor: '#0866C6' },
                { title: '这是标题四', content: { num: 71.5, suffix: '%' }, icon: 'home', bgColor: '#1D2939' }
            ],
            progresses: [
                { title: '这是一句描述', progress: 30, type: 'danger' },
                { title: '这也是一句描述', progress: 64, type: 'primary' },
                { title: '这又是一句描述', progress: 85, type: 'normal' },
                { title: '这还是一句描述', progress: 56, type: 'warning' },
                { title: '这确实是一句描述', progress: 90 }
            ],
            option: option,
            tableData: [
                { username: '张三三', avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png', date: '2019/09/25', option: {}, },
                { username: '张三三', avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png', date: '2019/09/25', option: {}, },
                { username: '张三三', avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png', date: '2019/09/25', option: {}, },
                // { username: '李四', avatar: '', date: '2019/09/25', option: {}, },
                // { username: '王五五', avatar: '', date: '2019/09/25', option: {}, },
                // { username: '赵六六', avatar: '', date: '2019/09/25', option: {}, },
                // { username: '田七', avatar: '', date: '2019/09/25', option: {}, },
            ],
        }
    },
    methods: {
        
    }
}
</script>
<style lang="scss" scoped>
.media-item {
    margin-bottom: 20px;
    .media-icon {
        font-size: 60px;
        line-height: 0;
    }
}

.echarts {
    width: 100%!important;
    height: 300px!important;
}
</style>