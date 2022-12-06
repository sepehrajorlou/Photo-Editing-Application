
import { createRouter, createWebHashHistory } from 'vue-router'

const maincomponent = () => import("../components/maincomponent.vue");

const home = () => import("../views/home.vue");
const editor = () => import("../views/editor.vue");
const routes = [
    {
        path: "/",
        redirect: "/home",
        component: maincomponent,
        children: [
            {
                path: "/home",
                component: home,
                meta: {
                    title:" + home"
                }
            } ,
            {
                path:"/editor" ,
                component:editor,
                meta : {
                    title : "+ editor"
                }
                
            }
        ]
    }

]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})


router.afterEach((to, from) => {
    document.title = "Edit  Photo  " + to.meta.title;
});


export default router;