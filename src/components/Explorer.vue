<template>
  <div class="explorer">
    <el-row class="text-align-left">
      <el-col :span="8">
        <div class="box pl-1 pt-1 pb-1">Name</div>
      </el-col>
      <el-col :span="6">
        <div class="box pl-1 pt-1 pb-1">Date Modified</div>
      </el-col>
      <el-col :span="4">
        <div class="box pl-1 pt-1 pb-1">Type</div>
      </el-col>
      <el-col :span="3">
        <div class="box pl-1 pt-1 pb-1">Size</div>
      </el-col>
    </el-row>
    <el-row class="text-align-left" v-for="file in files" :key="file.name">
      <el-col :span="8">
        <div class="row pl-1 pt-1 pb-1 pr-1">
          {{file.name}}
        </div>
      </el-col>
      <el-col :span="6">
        <div class="row pl-1 pt-1 pb-1 pr-1">
          {{file.modified}}
        </div>
      </el-col>
      <el-col :span="4">
        <div class="row pl-1 pt-1 pb-1 pr-1">
          {{file.type}}
        </div>
      </el-col>
      <el-col :span="3">
        <div class="row pl-1 pt-1 pb-1 pr-1">
          {{file.size}}
        </div>
      </el-col>
    </el-row>
    
  </div>
</template>

<script>
import sample_files from "@/assets/files.json"

export default {
  name: "file-list",
  data() {
    return {
      files: sample_files
    };
  },
  methods: {

  }
};
</script>

<style scoped>
.box{
  background-color: #c3c3c3;
  color: black;
}
.row{
  background-color: #e9e9e9;
}
</style>
