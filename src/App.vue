<template>
  <v-app>
    <v-app-bar
      flat
      id="app_bar1"
      class="d-flex flex-column"
      color="white"
      height="150"
      app
    >
      <v-container fluid id="app_bar" class="pa-0">
        <v-row>
          <v-col cols="3" sm="2" md="2" class="text-center">
            <router-link to="/">
              <img
                id="logo-escuela"
                src="./assets/logo_emch.png"
                width="110"
                alt=""
                class="pt-2"
              />
            </router-link>
          </v-col>
          <v-col
            cols="7"
            sm="9"
            md="9"
            class="flex-column d-flex justify-center"
          >
            <h1 id="escuela-g" class="navbar_title1">
              ESCUELA METAFÍSICA DE CHILE
            </h1>
            <h1 id="escuela" class="navbar_title2">
              METAFÍSICA <br />DE CHILE
            </h1>
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
            class="d-flex justify-space-around align-center navbar pa-0"
          >
            <v-container
              
              class="d-flex justify-space-around align-center navbar pa-0"
            >
              <p id="op1" class="my-auto white--text">Actualizada el 12/04/2021</p>
              <router-link  id="op2" to="/metafisica">¿Qué es la Metafísica?</router-link>
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <p id="op3" class="white--text my-auto" v-bind="attrs" v-on="on">
                    Meditaciones diarias
                  </p>
                </template>
                <v-list>
                  <v-list-item
                    v-for="(meditacion, index) in meditaciones"
                    :key="index"
                  >
                    <v-list-item-title
                      ><router-link
                        :to="{
                          name: 'MeditacionDiaria',
                          params: { id: meditacion.dia },
                        }"
                        >{{ meditacion.dia }}</router-link
                      ></v-list-item-title
                    >
                  </v-list-item>
                </v-list>
              </v-menu>

              <router-link id="op4" to="/clases">Clases de Metafísica</router-link>
              <router-link id="op5" to="/servicioCuracion"
                >Servicio de Curación</router-link
              >
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-navigation-drawer
      v-model="verticalMenu"
      height="100%"
      absolute
      floating
      temporary
    >
      <v-subheader>METAFÍSICA DE CHILE</v-subheader>

      <v-list dense>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title
                ><router-link :to="item.to">{{item.text}}</router-link
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group> </v-list
    ></v-navigation-drawer>

    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Footer from "./components/Footer";

export default {
  name: "App",

  components: {
    Footer,
  },

  data: () => ({
    verticalMenu: null,
    selectedItem: 1,
    items: [
      {
        text: "Qué es la Metafísica",
        icon: "mdi-head-question-outline",
        to: "/metafisica",
      },
      {
        text: `${new Date().getDay()}`,
        icon: "mdi-calendar-today",
        to: "/clases",
      },
      { text: "Clases de Metafísica", icon: "mdi-teach", to: `/clases` },
      { text: "Servicio de Curación", icon: "mdi-hospital-box", to: "/servicioCuracion" },
    ],
    meditaciones: [
      { dia: "Domingo" },
      { dia: "Lunes" },
      { dia: "Martes" },
      { dia: "Miércoles" },
      { dia: "Jueves" },
      { dia: "Viernes" },
      { dia: "Sábado" },
    ],
  }),
  computed:{
    diaDeLaSemana() {
      const hoy = new Date();
      const dia = hoy.getDay();
      const dias = [
        "domingo",
        "lunes",
        "martes",
        "miercoles",
        "jueves",
        "viernes",
        "sabado",
      ];
      const diaHoy = dias[dia];
      return `${diaHoy}`;
    },
  }
};
</script>
<style lang="scss">
a {
  text-decoration: none;
}
#escuela-g,
#escuela {
  font-family: "Istok Web", sans-serif;
  letter-spacing: 2px;
  padding-top: 10px;
  color: #25415a;
}
.navbar_subtitle {
  font-family: "Istok Web", sans-serif;
  letter-spacing: 1px;
  font-size: 18px;
  color: #4404cb;
}
.navbar {
  background: linear-gradient(to right, #4404cb, #8787fb);
  height: 35px;
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
  li a{
    display: none;
  }
  #logo-escuela {
    width: 90px;
    text-align: left;
  }
  #op1, #op2, #op3, #op4, #op5{
    display: none;
  }
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
