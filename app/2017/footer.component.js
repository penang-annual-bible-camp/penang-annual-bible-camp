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
var SiteFooter = (function () {
    function SiteFooter() {
        this.relatedLinks = [
            {
                'name': 'Penang Assemblies Partnership',
                'url': 'http://penang-assemblies.org/'
            },
            {
                'name': 'More on Christian Convention Centre',
                'url': 'http://brgh.penang-assemblies.org/?page_id=401'
            }
        ];
    }
    SiteFooter = __decorate([
        core_1.Component({
            selector: 'site-footer',
            template: "\n    <footer class=\"page-footer teal lighten-1\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col l6 s12\">\n                    <h5 class=\"white-text\">Related Links</h5>\n                    <ul>\n                        <li *ngFor=\"let link of relatedLinks\">\n                            <a class=\"grey-text text-lighten-3\" href=\"{{ link.url }}\" target=\"_blank\">{{ link.name }}</a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <div class=\"footer-copyright\">\n            <div class=\"container\">\n            \u00A9 2016 Michael Kong Yue Meng\n            </div>\n        </div>\n    </footer>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], SiteFooter);
    return SiteFooter;
}());
exports.SiteFooter = SiteFooter;
//# sourceMappingURL=footer.component.js.map