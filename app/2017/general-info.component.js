System.register(['angular2/core', './ccc-map.component', './rego-form.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, ccc_map_component_1, rego_form_component_1;
    var GeneralInfo;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ccc_map_component_1_1) {
                ccc_map_component_1 = ccc_map_component_1_1;
            },
            function (rego_form_component_1_1) {
                rego_form_component_1 = rego_form_component_1_1;
            }],
        execute: function() {
            GeneralInfo = (function () {
                function GeneralInfo() {
                    this.sections = [
                        {
                            'header': 'Camp Location',
                            'description': "\n                Located in the heart of Batu Feringghi, the Christian Convention Centre (CCC) has been the venue\n                for the Penang Annual Bible Camp for many years. The site has 6 dormitories and 2 rooms which cater\n                to the needs of the camp attendees.\n            ",
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
                        templateUrl: 'app/2017/general-info.component.html',
                        directives: [ccc_map_component_1.CCCMap, rego_form_component_1.RegoForm]
                    }), 
                    __metadata('design:paramtypes', [])
                ], GeneralInfo);
                return GeneralInfo;
            }());
            exports_1("GeneralInfo", GeneralInfo);
        }
    }
});
//# sourceMappingURL=general-info.component.js.map