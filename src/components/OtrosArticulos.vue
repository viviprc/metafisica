<template>
  <v-container>
    <v-row class="d-flex justify-center">
      <h3 class="mt-5 pt-4">Articulos anteriores</h3>
    </v-row>
    <v-row class="d-flex justify-center mt-1">
      <v-col cols="12" lg="4" class="mt-2" v-for="(card, i) in cards" :key="i">
        <v-card>
          <v-img :src="card.src" height="150px"></v-img>
          <h4 class="ma-4" v-text="card.titulo"></h4>
          <v-card-text class="pt-0" v-text="card.texto"></v-card-text>
          <v-card-actions
            ><v-btn text color="indigo accent-4"> LEER</v-btn></v-card-actions
          >
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "OtrosArticulos",
  data() {
    return {
      cards: [
        {
          titulo: "Card 1",
          src:
            "https://www.mundonuevo.cl/wp-content/uploads/2019/12/meditacion-2-1068x534.jpg",
          flex: "4",
          texto: "Desde el punto de Luz en la mente de Dios...",
        },
        {
          titulo: "Card 2",
          src:
            "https://www.mundonuevo.cl/wp-content/uploads/2019/12/meditacion-2-1068x534.jpg",
          flex: "4",
          texto: "Desde el punto de Luz en la mente de Dios...",
        },
        {
          titulo: "Card 3",
          src:
            "https://www.mundonuevo.cl/wp-content/uploads/2019/12/meditacion-2-1068x534.jpg",
          flex: "4",
          texto: "Desde el punto de Luz en la mente de Dios...",
        },
      ],
    };
  },
};
</script>
