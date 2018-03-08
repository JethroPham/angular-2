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
var language_service_1 = require('../services/language.service');
var LangComponent = (function () {
    function LangComponent(lang) {
        this.lang = lang;
        this.title = "Languages";
        console.log("language.component.ts");
    }
    LangComponent.prototype.ngOnInit = function () {
        this.getLang();
    };
    LangComponent.prototype.getLang = function () {
        var _this = this;
        this.lang.getLang()
            .then(function (languages) { return _this.languages = languages; });
    };
    LangComponent = __decorate([
        core_1.Component({
            selector: 'my-lang',
            templateUrl: './language.component.html',
            providers: [language_service_1.LanguageService]
        }), 
        __metadata('design:paramtypes', [language_service_1.LanguageService])
    ], LangComponent);
    return LangComponent;
}());
exports.LangComponent = LangComponent;
//# sourceMappingURL=language.component.js.map