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
}