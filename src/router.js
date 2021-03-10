

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes =[
    {
        path:'/',
        component:() =>import('@/components/login'),
        meta:{isAuthenticated:false}
    },
    {
        path:'/Register',
        component:() =>import('@/components/Register'),
        meta:{isAuthenticated:false} 
    },
    {
        path:'./api',
        component:() =>import('@/components/api'),
        meta:{isAuthenticated:true}
    }

]
const router =new VueRouter({
    routes
});

export default router;