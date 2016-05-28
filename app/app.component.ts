/// <reference path="../typings/index.d.ts" />

// import { Component, AfterViewInit, ElementRef } from 'angular2/core';
import { Component } from '@angular/core';
import { RouteConfig, Redirect, ROUTER_DIRECTIVES, ROUTER_PROVIDERS  } from '@angular/router-deprecated';

import { PABC2017Component } from './2017/PABC2017.component';

// declare var jQuery: JQueryStatic;

@Component({
    selector: 'app-root',
    template: `
    <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS
    ]
})

@RouteConfig([
    new Redirect({
        path: '/',
        redirectTo: ['/PABC2017']
    }),
    {
        path: '/2017',
        name: 'PABC2017',
        component: PABC2017Component
    }
])

export class AppComponent{// implements AfterViewInit {
    
    // constructor(private el: ElementRef) {
        
    // }
    
    // ngAfterViewInit() {
    //     jQuery(this.el.nativeElement)
    //         .find('.parallax').parallax();
	// }
}
