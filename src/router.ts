import Vue from 'vue';
import VueRouter, { Location, Route, RouteConfig } from 'vue-router';
import { HomeComponent } from './components/home/home';

function homeComponent() {
    return import('./components/home').then(({ HomeComponent }) => HomeComponent)
}

Vue.use(VueRouter);

export function createRoutes(): RouteConfig[] {
    return [
        {
            path: '/',
            component: homeComponent
        }
    ];
}

export function createRouter(): VueRouter {
  return new VueRouter({ mode: 'history', routes: createRoutes() });
}
