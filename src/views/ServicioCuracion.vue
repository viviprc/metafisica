<template>
  <v-container>
    <v-row class="d-flex align-start">
      <v-col lg="9" class="my-5 pr-5">
        <div>
          <h1 class="indigo--text text--lighten-1 text-center">
            Servicio de Curación
          </h1>
          <p class="text-center">
            A cargo de Ana María Vera, todos los Jueves a las 20ºº horas
          </p>
          <p class="text-justify px-5">
            El Servicio de Curación, es una actividad del Quinto Rayo Verde de
            la Verdad, la Curación, la Consagración y la Concentración, en dónde
            se trabaja especificamente con el aspecto curación, para sanar
            cualquier apariencia de enfermedad que pueda estar manifesándose.
            Este servicio, se realiza todos los días jueves, día en que la
            radiación del Quinto Rayo, se encuentra más activa.
          </p>
          <p class="text-justify px-5">
            Puedes incluir a cualquier persona que esté presentando una
            apariencia de enfermedad de cualquier tipo, ya sea física, mental o
            emocional. Sólo tienes que enviar el nombre y los 2 apellidos de la
            persona y la incluiremos en el Servicio y ya verás como la Salud
            comienza a manifestarse.
          </p>
        </div>
        <div class="ma-5 pa-5">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="name"
              :counter="30"
              :rules="nameRules"
              label="Ingresa tu nombre"
              required
            ></v-text-field>

            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>

           <v-textarea
          solo
          name="input-7-4"
          label="Ingresa el nombre y apellidos de la(s) persona(s) que necesita salud."
        ></v-textarea>

            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="validate"
            >
              Enviar
            </v-btn>

            <v-btn color="error" class="mr-4" @click="reset">
              Limpiar formulario
            </v-btn>
          </v-form>
        </div>
      </v-col>
      <v-col lg="3" class="pl-2"><PanelDerecho/></v-col>
      </v-row
    ></v-container
  >
</template>
      </v-col>
      <v-col lg="3" class="pl-2"><PanelDerecho /></v-col>
    </v-row>
  </v-container>
</template>
<script>
import PanelDerecho from "../components/Inicio/PanelDerecho";
export default {
  name: "ServicioCuracion",
  components: {
    PanelDerecho,
  },
  data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Se requiere nombre',
        v => (v && v.length <= 30) || 'Nombre debe tener menos de 30 caracteres',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    }),
     methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
    },
};
</script>