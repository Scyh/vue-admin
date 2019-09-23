<template functional>
    <div class="media" :style='{"background-color": props.bgColor}'>
        <div class="media-left">
            <slot name="mediaLeft"></slot>
        </div>
        <div class="media-right">
            <p class="media-title">
                <slot name="title"></slot>
            </p>
            <p class="media-content">
                <slot name="content"></slot>
            </p>
            <span class="media-footer">
                <slot name="footer"></slot>
            </span>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .media {
    display: flex;
    padding: 25px;
    border-radius: 5px;
    .media-left {
        flex: 0 0 40px;
        margin-right: 20px;
        color: #eee;
    }
    .media-right {
        flex: 1;
        .media-title {
            padding-bottom: 5px;
            font-size: 14px;
            color: rgba(255, 255, 255, .8);
        }
        .media-content {
            font-size: 24px;
            color: #fff;
        }
        .media-footer {
            font-size: 12px;
            color: rgba(255, 255, 255, .6);
        }
    }
}
</style>