<template>
    <div @dragover.stop.prevent @drop.stop.prevent="_dropHandle" class="upload">
        <p>拖拽文件或<el-link @click.native="triggerUpload" type="primary">点击上传</el-link></p>
        <input 
            type="file"
            :accept="accept" 
            :multiple="multiple"
            @click.stop ref="input"
            @change="changeHandle"
            class="upload-input"/>
        <slot />
    </div>
</template>

<script>
export default {
    props: {
        multiple: {
            type: Boolean,
            default: false,
        },
        accept: {
            type: String,
            default: '*'
        },
        upload: {
            type: Function,
            default: () => {}
        }
    },
    methods: {

        // 类型验证
        checkFileType(files) {
            console.log('files[0].type:', files[0].type)
            // 需要重写类型验证
            // if (this.accept === '*') return true;
            // else if (this.accept.includes(file.type)) return true;
            // else return false
            return true
        },

        _dropHandle(event) {
            
            let files = event.dataTransfer.files;
            if (!files) return;
            if (!this.checkFileType(files)) return;
            this.$emit('upload', files)
        },
        triggerUpload() {
            this.$refs.input.click();
        },
        changeHandle(event) {
            let files = event.target.files;
            if (!files) return;
            if (!this.checkFileType(files)) return
            this.$emit('upload', files)
            // event.target.value = null;
        }
    }
}
</script>

<style lang="scss" scoped>
.upload {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px dashed #ccc;
    width: 400px;
    height: 200px;
    font-size: 14px;
    vertical-align: middle;
    text-align: center;
    box-sizing: border-box;
    p > a {
        vertical-align: baseline;
    }
    .upload-input {
        display: none;
    }
}
</style>