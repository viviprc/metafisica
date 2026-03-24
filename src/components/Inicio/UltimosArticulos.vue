<template>
  <v-container>
    <v-row dense>
      <v-col cols="12">
        <v-card color="grey lighten-5">
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="headline">
                Toda cosa buena</v-card-title
              >

              <v-card-subtitle
                >El propósito de Dios para cada uno de nosotros es la “ABUNDANCIA DE TODA COSA BUENA Y PERFECTA”. Dios...
              </v-card-subtitle>
              <v-card-actions>
                <v-btn text color="indigo accent-4" @click="irArticulo2">
                  Leer artículo
                </v-btn>
              </v-card-actions>
            </div>

            <v-avatar class="ma-3 ultimos-articulos__imagen" size="100" tile>
              <v-img src="../../../public/toda_cosa_buena.jpg"></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>

      <v-col cols="12">
        <v-card color="grey lighten-5">
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="headline">
                San Patricio
              </v-card-title>
              <v-card-subtitle
                >San Patricio es el santo patrono de Irlanda y Ser de Luz que contactó al Amado Victory, conocido como el...</v-card-subtitle
              >
              <v-card-actions>
                <v-btn text color="indigo accent-4" @click="irArticulo1">
                  Leer artículo
                </v-btn>
              </v-card-actions>
            </div>

            <v-avatar class="ma-3 ultimos-articulos__imagen" size="100" tile>
              <v-img src="../../../public/san_patricio.png"></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>

      <v-col cols="12">
        <v-card color="grey lighten-5">
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="headline">
                Dioses Merú</v-card-title
              >

              <v-card-subtitle
                >El 8 de marzo es el día del Rayo consagrado al Templo de la Iluminación del lago Titikaka de los Dioses Merú. Color de...
                </v-card-subtitle
              >
              <v-card-actions>
                <v-btn text color="indigo accent-4" @click="irArticulo3">
                  Leer artículo
                </v-btn>
              </v-card-actions>
            </div>

            <v-avatar class="ma-3 ultimos-articulos__imagen" size="100" tile>
              <v-img src="../../../public/dioses_meru.jpeg"></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>

      <v-col cols="12">
        <v-card color="indigo lighten-5">
          <div class="d-flex flex-no-wrap justify-space-between">
            <div class="ultimos-articulos__llave-tonal">
              <v-card-title class="headline">
                Llave tonal de la semana</v-card-title
              >

              <v-card-subtitle class="pb-1"
                >Llave tonal de la Señora Autumn.</v-card-subtitle
              >
              <v-card-text class="pb-0"
                >“Adagio molto” Otoño de las Cuatro Estaciones, Antonio Vivaldi.</v-card-text
              >
              <v-card-actions class="ultimos-articulos__audio">
                <audio
                  src="../../assets/audio/Antonio Vivaldi - Autumn (Adagio Molto).mp3"
                  autoplay
                  controls
                ></audio>
              </v-card-actions>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "UltimosArticulos",
  data() {
    return {
      url: process.env.BASE_URL,
    };
  },
  methods: {
    irArticulo1() {
      this.$router.push("articulos/san_patricio");
    },
    irArticulo2() {
      this.$router.push("articulos/toda_cosa_buena");
    },
    irArticulo3() {
      this.$router.push("articulos/dioses_meru");
    },
  },
};
</script>
<style lang="scss">
@media (max-width: 700px) {
  .ultimos-articulos__imagen {
    display: none;
  }

  .ultimos-articulos__llave-tonal {
    max-width: 100%;
  }

  .ultimos-articulos__audio {
    display: block;
    max-width: 100%;
    overflow-x: scroll;
  }
}
</style>
