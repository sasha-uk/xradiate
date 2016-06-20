import {autoinject} from 'aurelia-framework';
import {TeamCity} from "./TeamCity";
import {AppConfig} from "./AppConfig";


@autoinject
export class Home {
    heading = 'home';
    builds = [];
    private buildTypes;

    constructor(private teamcity:TeamCity, private config:AppConfig) {
        teamcity.configure(config.teamcityUrl);
    }

    activate() {
        this.buildTypes = this.config.getParsedBuildTypes();

        this.teamcity.getBuildTypes()
            .then(data=> {
                return data;
            })
            .then((buildTypeInfos)=> {
                var promises = [];
                for (var i = 0; i < this.buildTypes.length; i++) {
                    var promise = this.teamcity
                        .getBuild(this.buildTypes[i], 'master')
                        .then(build=> {
                            // ugly
                            (build as any).info = buildTypeInfos.find(x=>(x as any).id == build.buildTypeId);
                            return build;
                        });
                    promises.push(promise)
                }
                return Promise.all(promises);
            })
            .then(builds=> {
                this.builds = builds;
            });
    }
}
