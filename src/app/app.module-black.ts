// 加载浏览器兼容模块
// @ 描述文件
import { BrowserModule } from '@angular/platform-browser';
// core 核心代码库
// 通过核心代码库 记载  NgModule
import { NgModule } from '@angular/core';
// 路由模块
import { AppRoutingModule } from './app-routing.module';
// 主程序模块
import { AppComponent } from './app.component';

// TypeScript 的 装饰器
// 对于类或方法进行描述和属性注入的操作
//     使用装饰器时 该装饰器一定需要定义在 被装�,
//     告知使用者 该类时 anguler 的 NgModule 类
//     装饰器会自动调用装饰类的构造方法，并注入属性或者方法
@NgModule({
  // 定义该模块中 需要被加载管理的 所有组件和管道
  declarations: [
    AppComponent
  ],
  // 加载并启动其它模块
  imports: [
    // 浏览器兼容模块
    BrowserModule,
    // 路由模块
    AppRoutingModule
  ],
  // 提供者 和 DI（依赖注入）？
  providers: [],
  // 加载主组件引导
  bootstrap: [AppComponent]
})
// 导出一个AppModule 的类 
export class AppModule { }
