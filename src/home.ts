import {autoinject} from 'aurelia-framework';
import {TeamCity} from "./api/TeamCity";
import {AppConfig} from "./configuration/AppConfig";
import {Build} from "./api/Build";
import {BuildType} from "./api/BuildType";


@autoinject
export class Home {
    heading = 'home';
    private buildTypes;
    groups:GroupModel[];

    constructor(private teamcity:TeamCity, private config:AppConfig) {
        teamcity.configure(config.teamcityUrl);
    }

    activate() {
        this.buildTypes = this.config.getParsedBuildTypes();

        var groups = this.config.getParsedConfig();
        this.teamcity.getBuildTypes()
            .then(data=> {
                return data;
            })
            .then((buildTypeInfos)=> {
                let groupPrimises:Promise<GroupModel>[] = [];
                for (var g = 0; g < groups.length; g++) {
                    let group = groups[g];
                    let buildPromises:Promise<BuildModel>[] = [];
                    for (var b = 0; b < group.builds.length; b++) {
                        let build = group.builds[b];
                        var promise = this.teamcity
                            .getBuild(build.buildType, build.branch)
                            .then((buildStatus)=> {

                                let buildModel:BuildModel = new BuildModel();
                                buildModel.build = buildStatus;
                                buildModel.info = buildTypeInfos.find(x=>(x as any).id == buildStatus.buildTypeId)
                                return buildModel;
                            });
                        buildPromises.push(promise);
                    }
                    let groupPromise:Promise<GroupModel> = Promise.all(buildPromises).then(builds=> {
                        return new GroupModel(builds);
                    });
                    groupPrimises.push(groupPromise);
                }
                return Promise.all(groupPrimises);
            })
            .then(groups=> {
                this.groups = groups;
            });
    }
}

export class GroupModel {
    failing: boolean;
    constructor(builds:BuildModel[])
    {
        this.builds = builds;
        this.failing = builds.some(x=>x.build.status == "FAILURE");
    }
    builds:BuildModel[];
}

export class BuildModel {
    build:Build;
    info:BuildType;
}
