<template>
    <div class="icon-page">
        <ul>
            <li class="icon-item" v-for="i in iconNames" :key="i" :name="i">
                <icon-svg :name="i" />
                <p>{{i}}</p>
            </li>
        </ul>
    </div>
</template>
<script>

export default {
    data() {
        return {
            iconNames: []
        }
    },
    created() {
        this.getAllIcon();
    },
    methods: {
        getAllIcon() {
            const r = require.context('@/icons/svgs', true, /\.svg$/);
            this.iconNames = Object.freeze(r.keys().map(i => i.replace(/\.\/(.*)\.svg$/img, '$1')));
        }
    }    
}
</script>
<style lang="scss" scoped>
.icon-page {
    ul {
        display: flex;
        .icon-item {
            position: relative;
            margin: 10px;
            width: 50px;
            font-size: 18px;
            text-align: center;
            @include line;
            > p {
                font-size: 12px;
            }
        }
    }
}
</style>