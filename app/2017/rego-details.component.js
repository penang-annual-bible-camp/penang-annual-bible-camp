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
var RegoDetails = (function () {
    function RegoDetails() {
        this.detailsModel = {
            'name': '',
            'address': '',
            'ic_number': '',
            'email': '',
            'phone': '',
            'gender': '',
            'church': '',
            'skills': [],
            'instruments': '',
            'shirt_size': ''
        };
        this.shirtSizes = ['S', 'M', 'L', 'XL', 'XXL'];
    }
    RegoDetails.prototype.toggleSkills = function (skill, checked) {
        if (checked) {
            this.detailsModel['skills'].push(skill);
        }
        else {
            var index = this.detailsModel['skills'].indexOf(skill);
            if (index > -1) {
                this.detailsModel['skills'].splice(index, 1);
            }
        }
    };
    RegoDetails.prototype.getData = function () {
        var targetObj = {
            'skills': this.detailsModel['skills'].join(', ')
        };
        return jQuery.extend({}, this.detailsModel, targetObj);
    };
    RegoDetails = __decorate([
        core_1.Component({
            selector: 'rego-details',
            templateUrl: 'app/2017/rego-details.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], RegoDetails);
    return RegoDetails;
}());
exports.RegoDetails = RegoDetails;
//# sourceMappingURL=rego-details.component.js.map