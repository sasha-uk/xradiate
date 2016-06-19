import {autoinject} from 'aurelia-framework';
import {TeamCity} from "./TeamCity";
import {AppConfig} from "./AppConfig";


@autoinject
export class Home {
    heading = 'home';
    builds = [];
    private buildTypes;
    private buildTypeInfos:Map<string,any>;

    constructor(private teamcity:TeamCity, private config:AppConfig) {
        teamcity.configure(config.teamcityUrl);
    }

    activate() {
        this.buildTypes = this.config.getParsedBuildTypes();

        this.teamcity.getBuildTypes()
            .then(data=>{
                return data;
            })
            .then((buildTypeInfos)=> {
                var builds = [];
                var promises = [];
                for (var i = 0; i < this.buildTypes.length; i++) {
                    var promise = this.teamcity.getBuild(this.buildTypes[i], 'master')
                        .then(build=> {
                            console.log(buildTypeInfos.find(x=>x.id == build.buildTypeId));
                            build.info = buildTypeInfos.find(x=>x.id == build.buildTypeId);
                            builds.push(build)
                        });
                    promises.push(promise)
                };
                Promise.all(promises).then(()=>
                {
                    this.builds = builds;
                });
            });
    }
}
