import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // 模板表单
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  // bootstrap: [AppComponent,NewoneComponent]
  bootstrap: [AppComponent]
})
export class AppModule { }
