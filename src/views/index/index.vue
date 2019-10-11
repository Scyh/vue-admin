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
                <el-card class="box-card chart-card">
                    <v-chart :options="option" :autoresize="true" />
                </el-card>

                <el-card class="box-card">
                    <p class="card-title">这里是标题</p>
                    <p class="card-subtitle mg-b-15">这是副标题</p>
                    <!-- 表格 -->
                    <el-table :data="tableData" style="width: 100%" class="table-1" :show-header="false">
                        <el-table-column label="日期" >
                            <template slot-scope="scope">
                                <el-avatar :size="36" :src="scope.row.avatar" :key="scope.row.avatar"></el-avatar>
                            </template>
                        </el-table-column>
                        <el-table-column prop="username"></el-table-column>
                        <el-table-column prop="date"></el-table-column>
                        <el-table-column >
                            <template slot-scope="scope">
                                <v-chart :options="scope.row.option" />
                            </template>
                        </el-table-column>
                        <el-table-column align="right">
                            <template slot-scope="scope">
                                <el-dropdown>
                                    <span class="el-dropdown-link">
                                        <icon-svg name="more" />
                                    </span>
                                    <el-dropdown-menu slot="dropdown">
                                        <el-dropdown-item>操作一</el-dropdown-item>
                                        <el-dropdown-item divided>操作二</el-dropdown-item>
                                        <el-dropdown-item disabled>操作三</el-dropdown-item>
                                    </el-dropdown-menu>
                                </el-dropdown>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-card>

                <el-card>
                    <p class="card-title mg-b-15">Some Title Here</p>
                    <div class="dis-flex">
                        <div class="flex-1">
                            <p class="font-56">25%</p>
                            <el-progress :percentage="25" :show-text="false" class="mg-b-10"></el-progress>
                            <p class="font-13 mg-b-15 color-normal">
                                This is some text, and others.
                            </p>
                            <p class="font-13 color-normal">
                                This is some text, anther text and so on.
                            </p>
                        </div>
                        <div class="flex-1 text-center">
                            <el-progress type="circle" :percentage="25" :show-text="false" :stroke-width="12"></el-progress>
                        </div>
                    </div>
                </el-card>

            </el-col>

            <el-col :span="8">
                <!-- 进度条 -->
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

                <!-- 广告 -->
                <el-card class="box-card bg-primary">
                    <p class="card-title font-13 color-white">这里是标题</p>
                    <p class="card-subtitle mg-b-15">这是副标题</p>
                    <icon-svg :className="['bg']" name="river" />
                </el-card>

                <!-- 轮播 -->
                <el-carousel trigger="click" height="300px" arrow="hover">
                    <el-carousel-item v-for="item in carousels" :key="item.bgColor">
                        <div class="carousel-item" :style='{"background-color": item.bgColor }'>
                            <h3 class="font-14 mg-b-15">{{ item.title }}</h3>
                            <p class="font-20 color-white mg-b-15">{{ item.content }}</p>
                            <p class="font-13 color-white">{{item.note}}</p>
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </el-col>
        </el-row>

        <el-row>
            <copyright />
        </el-row>
    </div>
</template>
<script>
import mediaCard from '@/components/media'
import { option, option2 } from './option'
import { test } from '@/api'

export default {
    components: {
        mediaCard,
        copyright: () => import('@/components/copyRight')
    },
    created() {
        test()
    },
    data() {
        return {
            medias: [
                { title: '这是标题一', content: { num: 1202 },  icon: 'home', bgColor: '#ee5253' },
                { title: '这是标题二', content: { num: 2200, prefix: '$' }, icon: 'home', bgColor: '#ff9f43' },
                { title: '这是标题三', content: { num: 54.3, suffix: '%' }, icon: 'home', bgColor: '#0abde3' },
                { title: '这是标题四', content: { num: 71.5, suffix: '%' }, icon: 'home', bgColor: '#10ac84' }
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
                { username: '张三三', avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png', date: '2019/09/25', option: option2 },
                { username: '张三三', avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png', date: '2019/09/25', option: option2, },
                { username: '张三三', avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png', date: '2019/09/25', option: option2, },
            ],
            carousels: [
                { title: 'some title', content: 'This is something to show. xxx...', note: 'a note', bgColor: '#222f3e' },
                { title: 'some title', content: 'This is something to show. xxx...', note: 'a note', bgColor: '#576574' },
                { title: 'some title', content: 'This is something to show. xxx...', note: 'a note', bgColor: '#303952' },
                { title: 'some title', content: 'This is something to show. xxx...', note: 'a note', bgColor: '#8395a7' },
            ]
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
.chart-card {
    min-height: 340px;
    .echarts {
        width: 100%!important;
        height: 300px!important;
    }
}

.table-1 {
    .echarts {
        width: 100px!important;
        height: 30px!important;
    }
}
.bg {
    width: 100%;
    height: 100%;
    cursor: default;
}
.carousel-item {
    height: 100%;
    padding: 40px 20px 0 20px;
}
</style>