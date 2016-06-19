import {autoinject} from 'aurelia-framework';
import {TeamCity} from "./TeamCity";
import {AppConfig} from "./AppConfig";


@autoinject
export class Home {
    heading = 'home';
    builds = [];

    constructor(private teamcity:TeamCity, private config:AppConfig) {
        teamcity.configure(config.teamcityUrl);
    }

    activate() {
        var builds = [];
        var promises = [];
        var types = this.config.getParsedBuildTypes();
        for (var i = 0; i < types.length; i++) {
            var promise = this.teamcity.getBuild(types[i], 'master').then(x=>builds.push(x));
            promises.push(promise)
        }
        Promise.all(promises);
        this.builds = builds;
    }
}
