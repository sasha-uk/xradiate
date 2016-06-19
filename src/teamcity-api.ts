/*
 * Sample TeamCity Json to get around unresolved variables warning in Webstorm
 * http://stackoverflow.com/questions/20835544/how-to-fight-a-lots-of-unresolved-variables-warning-in-webstorm
 */

/*
 * https://teamcity.codemotion.co.uk/guestAuth/app/rest/projects
 */
var projects = {
    "count": 3,
    "href": "/guestAuth/app/rest/projects",
    "project": [{
        "id": "_Root",
        "name": "<Root project>",
        "description": "Contains all other projects",
        "href": "/guestAuth/app/rest/projects/id:_Root",
        "webUrl": "http://localhost:8080/project.html?projectId=_Root"
    }, {
        "id": "Foo",
        "name": "Foo",
        "parentProjectId": "_Root",
        "href": "/guestAuth/app/rest/projects/id:Foo",
        "webUrl": "http://localhost:8080/project.html?projectId=Foo"
    }, {
        "id": "FooBar",
        "name": "FooBar",
        "parentProjectId": "_Root",
        "description": "Github, TeamCity, Azure playground",
        "href": "/guestAuth/app/rest/projects/id:FooBar",
        "webUrl": "http://localhost:8080/project.html?projectId=FooBar"
    }]
};

var builds =
{
    "count": 1,
    "href": "/guestAuth/app/rest/builds/?locator=branch:master,buildType:FoofBar_Build,count:1",
    "nextHref": "/guestAuth/app/rest/builds/?locator=buildType:FoofBar_Build,count:1,start:1,branch:master",
    "build": [{
        "id": 16,
        "buildTypeId": "FoofBar_Build",
        "number": "6",
        "status": "SUCCESS",
        "state": "finished",
        "branchName": "master",
        "defaultBranch": true,
        "history": true,
        "href": "/guestAuth/app/rest/builds/id:16",
        "webUrl": "http://localhost:8080/viewLog.html?buildId=16&buildTypeId=FoofBar_Build"
    }]
};