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
var CCCMap = (function () {
    function CCCMap() {
        this.isDisabled = true;
    }
    CCCMap.prototype.toggleClick = function () {
        this.isDisabled = !this.isDisabled;
    };
    CCCMap = __decorate([
        core_1.Component({
            selector: 'ccc-map',
            styles: ["\n        .google_map.disabled{\n            pointer-events: none;\n        }\n    "],
            template: "\n        <div class=\"video-container\" (click)=\"toggleClick()\">\n            <iframe class=\"google_map\" [class.disabled]=\"isDisabled\"  src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d893.3072933700283!2d100.24764045537975!3d5.474187800920175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x53f070390b7405ee!2sChristian+Convention+Centre!5e0!3m2!1sen!2sau!4v1459980602325\" width=\"400\" height=\"300\" frameborder=\"0\" style=\"border:0\" allowfullscreen ></iframe>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], CCCMap);
    return CCCMap;
}());
exports.CCCMap = CCCMap;
//# sourceMappingURL=ccc-map.component.js.map