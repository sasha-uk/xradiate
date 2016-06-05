import {RouterConfiguration, Router} from 'aurelia-router'

export class App {
    router:Router;

    configureRouter(config:RouterConfiguration, router:Router) {
        config.title = 'x-radiate';
        config.map([
            {route: ['', 'welcome'], name: 'welcome', moduleId: './welcome', nav: true, title: 'Config'},
        ]);
        this.router = router;
    }
}