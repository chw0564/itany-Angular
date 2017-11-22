import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// 自定 TS 文件的导入
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// 判断项目已何种方式进行 启动
if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.log(err));

// 返回一个引导组件
let pbd = platformBrowserDynamic();
// 完成 程序的引导模块加载 
pbd.bootstrapModule(AppModule)
   .catch((error)=>{
      console.log(error);
   });

// (error)=>{console.log(error);}
//  error => console.log(error)

// if(true) console.log(1)