<template >
  <v-container>
    <v-row dense>
      <v-col cols="12">
        <v-card color="grey lighten-5">
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="headline">
                Jesús expulsa a los cambistas</v-card-title
              >

              <v-card-subtitle
                >Cada año los judíos viajaban a Jerusalén para celebrar las
                fiestas de las Pascuas, los que vivían a menos
                de...</v-card-subtitle
              >
              <v-card-actions>
                <v-btn text color="indigo accent-4" @click="irArticulo1">
                  Leer artículo
                </v-btn>
              </v-card-actions>
            </div>

            <v-avatar class="ma-3" size="100" tile>
              <v-img
                id="img1"
                src="http://www.metafisicadechile.cl/jesus_expulsa_a_los_cambistas.png"
              ></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card color="grey lighten-5">
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="headline"> Es tiempo de Dios</v-card-title>

              <v-card-subtitle
                >Nosotros los seres humanos, desde nuestros orígenes, como
                atestigua la historia, nos hemos preguntado por el
                sentido...</v-card-subtitle
              >
              <v-card-actions>
                <v-btn text color="indigo accent-4" @click="irArticulo2">
                  Leer artículo
                </v-btn>
              </v-card-actions>
            </div>

            <v-avatar class="ma-3" size="100" tile>
              <v-img id="img2" src="../../assets/es_tiempo_de_dios.png"></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card color="grey lighten-5">
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="headline">
                Seis reglas de conducta</v-card-title
              >

              <v-card-subtitle
                >Las seis reglas de conducta que particularmente se requieren
                para ingresar al Sendero Espiritual, y que son
                requisitos...</v-card-subtitle
              >
              <v-card-actions>
                <v-btn text color="indigo accent-4" @click="irArticulo3">
                  Leer artículo
                </v-btn>
              </v-card-actions>
            </div>

            <v-avatar class="ma-3" size="100" tile>
              <v-img
                id="img3"
                src="../../../public/seis_reglas_de_conducta.jpg"
              ></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card color="indigo lighten-5">
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="headline">
                Llave tonal de la semana</v-card-title
              >

              <v-card-subtitle class="pb-1"
                >Llave Tonal de la Amada Madre María</v-card-subtitle
              >
              <v-card-text class="pb-0"
                >“Ave Verum Corpus” – K 618, de Mozart.</v-card-text
              >
              <v-card-actions>
                <div>
                  <audio
                    src="../../assets/audio/ave_verum.mp3"
                    autoplay
                    controls
                  ></audio>
                </div>
              </v-card-actions>
            </div>

            <v-avatar class="ma-3" size="100" tile>
              <v-img
                id="llaveTonalImagen"
                class="my-auto"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Mozart-small.jpg/220px-Mozart-small.jpg"
              ></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "UltimosArticulos",
  methods: {
    irArticulo1() {
      this.$router.push("articulos/jesus_expulsa_a_los_cambistas");
    },
    irArticulo2() {
      this.$router.push("articulos/es_tiempo_de_dios");
    },
    irArticulo3() {
      this.$router.push("articulos/seis_reglas_de_conducta");
    },
  },
};
</script>
<style lang="scss">
@media (max-width: 700px) {
  #llaveTonalImagen,
  #img1,
  #img2,
  #img3 {
    display: none;
  }
}
</style>