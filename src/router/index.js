import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "@/components/Layout.vue";
const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/",
        component: () =>
          import(/* webpackChunkName: "Home" */ "@/views/home/Home.vue")
      },
      {
        path: "/detail/:keywords",
        name: "Detail",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "detail" */ "@/views/detail/index.vue")
      },
      {
        path: "/albums/:id",
        name: "albums",
        component: () =>
          import(
            /* webpackChunkName: "albumsdetail" */ "@/views/detail/albumsdetail.vue"
          )
      },
      {
        path: "/artists/:id",
        name: "artists",
        component: () =>
          import(
            /* webpackChunkName: "artistsdetail" */ "@/views/detail/artistsdetail.vue"
          )
      },
      {
        path: "/playlist/:id",
        name: "playlist",
        component: () =>
          import(
            /* webpackChunkName: "playlistdetail" */ "@/views/detail/playlistdetail.vue"
          )
      }
    ]
  },
  {
    path: "/*",
    redirect: "/"
  }
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
});

export default router;
