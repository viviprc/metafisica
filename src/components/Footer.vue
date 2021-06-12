<template>
  <v-footer dark padless>
    <v-card
      flat
      tile
      class="indigo lighten-1 white--text text-center"
      width="100%"
    >
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon.i" class="mx-4 white--text" icon>
          <a class="iconos" :href="icon.ir" style="color:white" :target="icon.target">
            <v-icon size="24px">
              {{ icon.i }}
            </v-icon>
          </a>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Estado 42 - of. 612 - Santiago Centro - Telefono: +569 9001 4194 -
        grupometafisicodechile@gmail.com
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} —
        <strong>Escuela Metafísica de Chile</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  name: "Footer",
  data: () => ({
    icons: [
      {
        i: "mdi-home-circle",
        ir:"/",
        target: "_self"
      },
      {
        i: "mdi-facebook",
        ir: "https://www.facebook.com/escuelametafisica.dechile",
        target: "_blank"
      },
      {
        i: "mdi-instagram",
        ir: "https://www.instagram.com/metafisicadechile/?hl=es-la",
        target: "_blank"
      },
    ],
  }),
  methods: {
    visitar() {
      this.$router.push(this.icon.ir);
    },
  },
};
</script>
<style lang="scss">
.iconos{
  text-decoration: none;
  color: white;
}
  
</style>