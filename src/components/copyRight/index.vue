<template functional>
    <footer class="copyright dis-flex just-between">
        <div class="flex-1 font-12 color-normal">
            <p class="mg-b-10">Copyright © 2019. Some One. All Rights Reserved.</p>
            <p>Here is some text which is some description for this web.  </p>
        </div>
        <div class="flex-1">
            <ul class="share dis-flex just-end font-18">
                <li class="share-item">
                    <icon-svg :className='["font-24"]' name="wx" />
                </li>
                <li class="share-item">
                    <icon-svg :className='["font-24"]' name="wb" />
                </li>
            </ul>
        </div>
    </footer>
</template>
<style lang="scss">
.copyright {
    margin: 20px 0;
    .share-item {
        margin-left: 10px;
        &:hover {
            color: #333;
        }
    }
}
</style>