<template>
    <div id="layout" :class='{"mask": mask, "close-left-side": sidebarClosing, "show-right-side": rightSideOpening, "fixed-header": headerFixed}' @click.stop.prevent="closeMask($event)">
        <lo-header />
        <lo-aside />
        <lo-main />
        <right-side />      
    </div>
</template>
<script>

import loMain from '@/layout/components/main'
import loAside from '@/layout/components/menu'
import loHeader from '@/layout/components/header'
import rightSide from '@/layout/components/rightSide'

import { mapGetters, mapMutations } from 'vuex'
import appMixin from '@/layout/mixin/app'

export default {
    components: {
        loMain,
        loAside,
        loHeader,
        rightSide
    },
    mixins: [appMixin],
    computed: {
        ...mapGetters({
            mask: 'app/mask'
        })
    },
    methods: {
        ...mapMutations({
            closeMask: 'app/closeMask',
        })
    }
}

</script>
<style lang="scss">
#layout {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    > *:not(.lo-main) {
        box-sizing: border-box;
        @include transition-collapse;
    }
    > .lo-main {
        @include transition(.2s, ease-in-out, width, margin-left, transform);
    }
}
#layout.mask::before {
    content: '';
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    background-color: rgba(29, 41, 57, 0.25);
}

#layout.show-right-side {
    .lo-header,
    .lo-sidebar,
    .lo-main {
        transform: translatex(-$rightSideWidth);
    }
    .right-side {
        right: 0;
    }
}
#layout.close-left-side {
    .lo-main {
        margin-left: $sidebarCollapse;
    }
}
#layout.fixed-header {
    .lo-header {
        position: sticky;
        top: 0;
        left: 0;
        z-index: 999;
    }
}
</style>