export class AppConfig {

    constructor() {
        if (typeof(Storage) == null) {
            throw new Error("Local storage required");
        };
    };

    get teamcityUrl():string {
        return (localStorage as any).teamcityUrl;
    }
    set teamcityUrl(value:string) {
        (localStorage as any).teamcityUrl = value;
    }

    get branchName():string {
        return (localStorage as any).branchName;
    }
    set branchName(value:string) {
        (localStorage as any).branchName = value;
    }

    get buildTypes():string {
        return (localStorage as any).buildTypes;
    }
    set buildTypes(value:string) {
        (localStorage as any).buildTypes = value;
    }

    getParsedBuildTypes():string[]{
        return this.buildTypes.split('\n');
    }
}