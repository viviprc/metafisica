<template>
  <v-container>
    <v-row class="d-flex align-start">
      <v-col lg="9" class="my-5 pr-5">
        <h1 class="indigo--text text--lighten-1 text-center">
          UN AÑO CON EMMET FOX
        </h1>
        <div class="d-flex justify-center mb-5">
          <v-img src="../../public/emmet_fox.png" max-width="40%"></v-img>
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
      marzo23: {
        dia: "23 DE MARZO",
        titulo: "EL POBRE EN ESPÍRITU",
        cuerpo: "<p><i>Bienaventurados los pobres en espíritu, porque de ellos es el reino de los cielos.</i> (Mateo 5:3)</p><p>Ser pobre en espíritu no significa en lo más mínimo lo que nosotros llamamos “pusilánime”, ser pobre en espíritu significa haberte vaciado a ti mismo, de todo deseo de ejercitar la voluntad personal de uno mismo, y lo que es justamente tan importante, haber renunciado a todas las opiniones preconcebidas en la sincera búsqueda de Dios. Esto significa estar gustoso de apartar tus presentes hábitos de pensamiento, tus presentes modos de ver y prejuicios, tu presente forma de vida, si es necesario, para desechar de hecho todo y cualquier cosa que pueda interponerse en el camino de tu encontrar a Dios.</p>"
      },
      marzo24: {
        dia: "24 DE MARZO",
        titulo: "GRANDES POSESIONES",
        cuerpo: "<p>Uno de los más tristes pasajes en toda la literatura, es la historia del Joven Rico quien perdió una de las grandes oportunidades de la historia,<i> …se fue triste porque tenía muchas posesiones.</i> (Mateo 19:22)</p><p>Esta es realmente la historia de la humanidad en general. Nosotros rechazamos  la salvación que Jesús nos ofrece –nuestra oportunidad de encontrar a Dios-,  porque ‘tenemos grandes posesiones’, no tanto que somos muy ricos en términos de dinero, porque verdaderamente la mayoría de las personas no lo son, si no porque tenemos grandes posesiones en el sentido de ideas preconcebidas –confianza en nuestro propio juicio y en las ideas en las cuales sucede que somos familiares-. Nosotros tenemos orgullo nacido de la distinción académica, el apego material o sentimental a las instituciones y organizaciones. Hábitos de vida a los que nosotros no deseamos renunciar, interés por la estima humana, o tal vez miedo al ridículo público. Y estas posesiones nos mantienen encadenados a la roca del sufrimiento que es el exilio de Dios.</p><p>Los pobres en espíritu nunca sufren de ninguna de estas turbaciones, una de las dos cosas, porque nunca las tuvieron o porque se han elevado por sobre ellas, sobre la corriente del entendimiento espiritual.</p>"
      },
      marzo25:{
        dia: "25 DE MARZO",
        titulo: "CONFORT PARA LOS QUE LLORAN",
        cuerpo: "<p><i>Bienaventurados los que lloran, porque ellos recibirán consolación.</i> (Mateo 5:4).</p><p>El llanto o la pena no son en sí mismos una buena cosa, porque la voluntad de Dios es que cada uno pueda experimentar el feliz y alegre éxito. Jesús dice: <i>Yo he venido para que tengan vida, y para que la tengan en abundancia.</i> (Juan 10:10).</p><p>No obstante los problemas, los sufrimientos, son a menudo extremadamente útiles, porque mucha gente no se incomodará en aprender la Verdad hasta que son conducidos a hacerlo así por el dolor y el fracaso. El dolor se convierte entonces, relativamente, en una buena cosa. Tarde o temprano todo ser humano tendrá que descubrir la verdad acerca de Dios y hacer su propio contacto con Él, de primera mano. Él tendrá que adquirir el entendimiento  de la Verdad, el cual lo hará libre de una vez y para siempre, de nuestras limitaciones tridimensionales y las cosas que obran junto con ellas -pecado, enfermedad y muerte-. Realmente, el hombre no tiene necesidad de tener problemas, porque si él en primer lugar solo buscara a Dios, el problema nunca necesitaría venir. Él, siempre tiene la elección de aprender mediante el desarrollo espiritual o por la experiencia dolorosa. Los problemas de familia, las riñas y distanciamientos, el pecado y el remordimiento nunca necesitan venir si nosotros buscamos primero el Reino de Dios y el correcto entendimiento. Pero, si nosotros no lo vamos a hacer así, entonces ellos tienen que venir, y para nosotros este llanto será una bendición disfrazada, porque a través de esto seremos ‘confortados’, y por confort la Biblia quiere decir la experiencia de la Presencia de Dios, la cual es el fin de todo llanto.</p>"
      },
      marzo26:{
        dia: "26 DE MARZO",
        titulo: "LOS MANSOS BENDITOS",
        cuerpo: "<p><i>Bienaventurados los mansos, porque ellos recibirán la tierra por heredad.</i> (Mateo 5:5).</p><p>A primera vista, pareciera que los hechos de la vida diaria contradicen esta Bienaventuranza. Una de dos; o Jesús sabía de lo que hablaba -y entonces su enseñanza ha de ser tomada en serio-, o su enseñanza debería descartarse por completo. Si vamos a depender de Él, entonces démosle el beneficio de asumir que cuando hablaba lo hacía en serio y que conocía mejor que nadie el arte de vivir.</p><p>Lo cierto, es que cuando a las enseñanzas de Jesús se las entiende correctamente, resultan extremadamente prácticas. Y toda la esencia de su enseñanza y de su aplicación está resumida en este texto. Cuando se está en posesión del significado espiritual de este texto, se tiene el <i>Secreto del Dominio</i> -el secreto para superar toda dificultad-.</p><p>Notamos que en el texto hay dos palabras que actúan como polos: 'mansos' y 'tierra'. Primero que todo, la palabra 'tierra' en la Biblia entraña la totalidad de nuestra experiencia externa, y 'heredar la tierra' quiere decir tener dominio sobre dicha experiencia externa. De manera que cuando la Biblia habla de la tierra -esto es, poseer la tierra, gobernar la tierra, hacer de la tierra algo glorioso, etc.-, se está refiriendo a las condiciones de nuestra vida, desde nuestra salud corporal hasta el punto más lejano de nuestros asuntos. Es así como este texto se las arregla para decirnos cómo podemos poseer -o gobernar o ser maestros de- nuestra vida y destino.</p>"
      },
      marzo27:{
        dia: "27 DE MARZO",
        titulo: "HEREDANDO LA TIERRA",
        cuerpo: "<p>Veamos ahora, cómo vamos a ir por ahí heredando la tierra. Esta Bienaventuranza dice que el dominio, que es poder sobre las condiciones de nuestras vidas, será obtenido, en cierta forma, por nada menos que la mansedumbre.</p><p>La palabra manso en la Biblia, connota una actitud mental para la cual no hay otra palabra simple disponible. Es una combinación de liberalidad, fe en Dios y la realización de que la Voluntad de Dios para nosotros, siempre es feliz e interesante y vital. Este estado de la mente, también incluye una perfecta y buena voluntad para permitir a esa Voluntad de Dios venir alrededor en cualquier forma particular que nosotros hayamos elegido por nosotros mismos.</p><p>Esta actitud mental receptiva a la enseñanza, esta buena voluntad para ser guiado, es la llave para el dominio o el éxito en la demostración. No hay palabra para esto en el lenguaje común, porque no existe excepto para aquellos quienes están arriba, en la base espiritual de la enseñanza de Jesús Cristo. Si nosotros deseamos heredar la tierra, debemos absolutamente adquirir esa “mansedumbre”.</p><p><i>Yo Soy reina; regocíjese la tierra…</i> (Salmo 97:1).</p>"
      },
      marzo28:{
        dia: "28 DE MARZO",
        titulo: "TAN MANSO COMO MOISÉS",
        cuerpo: "<p>Moisés, quien superó la creencia de vejez, al grado de manifestar el cuerpo físico de un hombre joven en la flor de la vida, cuando de acuerdo al calendario tenía 120 años y luego trascendió la materia del todo o se “desmaterializó” sin morir, era conocido preeminentemente por su cualidad “tan manso como Moisés”. Aparte de su propia demostración personal, Moisés, también hizo un maravilloso trabajo para su nación entera, sacándola fuera de la esclavitud egipcia, en frente de increíbles dificultades. Moisés tenía una mente abierta, lista para ser enseñada de nuevas cosas y nuevas formas de pensar y trabajar. Él no estaba, en el comienzo al menos, libre de ciertas fallas de carácter, pero gradualmente se elevó sobre estos defectos mientras la nueva verdad trabajaba en su alma.Moisés entendió perfectamente que ajustarse uno mismo, rigurosamente a la Voluntad de Dios, lejos de implicar la pérdida de algún bien, podía solo significar una mejor y espléndida vida. Él, por lo tanto, no pensó en su tarea como un auto-sacrificio, porque sabía que esta es la más alta forma de auto-glorificación -la glorificación de Dios-.</p><p><i>…el Padre que mora en mí, Él hace las obras… Yo Soy en el Padre y el Padre es en mí.</i> (Juan 14:10-11).</p><p>Hay un maravilloso dicho oriental,  “la mansedumbre obliga a Dios mismo”.</p>"
      },
      marzo29: {
        dia: "29 DE MARZO",
        titulo: "TENER HAMBRE DE JUSTICIA",
        cuerpo: "<p><i>Bienaventurados los que tienen hambre y sed de justicia porque ellos serán saciados.</i> (Mateo 5:6).</p><p>La justicia es otra de las palabras clave en la Biblia, una de las claves que el lector debe tener en su posesión si está por obtener el verdadero significado del libro. Como tierra, manso y confort, son usadas en un especial y definido sentido. Justicia, significa no solamente conducta correcta, sino correcto pensamiento. En el Sermón del Monte, toda cláusula reitera la verdad de que las cosas exteriores no son sino consecuencias. Como es adentro así es afuera.</p><p>Cuando la gente se despierta al conocimiento de estas verdades, naturalmente comienzan a aplicarlas en sus propias vidas. Realizando al fin la vital importancia de la “justicia”. Comienzan a tratar de poner su casa en orden. El principio involucrado es simple, pero desafortunadamente la ejemplificación de esto es cualquier cosa menos fácil. Ahora, ¿por qué esto es así? La respuesta descansa en la potencia del hábito y los hábitos de pensamiento son a un mismo tiempo los más sutiles y los más difíciles para romper.</p><p>Quizás el fracaso en realizar la justicia, es el fracaso de la falta de motivación. Tú anhelas, pero no demasiado profundamente. Tu hambre y sed no se elevan desde un sentimiento de total necesidad. Ten un inventario mental o una revisión de tu vida. No puede suceder que una sincera búsqueda por la verdad y la justicia, si perseveras, no sea coronada con el éxito. Dios no es ficticio, tampoco Él engaña a Sus hijos.</p>"
      },
      marzo30: {
        dia: "30 DE MARZO",
        titulo: "LOS MISERICORDIOSOS",
        cuerpo: "<p><i>Bienaventurados los misericordiosos, porque ellos alcanzarán misericordia.</i> (Mateo 5:7).</p><p>Esto es un conciso resumen de la Ley de Vida, que Jesús desarrolla más completamente después en el Sermón (Mateo 7:1-5). Como se presenta esta bienaventuranza, es tan obvia en su significado, como la ley en cuestión es simple e inflexible en su acción.</p><p>El punto que el cristiano necesita notar, es que el principio cubierto en esta bienaventuranza descansa para su aplicación en el reino del pensamiento. Seamos misericordiosos en nuestros juicios mentales sobre nuestro hermano, porque en verdad somos todos uno y lo más profundamente que él parezca equivocarse, más urgente es la necesidad para nosotros de ayudarlo con el pensamiento correcto y así hacer más fácil para él liberarse.</p><p>Porque en hecho y en verdad, nosotros somos todos uno, partes componentes de la vestimenta viva de Dios. Tu recibirás finalmente, el mismo tratamiento que repartas a otros, recibirás la misma misericordiosa ayuda en tu hora de necesidad, que aquellos quienes están más lejos a lo largo del sendero de lo que tu estás.</p>"
      },
      marzo31: {
        dia: "31 DE MARZO",
        titulo: "LOS PUROS DE CORAZÓN",
        cuerpo: "<p>Bienaventurados los de limpio corazón, porque ellos verán a Dios. (Mateo 5:8).</p><p>Esta es una de aquellas maravillosas sentencias en la cual la Biblia es tan rica. Esto es un resumen, en pocas palabras, de una completa filosofía religiosa. Comencemos considerando cuál es la promesa en esta Bienaventuranza. No es nada menos que ver a Dios. El “ver” en el sentido referido aquí, significa percepción espiritual. Y la percepción espiritual es justo esa capacidad de aprender la verdadera naturaleza del Ser de la que nosotros tan tristemente carecemos.</p><p>Nosotros vivimos en el mundo de Dios, pero en lo más mínimo conocemos como es. El cielo descansa en todo nuestro alrededor, pero porque somos carentes de percepción espiritual, somos incapaces de reconocerlo, experimentarlo y por lo tanto, tan lejos como nos concierne, se nos podría decir que estamos excluidos del Cielo.</p><p>Estamos mucho en la posición de un hombre daltónico en un bello jardín de flores. En todo su alrededor hay gloriosos colores, pero él ve solo blancos, negros o grises. Si suponemos que él también está desprovisto del sentido del olfato, podremos ver que solo una pequeña parte de la gloria del jardín existe para él. Todo está allí, aunque no pueda percibirlo.</p><p>Nuestra tarea, es remontar esas limitaciones tan rápido como se pueda, hasta que alcancemos el punto donde podamos conocer estas cosas como realmente son -experimentar el Cielo como este realmente es-. Eso es lo que se quiere decir por “ver a Dios”. Ver a Dios es aprender la Verdad, como esta realmente es y esa es la infinita libertad y perfecta gloria.</p>"
      },
    };
  },
};
</script>
