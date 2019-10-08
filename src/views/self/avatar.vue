<template>
<el-dialog title="修改头像" 
        :visible.sync="show"
        width="440px"
        top="10vh"
        :before-close="close"
        :close-on-click-modal="false">
        <div @dragover.stop.prevent @drop.stop.prevent="dropHandle" class="avatar-upload">
            <p v-show="!imgSrc">拖拽图片或点击上传</p>
            <img  v-show="imgSrc" ref="avatar" class="avatar-img" :src="imgSrc">
        </div>

        <div class="cropper-tools">
            <template v-for="i in tool">
                <div v-if="i.type === 'slider'" class="dis-flex align-center" :key="i.name">
                    <label>旋转：</label>
                    <el-slider
                        class="flex-1 mg-l-10" 
                        v-bind="i"
                        :value="i.value"
                        input-size="mini"
                        @input="toolHandle($event, 'rotateTo')">
                    </el-slider>
                </div>
                <el-button v-else :title="i.name" :key="i.name" size="mini" type="primary" :icon="i.icon" @click="toolHandle($event, i.method, i.step)"></el-button>
            </template>
        </div>
        
        <div slot="footer" class="dialog-footer">
            <el-button size="mini" @click="close">取消</el-button>
            <el-button size="mini" @click="download">下载</el-button>
            <el-button size="mini" type="primary" @click="crop" :loading="cropLoading">完成</el-button>
        </div>
    </el-dialog>
</template>
<script>
import 'cropperjs/dist/cropper.css';
import Cropper from 'cropperjs'

export default {
    props: ['show'],
    data() {
        return {
            file: {},
            imgSrc: '',
            cropper: null,
            cropLoading: false,
            tool: [
                {
                    name: '旋转',
                    method: 'rotateTo',
                    type: 'slider',
                    value: 0,
                    min: -180,
                    max: 180,
                },
                {
                    name: '缩小',
                    method: 'zoom',
                    step: [-.1],
                    icon: 'el-icon-zoom-out'
                },
                {
                    name: '放大',
                    method: 'zoom',
                    step: [.1],
                    icon: 'el-icon-zoom-in'
                },
                {
                    name: '左移',
                    method: 'move',
                    step: [-10, 0],
                    icon: 'el-icon-back'
                },
                {
                    name: '右移',
                    method: 'move',
                    step: [10, 0],
                    icon: 'el-icon-right'
                },
                {
                    name: '上移',
                    method: 'move',
                    step: [0, -10],
                    icon: 'el-icon-top'
                },
                {
                    name: '下移',
                    method: 'move',
                    step: [0, 10],
                    icon: 'el-icon-bottom'
                },
                {
                    name: '重置',
                    method: 'reset',
                    icon: 'el-icon-refresh',
                },
            ]
        }
    },
    methods: {
        close() {
            this.$emit('update:show', false)
        },
        dropHandle() {
            let file = event.dataTransfer.files[0];
            if (!file) return;
            if (!file.type.startsWith('image')) return this.$message.error('只能上传图片！');

            this.file = file;
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                this.imgSrc = reader.result
                this.$nextTick(this.initCropper);
            };
        },
        initCropper() {
            this.cropper = new Cropper(this.$refs.avatar, {
                aspectRatio: 1 / 1,
            })
        },
        toolHandle(val, method, step) {
            if (!this.cropper) return;
            this.cropper[method](...(step || [val]));
        },
        async crop() {
            if (!this.cropper) return;
            let result = this.getCrop();
            await this.$store.dispatch('user/changeAvatar', this.getCrop());
            this.close();
        },

        getCrop() {
            let canvas = this.cropper.getCroppedCanvas(),
                context = canvas.getContext('2d');
            context.fillStyle = '#ffffff';
            return canvas.toDataURL(this.file.type);
        },

        download() {
            if (!this.cropper) return;
            var aLink = document.createElement('a');
            aLink.style.display = 'none';
            aLink.download = this.file.name;
            aLink.href = this.getCrop();
            document.body.appendChild(aLink)
            aLink.click();
            document.body.removeChild(aLink);
        }
    },
}
</script>
<style lang="scss">
.avatar-upload {
    border: 1px dashed #ccc;
    width: 400px;
    height: 200px;
    line-height: 200px;
    text-align: center;
    box-sizing: border-box;
    .avatar-img {
        height: 100%;
    }
}
.cropper-tools {
    label {
        width: 50px;
    }
    button {
        margin-top: 10px;
    }
    // button:nth-of-type(7) {
    //     margin-left: 0;
    // }
}
</style>