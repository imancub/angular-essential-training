import { NgModule } from "@angular/core";  // this imports the NgModule decorator from angular's core "scoped package".
import { BrowserModule } from "@angular/platform-browser"; // imports the browser module.
import { AppComponent } from './app.component';

// this is how we use the module. no semi colon is needed because it is not a statement. it is a piece of code that will be applied to the class,
// field or method that it comes before
@NgModule({
// these are metadata properties
    imports: [ // used to bring in other angular modules that my module will need
        BrowserModule
    ],  
    declarations: [
        AppComponent
    ], // to make components, directives and pipes available to the my module that dont come from another module
    bootstrap: [
        AppComponent
    ]  // used for a root module and lets angular know which component(s) will be the starting pt for the bootstrap process i.e the entry point of the app
})      
export class AppModule {} // we use the export to make this class a module(this supports the module loading syntax)... this is the root module,
