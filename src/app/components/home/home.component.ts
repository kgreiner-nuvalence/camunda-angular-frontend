import { Component, OnInit } from '@angular/core';
import {ThemePalette} from "@angular/material/core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    protected _router: Router
  ) { }

  // PROPERTIES

  // when adding new routes - add to this property
  public links = [
    {
      title: 'bpmn',
      route: '/bpmn'
    },
    {
      title: 'Arjol Stuff',
      route: '/arjol_stuff'
    },
    {
      title: 'Builder',
      route: '/builder'
    }];

  public ngOnInit(): void {
  }

  public onRouteClicked(route: string): void {
    this._router.navigate([route]);
  }

}
