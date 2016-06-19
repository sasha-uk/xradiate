//import {computedFrom} from 'aurelia-framework';

export class Config {

    heading = 'config';
    teamcityUrl:string = '';
    branchName:string = '';
    buildTypes:string = '';

    activate() {
        if (typeof(Storage) != null) {
            this.teamcityUrl = (localStorage as any).teamcityUrl;
            this.branchName = (localStorage as any).branchName;
            this.buildTypes = (localStorage as any).buildTypes;
        } else {
            alert('No local storage available!')
        }
    }

    submit() {
        if (typeof(Storage) != null) {
            (localStorage as any).teamcityUrl = this.teamcityUrl;
            (localStorage as any).branchName = this.branchName;
            (localStorage as any).buildTypes = this.buildTypes;
        } else {
            alert('No local storage available!')
        }
    };
}
