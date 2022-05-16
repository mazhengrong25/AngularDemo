/*
 * @Description: 
 * @Author: mzr
 * @Date: 2021-07-14 14:21:09
 * @LastEditTime: 2021-07-15 17:57:01
 * @LastEditors: mzr
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TableBasicExampleComponent } from './table-basic-example/table-basic-example.component';

@NgModule({
  // 注册
  declarations: [
    AppComponent,
    TableBasicExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // 路由
    // RouterModule.forRoot([
    //   { path:'table', component:TableBasicExampleComponent},
    // ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
