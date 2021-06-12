<template>
  <v-container>
    <v-row class="d-flex align-start">
      <v-col lg="9" class="my-5 pr-5">
        <h1 class="indigo--text text--lighten-1 text-center">
          RETIRO ETÉRICO ABIERTO
        </h1>
        <p class="text-center">15 de mayo al 15 de junio</p>
        <div class="d-flex justify-center mb-5">
          <v-img
            max-width="30%"
            src="../assets/madre_maria.png"
          ></v-img>
        </div>
        <p v-html="retiroAbierto" class="text-center"></p>
      </v-col>
      <v-col lg="3" class="pl-2"><PanelDerecho /></v-col>
    </v-row>
  </v-container>
</template>
<script>
import PanelDerecho from "../components/Inicio/PanelDerecho";
export default {
  name: "RetiroEterico",
  components: {
    PanelDerecho,
  },
  data() {
    return {
      retiroAbierto:"MADRE MARÍA </br></br>RETIRO DEL SAGRADO CORAZÓN</br></br> Tierra Santa- Innsbruck- Lourdes- Fátima</br></br>Llaves Tonales Ave Maria de Schubert"
    }
  },
};
</script>