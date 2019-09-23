<template>
    <div id="page_index">
        <el-row :gutter="20" type="flex" justify="space-between">
            <el-col :span="5" v-for="i in medias" class="media-item" :key="i.title">
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

        <el-row>
            <el-col :span="16">
                
            </el-col>

            <el-col :span="8">



            </el-col>
        </el-row>
    </div>
</template>
<script>
import mediaCard from '@/components/media'
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
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
.media-icon {
    font-size: 60px;
    line-height: 0;
}
</style>