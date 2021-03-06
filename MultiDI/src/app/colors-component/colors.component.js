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
var color_service_1 = require('../services/color.service');
var router_1 = require('@angular/router');
var ColorsComponent = (function () {
    function ColorsComponent(colorSvc, router) {
        this.colorSvc = colorSvc;
        this.router = router;
        this.title = "Colors";
        console.log("colors.component.ts");
    }
    ColorsComponent.prototype.ngOnInit = function () {
        this.getColors();
    };
    ColorsComponent.prototype.getColors = function () {
        var _this = this;
        this.colorSvc.getColors()
            .then(function (colors) { return _this.colors = colors; });
    };
    ColorsComponent.prototype.detailColor = function (id) {
        this.router.navigate(['/color', id]);
    };
    ColorsComponent = __decorate([
        core_1.Component({
            selector: 'my-color',
            templateUrl: './caolors.component.html',
            providers: [color_service_1.ColorService]
        }), 
        __metadata('design:paramtypes', [color_service_1.ColorService, router_1.Router])
    ], ColorsComponent);
    return ColorsComponent;
}());
exports.ColorsComponent = ColorsComponent;
//# sourceMappingURL=colors.component.js.map