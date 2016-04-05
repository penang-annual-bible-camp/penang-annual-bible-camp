/// <reference path="../typings/main.d.ts" />

// import { Component, AfterViewInit, ElementRef } from 'angular2/core';
import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Redirect } from 'angular2/router';

import { PABC2017Component } from './2017/PABC2017.component';

// declare var jQuery: JQueryStatic;

@Component({
    selector: 'app-root',
    templateUrl: 'app/app.component.html',
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
