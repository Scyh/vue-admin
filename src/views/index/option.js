export const option = {
    color: ['rgb(8,102,198)', 'rgb(23,162,184)'],
    title: {
        text: '这里，是标题',
        subtext: '一段副标题，xxxxxxxxxx'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                // backgroundColor: '#6a7985'
            }
        }
    },
    toolbox: {
        feature: {
            saveAsImage: {},
        }
    },
    legend: {
        // data: ['数据一', '数据二']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
    },
    xAxis : 
        {
            type : 'category',
            boundaryGap : false,
            data : ['1','2','3','4','5','6','7']
    },
    yAxis : {
            type : 'value',
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            },
            axisPointer: {
                lineStyle: {
                    type: 'solid'
                }
            }
            
    },
    series : [
        {
            name:'数据一',
            type:'line',
            stack: '总量',
            smooth: true,
            areaStyle: {
                color: 'rgba(8,102,198,.3)'
            },
            // lineStyle: {
            //     color: 'rgb(8,102,198)'
            // },
            // itemStyle: {
            //     color: 'rgba(8,102,198,.3)',
            //     borderColor: 'rgb(8,102,198)'
            // },
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'数据二',
            type:'line',
            stack: '总量',
            smooth: true,
            areaStyle: {
                color: 'rgba(23,162,184, .4)'
            },
            // lineStyle: {
            //     color: 'rgb(23,162,184)'
            // },
            // itemStyle: {
            //     color: 'rgba(23,162,184, .4)',
            //     borderColor: 'rgb(23,162,184)'
            // },
            data:[220, 182, 191, 234, 290, 330, 310]
        }
    ]
};
