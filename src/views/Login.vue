<template>
  <div>
    <el-card class="el-form" >
      <div slot="header" class="text-align-left">
        <span>{{title}}</span>
      </div>
      <div>
        <el-input 
        id="username" 
        placeholder="ID Number"
        v-model="user.id"
        class=""
        />
        <el-input 
        id="password" 
        placeholder="Password" 
        v-model="user.password"
        type="password"
        class="my-1"
        />
        <el-button class="float-left mb-1" plain @click="handleLogin">Login</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data(){
    return {
      title: "Login",
      user: {
        id: '',
        password: ''
      }
    };
  },
  methods: {
    handleLogin(event){
      console.log("logged in");
      this.$router.push('containers')
    }
  }
}
</script>

<style>
.el-form{
  width: 50vw;
}
.el-input{
  width: 35vw;
}
</style>
