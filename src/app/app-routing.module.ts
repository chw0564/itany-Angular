import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouterChildOneComponent } from './componets/daySix/router-child-one/router-child-one.component';
import { RouterChildTwoComponent } from './componets/daySix/router-child-two/router-child-two.component';
import { RouterChildOneOneComponent } from './componets/daySix/router-child-one-one/router-child-one-one.component';
import { RouterChildOneTwoComponent } from './componets/daySix/router-child-one-two/router-child-one-two.component';

const routes: Routes = [
  {path:"one",component:RouterChildOneComponent,children:[
    {path:"one",component:RouterChildOneOneComponent},
    {path:"two",component:RouterChildOneTwoComponent}
  ]},
  {path:"two",component:RouterChildTwoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
