<template>
  <el-upload 
  action="https://jsonplaceholder.typicode.com/posts/" 
  :file-list="fileList" 
  style=""
  ></el-upload>
</template>

<script>
export default {
  name: "file-list",
  data() {
    return {
      fileList: [
        {
          name: "food.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        },
        {
          name: "food2.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        }
      ]
    };
  }
};
</script>

<style>
</style>
