<template>
    <section class='nav'>
        <div class='nav-logo'>
            <img>
        </div>
        <div class='nav-menu'>
            <ul class='nav-menu-list'>
                <router-link class='nav-list-item' to="/">About me</router-link>
                <router-link class='nav-list-item' to="/projects">Projects</router-link>
                <li class='nav-list-item'><a href='https://github.com/StevenNemeth' target="_blank">GitHub</a></li>
                <li class='nav-list-item'><a href='https://www.linkedin.com/in/steven-nemeth-3227ba200/' target="_blank">Linkedin</a></li>
            </ul>
        </div>
    </section>
</template>
<script>
export default {
    
}
</script>

<style>
.about-card{
  background: #333;
  padding: 4em;
  border-radius: 10px;
  color: white;
}
body {
    background-color: #222;
}
.card-title{
  display: flex;
  align-items: center;
  background: #222;
  border-radius: 10px;
  height: 180px;
}
.card-content > p {
  line-height: 1.5;
  margin: 30px auto;
}
.title-text-content{
  margin-left: 10px;
}
.nav{
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    background: #333;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20vw;
}
.nav-menu {
    color: white;
}
.nav-menu-list{
    display: grid;
    grid-auto-columns: auto; 
    list-style: none;
    padding: 0;

}
.nav-list-item {
    background: #222;
    padding: 10px 20px;
    text-align: center;
    margin: 10px auto;
    cursor:pointer;
    width: 65%;

}
a{
    color:white;
    text-decoration: none;
}

tr th, tr td {
  border: 1px solid white;
  padding: 10px;
  text-align: center;
}

.portrait-picture{
    
  border-radius: 50%;
  margin-left: 15px;
  height: 140px;
}
</style>