import {Container, autoinject} from 'aurelia-framework';
import {HttpClient} from "aurelia-fetch-client";

var teamcity = 'https://teamcity.codemotion.co.uk';

describe('TeamCity queries', ()=> {
    var http;
    beforeEach(()=> {
        http = new HttpClient();
        http = http.configure(config => {
            config
                .useStandardConfiguration()
                .withBaseUrl(teamcity)
                .withDefaults({
                    headers: {
                        'Accept': 'application/json'
                    }
                });
        });
    });

    it('it can query teamcity projects', done=> {
        http.fetch('/guestAuth/app/rest/projects')
            .then(response => {var result = response.json();
            return result;
        }).then(projects=>{
            expect(projects.project).toBeDefined();
            expect(projects.project.filter(x => x.name === 'Foo').length).toBe(1);
            done();
        });
    });
});