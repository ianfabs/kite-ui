<template>
  <el-container class="deck">
    <el-card 
    class="el-card container-card mx-1" 
    v-for="container in containers" 
    :key="container.name"
    shadow="hover"
    v-draggable
    >
      <div slot="header" class="el-card-header clearfix text-align-left">
        {{container.name}}
        
        <div class="float-right">
          <el-tooltip effect="dark" content="Open file explorer" placement="bottom-end">
            <el-button class="pt-0 pb-0" type="text">
              <fa-icon icon="folder" size="lg"/>
            </el-button>
          </el-tooltip>
          <el-tooltip effect="dark" content="Open URL" placement="bottom">
            <el-button class="pt-0 pb-0" type="text">
              <fa-icon icon="external-link-alt" size="lg"/>
            </el-button>
          </el-tooltip>
          <el-tooltip effect="dark" content="Delete" placement="bottom-start">
            <el-button class="pt-0 pb-0" type="text">
              <fa-icon icon="trash" size="lg"/>
            </el-button>
          </el-tooltip>
          <el-popover
          placement="bottom-start"
          width="200"
          trigger="hover"
          title="Status"
          content="Running"
          >
          <span slot="reference" class="ml-1">
            <el-badge is-dot :type="container.status == 'running' ? 'success' : 'danger'">
            </el-badge>
          </span>
        </el-popover>
        </div>
      </div>
      <div class="el-card-body text-align-left">
        <file-upload button="Upload Files"></file-upload>
      </div>
    </el-card>
    <!-- Create new card -->
    <div class="container-card new" @click="handleClick">
      <div class="text-align-center">
        Create a new container
      </div>
    </div>
  </el-container>
</template>

<script>
import FileUpload from "@/components/FileUpload.vue";
import FileList from "@/components/FileList.vue";

export default {
  data(){
    return {
      containers: [
        {
          name: "001416358php",
          status: "running",
          created: (new Date()).toLocaleString()
        }
      ]
    };
  },
  methods: {
    handleClick(){
      alert("New Container Created");
    }
  },
  components: {
    FileUpload,
    FileList
  }
};
</script>

<style>
.container-card{
  width: 400px;
  height: 20vh;
}
.container-card.new{
  border: 2px dashed #909399;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  color: #909399;
  cursor: pointer;
}
</style>
