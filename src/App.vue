<template>
  <div id="app">
    <div id="nav">
      <h1 id="page_title">ESCUELA METAFÍSICA DE CHILE</h1>
      <h3 id="page_subtitle">De Entrenamiento Espiritual y de Servicio</h3>
      <div class="probando">
        <p>Actualizada el 23/12/2020</p>
        <router-link to="/">Home</router-link>
        <router-link to="/about">¿Qué es la Metafísica?</router-link>
        <router-link to="/about">Servicio de Curación</router-link>
        <router-link to="/about">Clases de Metafísica</router-link>
        <router-link to="/about">Retiro Etérico Abierto</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:#2B547E;
}

#nav {
  #page_title {
    font-family: "Istok Web", sans-serif;
    letter-spacing: 2px;
    margin-bottom: 0;
  }
  #page_subtitle {
    font-weight: 400;
    font-style: italic;
    margin: 0;
  }

  a {
    font-weight: bold;
    color: white;
    text-decoration: none;

    &.router-link-exact-active {
      color:#2B547E;
      
    }
  }
}
.probando {
  background: linear-gradient(to right, #ff0080, #ffc107);
  width: 100%;
}
</style>
