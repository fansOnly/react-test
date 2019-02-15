import Index from '../pages/index/index';
import pageA from '../pages/index/pageA';
import Login from '../pages/login/index';
import Test from '../pages/test/index';

const routes = [
    {
        path: '/index',
        component: Index
    },
    {
        path: '/login',
        component: Login,
        routes: [
            {
                path: '/index/pageA',
                component: pageA
            },
            // {
            //     path: '/tacos/cart',
            //     component: Cart
            // }
        ]
    },
    {
        path: '/test',
        component: Test
    }
];

export default routes;