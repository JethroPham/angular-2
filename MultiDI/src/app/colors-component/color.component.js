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
var router_1 = require('@angular/router');
require('rxjs/add/operator/switchMap');
var color_service_1 = require('../services/color.service');
var ColorComponent = (function () {
    function ColorComponent(router, colorSvc) {
        this.router = router;
        this.colorSvc = colorSvc;
    }
    ColorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params
            .switchMap(function (params) { return _this.colorSvc.getColor(+params['id']); })
            .subscribe(function (color) { return _this.color = color; });
    };
    ColorComponent = __decorate([
        core_1.Component({
            selector: 'color-id',
            templateUrl: './color.component.html',
            providers: [color_service_1.ColorService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, color_service_1.ColorService])
    ], ColorComponent);
    return ColorComponent;
}());
exports.ColorComponent = ColorComponent;
//# sourceMappingURL=color.component.js.map