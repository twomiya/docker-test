export default[
    //user
    {
        path:'/user',
        component:'../layouts/UserLayout',
        routes:[
            {path:'/user',redirect:'/user/login'},
            {path:'/user/login',component:'./User/login'},
        ]
    },
    //app
    {
        path:'/',
        component:'../layouts/BasicLayout',
        Routes:['src/pages/Auth'],
        routes:[
            {path:'/',redirect:'/dashboard'},
            {path:'/dashboard',component:'./Dashboard'}
        ]
    }
]