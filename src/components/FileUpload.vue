<template>
    <div>
        <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        multiple
        :on-exceed="handleExceed"
        :file-list="fileList">
            <el-button size="small" type="primary">{{button}}</el-button>
            <div slot="tip" class="el-upload__tip">{{tip}}</div>
        </el-upload>
    </div>
</template>

<script>
export default {
    name: "file-upload",
    props: {
        tip: {
            type: String,
            default: ""
        },
        button: {
            type: String,
            default: "Upload"
        }
    },
    data(){
        return {
            fileList: []
        }
    },
    methods: {
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
        handleExceed(files, fileList) {
            this.$message.warning(`The limit is 3, you selected ${files.length} files this time, add up to ${files.length + fileList.length} totally`);
        },
        beforeRemove(file, fileList) {
            return this.$confirm(`确定移除 ${ file.name }？`);
        }
    }
}
</script>

<style>

</style>
