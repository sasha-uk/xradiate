import {autoinject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';


@autoinject
export class Home {
    heading = 'home';
    builds = [];

    constructor(private http: HttpClient) {
        http.configure(config => {
            config
                .useStandardConfiguration()
                .withBaseUrl('https://teamcity.codemotion.co.uk')
                .withDefaults({
                    headers: {
                        'Accept': 'application/json'
                }});
        });
    }

    activate() {
       this.http.fetch('/guestAuth/app/rest/builds?locator=running:any,branch:branched:any,count:20')
                .then(response => {
                    var result = response.json();
                    return result;
                })
                .then(builds => {
                    this.builds = builds.build;
                });
    }
}
