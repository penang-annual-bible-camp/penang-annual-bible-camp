/// <reference path="../typings/index.d.ts" />
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { Component, AfterViewInit, ElementRef } from 'angular2/core';
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var PABC2017_component_1 = require('./2017/PABC2017.component');
// declare var jQuery: JQueryStatic;
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: "\n    <router-outlet></router-outlet>\n    ",
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [
                router_deprecated_1.ROUTER_PROVIDERS
            ]
        }),
        router_deprecated_1.RouteConfig([
            new router_deprecated_1.Redirect({
                path: '/',
                redirectTo: ['/PABC2017']
            }),
            {
                path: '/2017',
                name: 'PABC2017',
                component: PABC2017_component_1.PABC2017Component
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map