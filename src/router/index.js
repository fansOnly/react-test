import Index from '../pages/index/index';
import PageA from '../pages/index/pageA';
import Login from '../pages/login/index';
import Test from '../pages/test/index';
import Bug from '../pages/test/bug';

const routes = [
    {
        path: '/index',
        component: Index,
        routes: [
            {
                path: '/index/pageA',
                component: PageA
            },
            // {
            //     path: '/tacos/cart',
            //     component: Cart
            // }
        ]
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/test',
        component: Test,
        requiresAuth: true,
        routes: [
            {
                path: '/test/bug',
                component: Bug
            }
        ]
    }
];

export default routes;