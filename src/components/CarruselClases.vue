<template>
  <div>
    <v-card class="mx-auto mt-5">
      <h3 class="text-center my-3 pt-3">Actividades de la Semana</h3>
      <v-carousel id="carrusel" height="300px" hide-delimiters cycle>
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
          class="img"
        ></v-carousel-item>
      </v-carousel>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "CarruselClases",
  data() {
    return {
      items: [
        {
          src: `${process.env.BASE_URL}afiche_marzo24.png`,
        },
        {
          src: `${process.env.BASE_URL}afiche_marzo25.png`,
        },
        {
          src: `${process.env.BASE_URL}afiche_marzo26.png`,
        },
        {
          src: `${process.env.BASE_URL}afiche_marzo28.png`,
        },
      ],
    };
  },
};
</script>
