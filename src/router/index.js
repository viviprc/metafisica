import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio,
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
        type: Number,
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

// const router = createRouter({
//   history: createWebHashHistory(),
//   routes,
//   base: process.env.BASE_URL,
//   scrollBehavior(to, from, savedPosition) {
//     // always scroll to top
//     return savedPosition || {top: 0};
//   },
// })

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    return { x: 0, y: 0 }
  }
})

export default router
