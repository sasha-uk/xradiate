import {RouterConfiguration, Router} from 'aurelia-router'

export class App {
    router:Router;

    configureRouter(config:RouterConfiguration, router:Router) {
        config.title = '';
        config.map([
            {route: ['', 'home'], name: 'home', moduleId: './home', nav: true, title: 'home'},
            {route: 'admin',  name: 'admin-router', moduleId: 'admin-router', nav: true, title: 'Admin' }
        ]);
        this.router = router;
    }
}