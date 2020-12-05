<template>
  <div id="app">
    <my-nav id='my-nav'>
      <router-link to="/">Home</router-link>
      <router-link to="/projects">projects</router-link>
    </my-nav>
    <div class='view-container'>
    <router-view/>
    </div>
  </div>
</template>
<script>
import MyNav from '@/components/MyNav'

export default {
  components:{
    MyNav
  }
  
}
</script>
<style scoped>
.view-container{
  width: 79vw;
  padding: 1.5em;
  margin-left: 20vw;
  box-sizing: border-box;
  min-height: 100vh;
}
</style>