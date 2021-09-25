import { platformBrowserDynamic } from "@angular/platform-browser-dynamic"; // returns a platform obj that has a bootstrap module function on it. 
// note that this is importing a function and not a class like the module and component classes
import { AppModule } from "./app/app.module";


platformBrowserDynamic().bootstrapModule(AppModule); // AppModule is the root module.

