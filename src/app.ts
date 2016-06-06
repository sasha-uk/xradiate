import {RouterConfiguration, Router} from 'aurelia-router'

export class App {
    router:Router;

    configureRouter(config:RouterConfiguration, router:Router) {
        config.title = '';
        config.map([
            {route: ['', 'home'], name: 'home', moduleId: './home', nav: true, title: 'home'},
            {route: ['config', 'config'], name: 'config', moduleId: './config', nav: true, title: 'config'},
        ]);
        this.router = router;
    }
}