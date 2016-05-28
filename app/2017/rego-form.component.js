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
var common_1 = require('@angular/common');
var rego_details_component_1 = require('./rego-details.component');
var rego_questions_component_1 = require('./rego-questions.component');
var RegoForm = (function () {
    function RegoForm() {
        this.handleAuthResult = function (authResult) {
            // console.log('handleAuthResult called');
            // console.log(authResult);
            if (authResult && !authResult.error) {
            }
        };
    }
    RegoForm.prototype.ngOnInit = function () {
        var clientId = '211375455075-6m01grm5lfj1a16fa1fu1p79ijsu2gol.apps.googleusercontent.com';
        var scopes = ['https://www.googleapis.com/auth/spreadsheets'];
        // console.log('ngOnInit before authorize');
        gapi.auth.authorize({
            client_id: clientId,
            scope: scopes.join(' '),
            immediate: true
        }, this.handleAuthResult);
        // console.log('ngOnInit after authorize');
    };
    RegoForm.prototype.submit = function () {
        var dataObj = jQuery.extend({}, this.regoDetails.getData(), this.regoQuestions.getData());
        // console.log(dataObj);
        var scriptId = 'MdTKFOnjdTGILxwSp7hil4ajS52RTwfWH';
        var request = {
            'function': 'addCamper',
            'parameters': dataObj
        };
        // Make the API request.
        var op = gapi.client.request({
            'root': 'https://script.googleapis.com',
            'path': 'v1/scripts/' + scriptId + ':run',
            'method': 'POST',
            'body': request
        });
        op.execute(function (resp) {
            if (resp.error && resp.error.status) {
                console.log(resp);
            }
            else {
                alert('You have successfully registered! See you at the Penang Annual Bible Camp 2017!');
            }
        });
    };
    __decorate([
        core_1.ViewChild(rego_details_component_1.RegoDetails), 
        __metadata('design:type', Object)
    ], RegoForm.prototype, "regoDetails", void 0);
    __decorate([
        core_1.ViewChild(rego_questions_component_1.RegoQuestions), 
        __metadata('design:type', Object)
    ], RegoForm.prototype, "regoQuestions", void 0);
    RegoForm = __decorate([
        core_1.Component({
            selector: 'rego-form',
            directives: [common_1.FORM_DIRECTIVES, rego_details_component_1.RegoDetails, rego_questions_component_1.RegoQuestions],
            template: "\n    <div class=\"card left-align\">\n        <div class=\"card-content\">\n            <span class=\"card-title\">Penang Annual Bible Camp 2017 Registration Form</span>\n            \n            <div class=\"divider\"></div>\n            \n            <section class=\"row\">\n                <form class=\"col s12\" action=\"\" method=\"POST\">\n                    <rego-details></rego-details>\n                    <div class=\"divider\"></div>\n                    <rego-questions></rego-questions>\n                    <div class=\"g-recaptcha\" data-sitekey=\"6Lfk3B0TAAAAAFse8cPewXkyY0bDkduakmkGOQT6\"></div>\n                </form>\n            </section>\n        </div>\n        <div class=\"card-action right-align\">\n            <a class=\"waves-effect btn green\">Submit</a>\n        </div>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], RegoForm);
    return RegoForm;
}());
exports.RegoForm = RegoForm;
//# sourceMappingURL=rego-form.component.js.map