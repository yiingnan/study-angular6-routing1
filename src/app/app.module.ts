import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';


const routes:Routes=[ 
  {path:'',component:Page1Component},
  {path:'page1',component:Page1Component},
  {path:'page2',component:Page2Component},
  {path:'page2/:id',component:Page2Component},
  {path:'page3',component:Page3Component},
  {path:'**',component:Page1Component}
  ];


@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    Page3Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
