import Vue from 'vue'
import Router from 'vue-router'
import Store from '@/store/index'
import layout from '@/layout'

import Session from '@/utils/session';

Vue.use(Router);


const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

const basicRouter = [
        {
            path: '/',
            name: 'home',
            meta: {
                title: '首页'
            },
            grade: 1,
            component: layout,
            redirect: '/index',
            children: [
                {
                    path: 'index',
                    name: 'index',
                    grade: 1,
                    meta: { title: '首页', icon: 'home' },
                    component: () => import(/* webpackChunkName: "Index" */ '@/views/index')
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            hide: true,
            meta: {
                title: '登录'
            },
            component: () => import(/* webpackChunkName: "login" */  './views/login/login.vue')
        },
        {
            path: '/icon',
            grade: 1,
            component: layout,
            children: [
                {
                    path: '',
                    name: 'icon',
                    grade: 1,
                    meta: { title: '图标', icon: 'menu' },
                    component: () => import(/* webpackChunkName: "Index" */ '@/views/icons')
                }
            ]
        },
    ],
    dynamicRouter = [
        {
            path: '/about',
            component: layout,
            meta: { title: '其他' },
            grade: 1,
            children: [
                {
                    path: '',
                    name: 'about',
                    meta: { title: '其他', icon: 'about' },
                    grade: 1,
                    component: () => import('@/views/About')
                }
            ]
            
        },
        {
            path: '/lock',
            meta: { title: '锁屏', icon: 'lock' },
            grade: 1,
            hide: true,
            component: () => import('@/views/lock')
        },
        {
            path: '/admin',
            name: 'admin',
            meta: { title: '管理员', icon: 'admin' },
            grade: 0,
            component: () => import('@/views/admin')
        },
        {
            path: '/self',
            grade: 0,
            component: layout,
            children: [
                {
                    path: '',
                    name: 'self',
                    meta: { title: '个人主页', icon: 'self' },
                    grade: 0,
                    component: () => import('@/views/self'),
                }
            ]
        },
        {
            path: '/table',
            grade: 0,
            component: layout,
            children: [
                {
                    path: '',
                    name: 'table',
                    meta: { title: '表格', icon: 'table' },
                    grade: 0,
                    component: () => import('@/views/table'),
                }
            ]
        },
        {
            path: '/menu',
            name: 'menu',
            grade: 1,
            meta: { title: '菜单栏' },
            component: layout,
            redirect: '/menu/1-1',
            children: [
                {
                    path: '1-1',
                    name: '1-1',
                    grade: 1,
                    meta: { title: '菜单1-1' },
                    component: () => import('@/views/About'),
                    children: [
                        {
                            path: '1-1-1',
                            name: '1-1-1',
                            grade: 0,
                            meta: { title: '菜单1-1-1' },
                            component: () => import('@/views/About'),
                        },
                        {
                            path: '1-1-2',
                            name: '1-1-2',
                            grade: 0,
                            meta: { title: '菜单1-1-2' },
                            component: () => import('@/views/About'),
                            children: [
                                {
                                    path: '1-1-2-1',
                                    name: '1-1-2-1',
                                    grade: 0,
                                    meta: { title: '菜单1-1-2-1' },
                                    component: () => import('@/views/About'),
                                }
                            ]
                        }
                    ]
                },
                {
                    path: '1-2',
                    name: '1-2',
                    grade: 1,
                    meta: { title: '菜单1-2' },
                    component: () => import('@/views/About')
                }
            ]
        },
        {
            path: '*',
            name: '404',
            hide: true,
            meta: { title: '找不到网页啊~' },
            grade: 1,
            component: () => import('@/views/common/404')
        }
    ]

const createRouter = () => {
    return new Router({
        routes: basicRouter
    });
}

const router = createRouter();

router.beforeEach( async (to, from, next) => {
    document.title = to.meta && to.meta.title || 'vue';
    if (Session.getToken()) {
        if (to.path === '/login') next('/');
        else {
            if (!Store.getters.user) {
                try {
                    const user = await Store.dispatch('user/getUserInfo');
                    const routes = await Store.dispatch('permission/getUserRoutes', user);
                    router.addRoutes(routes);
                    
                    

                    if (!!Session.getLock()) next('/lock');
                    else next({...to, replace: true });
                } catch(err) {
                    console.log('err: ', err);
                    next(`/login?to=${to.fullPath}`)
                }
            } else {
                if (!!Session.getLock()) {
                    if (to.path === '/lock') next();
                    else next('/lock');
                } else {
                    if (to.path === '/lock') next('/');
                    else next();
                }
            }
        }
    } else {
        if (to.path === '/login') next();
        else next(`/login?to=${to.fullPath}`)
    }

});

export {
    router,
    basicRouter,
    dynamicRouter
}