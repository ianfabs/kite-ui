<template>
  <el-container>
    <el-header>
      <el-button icon="el-icon-more" type="text" @click="isCollapse = !isCollapse"></el-button>
      <span class="h1 display ml-2">
        <router-link to="/" class="el-link">
          Kite
        </router-link>
      </span>
    </el-header>
    <el-container>
      <el-menu
        default-active="1"
        class="el-aside"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
      >
        <el-menu-item index="1">
          <fa-icon icon="cubes" size="md" />
          <span slot="title" class="ml-1">Containers</span>
        </el-menu-item>
        <el-menu-item index="2">
          <fa-icon icon="file" size="md" />
          <span slot="title" class="ml-1">&nbsp;Editor</span>
        </el-menu-item>
        <el-menu-item index="3">
          <fa-icon icon="cog" size="md"/>
          <span slot="title" class="ml-1">Settings</span>
        </el-menu-item>
        <el-menu-item index="4">
          <fa-icon icon="sign-out-alt" size="md"/>
          <span slot="title" class="ml-1">Logout</span>
        </el-menu-item>
      </el-menu>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      isCollapse: true,
      activeIndex: 0
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style>
*{
  font-family:"Avenir", Arial, Helvetica, sans-serif;
}
.el-header{
  line-height: 60px;
}
.el-footer {
  background-color: #b3c0d1;
  color: #333;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  width: 20vw;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  height: 100%;
}

body > .el-container {
  height: 98vh;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.display{
  font-size: 1.5em;
}
</style>