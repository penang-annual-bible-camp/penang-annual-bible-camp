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
var core_1 = require('@angular/core');
var hero_component_1 = require('./hero.component');
var general_info_component_1 = require('./general-info.component');
var footer_component_1 = require('./footer.component');
var PABC2017Component = (function () {
    function PABC2017Component() {
    }
    PABC2017Component = __decorate([
        core_1.Component({
            selector: 'PABC2017-component',
            directives: [hero_component_1.Hero, general_info_component_1.GeneralInfo, footer_component_1.SiteFooter],
            template: "\n    <main>\n        <hero></hero>\n        <general-info></general-info>\n    </main>\n    <site-footer></site-footer>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], PABC2017Component);
    return PABC2017Component;
}());
exports.PABC2017Component = PABC2017Component;
//# sourceMappingURL=PABC2017.component.js.map