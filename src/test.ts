//import {computedFrom} from 'aurelia-framework';

import {inject} from "aurelia-dependency-injection";
import {autoinject} from "aurelia-dependency-injection";
import {AppConfig} from "./configuration/AppConfig";

@inject(AppConfig)
export class Test {
    heading = 'test';

    constructor(private config: AppConfig) {
    }

    activate(params, navigationInstruction) {
    };

    deactivate(){
    };
}
