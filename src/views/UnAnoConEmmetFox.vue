<template>
  <v-container>
    <v-row class="d-flex align-start">
      <v-col lg="9" class="my-5 pr-5">
        <h1 class="indigo--text text--lighten-1 text-center">
          UN AÑO CON EMMET FOX
        </h1>
        <div class="d-flex justify-center mb-5">
          <v-img src="../assets/emmet_fox.png" max-width="30%"></v-img>
        </div>
        <p class="mb-5 text-center">{{ efHoy.dia }} | {{ efHoy.titulo }}</p>

        <p class="text-justify" v-html="efHoy.cuerpo"></p>
      </v-col>
      <v-col lg="3" class="pl-2"><PanelDerecho /></v-col>
    </v-row>
  </v-container>
</template>
<script>
import PanelDerecho from "../components/Inicio/PanelDerecho";
export default {
  name: "UnAnoConEmmetFox",
  components: {
    PanelDerecho,
  },
  computed: {
    efHoy() {
      const emmetFoxHoy = this.$route.params.id;
      return this[emmetFoxHoy];
    },
  },
  data() {
    return {
      mayo22: {
        dia: "22 DE MAYO",
        titulo: "UNA VIDA SIMPLIFICADA",
        cuerpo:
          "Es incuestionable, que la espiritualización de pensamiento, indudablemente guía al estudiante a simplificar su modo de vida, porque algunas cosas que previamente parecían importantes son ahora encontradas sin importancia y sin interés. Es también incuestionable, que el estudiante, gradualmente, se encuentra conociendo gente diferente, leyendo libros diferentes, gastando su tiempo diferentemente y que su conversación naturalmente cambia su calidad. Estas cosas siguen al cambio del corazón, nunca pueden precederlo.</br></br> <i>...las cosas viejas pasaron; he aquí todas son hechas nuevas.</i> (II Corintios 5:17)</br></br>Ahora vemos, cuan vano es el necio intento de cultivar la buena opinión de otras personas, bajo la impresión que tal cosa puede ser de real ventaja para nosotros. Jesús ha expuesto esa clase de falacia una vez y para siempre. El dice, que el aplauso que sigue a los actos exteriores es la única recompensa que alguna vez estos dan, mientras que resultados dignos solo son obtenidos en el Lugar Secreto de la conciencia.</br></br> <i>...Ora a tu Padre que esta en secreto; y tu Padre que ve en lo secreto te recompensara en público.</i> (Mateo 6:6)",
      },
      mayo23: {
        dia: "23 DE MAYO",
        titulo: "UN TIEMPO PARA EL AYUNO",
        cuerpo:
          "<i>Cuando ayunéis, no seáis austeros, como los hipócritas; porque ellos demudan sus rostros para mostrar a los hombres que ayunan; de cierto os digo que ya tienen su recompensa. Pero tú, cuando ayunes, unge tu cabeza y lava tu rostro, para no mostrar a los hombres que ayunas, sino a tu Padre que esta en secreto; y tu Padre que ve en lo secreto te recompensara en público.</i> (Mateo 6:16-18)</br></br> Jesús tomo la practica del ayuno por concesión. Ahora, el más provechoso método de ayuno, es la abstención de negativos o errados pensamientos. En algunos casos es necesario abstenerse por un tiempo de pensar, en un problema particular. Hay ciertos problemas, usualmente aquellos en los que has meditado mucho, que son superados “solo con oraciones y el ayuno”. En tal caso, es mejor hacer una oración final y definitiva y luego dejar de pensar en el por un tiempo; o sino entregárselo a otra persona para que lo maneje por ti, después de lo cual mantendrás tus pensamientos completamente apartados de eso.",
      },
      mayo24: {
        dia: "24 DE MAYO",
        titulo: "TU CORAZÓN SIGUE TU TESORO",
        cuerpo:
          "Leer Mateo 6:16-23</br></br>Si tu conciencia es correcta, eso es, si tienes un buen entendimiento de Dios como la amorosa Fuente de tu ilimitado suministro, serás siempre capaz de demostrar cualquier dinero o bienes que requieras. No puedes carecer de nada una vez que has realizado verdaderamente que en la Mente Divina, demanda y suministro son uno. Y, contrariamente, hasta que tú realices esto, nunca estarás realmente a salvo de la carencia. </br></br>En la larga carrera, nadie puede retener lo que no le pertenece por derecho de conciencia, tampoco ser privado de lo que es verdaderamente suyo por el mismo supremo título.</br></br>Si estás mirando a las cosas exteriores, fugaces y mutables, para obtener cualquiera de las dos cosas, felicidad o seguridad, no estás poniendo a Dios primero. Si estás poniendo a Dios primero en tu vida, no te encontrarás trabajando bajo indebida ansiedad acerca de nada, <i>porque donde esté vuestro tesoro, allí estará también vuestro corazón.</i> (Mateo 6:21)",
      },
      mayo25: {
        dia: "25 DE MAYO",
        titulo: "EL OJO ÚNICO",
        cuerpo: "Si tu oras por ti mismo, en la forma correcta, todos los días, encontrarás que las cosas menores de la vida, gradualmente caen en forma correcta en su lugar por propia voluntad, sin ningún problema de tu parte. Contrasta eso, con el método usual de tratar de llevar todo bien, mediante el organizar separadamente mil pequeños detalles, así apreciarás cuan maravillosamente las nuevas bases espirituales, te hacen libre. <i>Si tu ojo es bueno, todo tu cuerpo estará lleno de luz.</i> (Mateo 6:22)</br></br>El ojo simboliza la percepción espiritual. Lo que sea a lo que le des tu atención, es lo que gobernará tu vida. La atención es la llave. Tu libre voluntad, reposa en la dirección de tu atención. A lo que sea que resueltamente dirijas tu atención, eso vendrá a tu vida y la dominará. Si tú no diriges tu atención concientemente a algo particular; y mucha gente no lo hace; entonces nada en particular vendrá a tu vida excepto incertidumbre y suspenso.</br></br>Si la Gloria de Dios viene primero contigo, y para expresar su voluntad se vuelve el mando de tu vida, entonces tu ojo es único y tu cuerpo entero, o tu encarnación, estará llena de luz.",
      },
      mayo30: {
        dia: "26 DE MAYO",
        titulo: "UNA LEALTAD",
        cuerpo: "Leer Mateo 6:24-33</br></br>Muchos cristianos aceptan estos hechos teóricamente, pero tienen muy poco entusiasmo cuando eso viene a su aplicación práctica, y esa vacilación los deja en dificultades, y siempre siguen en inconsecuencia y debilidad. Tratar de descansar algunas veces sobre las bases materiales y algunas veces sobre las espirituales, es tratar de servir a dos amos y eso por supuesto no puede ser hecho. <i>No podéis servir a Dios y a las riquezas.</i> (Mateo 6:24)</br></br>El hombre es esencialmente espiritual, a imagen y semejanza de Dios, por lo tanto está hecho para las bases espirituales y no puede realmente triunfar sobre cualquier otra.",
      },
    };
  },
};
</script>