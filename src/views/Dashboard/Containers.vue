<template>
  <el-container class="deck">
    <el-card 
    class="el-card container-card mx-1" 
    v-for="container in containers" 
    :key="container.name"
    shadow="hover"
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
          :content="container.status"
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
    <div class="container-card new" @click="dialogVisible = true">
      <div class="text-align-center">
        Create a new container
      </div>
    </div>
    <el-dialog title="Shipping address" :visible.sync="dialogVisible">
        <el-container>
          <el-form :model="form">
            <el-form-item label="Container Name" :label-width="'120px'">
                <el-input placeholder="my-php" v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="Container Image">
                <el-select v-model="form.image" placeholder="Please select an image">
                  <el-option v-for="image in images" :label="image.name" :value="image.name" :key="image.name"></el-option>
                </el-select>
            </el-form-item>
          </el-form>
        </el-container>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">Cancel</el-button>
            <el-button type="primary" @click="createContainer">Confirm</el-button>
        </span>
    </el-dialog>
  </el-container>
</template>

<script>
import FileUpload from "@/components/FileUpload.vue";

export default {
  data(){
    return {
      containers: [
        {
          name: "001416358php",
          image: "sessymyer/mini-php",
          status: "running",
          created: (new Date()).toLocaleString()
        }
      ],
      dialogVisible: false,
      form: {},
      images: [
        {
          name: "sessymyer/mini-php"
        }
      ]
    };
  },
  methods: {
    handleClick(){
      
    },
    createContainer(event){
      this.containers.push({name: this.form.name, status: "stopped", image: this.form.image, created: (new Date()).toLocaleString() });
      this.dialogVisible = false;
    }
  },
  components: {
    FileUpload,
  }
};
</script>

<style scoped>
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
  margin-left: 1em;
}
.deck{
  display: grid;
  grid-template-columns: repeat(auto-fill, 400px);
  grid-row-gap: 3rem;
  grid-column-gap: 2rem;
}
</style>
