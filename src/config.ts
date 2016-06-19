//import {computedFrom} from 'aurelia-framework';

import {AppConfig} from "./AppConfig";
import {inject} from "aurelia-dependency-injection";
import {autoinject} from "aurelia-dependency-injection";

@inject(AppConfig)
export class Config {

    heading = 'config';
    teamcityUrl:string = '';
    branchName:string = '';
    buildTypes:string = '';

    constructor(private config: AppConfig) {
    }

    activate() {
        this.teamcityUrl = this.config.teamcityUrl;
        this.branchName = this.config.branchName;
        this.buildTypes = this.config.buildTypes;
    }

    submit() {
        this.config.teamcityUrl = this.teamcityUrl;
        this.config.branchName = this.branchName;
        this.config.buildTypes = this.buildTypes;
    };
}
