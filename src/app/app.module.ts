import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
    StyleattributeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  // bootstrap: [AppComponent,NewoneComponent]
  bootstrap: [AppComponent]
})
export class AppModule { }
