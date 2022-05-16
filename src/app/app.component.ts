/*
 * @Description: 
 * @Author: mzr
 * @Date: 2021-07-14 14:21:09
 * @LastEditTime: 2021-07-15 18:14:41
 * @LastEditors: mzr
 */
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{
  title = 'AngularDemo';
  constructor(private router: Router) {}
  ngOnInit() {
    
  }

}
// import {Component} from '@angular/core';
// @Component({
// selector: 'icon-overview-example',
// templateUrl: 'icon-overview-example.html',
// })
// export class IconOverviewExample {}
