
import {Group} from "../../src/configuration/Group";
import {Build} from "../../src/configuration/Build";

describe('configuration', ()=> {
    it('serialize', ()=> {
        var group = new Group();
        group.branch = 'master';

        var build1 = new Build();
        build1.branch = 'some-branch-name';
        build1.buildType = 'some-build-type';

        var build2 = new Build();

        group.builds = [build1,build2];

        console.log(JSON.stringify(group))
    });
});
