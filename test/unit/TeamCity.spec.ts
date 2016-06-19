import {Container} from "aurelia-dependency-injection";
import {TeamCity} from "../../src/TeamCity";
import {HttpClient} from "aurelia-fetch-client";
import {inject} from "aurelia-dependency-injection";
let container;
let teamcity;
let url = 'https://teamcity.codemotion.co.uk';

describe('TeamCity service', ()=> {
    beforeEach(()=> {
        container = new Container();
        teamcity = container.get(TeamCity);
        teamcity.configure(url);
    })

    it('gets projects', (done)=> {
        teamcity.getProjects().then(p=> {
            expect(p.length).toBeGreaterThan(0);
            done();
        });
    });

    it('gets build for buildType and branch name', (done)=> {
        teamcity.getBuild('FoofBar_Build', 'master').then(build => {
            expect(build.branchName).toBe('master');
            expect(build.buildTypeId).toBe('FoofBar_Build');
            done();
        });
    });

    it('returns null if branch does not exists', (done)=> {
        teamcity.getBuild('FoofBar_Build', 'non-existing-branch').then(build => {
            expect(build).toBeNull();
            done();
        });
    });
})