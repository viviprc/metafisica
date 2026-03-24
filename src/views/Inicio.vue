<template>
  <v-container>
    <v-row class="d-flex align-start">
      <v-col cols="12" md="3">
        <SerDeLuz />
      </v-col>
      <v-col cols="12" md="6">
        <UltimosArticulos />
      </v-col>
      <v-col cols="12" md="3">
        <PanelDerecho />
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row>
      <v-col cols="12" lg="5">
        <!-- <div>
          <v-card class="mx-auto mt-5" height="300px">
            <h3 class="text-center my-3 pt-3">PRÓXIMO CURSO</h3>
            <v-img src="../../public/afiche_marzo12.png"/>
          </v-card>
        </div> -->
        <CarruselClases />
      </v-col>
      <v-col cols="12" lg="7">
        <OtrosArticulos/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import SerDeLuz from "../components/Inicio/SerDeLuz";
import UltimosArticulos from "../components/Inicio/UltimosArticulos";
import PanelDerecho from "../components/Inicio/PanelDerecho";
import CarruselClases from "../components/CarruselClases";
import OtrosArticulos from "../components/OtrosArticulos"

export default {
  name: "Inicio",
  components: {
    SerDeLuz,
    UltimosArticulos,
    PanelDerecho,
    CarruselClases,
    OtrosArticulos
  },
};
</script>
