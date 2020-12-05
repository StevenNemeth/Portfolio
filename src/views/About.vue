<template>
  <div class='about-card'>
    <div class='card-title'>
      <img src='../assets/my picture.jpg' class='portrait-picture'>
      <div class='title-text-content'>
        <h1>About me</h1>
        <h2>Steven Nemeth</h2>
      </div>
    </div>
    <div class='card-content'>
      <p>Hey there! My name is Steve, I've been learning and building applications since October, 2020 The first project I built was my simple "Calculator" app, using Javascript and HTML/CSS. With each project there after, I started learning and implementing server side technology using Node and Express. I practiced building API's with my "Quote Generator" app using Axios and Node, and websockets with my "Chatrillo" app using Socket.io. I'm currently learning Vue and React, this about me page is built with Vue.js </p>
      <table>
        <tr>
        </tr>
        <tr>
          <th>Familiar</th>
          <th>Learning</th>
          <th>Would like to learn</th>
        </tr>
         <tr>
          <th class='skills'>
            <li>Javascript</li>
            <li>HTML/CSS</li>
            <li>Node.js</li>
            <li>Socket.io</li>
            <li>Express.js</li>
            </th>
          <th class='skills'>
            <li>Vue</li>
            <li>React</li>
            
            </th>
            <th class='skills'>
            <li>AWS</li>
            <li>NoSQL</li>
            <li>SQL</li>
            </th>
        </tr>
      </table>
    </div>
  </div>
</template>

<style scoped>

.skills{
  text-align: left;
}
table{
  margin-left: auto;
  margin-right: auto;
}
</style>