import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

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

@NgModule({
  declarations: [
    AppComponent,
    NewoneComponent,
    TemplateComponent,
    InsertdataComponent,
    BindeventComponent,
    DomattributeComponent,
    HtmlattributeComponent,
    ClassattributeComponent,
    StyleattributeComponent,
    StructuralDirectivesComponent,
    NgForComponent,
    TwowayBinddataComponent,
    UserMangerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  // bootstrap: [AppComponent,NewoneComponent]
  bootstrap: [AppComponent]
})
export class AppModule { }
