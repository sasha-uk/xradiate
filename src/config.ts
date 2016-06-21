//import {computedFrom} from 'aurelia-framework';

import {inject} from "aurelia-dependency-injection";
import {autoinject} from "aurelia-dependency-injection";
import {AppConfig} from "./configuration/AppConfig";

@inject(AppConfig)
export class Config {

    heading = 'test';
    teamcityUrl:string = '';
    branchName:string = '';
    buildTypes:string = '';
    configJson:string = '';

    constructor(private config: AppConfig) {
    }

    activate() {
        this.teamcityUrl = this.config.teamcityUrl;
        this.buildTypes = this.config.buildTypes;
        this.configJson = this.config.configJson;
    }

    submit() {
        this.config.teamcityUrl = this.teamcityUrl;
        this.config.buildTypes = this.buildTypes;
        this.config.configJson= this.configJson;
    };
}
