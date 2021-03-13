import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes =[
    {
        path:'/',
        component:() =>import('@/components/login'),
        meta:{isAuthenticated:false ,showNav:true}
    },
    {
        path:'/Register',
        component:() =>import('@/components/Register'),
        meta:{isAuthenticated:false,showNav:true} 
    },
    {
        path:'/api',
        component:() =>import('@/components/api'),
        meta:{isAuthenticated:true}
    },
    {
        path:'/profile',
        component:() =>import('@/components/profile'),
        meta:{isAuthenticated:true}
    },
    {
        path:'/favourite',
        component:() =>import('@/components/favourite'),
        meta:{isAuthenticated:true}
    }

]
const router =new VueRouter({
    routes
});

export default router;