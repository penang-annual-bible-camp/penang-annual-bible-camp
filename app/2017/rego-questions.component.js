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
var RegoQuestions = (function () {
    function RegoQuestions() {
        this.fields = ['believer', 'baptized', 'active'];
        this.questions = {
            'believer': 'Have you accepted the Lord Jesus Christ as your personal Saviour and Lord?',
            'baptized': 'Have you been baptized?',
            'active': 'Are you actively involved in any ministry(s) within your church or any Christian organization outside your church?'
        };
        this.answers = {
            'believer': false,
            'baptized': false,
            'active': false
        };
        this.years = {
            'believer': '',
            'baptized': ''
        };
        this.involvement = '';
    }
    RegoQuestions.prototype.toggle = function (field, answer) {
        this.answers[field] = answer;
    };
    RegoQuestions.prototype.getData = function () {
        var targetObj = {
            'believer_year': this.years['believer'],
            'baptized_year': this.years['baptized'],
            'involvement': this.involvement
        };
        return jQuery.extend(targetObj, this.answers);
    };
    RegoQuestions = __decorate([
        core_1.Component({
            selector: 'rego-questions',
            styles: ["\n    li {\n        margin-bottom: 12px;\n    }\n    "],
            template: "\n    <div class=\"row\">\n        <ol>\n            <li *ngFor=\"let field of fields\">\n                <p>{{ questions[field] }}</p>\n                <p>\n                    <input required class=\"with-gap\" name=\"{{ field }}-input\" type=\"radio\" id=\"{{ field }}-input-yes\" (click)=\"toggle(field, true)\" />\n                    <label [attr.for]=\"field + '-input-yes'\">Yes</label>\n                </p>\n                <p>\n                    <input required class=\"with-gap\" name=\"{{ field }}-input\" type=\"radio\" id=\"{{ field }}-input-no\" (click)=\"toggle(field, false)\" />\n                    <label [attr.for]=\"field + '-input-no'\">No</label>\n                </p>\n                <p *ngIf=\"(field == 'believer' || field == 'baptized') && answers[field]\">\n                    <input required placeholder=\"Year\" type=\"text\" [(ngModel)]=\"years[field]\">\n                </p>\n            </li>\n            <li *ngIf=\"answers['active']\">\n                <p>\n                    What is your involvement and role in your church/Christian organization?\n                </p>\n                <p>\n                    <input placeholder=\"Involvement and role\" type=\"text\" [(ngModel)]=\"involvement\">\n                </p>\n            </li>\n        </ol>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], RegoQuestions);
    return RegoQuestions;
}());
exports.RegoQuestions = RegoQuestions;
//# sourceMappingURL=rego-questions.component.js.map