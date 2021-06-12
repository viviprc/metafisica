import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/metafisica',
    name: 'Metafisica',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "metafisica" */ '../views/Metafisica.vue')
  },
  {
    path: '/meditacion-diaria/:id',
    name: 'MeditacionDiaria',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "meditacionesDiarias" */ '../views/MeditacionesDiarias.vue'),
    props:{
      dia:{
        type: String,
        require: true
      }
    }
  },
  {
    path: '/articulos/:id',
    name: 'Articulos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "articulos" */ '../components/Articulos.vue'),
    props:{
      articulo:{
        type: String,
        require: true
      }
    }
  },
  {
    path: '/clases',
    name: 'Clases',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "clases" */ '../views/Clases.vue')
  },
  {
    path: '/servicioCuracion',
    name: 'ServicioCuracion',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "servicioCuracion" */ '../views/ServicioCuracion.vue')
  },
  {
    path: '/retiro-eterico',
    name: 'RetiroEterico',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "retiroEterico" */ '../views/RetiroEterico.vue')
  },
  {
    path: '/un-ano-con-emmet-fox/:id',
    name: 'UnAnoConEmmetFox',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "unAnoConEmmetFox" */ '../views/UnAnoConEmmetFox.vue'),
    props:{
      emmetFoxHoy:{
        type: String,
        require: true
      }
    }
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
