System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var PABC2017Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PABC2017Component = (function () {
                function PABC2017Component() {
                    this.description = "\n        Held in December each year, the Penang Annual Bible Camp (PABC)\n        has been running for over 6 decades. The PABC runs over a week\n        with many engaging activities including outdoor sports,\n        indoor sports, games, quizzes and of course, talks from the Word \n        of God! \n    ";
                }
                PABC2017Component = __decorate([
                    core_1.Component({
                        selector: 'PABC2017-component',
                        templateUrl: 'app/2017/PABC2017.component.html',
                        styleUrls: ['app/2017/PABC2017.component.css']
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