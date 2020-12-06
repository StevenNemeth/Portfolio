<template>
  <div class='about-card'>
    <div class='card-title'>
      <img src='../assets/my picture.jpg' class='portrait-picture'>
      <div class='title-text-content'>
        <h3>About me</h3>
        <h2>Steven Nemeth</h2>
      </div>
      <div class='title-text-content-contact'>
        <h4>Contact</h4>
        <h4>(352) 702-8073</h4>
        <h4>StevenNemeth93@gmail.com</h4>
      </div>
    </div>
    <div class='card-content'>
      <p>Hey there! My name is Steve, I've been learning and building applications since ... The first project I built was my simple "Calculator" app, using Javascript and HTML/CSS. With each project there after, I started learning and implementing ... I practiced API's with my "Quote Generator" app using Axios and Node, and websockets with my "Chatrillo" app using Socket.io. I'm currently learning Vue using it right now. </p>
      <table>
        <tr>
        </tr>
        <tr>
          <th>Skilled</th>
          <th>Learning</th>
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
            <li>HTML/CSS</li>
            <li>Node.js</li>
            <li>Socket.io</li>
            <li>Express.js</li>
            </th>
        </tr>
      </table>
    </div>
  </div>
</template>

<style scoped>
.title-text-content-contact{
  margin-left: auto;
  text-align: right;
  margin-right: 20px
}

.skills{
  text-align: left;
}
table{
  margin-left: auto;
  margin-right: auto;
}
</style>