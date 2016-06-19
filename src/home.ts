import {autoinject} from 'aurelia-framework';
import {TeamCity} from "./TeamCity";
import {AppConfig} from "./AppConfig";


@autoinject
export class Home {
    heading = 'home';
    builds = [];
    private buildTypes;
    private buildTypeInfos;

    constructor(private teamcity:TeamCity, private config:AppConfig) {
        teamcity.configure(config.teamcityUrl);
        this.buildTypes = this.config.getParsedBuildTypes();
        this.buildTypeInfos = this.teamcity.getBuildTypes()
    }

    activate() {
        var builds = [];
        var promises = [];
        for (var i = 0; i < this.buildTypes.length; i++) {
            var promise = this.teamcity.getBuild(this.buildTypes[i], 'master').then(x=>builds.push(x));
            promises.push(promise)
        }
        Promise.all(promises);
        this.builds = builds;
    }
}
