<template>
  <div>
    <v-card class="mx-auto mt-5">
      <h3 class="text-center my-3 pt-3">Actividades de la Semana</h3>
      <v-carousel id="carrusel" height="250px" hide-delimiters cycle>
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
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
          src: "http://www.metafisicadechile.cl/afiche_mayo4.png",
        },
        {
          src: "http://www.metafisicadechile.cl/afiche_mayo5.png",
        },
        {
          src: "http://www.metafisicadechile.cl/afiche_mayo6.png"
        },
        {
          src: "http://www.metafisicadechile.cl/afiche_mayo7.png"
        }
      ],
    };
  },
};
</script>
<style lang="scss">
@media (max-width: 1264px) {
  #carrusel{
    height: 247px;
  }
}
  
</style>