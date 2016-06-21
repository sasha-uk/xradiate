import {HttpClient} from "aurelia-fetch-client";
import {autoinject} from "aurelia-framework";
import {inject} from "aurelia-dependency-injection";
import {Build} from "./Build";


@inject(HttpClient)
export class TeamCity {

    constructor(private http:HttpClient) {
    };

    configure(url) {
        this.http.configure(config => {
            config
                .useStandardConfiguration()
                .withBaseUrl(url)
                .withDefaults({
                    headers: {
                        'Accept': 'application/json'
                    }
                });
        })
    };

    getProjects() {
        return this.http.fetch('/guestAuth/app/rest/projects')
            .then(response => {
                var result = response.json();
                return result;
            }).then(projects=> {
            return projects.project;
        });
    };

    getBuildTypes(): Promise<Build[]>{
        return this.http.fetch('/guestAuth/app/rest/buildTypes')
            .then(response => {
                var result = response.json();
                return result;
            }).then(buildTyeps=> {
                return buildTyeps.buildType;
            });
    }

    getBuild(buildType:string, branch:string): Promise<Build>
    {
        var url = `/guestAuth/app/rest/builds/?locator=branch:${branch},buildType:${buildType},count:1`;
        return this.http.fetch(url)
            .then(response=>{
                var result = response.json();
                return result;
            }).then(builds=>{
                if(builds.build == null)
                {
                    return null;
                }
                return builds.build[0];
            });
    }
}


