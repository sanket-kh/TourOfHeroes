import {AppModule} from "./app-module/app-module.module";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err) => console.error(err));
