import { Component } from "@angular/core"; // this imports the Component decorator from angular's core "scoped package".

@Component({ // to use/call the component decorator
    selector: 'mw-app', // found in the index.html file
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']  // note the styles is taking an array unlike the template that takes a string.
}) 
export class AppComponent {} // to export a class for the component