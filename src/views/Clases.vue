<template>
  <v-container>
    <v-row class="d-flex align-start">
      <v-col lg="9" class="my-5 pr-5">
        <div>
          <h1 class="indigo--text text--lighten-1 text-center mb-5">
            Clases de Metafísica
          </h1>
          <p class="text-justify px-5">Participa en nuestras clases.</p>
          <p class="text-justify px-5">
            El programa regular que se ve es el 1º ciclo azul, correspondiente a
            Pilares, donde se estudian los 4 Pilares de la Metafísica, linea
            Conny Méndez:
             <ol class="mt-3">
              <li>Mentalismo</li>
              <li>La Presencia "Yo Soy"</li>
              <li>Los Rayos</li>
              <li>El Rayo Violeta</li>
          </ol> 
          </p>
         
          <p class="text-justify px-5">
            La actividad es de participación liberada siempre, al finalizar la
            clase, se solicita un aporte voluntario.
          </p>
           
        </div>
        <div class="ma-5 pa-5">
          <v-form ref="form" v-model="valid" lazy-validation >
              <p class="text-justify font-weight-medium">
            Contáctanos para participar o hacer tus consultas:
          </p>
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
            
        <v-text-field
          v-model="phoneNumber"
          :counter="9"
          :error-messages="errors"
          label="Teléfono de contacto"
          required
        ></v-text-field>

            <v-textarea
              solo
              name="input-7-4"
              label="Escribe aquí..."
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
      <v-col lg="3" class="pl-2"><PanelDerecho /></v-col> </v-row
  ></v-container>
</template>
      </v-col>
      <v-col lg="3" class="pl-2"><PanelDerecho /></v-col>
    </v-row>
  </v-container>
</template>
<script>
import PanelDerecho from "../components/Inicio/PanelDerecho";
export default {
  name: "Clases",
  components: {
    PanelDerecho,
  },
  data: () => ({
    
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Se requiere nombre',
        v => (v && v.length <= 30) || 'Nombre debe tener menos de 15 caracteres',
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