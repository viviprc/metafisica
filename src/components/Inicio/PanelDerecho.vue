<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="mx-auto mb-3" max-width="400">
          <v-img
            class="white--text align-end"
            height="200px"
            src="../../../public/emmet_fox.png"
          >
          </v-img>
          <v-card-title>Un año con Emmet Fox</v-card-title>
          <v-card-subtitle class="pb-0 ml-1"> {{ diaDeHoy }} </v-card-subtitle>

          <v-card-actions
            ><v-btn text color="indigo accent-4" @click="irEmmetFox">
              LEER</v-btn
            >
          </v-card-actions>
        </v-card>

        <v-card class="mx-auto mb-3" max-width="400">
          <v-img
            class="white--text"
            height="200px"
            src="../../../public/re_gabriel_maria.jpeg"
          >
          </v-img>

          <v-card-title>Retiro Etérico abierto</v-card-title>
          <v-card-subtitle class="pb-0">
            15 de marzo al 14 de abril
          </v-card-subtitle>
          <v-card-actions>
            <v-btn text color="indigo accent-4" @click="irRetiroEterico">
              LEER</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "PanelDerecho",
  data() {
    return {
      emmetFoxDiario: [
        { dia: "mayo22" },
        { dia: "mayo23" },
        { dia: "mayo24" },
        { dia: "mayo28" },
      ],
    };
  },
  computed: {
    diaDeHoy() {
      const hoy = new Date();
      const dia = hoy.getDate();
      const meses = [
        "enero",
        "febrero",
        "marzo",
        "abril",
        "mayo",
        "junio",
        "julio",
        "agosto",
        "septiembre",
        "octubre",
        "noviembre",
        "diciembre",
      ];
      const mes = meses[hoy.getMonth()];
      return `${dia} de ${mes}`;
    },
  },

  methods: {
    dia() {
      const diaSeleccionado = this.$route.params.id;
      return this[diaSeleccionado];
    },
    irEmmetFox() {
      const hoy = new Date();
      const dia = hoy.getDate();
      const meses = [
        "enero",
        "febrero",
        "marzo",
        "abril",
        "mayo",
        "junio",
        "julio",
        "agosto",
        "septiembre",
        "octubre",
        "noviembre",
        "diciembre",
      ];
      const mes = meses[hoy.getMonth()];
      const ruta = `${mes}${dia}`;
      this.$router.push(`/un-ano-con-emmet-fox/${ruta}`);
    },
    irRetiroEterico() {
      this.$router.push(`/retiro-eterico`);
    },
  },
};
</script>
