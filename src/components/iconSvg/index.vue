<template functional>
    <svg :class="['icon-svg', ...props.className]" v-on="listeners">
        <use :xlink:href="'#icon-' + props.name" />
    </svg>
</template> 
<style lang="scss">
.icon-svg {
    width: 1em;
    height: 1em;
    font-size: inherit;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    cursor: pointer;
}
</style>