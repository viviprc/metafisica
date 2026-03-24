<template>
  <v-container>
    <v-row class="d-flex justify-center">
      <h3 class="mt-5 pt-4">Articulos anteriores</h3>
    </v-row>
    <v-row class="d-flex justify-center mt-1">
      <v-col cols="12" lg="4" class="mt-2" v-for="(card, i) in cards" :key="i">
        <v-card>
          <v-img :src="card.src" height="325px"></v-img>
          <h4 class="ma-4" v-text="card.titulo"></h4>
          <v-card-text class="pt-0" v-text="card.texto"></v-card-text>
          <v-card-actions>
            <v-btn text color="indigo accent-4" :to="card.to"> LEER</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: 'OtrosArticulos',

  data() {
    return {
      cards: [
      {
          titulo: 'Ángel de la Cuadragésima',
          src: `${process.env.BASE_URL}angel_de_la_cuadragesima.jpg`,
          flex: '4',
          texto: 'La Cuaresma es un periodo de “cuarenta días” antes de la Semana...',
          to: `articulos/angel_de_la_cuadragesima`,
        },
      {
          titulo: 'Cuarenta días de meditación',
          src: `${process.env.BASE_URL}cuarenta_dias_de_meditacion.jpg`,
          flex: '4',
          texto: 'La Cuaresma dura 40 días y es un tiempo de preparación para recibir...',
          to: `articulos/cuarenta_dias_de_meditacion`,
        },
      {
          titulo: 'Jesús en el desierto',
          src: `${process.env.BASE_URL}jesus_en_el_desierto.jpg`,
          flex: '4',
          texto: 'Jesús en el desierto, ayunó durante cuarenta días y cuarenta noches, preparándose -mediante...',
          to: `articulos/jesus_en_el_desierto`,
        },
      ],
    };
  },
};
</script>
