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
var Hero = (function () {
    function Hero(el) {
        this.description = "\n        Held in December each year, the Penang Annual Bible Camp (PABC)\n        has been running for over 6 decades. The PABC runs over a week\n        with many engaging activities including outdoor sports,\n        indoor sports, games, quizzes and of course, talks from the Word \n        of God! Every year, campers are divided into 3 groups with names\n        that stem from the theme of the camp.\n    ";
        this.el = el;
    }
    Hero.prototype.ngAfterViewInit = function () {
        jQuery(this.el.nativeElement).find('.parallax').parallax();
    };
    Hero = __decorate([
        core_1.Component({
            selector: 'hero',
            styles: ["\n    .header_hero > *{\n        margin: 20px 0;\n    }\n\n    p.header_text{\n        font-size: 1.2em;\n    }\n\n    .parallax-container{\n        height: 100vh;\n    }\n\n    .hero_img:before{\n        content: '';\n        top: 0;\n        left: 0;\n        z-index: 10;\n        width: 100%;\n        height: 100%;\n        display: block;\n        position: absolute;\n        background: rgba(0, 59, 101, 0.4);\n    }\n    "],
            template: "\n    <div class=\"parallax-container valign-wrapper\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col s12 center-align header_hero\">\n                    <h1 class=\"white-text thin\">Penang Annual Bible Camp 2017</h1>\n                    <p class=\"white-text light header_text\">{{ description }}</p>\n                    <!--<a class=\"waves-effect btn blue\">Register</a>-->\n                </div>\n            </div>\n        </div>\n        <div class=\"parallax hero_img\">\n            <img src=\"app/2017/images/captainsball.jpg\">\n        </div>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], Hero);
    return Hero;
}());
exports.Hero = Hero;
//# sourceMappingURL=hero.component.js.map