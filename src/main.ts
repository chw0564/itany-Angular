import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// 完成  程序的引导模块加载 
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
