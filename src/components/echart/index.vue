<template>
    <chart v-bind="$attrs" />
</template>
<script>
import 'echarts/lib/chart/line'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'

export default {
    components: {
        chart: () => import('vue-echarts/components/ECharts.vue')
    }    
}
</script>