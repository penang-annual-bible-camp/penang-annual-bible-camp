System.register(['angular2/core', './hero.component', './general-info.component', './footer.component'], function(exports_1, context_1) {
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
    var core_1, hero_component_1, general_info_component_1, footer_component_1;
    var PABC2017Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hero_component_1_1) {
                hero_component_1 = hero_component_1_1;
            },
            function (general_info_component_1_1) {
                general_info_component_1 = general_info_component_1_1;
            },
            function (footer_component_1_1) {
                footer_component_1 = footer_component_1_1;
            }],
        execute: function() {
            PABC2017Component = (function () {
                function PABC2017Component() {
                    this.handleAuthResult = function (authResult) {
                        console.log('handleAuthResult called');
                        console.log(authResult);
                        if (authResult && !authResult.error) {
                            console.log('handleAuthResult successful');
                        }
                    };
                    this.callScript = function () {
                        console.log('callScript called');
                        var scriptId = 'MdTKFOnjdTGILxwSp7hil4ajS52RTwfWH';
                        // Create an execution request object.
                        var request = {
                            'function': 'addCamper',
                            'parameters': {
                                'name': 'Kenny Kong Seong Yoon',
                                'address': '1 Something Street, Wollongong, NSW, Australia',
                                'ic': '000101-07-1936',
                                'email': 'kksy@something.com',
                                'phone': '012-163726492',
                                'gender': 'Male',
                                'church': 'Burmah Road Gospel Hall',
                                'skills': ['Music', 'First Aid'],
                                'instruments': ['Piano', 'Guitar'],
                                't_shirt_size': 'L',
                                'believer': 'Yes',
                                'believer_year': '2005',
                                'baptized': 'Yes',
                                'baptized_year': '2008',
                                'active_in_church': 'Yes',
                                'active_role': 'Description blah blah blah blah blah'
                            }
                        };
                        // Make the API request.
                        var op = gapi.client.request({
                            'root': 'https://script.googleapis.com',
                            'path': 'v1/scripts/' + scriptId + ':run',
                            'method': 'POST',
                            'body': request
                        });
                        op.execute(function (resp) {
                            console.log(resp);
                        });
                    };
                }
                PABC2017Component.prototype.ngOnInit = function () {
                    var clientId = '211375455075-6m01grm5lfj1a16fa1fu1p79ijsu2gol.apps.googleusercontent.com';
                    var scopes = ['https://www.googleapis.com/auth/spreadsheets'];
                    console.log('ngOnInit before authorize');
                    gapi.auth.authorize({
                        client_id: clientId,
                        scope: scopes.join(' '),
                        immediate: true
                    }, this.handleAuthResult);
                    console.log('ngOnInit after authorize');
                };
                PABC2017Component = __decorate([
                    core_1.Component({
                        selector: 'PABC2017-component',
                        templateUrl: 'app/2017/PABC2017.component.html',
                        styleUrls: ['app/2017/PABC2017.component.css'],
                        directives: [hero_component_1.Hero, general_info_component_1.GeneralInfo, footer_component_1.SiteFooter],
                        encapsulation: core_1.ViewEncapsulation.None
                    }), 
                    __metadata('design:paramtypes', [])
                ], PABC2017Component);
                return PABC2017Component;
            }());
            exports_1("PABC2017Component", PABC2017Component);
        }
    }
});
//# sourceMappingURL=PABC2017.component.js.map