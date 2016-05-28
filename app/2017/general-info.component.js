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
var ccc_map_component_1 = require('./ccc-map.component');
var rego_form_component_1 = require('./rego-form.component');
var GeneralInfo = (function () {
    function GeneralInfo() {
        this.sections = [
            {
                'header': 'Camp Location',
                'description': "\n                Located in the heart of Batu Feringghi, the Christian Convention Centre (CCC) has been the venue\n                for the Penang Annual Bible Camp for many years. The site has 6 dormitories and 2 rooms which cater\n                to the needs of the camp attendees. To scroll on the map below, click once to enable interaction.\n            ",
                'icon': 'pin_drop',
                'extra': 'map'
            },
            {
                'header': 'Camp Duration',
                'description': "\n                The Penang Annual Bible Camp is held over a week (7 days) in early December starting on a Sunday afternoon\n                and ending on Saturday afternoon. During the duration of this camp, all campers are required to participate\n                in camp activities unless the camper has a specified medical condition. \n            ",
                'icon': 'schedule'
            },
            {
                'header': 'Camp Registration',
                'description': "\n                We would love you to join us for a week of fun, and learning about God and His Word! \n            ",
                'icon': 'edit',
                'extra': 'form'
            }
        ];
    }
    GeneralInfo = __decorate([
        core_1.Component({
            selector: 'general-info',
            directives: [ccc_map_component_1.CCCMap, rego_form_component_1.RegoForm],
            styles: ["\n    .top_level_div{\n        padding: 80px 0;\n        min-height: 480px;\n    }\n    "],
            template: "\n    <div class=\"top_level_div\">\n        <div class=\"container\">\n            <div class=\"row center-align\" *ngFor=\"let section of sections\">\n                <div class=\"col s12\">\n                    <i class=\"large material-icons\">{{ section.icon }}</i>\n                    <h4>{{ section.header }}</h4>\n                    <p>{{ section.description }}</p>\n                    <ccc-map *ngIf=\"section.extra == 'map'\"></ccc-map>\n                    <rego-form *ngIf=\"section.extra == 'form'\"></rego-form>\n                </div>\n            </div>\n        </div>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], GeneralInfo);
    return GeneralInfo;
}());
exports.GeneralInfo = GeneralInfo;
//# sourceMappingURL=general-info.component.js.map