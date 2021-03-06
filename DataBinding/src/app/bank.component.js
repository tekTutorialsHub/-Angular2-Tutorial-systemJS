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
var BankComponent = (function () {
    function BankComponent() {
        this.bankName = "XYZ Bank Ltd";
        this.count = 0;
        this.name = '';
        this.color = 'red';
    }
    BankComponent.prototype.getBankName = function () {
        return this.bankName;
    };
    BankComponent.prototype.buttonClicked = function () {
        this.count = this.count + 1;
        console.log("Button Clicked");
    };
    BankComponent = __decorate([
        core_1.Component({
            selector: 'bank-app',
            templateUrl: './src/app/bank.component.html',
            styleUrls: ['./src/app/bank.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], BankComponent);
    return BankComponent;
}());
exports.BankComponent = BankComponent;
//# sourceMappingURL=bank.component.js.map