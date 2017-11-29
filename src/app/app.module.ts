import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule,JsonpModule } from '@angular/http';

import { PowPipe } from './pipes/pow.pipe'
import { NameFilterPipe } from './pipes/name-filter.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NewoneComponent } from './componets/dayOne/newone/newone.component';
import { TemplateComponent } from './componets/daytwo/template/template.component';
import { InsertdataComponent } from './componets/daytwo/insertdata/insertdata.component';
import { BindeventComponent } from './componets/daytwo/bindevent/bindevent.component';
import { DomattributeComponent } from './componets/daytwo/domattribute/domattribute.component';
import { HtmlattributeComponent } from './componets/daytwo/htmlattribute/htmlattribute.component';
import { ClassattributeComponent } from './componets/daytwo/classattribute/classattribute.component';
import { StyleattributeComponent } from './componets/daytwo/styleattribute/styleattribute.component';
import { StructuralDirectivesComponent } from './componets/daytwo/structural-directives/structural-directives.component';
import { NgForComponent } from './componets/dayThree/ng-for/ng-for.component';
import { TwowayBinddataComponent } from './componets/dayThree/twoway-binddata/twoway-binddata.component';
import { UserMangerComponent } from './componets/dayThree/user-manger/user-manger.component';
import { CommonPipeComponent } from './componets/dayThree/common-pipe/common-pipe.component';
import { UserPipeComponent } from './componets/dayThree/user-pipe/user-pipe.component';
import { NameFilterTwoPipe } from './pipes/name-filter-two.pipe';
import { LoadDataComponent } from './componets/dayThree/load-data/load-data.component';
import { LocalVariablesComponent } from './componets/dayFour/local-variables/local-variables.component';
import { TmplateFormComponent } from './componets/dayFour/tmplate-form/tmplate-form.component';
import { TmplateTwoFormComponent } from './componets/dayFour/tmplate-two-form/tmplate-two-form.component';
import { ReactiveFormOneComponent } from './componets/dayFour/reactive-form-one/reactive-form-one.component';
import { HomeworkComponent } from './componets/dayFive/homework/homework.component';
import { FormBuilderComponent } from './componets/dayFive/form-bulider/form-bulider.component';
import { DiComponentComponent } from './componets/dayFive/DI-components/di-component/di-component.component'
import { DataService } from './componets/dayFive/DI-components/dataService';
import { DiComponentChildComponent } from './componets/dayFive/DI-components/di-component-child/di-component-child.component';
import { DiComponentChild2Component } from './componets/dayFive/DI-components/di-component-child2/di-component-child2.component';
import { HttpAjaxComponent } from './componets/dayFive/http-components/http-ajax/http-ajax.component';
import { RouterParentComponent } from './componets/daySix/router-parent/router-parent.component';
import { RouterChildOneComponent } from './componets/daySix/router-child-one/router-child-one.component';
import { RouterChildTwoComponent } from './componets/daySix/router-child-two/router-child-two.component';
import { RouterMenuComponent } from './componets/daySix/router-menu/router-menu.component';
import { RouterChildOneOneComponent } from './componets/daySix/router-child-one-one/router-child-one-one.component';
import { RouterChildOneTwoComponent } from './componets/daySix/router-child-one-two/router-child-one-two.component';


@NgModule({
  declarations: [
    // PowPipe,
    // NameFilterPipe,
    AppComponent,
    // NewoneComponent,
    // TemplateComponent,
    // InsertdataComponent,
    // BindeventComponent,
    // DomattributeComponent,
    // HtmlattributeComponent,
    // ClassattributeComponent,
    // StyleattributeComponent,
    // StructuralDirectivesComponent,
    // NgForComponent,
    // TwowayBinddataComponent,
    // UserMangerComponent,
    // CommonPipeComponent,
    // UserPipeComponent,
    // NameFilterTwoPipe,
    // LoadDataComponent,
    // LocalVariablesComponent,
    // TmplateFormComponent,
    // TmplateTwoFormComponent,
    ReactiveFormOneComponent,
    HomeworkComponent,
    FormBuilderComponent,
    DiComponentComponent,
    DiComponentChildComponent,
    DiComponentChild2Component,
    HttpAjaxComponent,
    RouterParentComponent,
    RouterChildOneComponent,
    RouterChildTwoComponent,
    RouterMenuComponent,
    RouterChildOneOneComponent,
    RouterChildOneTwoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // 模板表单
    FormsModule,
    ReactiveFormsModule,
    // 同服务器的正常请求
    HttpModule,
    // 跨服务的跨域请求
    JsonpModule
  ],
  // 提供者 用于为当前项目中所有需要注入参数的 组件 提供 对象的 指定
  // 自定义的 对象 提供
  providers: [
    DataService
  ],
  // bootstrap: [AppComponent,NewoneComponent]
  bootstrap: [AppComponent]
})
export class AppModule { }
