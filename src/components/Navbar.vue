<template>
  <v-app-bar
    flat
    id="app_bar1"
    class="d-flex flex-column"
    color="white"
    height="150"
  >
    <v-container fluid id="app_bar" class="pa-0">
      <v-row>
        <v-col cols="3" sm="2" md="2" class="text-center">
          <img
            id="logo-escuela"
            src="../assets/logo_emch.png"
            width="110"
            alt=""
            class="pt-2"
          />
        </v-col>
        <v-col cols="7" sm="9" md="9" class="flex-column d-flex justify-center">
          <h1 id="escuela-g" class="navbar_title1">
            ESCUELA METAFÍSICA DE CHILE
          </h1>
          <h1 id="escuela" class="navbar_title2">METAFÍSICA <br />DE CHILE</h1>
          <p class="navbar_subtitle mb-0">
            De Entrenamiento Espiritual y de Servicio
          </p>
        </v-col>
        <v-col cols="2" sm="1" md="1" class="d-flex align-center">
          <v-app-bar-nav-icon
            class="icono_menu"
            @click.stop="verticalMenu = !verticalMenu"
          ></v-app-bar-nav-icon>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          id="navbar_menu"
          no-gutters
          cols="12"
          class="d-flex justify-space-around navbar pa-0"
        >
          .<router-link class="mx-4" to="/metafisica"
            >¿Qué es la Metafísica?</router-link
          >
          <router-link class="mx-4" to="/meditacionesDiarias"
            >Meditaciones diarias</router-link
          >
          <router-link class="mx-4" to="/clases"
            >Clases de Metafísica</router-link
          >
          <router-link class="mx-4" to="/servicioCuracion"
            >Servicio de Curación</router-link
          >
          <router-link class="mx-4" to="/retiroEterico"
            >Retiro Etérico</router-link
          >
        </v-col>
      </v-row>
      <v-navigation-drawer
        v-model="verticalMenu"
        height="100%"
        absolute
        floating
        temporary
      >
        <v-list dense>
          <v-list-item-group v-model="selectedItem" color="primary">
            <v-list-item v-for="(item, i) in items" :key="i">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group> </v-list
      ></v-navigation-drawer>
    </v-container>
  </v-app-bar>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {
      verticalMenu: null,
      selectedItem: 1,
      items: [
        { text: 'Qué es la Metafísica', icon: 'mdi-clock' },
        { text: 'Meditaciones Diarias', icon: 'mdi-account' },
        { text: 'Clases de Metafísica', icon: 'mdi-flag' },
        { text: 'Servicio de Curación', icon: 'mdi-flag' }
      ],
    };
  },
};
</script>
<style lang="scss">
#escuela-g,
#escuela {
  font-family: "Istok Web", sans-serif;
  letter-spacing: 2px;
  padding-top: 10px;
  color: #25415a;
}
.navbar_subtitle {
  font-family: "Istok Web", sans-serif;
  font-style: italic;
  letter-spacing: 1px;
  font-size: 18px;
  color: #4404cb;
}
.navbar {
  background: linear-gradient(to right, #4404cb, #8787fb);
  font-size: 14px;
  a {
    color: white !important;
    text-decoration: none;
  }
}
// Cambia titulo a "Metafísica de Chile"
@media (min-width: 959px) {
  #escuela {
    letter-spacing: 0;
    font-size: 28px;
    padding-top: 0;
  }
  .icono_menu {
    display: none !important;
  }
}
// Desaparece el subtítulo, titulo grande y el logo se achica
@media (max-width: 960px) {
  .navbar_subtitle {
    display: none;
  }
  a {
    display: none;
  }
  // #logo-escuela{
  //   width: 90px;
  //   text-align: left;
  // }
}
@media (max-width: 800px) {
  #logo-escuela {
    width: 90px;
    text-align: left;
  }
  #escuela-g {
    letter-spacing: 0;
    font-size: 24px;
    padding-top: 0;
  }
}
@media (max-width: 600px) {
  #app_bar {
    height: 100px;
  }
  #escuela-g {
    display: none;
  }
  #escuela {
    font-size: 20px;
    padding-top: 0;
    letter-spacing: 0;
  }
  #logo-escuela {
    width: 60px;
    justify-content: left;
    padding-top: 0;
  }
}
@media (min-width: 600px) {
  #escuela {
    display: none;
  }
}
</style>