<template>
  <div class='about-card'>
    <div class='card-title'>
        <img src='../assets/my picture.jpg' class='portrait-picture'>
      <div class='title-text-content'>
        <p>My projects</p>
        <h2>Steven Nemeth</h2>
      </div>
    </div>
    <div class='card-content'>
      <table>
        <tr>
          <th><a href='https://snemeth-chat-app.herokuapp.com/' target='_blank' class='project-link'>Chatrillo</a></th>
          <th><a href='https://snemethcalculator.herokuapp.com/' target='_blank' class='project-link'>Calculator</a></th>
          <th><a href='https://quote-gen-snemeth.herokuapp.com/' target='_blank' class='project-link'>Quote Generator</a></th>
        </tr>
        <tr>
          <th>Chatrillo is a chat application built with Javascript and HTML/CSS. It uses Node and Socket.io to allow users to create, connect, and chat with other users via websockets.</th>
          <th>Chatrillo is a chat application built with Javascript and HTML/CSS. It uses Node and Socket.io to allow users to create, connect, and chat with other users via websockets.</th>
          <th>Quote Generator is an application that uses Express and Axios to access a quote database API with thousands of quotes.</th>
        </tr>
        <tr>
          <th><img src='../assets/Chatrillo.png' class='application-picture'></th>
          <th><img src='../assets/Calculator.png' class='application-picture'></th>
          <th><img src='../assets/Quote_Generator.png' class='application-picture'></th>
        </tr>
      </table>
    </div>
  </div>
</template>

<style scoped>
table {
  border-spacing: 0px;
  margin: 50px auto;
  border-top: none;
  padding: 10px;
  text-align: center;
}
.application-picture{
    max-height: 175px;
}
a {
  text-decoration: underline;
}

.project-link {
    cursor:pointer;
}
</style>