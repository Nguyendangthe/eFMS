(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["business-modules-catalogue-catalogue-module"],{

/***/ "./src/app/business-modules/catalogue/catalogue-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/business-modules/catalogue/catalogue-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: CatalogueRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogueRoutingModule", function() { return CatalogueRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _location_location_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./location/location.component */ "./src/app/business-modules/catalogue/location/location.component.ts");
/* harmony import */ var _partner_data_partner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./partner-data/partner.component */ "./src/app/business-modules/catalogue/partner-data/partner.component.ts");
/* harmony import */ var _warehouse_warehouse_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./warehouse/warehouse.component */ "./src/app/business-modules/catalogue/warehouse/warehouse.component.ts");
/* harmony import */ var _charge_charge_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./charge/charge.component */ "./src/app/business-modules/catalogue/charge/charge.component.ts");
/* harmony import */ var _commodity_commodity_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./commodity/commodity.component */ "./src/app/business-modules/catalogue/commodity/commodity.component.ts");
/* harmony import */ var _port_index_port_index_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./port-index/port-index.component */ "./src/app/business-modules/catalogue/port-index/port-index.component.ts");
/* harmony import */ var _stage_management_stage_management_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./stage-management/stage-management.component */ "./src/app/business-modules/catalogue/stage-management/stage-management.component.ts");
/* harmony import */ var _unit_unit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./unit/unit.component */ "./src/app/business-modules/catalogue/unit/unit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        redirectTo: 'location',
        pathMatch: 'full'
    },
    {
        path: 'location',
        component: _location_location_component__WEBPACK_IMPORTED_MODULE_2__["LocationComponent"]
    },
    {
        path: 'ware-house',
        component: _warehouse_warehouse_component__WEBPACK_IMPORTED_MODULE_4__["WarehouseComponent"]
    },
    {
        path: 'charge',
        component: _charge_charge_component__WEBPACK_IMPORTED_MODULE_5__["ChargeComponent"]
    },
    {
        path: 'commodity',
        component: _commodity_commodity_component__WEBPACK_IMPORTED_MODULE_6__["CommodityComponent"]
    },
    {
        path: 'partner-data',
        component: _partner_data_partner_component__WEBPACK_IMPORTED_MODULE_3__["PartnerComponent"]
    },
    {
        path: 'port-index',
        component: _port_index_port_index_component__WEBPACK_IMPORTED_MODULE_7__["PortIndexComponent"]
    },
    {
        path: 'stage-management',
        component: _stage_management_stage_management_component__WEBPACK_IMPORTED_MODULE_8__["StageManagementComponent"]
    },
    {
        path: 'unit',
        component: _unit_unit_component__WEBPACK_IMPORTED_MODULE_9__["UnitComponent"]
    }
];
var CatalogueRoutingModule = /** @class */ (function () {
    function CatalogueRoutingModule() {
    }
    CatalogueRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CatalogueRoutingModule);
    return CatalogueRoutingModule;
}());



/***/ }),

/***/ "./src/app/business-modules/catalogue/catalogue.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/business-modules/catalogue/catalogue.module.ts ***!
  \****************************************************************/
/*! exports provided: CatalogueModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogueModule", function() { return CatalogueModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _catalogue_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catalogue-routing.module */ "./src/app/business-modules/catalogue/catalogue-routing.module.ts");
/* harmony import */ var _location_location_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./location/location.component */ "./src/app/business-modules/catalogue/location/location.component.ts");
/* harmony import */ var _warehouse_warehouse_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./warehouse/warehouse.component */ "./src/app/business-modules/catalogue/warehouse/warehouse.component.ts");
/* harmony import */ var _port_index_port_index_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./port-index/port-index.component */ "./src/app/business-modules/catalogue/port-index/port-index.component.ts");
/* harmony import */ var _commodity_commodity_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./commodity/commodity.component */ "./src/app/business-modules/catalogue/commodity/commodity.component.ts");
/* harmony import */ var _charge_charge_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./charge/charge.component */ "./src/app/business-modules/catalogue/charge/charge.component.ts");
/* harmony import */ var _unit_unit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./unit/unit.component */ "./src/app/business-modules/catalogue/unit/unit.component.ts");
/* harmony import */ var _stage_management_stage_management_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./stage-management/stage-management.component */ "./src/app/business-modules/catalogue/stage-management/stage-management.component.ts");
/* harmony import */ var _partner_data_partner_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./partner-data/partner.component */ "./src/app/business-modules/catalogue/partner-data/partner.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var CatalogueModule = /** @class */ (function () {
    function CatalogueModule() {
    }
    CatalogueModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _catalogue_routing_module__WEBPACK_IMPORTED_MODULE_2__["CatalogueRoutingModule"]
            ],
            declarations: [_location_location_component__WEBPACK_IMPORTED_MODULE_3__["LocationComponent"],
                _warehouse_warehouse_component__WEBPACK_IMPORTED_MODULE_4__["WarehouseComponent"],
                _port_index_port_index_component__WEBPACK_IMPORTED_MODULE_5__["PortIndexComponent"],
                _commodity_commodity_component__WEBPACK_IMPORTED_MODULE_6__["CommodityComponent"],
                _charge_charge_component__WEBPACK_IMPORTED_MODULE_7__["ChargeComponent"],
                _unit_unit_component__WEBPACK_IMPORTED_MODULE_8__["UnitComponent"],
                _stage_management_stage_management_component__WEBPACK_IMPORTED_MODULE_9__["StageManagementComponent"],
                _partner_data_partner_component__WEBPACK_IMPORTED_MODULE_10__["PartnerComponent"],
            ],
        })
    ], CatalogueModule);
    return CatalogueModule;
}());



/***/ }),

/***/ "./src/app/business-modules/catalogue/charge/charge.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/business-modules/catalogue/charge/charge.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-content\">\r\n  <div class=\"row\">\r\n      <div class=\"col-xl-12\">\r\n          <!--begin:: m-portlet-->\r\n          <div class=\"m-portlet\">\r\n              <div class=\"m-portlet__head\">\r\n                  <div class=\"m-portlet__head-caption\">\r\n                      <div class=\"m-portlet__head-title\">\r\n                          <h3 class=\"m-portlet__head-text\">\r\n                              Charge Page\r\n                          </h3>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n              <div class=\"m-portlet__body\">\r\n                  <!--begin::Content-->\r\n                  <p>Charge page</p>\r\n                  <!--end::Content-->\r\n              </div>\r\n          </div>\r\n          <!--end:: m-portlets-->\r\n      </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/business-modules/catalogue/charge/charge.component.sass":
/*!*************************************************************************!*\
  !*** ./src/app/business-modules/catalogue/charge/charge.component.sass ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/business-modules/catalogue/charge/charge.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/business-modules/catalogue/charge/charge.component.ts ***!
  \***********************************************************************/
/*! exports provided: ChargeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChargeComponent", function() { return ChargeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChargeComponent = /** @class */ (function () {
    function ChargeComponent() {
    }
    ChargeComponent.prototype.ngOnInit = function () {
    };
    ChargeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-charge',
            template: __webpack_require__(/*! ./charge.component.html */ "./src/app/business-modules/catalogue/charge/charge.component.html"),
            styles: [__webpack_require__(/*! ./charge.component.sass */ "./src/app/business-modules/catalogue/charge/charge.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], ChargeComponent);
    return ChargeComponent;
}());



/***/ }),

/***/ "./src/app/business-modules/catalogue/commodity/commodity.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/business-modules/catalogue/commodity/commodity.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-content\">\r\n  <div class=\"row\">\r\n      <div class=\"col-xl-12\">\r\n          <!--begin:: m-portlet-->\r\n          <div class=\"m-portlet\">\r\n              <div class=\"m-portlet__head\">\r\n                  <div class=\"m-portlet__head-caption\">\r\n                      <div class=\"m-portlet__head-title\">\r\n                          <h3 class=\"m-portlet__head-text\">\r\n                              Commodity Page\r\n                          </h3>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n              <div class=\"m-portlet__body\">\r\n                  <!--begin::Content-->\r\n                  <p>Commodity page</p>\r\n                  <!--end::Content-->\r\n              </div>\r\n          </div>\r\n          <!--end:: m-portlets-->\r\n      </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/business-modules/catalogue/commodity/commodity.component.sass":
/*!*******************************************************************************!*\
  !*** ./src/app/business-modules/catalogue/commodity/commodity.component.sass ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/business-modules/catalogue/commodity/commodity.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/business-modules/catalogue/commodity/commodity.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CommodityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommodityComponent", function() { return CommodityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CommodityComponent = /** @class */ (function () {
    function CommodityComponent() {
    }
    CommodityComponent.prototype.ngOnInit = function () {
    };
    CommodityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-commodity',
            template: __webpack_require__(/*! ./commodity.component.html */ "./src/app/business-modules/catalogue/commodity/commodity.component.html"),
            styles: [__webpack_require__(/*! ./commodity.component.sass */ "./src/app/business-modules/catalogue/commodity/commodity.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], CommodityComponent);
    return CommodityComponent;
}());



/***/ }),

/***/ "./src/app/business-modules/catalogue/location/location.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/business-modules/catalogue/location/location.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-content\">\r\n  <div class=\"row\">\r\n      <div class=\"col-xl-12\">\r\n          <!--begin:: m-portlet-->\r\n          <div class=\"m-portlet\">\r\n              <div class=\"m-portlet__head\">\r\n                  <div class=\"m-portlet__head-caption\">\r\n                      <div class=\"m-portlet__head-title\">\r\n                          <h3 class=\"m-portlet__head-text\">\r\n                              Location Page\r\n                          </h3>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n              <div class=\"m-portlet__body\">\r\n                  <!--begin::Content-->\r\n                  <p>Location page</p>\r\n                  <!--end::Content-->\r\n              </div>\r\n          </div>\r\n          <!--end:: m-portlets-->\r\n      </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/business-modules/catalogue/location/location.component.sass":
/*!*****************************************************************************!*\
  !*** ./src/app/business-modules/catalogue/location/location.component.sass ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/business-modules/catalogue/location/location.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/business-modules/catalogue/location/location.component.ts ***!
  \***************************************************************************/
/*! exports provided: LocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationComponent", function() { return LocationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LocationComponent = /** @class */ (function () {
    function LocationComponent() {
    }
    LocationComponent.prototype.ngOnInit = function () {
    };
    LocationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-location',
            template: __webpack_require__(/*! ./location.component.html */ "./src/app/business-modules/catalogue/location/location.component.html"),
            styles: [__webpack_require__(/*! ./location.component.sass */ "./src/app/business-modules/catalogue/location/location.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], LocationComponent);
    return LocationComponent;
}());



/***/ }),

/***/ "./src/app/business-modules/catalogue/partner-data/partner.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/business-modules/catalogue/partner-data/partner.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-subheader\">\r\n    <div class=\"d-flex align-items-center\">\r\n        <div class=\"mr-auto\">\r\n            <ul class=\"m-subheader__breadcrumbs m-nav m-nav--inline\">\r\n                <li class=\"m-nav__item\">\r\n                    <a href=\"\" class=\"m-nav__link\">\r\n                        <span class=\"m-nav__link-text\">Dashboard</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"m-nav__separator\">-</li>\r\n                <li class=\"m-nav__item\">\r\n                    <a href=\"\" class=\"m-nav__link\">\r\n                        <span class=\"m-nav__link-text\"> Catalogue</span>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n        <div class=\"m-button-action\">\r\n            <button class=\"btn btn-success m-btn--uppercase\">add new</button>\r\n            <button class=\"btn btn-primary m-btn--uppercase\" style=\"margin-left: 10px\">import</button>\r\n            <button class=\"btn btn-danger m-btn--uppercase\" style=\"margin-left: 10px\">export</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"m-content\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <ul class=\"nav nav-tabs m-tabs m-tabs-line m-tabs-line--brand m-tabs-line-danger\" role=\"tablist\">\r\n                <li class=\"nav-item m-tabs__item\">\r\n                    <a class=\"nav-link m-tabs__link active\" data-toggle=\"tab\" href=\"\" role=\"tab\">\r\n                        Customer\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item m-tabs__item\">\r\n                    <a class=\"nav-link m-tabs__link\" data-toggle=\"tab\" href=\"\" role=\"tab\">\r\n                        Agent\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item m-tabs__item\">\r\n                    <a class=\"nav-link m-tabs__link\" data-toggle=\"tab\" href=\"\" role=\"tab\">\r\n                        Carrier\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item m-tabs__item\">\r\n                    <a class=\"nav-link m-tabs__link\" data-toggle=\"tab\" href=\"\" role=\"tab\">\r\n                        Consigne\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <!--begin:: m-portlet-->\r\n            <div class=\"m-portlet\">\r\n                <div class=\"m-portlet__head\">\r\n                    <div class=\"m-portlet__head-caption\">\r\n                        <div class=\"m-portlet__head-title\">\r\n                            <h3 class=\"m-portlet__head-text\">\r\n                                Partner Data Page\r\n                            </h3>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"m-portlet__body\">\r\n                    <!--begin::Content-->\r\n                    <div class=\"m_datatable m-datatable m-datatable--default m-datatable--loaded\" id=\"local_data\" style=\"\">\r\n                        <table class=\"m-datatable__table\" style=\"display: block; min-height: 300px; overflow-x: auto;\">\r\n                            <thead class=\"m-datatable__head\">\r\n                                <tr class=\"m-datatable__row\">\r\n                                    <th data-field=\"RecordID\" class=\"m-datatable__cell--center m-datatable__cell m-datatable__cell--check\"><span\r\n                                            style=\"width: 50px;\"><label class=\"m-checkbox m-checkbox--single m-checkbox--all m-checkbox--solid m-checkbox--brand\"><input\r\n                                                    type=\"checkbox\"><span></span></label></span></th>\r\n                                    <th data-field=\"OrderID\" class=\"m-datatable__cell m-datatable__cell--sort\"><span\r\n                                            style=\"width: 110px;\">Order ID</span></th>\r\n                                    <th data-field=\"ShipName\" class=\"m-datatable__cell m-datatable__cell--sort\"><span\r\n                                            style=\"width: 110px;\">Ship Name</span></th>\r\n                                    <th data-field=\"Currency\" class=\"m-datatable__cell m-datatable__cell--sort\"><span\r\n                                            style=\"width: 100px;\">Currency</span></th>\r\n                                    <th data-field=\"ShipAddress\" class=\"m-datatable__cell m-datatable__cell--sort\"><span\r\n                                            style=\"width: 110px;\">Ship Address</span></th>\r\n                                    <th data-field=\"ShipDate\" class=\"m-datatable__cell m-datatable__cell--sort\"><span\r\n                                            style=\"width: 110px;\">Ship Date</span></th>\r\n                                    <th data-field=\"Latitude\" class=\"m-datatable__cell m-datatable__cell--sort\"><span\r\n                                            style=\"width: 110px;\">Latitude</span></th>\r\n                                    <th data-field=\"Status\" class=\"m-datatable__cell m-datatable__cell--sort\"><span\r\n                                            style=\"width: 110px;\">Status</span></th>\r\n                                    <th data-field=\"Type\" class=\"m-datatable__cell m-datatable__cell--sort\"><span style=\"width: 110px;\">Type</span></th>\r\n                                    <th data-field=\"Actions\" class=\"m-datatable__cell m-datatable__cell--sort\"><span\r\n                                            style=\"width: 110px;\">Actions</span></th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody class=\"m-datatable__body\" style=\"\">\r\n                                <tr data-row=\"0\" class=\"m-datatable__row\" style=\"left: 0px;\">\r\n                                    <td class=\"m-datatable__cell--center m-datatable__cell m-datatable__cell--check\"\r\n                                        data-field=\"RecordID\"><span style=\"width: 50px;\"><label class=\"m-checkbox m-checkbox--single m-checkbox--solid m-checkbox--brand\"><input\r\n                                                    type=\"checkbox\" value=\"1\"><span></span></label></span></td>\r\n                                    <td data-field=\"OrderID\" class=\"m-datatable__cell\"><span style=\"width: 110px;\">54473-251</span></td>\r\n                                    <td data-field=\"ShipName\" class=\"m-datatable__cell\"><span style=\"width: 110px;\">Sanford-Halvorson</span></td>\r\n                                    <td data-field=\"Currency\" class=\"m-datatable__cell\"><span style=\"width: 100px;\">GTQ</span></td>\r\n                                    <td data-field=\"ShipAddress\" class=\"m-datatable__cell\"><span style=\"width: 110px;\">897\r\n                                            Magdeline Park</span></td>\r\n                                    <td data-field=\"ShipDate\" class=\"m-datatable__cell\"><span style=\"width: 110px;\">5/21/2016</span></td>\r\n                                    <td data-field=\"Latitude\" class=\"m-datatable__cell\"><span style=\"width: 110px;\">14.78667</span></td>\r\n                                    <td data-field=\"Status\" class=\"m-datatable__cell\"><span style=\"width: 110px;\"><span\r\n                                                class=\"m-badge m-badge--brand m-badge--wide\">Pending</span></span></td>\r\n                                    <td data-field=\"Type\" class=\"m-datatable__cell\"><span style=\"width: 110px;\"><span\r\n                                                class=\"m-badge m-badge--primary m-badge--dot\"></span>&nbsp;<span class=\"m--font-bold m--font-primary\">Retail</span></span></td>\r\n                                    <td data-field=\"Actions\" class=\"m-datatable__cell\"><span style=\"overflow: visible; position: relative; width: 110px;\">\r\n                                            <div class=\"dropdown \"> <a href=\"#\" class=\"btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                                                    data-toggle=\"dropdown\"> <i class=\"la la-ellipsis-h\"></i> </a>\r\n                                                <div class=\"dropdown-menu dropdown-menu-right\"> <a class=\"dropdown-item\"\r\n                                                        href=\"#\"><i class=\"la la-edit\"></i> Edit Details</a> <a class=\"dropdown-item\"\r\n                                                        href=\"#\"><i class=\"la la-leaf\"></i> Update Status</a> <a class=\"dropdown-item\"\r\n                                                        href=\"#\"><i class=\"la la-print\"></i> Generate Report</a> </div>\r\n                                            </div> <a href=\"#\" class=\"m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                                                title=\"View \"> <i class=\"la la-edit\"></i> </a>\r\n                                        </span></td>\r\n                                </tr>\r\n                                <tr data-row=\"1\" class=\"m-datatable__row m-datatable__row--even\" style=\"left: 0px;\">\r\n                                    <td class=\"m-datatable__cell--center m-datatable__cell m-datatable__cell--check\"\r\n                                        data-field=\"RecordID\"><span style=\"width: 50px;\"><label class=\"m-checkbox m-checkbox--single m-checkbox--solid m-checkbox--brand\"><input\r\n                                                    type=\"checkbox\" value=\"2\"><span></span></label></span></td>\r\n                                    <td data-field=\"OrderID\" class=\"m-datatable__cell\"><span style=\"width: 110px;\">41250-308</span></td>\r\n                                    <td data-field=\"ShipName\" class=\"m-datatable__cell\"><span style=\"width: 110px;\">Denesik-Langosh</span></td>\r\n                                    <td data-field=\"Currency\" class=\"m-datatable__cell\"><span style=\"width: 100px;\">IDR</span></td>\r\n                                    <td data-field=\"ShipAddress\" class=\"m-datatable__cell\"><span style=\"width: 110px;\">9\r\n                                            Brickson Park Junction</span></td>\r\n                                    <td data-field=\"ShipDate\" class=\"m-datatable__cell\"><span style=\"width: 110px;\">4/19/2016</span></td>\r\n                                    <td data-field=\"Latitude\" class=\"m-datatable__cell\"><span style=\"width: 110px;\">-6.4222</span></td>\r\n                                    <td data-field=\"Status\" class=\"m-datatable__cell\"><span style=\"width: 110px;\"><span\r\n                                                class=\"m-badge m-badge--brand m-badge--wide\">Pending</span></span></td>\r\n                                    <td data-field=\"Type\" class=\"m-datatable__cell\"><span style=\"width: 110px;\"><span\r\n                                                class=\"m-badge m-badge--accent m-badge--dot\"></span>&nbsp;<span class=\"m--font-bold m--font-accent\">Direct</span></span></td>\r\n                                    <td data-field=\"Actions\" class=\"m-datatable__cell\"><span style=\"overflow: visible; position: relative; width: 110px;\">\r\n                                            <div class=\"dropdown \"> <a href=\"#\" class=\"btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                                                    data-toggle=\"dropdown\"> <i class=\"la la-ellipsis-h\"></i> </a>\r\n                                                <div class=\"dropdown-menu dropdown-menu-right\"> <a class=\"dropdown-item\"\r\n                                                        href=\"#\"><i class=\"la la-edit\"></i> Edit Details</a> <a class=\"dropdown-item\"\r\n                                                        href=\"#\"><i class=\"la la-leaf\"></i> Update Status</a> <a class=\"dropdown-item\"\r\n                                                        href=\"#\"><i class=\"la la-print\"></i> Generate Report</a> </div>\r\n                                            </div> <a href=\"#\" class=\"m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                                                title=\"View \"> <i class=\"la la-edit\"></i> </a>\r\n                                        </span></td>\r\n                                </tr>\r\n                                <tr data-row=\"2\" class=\"m-datatable__row\" style=\"left: 0px;\">\r\n                                    <td class=\"m-datatable__cell--center m-datatable__cell m-datatable__cell--check\"\r\n                                        data-field=\"RecordID\"><span style=\"width: 50px;\"><label class=\"m-checkbox m-checkbox--single m-checkbox--solid m-checkbox--brand\"><input\r\n                                                    type=\"checkbox\" value=\"3\"><span></span></label></span></td>\r\n                                    <td data-field=\"OrderID\" class=\"m-datatable__cell\"><span style=\"width: 110px;\">0615-7571</span></td>\r\n                                    <td data-field=\"ShipName\" class=\"m-datatable__cell\"><span style=\"width: 110px;\">Kunze,\r\n                                            Schneider and Cronin</span></td>\r\n                                    <td data-field=\"Currency\" class=\"m-datatable__cell\"><span style=\"width: 100px;\">HRK</span></td>\r\n                                    <td data-field=\"ShipAddress\" class=\"m-datatable__cell\"><span style=\"width: 110px;\">35712\r\n                                            Sundown Parkway</span></td>\r\n                                    <td data-field=\"ShipDate\" class=\"m-datatable__cell\"><span style=\"width: 110px;\">4/7/2016</span></td>\r\n                                    <td data-field=\"Latitude\" class=\"m-datatable__cell\"><span style=\"width: 110px;\">45.70333</span></td>\r\n                                    <td data-field=\"Status\" class=\"m-datatable__cell\"><span style=\"width: 110px;\"><span\r\n                                                class=\"m-badge  m-badge--danger m-badge--wide\">Danger</span></span></td>\r\n                                    <td data-field=\"Type\" class=\"m-datatable__cell\"><span style=\"width: 110px;\"><span\r\n                                                class=\"m-badge m-badge--accent m-badge--dot\"></span>&nbsp;<span class=\"m--font-bold m--font-accent\">Direct</span></span></td>\r\n                                    <td data-field=\"Actions\" class=\"m-datatable__cell\"><span style=\"overflow: visible; position: relative; width: 110px;\">\r\n                                            <div class=\"dropdown \"> <a href=\"#\" class=\"btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                                                    data-toggle=\"dropdown\"> <i class=\"la la-ellipsis-h\"></i> </a>\r\n                                                <div class=\"dropdown-menu dropdown-menu-right\"> <a class=\"dropdown-item\"\r\n                                                        href=\"#\"><i class=\"la la-edit\"></i> Edit Details</a> <a class=\"dropdown-item\"\r\n                                                        href=\"#\"><i class=\"la la-leaf\"></i> Update Status</a> <a class=\"dropdown-item\"\r\n                                                        href=\"#\"><i class=\"la la-print\"></i> Generate Report</a> </div>\r\n                                            </div> <a href=\"#\" class=\"m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                                                title=\"View \"> <i class=\"la la-edit\"></i> </a>\r\n                                        </span></td>\r\n                                </tr>\r\n                                <tr data-row=\"3\" class=\"m-datatable__row m-datatable__row--even\" style=\"left: 0px;\">\r\n                                    <td class=\"m-datatable__cell--center m-datatable__cell m-datatable__cell--check\"\r\n                                        data-field=\"RecordID\"><span style=\"width: 50px;\"><label class=\"m-checkbox m-checkbox--single m-checkbox--solid m-checkbox--brand\"><input\r\n                                                    type=\"checkbox\" value=\"4\"><span></span></label></span></td>\r\n                                    <td data-field=\"OrderID\" class=\"m-datatable__cell\"><span style=\"width: 110px;\">49349-551</span></td>\r\n                                    <td data-field=\"ShipName\" class=\"m-datatable__cell\"><span style=\"width: 110px;\">Jacobi-Ankunding</span></td>\r\n                                    <td data-field=\"Currency\" class=\"m-datatable__cell\"><span style=\"width: 100px;\">RUB</span></td>\r\n                                    <td data-field=\"ShipAddress\" class=\"m-datatable__cell\"><span style=\"width: 110px;\">481\r\n                                            Sage Park</span></td>\r\n                                    <td data-field=\"ShipDate\" class=\"m-datatable__cell\"><span style=\"width: 110px;\">2/15/2016</span></td>\r\n                                    <td data-field=\"Latitude\" class=\"m-datatable__cell\"><span style=\"width: 110px;\">55.64528</span></td>\r\n                                    <td data-field=\"Status\" class=\"m-datatable__cell\"><span style=\"width: 110px;\"><span\r\n                                                class=\"m-badge  m-badge--success m-badge--wide\">Success</span></span></td>\r\n                                    <td data-field=\"Type\" class=\"m-datatable__cell\"><span style=\"width: 110px;\"><span\r\n                                                class=\"m-badge m-badge--primary m-badge--dot\"></span>&nbsp;<span class=\"m--font-bold m--font-primary\">Retail</span></span></td>\r\n                                    <td data-field=\"Actions\" class=\"m-datatable__cell\"><span style=\"overflow: visible; position: relative; width: 110px;\">\r\n                                            <div class=\"dropdown \"> <a href=\"#\" class=\"btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                                                    data-toggle=\"dropdown\"> <i class=\"la la-ellipsis-h\"></i> </a>\r\n                                                <div class=\"dropdown-menu dropdown-menu-right\"> <a class=\"dropdown-item\"\r\n                                                        href=\"#\"><i class=\"la la-edit\"></i> Edit Details</a> <a class=\"dropdown-item\"\r\n                                                        href=\"#\"><i class=\"la la-leaf\"></i> Update Status</a> <a class=\"dropdown-item\"\r\n                                                        href=\"#\"><i class=\"la la-print\"></i> Generate Report</a> </div>\r\n                                            </div> <a href=\"#\" class=\"m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                                                title=\"View \"> <i class=\"la la-edit\"></i> </a>\r\n                                        </span></td>\r\n                                </tr>\r\n                                <tr data-row=\"4\" class=\"m-datatable__row\" style=\"left: 0px;\">\r\n                                    <td class=\"m-datatable__cell--center m-datatable__cell m-datatable__cell--check\"\r\n                                        data-field=\"RecordID\"><span style=\"width: 50px;\"><label class=\"m-checkbox m-checkbox--single m-checkbox--solid m-checkbox--brand\"><input\r\n                                                    type=\"checkbox\" value=\"5\"><span></span></label></span></td>\r\n                                    <td data-field=\"OrderID\" class=\"m-datatable__cell\"><span style=\"width: 110px;\">59779-750</span></td>\r\n                                    <td data-field=\"ShipName\" class=\"m-datatable__cell\"><span style=\"width: 110px;\">Johns-Kunze</span></td>\r\n                                    <td data-field=\"Currency\" class=\"m-datatable__cell\"><span style=\"width: 100px;\">IDR</span></td>\r\n                                    <td data-field=\"ShipAddress\" class=\"m-datatable__cell\"><span style=\"width: 110px;\">59\r\n                                            Marcy Hill</span></td>\r\n                                    <td data-field=\"ShipDate\" class=\"m-datatable__cell\"><span style=\"width: 110px;\">1/30/2017</span></td>\r\n                                    <td data-field=\"Latitude\" class=\"m-datatable__cell\"><span style=\"width: 110px;\">-8.6909</span></td>\r\n                                    <td data-field=\"Status\" class=\"m-datatable__cell\"><span style=\"width: 110px;\"><span\r\n                                                class=\"m-badge  m-badge--success m-badge--wide\">Success</span></span></td>\r\n                                    <td data-field=\"Type\" class=\"m-datatable__cell\"><span style=\"width: 110px;\"><span\r\n                                                class=\"m-badge m-badge--accent m-badge--dot\"></span>&nbsp;<span class=\"m--font-bold m--font-accent\">Direct</span></span></td>\r\n                                    <td data-field=\"Actions\" class=\"m-datatable__cell\"><span style=\"overflow: visible; position: relative; width: 110px;\">\r\n                                            <div class=\"dropdown \"> <a href=\"#\" class=\"btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                                                    data-toggle=\"dropdown\"> <i class=\"la la-ellipsis-h\"></i> </a>\r\n                                                <div class=\"dropdown-menu dropdown-menu-right\"> <a class=\"dropdown-item\"\r\n                                                        href=\"#\"><i class=\"la la-edit\"></i> Edit Details</a> <a class=\"dropdown-item\"\r\n                                                        href=\"#\"><i class=\"la la-leaf\"></i> Update Status</a> <a class=\"dropdown-item\"\r\n                                                        href=\"#\"><i class=\"la la-print\"></i> Generate Report</a> </div>\r\n                                            </div> <a href=\"#\" class=\"m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                                                title=\"View \"> <i class=\"la la-edit\"></i> </a>\r\n                                        </span></td>\r\n                                </tr>\r\n                                <tr data-row=\"5\" class=\"m-datatable__row m-datatable__row--even\" style=\"left: 0px;\">\r\n                                    <td class=\"m-datatable__cell--center m-datatable__cell m-datatable__cell--check\"\r\n                                        data-field=\"RecordID\"><span style=\"width: 50px;\"><label class=\"m-checkbox m-checkbox--single m-checkbox--solid m-checkbox--brand\"><input\r\n                                                    type=\"checkbox\" value=\"6\"><span></span></label></span></td>\r\n                                    <td data-field=\"OrderID\" class=\"m-datatable__cell\"><span style=\"width: 110px;\">63777-145</span></td>\r\n                                    <td data-field=\"ShipName\" class=\"m-datatable__cell\"><span style=\"width: 110px;\">Kris,\r\n                                            Keeling and Weimann</span></td>\r\n                                    <td data-field=\"Currency\" class=\"m-datatable__cell\"><span style=\"width: 100px;\">CNY</span></td>\r\n                                    <td data-field=\"ShipAddress\" class=\"m-datatable__cell\"><span style=\"width: 110px;\">122\r\n                                            Evergreen Street</span></td>\r\n                                    <td data-field=\"ShipDate\" class=\"m-datatable__cell\"><span style=\"width: 110px;\">10/22/2016</span></td>\r\n                                    <td data-field=\"Latitude\" class=\"m-datatable__cell\"><span style=\"width: 110px;\">42.53306</span></td>\r\n                                    <td data-field=\"Status\" class=\"m-datatable__cell\"><span style=\"width: 110px;\"><span\r\n                                                class=\"m-badge  m-badge--primary m-badge--wide\">Canceled</span></span></td>\r\n                                    <td data-field=\"Type\" class=\"m-datatable__cell\"><span style=\"width: 110px;\"><span\r\n                                                class=\"m-badge m-badge--accent m-badge--dot\"></span>&nbsp;<span class=\"m--font-bold m--font-accent\">Direct</span></span></td>\r\n                                    <td data-field=\"Actions\" class=\"m-datatable__cell\"><span style=\"overflow: visible; position: relative; width: 110px;\">\r\n                                            <div class=\"dropdown \"> <a href=\"#\" class=\"btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                                                    data-toggle=\"dropdown\"> <i class=\"la la-ellipsis-h\"></i> </a>\r\n                                                <div class=\"dropdown-menu dropdown-menu-right\"> <a class=\"dropdown-item\"\r\n                                                        href=\"#\"><i class=\"la la-edit\"></i> Edit Details</a> <a class=\"dropdown-item\"\r\n                                                        href=\"#\"><i class=\"la la-leaf\"></i> Update Status</a> <a class=\"dropdown-item\"\r\n                                                        href=\"#\"><i class=\"la la-print\"></i> Generate Report</a> </div>\r\n                                            </div> <a href=\"#\" class=\"m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                                                title=\"View \"> <i class=\"la la-edit\"></i> </a>\r\n                                        </span></td>\r\n                                </tr>\r\n                                <tr data-row=\"6\" class=\"m-datatable__row\" style=\"left: 0px;\">\r\n                                    <td class=\"m-datatable__cell--center m-datatable__cell m-datatable__cell--check\"\r\n                                        data-field=\"RecordID\"><span style=\"width: 50px;\"><label class=\"m-checkbox m-checkbox--single m-checkbox--solid m-checkbox--brand\"><input\r\n                                                    type=\"checkbox\" value=\"7\"><span></span></label></span></td>\r\n                                    <td data-field=\"OrderID\" class=\"m-datatable__cell\"><span style=\"width: 110px;\">57520-0136</span></td>\r\n                                    <td data-field=\"ShipName\" class=\"m-datatable__cell\"><span style=\"width: 110px;\">Effertz\r\n                                            Inc</span></td>\r\n                                    <td data-field=\"Currency\" class=\"m-datatable__cell\"><span style=\"width: 100px;\">EUR</span></td>\r\n                                    <td data-field=\"ShipAddress\" class=\"m-datatable__cell\"><span style=\"width: 110px;\">328\r\n                                            8th Avenue</span></td>\r\n                                    <td data-field=\"ShipDate\" class=\"m-datatable__cell\"><span style=\"width: 110px;\">9/3/2016</span></td>\r\n                                    <td data-field=\"Latitude\" class=\"m-datatable__cell\"><span style=\"width: 110px;\">40.59814</span></td>\r\n                                    <td data-field=\"Status\" class=\"m-datatable__cell\"><span style=\"width: 110px;\"><span\r\n                                                class=\"m-badge  m-badge--success m-badge--wide\">Success</span></span></td>\r\n                                    <td data-field=\"Type\" class=\"m-datatable__cell\"><span style=\"width: 110px;\"><span\r\n                                                class=\"m-badge m-badge--danger m-badge--dot\"></span>&nbsp;<span class=\"m--font-bold m--font-danger\">Online</span></span></td>\r\n                                    <td data-field=\"Actions\" class=\"m-datatable__cell\"><span style=\"overflow: visible; position: relative; width: 110px;\">\r\n                                            <div class=\"dropdown dropup\"> <a href=\"#\" class=\"btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                                                    data-toggle=\"dropdown\"> <i class=\"la la-ellipsis-h\"></i> </a>\r\n                                                <div class=\"dropdown-menu dropdown-menu-right\"> <a class=\"dropdown-item\"\r\n                                                        href=\"#\"><i class=\"la la-edit\"></i> Edit Details</a> <a class=\"dropdown-item\"\r\n                                                        href=\"#\"><i class=\"la la-leaf\"></i> Update Status</a> <a class=\"dropdown-item\"\r\n                                                        href=\"#\"><i class=\"la la-print\"></i> Generate Report</a> </div>\r\n                                            </div> <a href=\"#\" class=\"m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                                                title=\"View \"> <i class=\"la la-edit\"></i> </a>\r\n                                        </span></td>\r\n                                </tr>\r\n                                <tr data-row=\"7\" class=\"m-datatable__row m-datatable__row--even\" style=\"left: 0px;\">\r\n                                    <td class=\"m-datatable__cell--center m-datatable__cell m-datatable__cell--check\"\r\n                                        data-field=\"RecordID\"><span style=\"width: 50px;\"><label class=\"m-checkbox m-checkbox--single m-checkbox--solid m-checkbox--brand\"><input\r\n                                                    type=\"checkbox\" value=\"8\"><span></span></label></span></td>\r\n                                    <td data-field=\"OrderID\" class=\"m-datatable__cell\"><span style=\"width: 110px;\">0093-5200</span></td>\r\n                                    <td data-field=\"ShipName\" class=\"m-datatable__cell\"><span style=\"width: 110px;\">West-Ullrich</span></td>\r\n                                    <td data-field=\"Currency\" class=\"m-datatable__cell\"><span style=\"width: 100px;\">SEK</span></td>\r\n                                    <td data-field=\"ShipAddress\" class=\"m-datatable__cell\"><span style=\"width: 110px;\">48\r\n                                            Sommers Junction</span></td>\r\n                                    <td data-field=\"ShipDate\" class=\"m-datatable__cell\"><span style=\"width: 110px;\">2/10/2016</span></td>\r\n                                    <td data-field=\"Latitude\" class=\"m-datatable__cell\"><span style=\"width: 110px;\">59.514</span></td>\r\n                                    <td data-field=\"Status\" class=\"m-datatable__cell\"><span style=\"width: 110px;\"><span\r\n                                                class=\"m-badge  m-badge--metal m-badge--wide\">Delivered</span></span></td>\r\n                                    <td data-field=\"Type\" class=\"m-datatable__cell\"><span style=\"width: 110px;\"><span\r\n                                                class=\"m-badge m-badge--accent m-badge--dot\"></span>&nbsp;<span class=\"m--font-bold m--font-accent\">Direct</span></span></td>\r\n                                    <td data-field=\"Actions\" class=\"m-datatable__cell\"><span style=\"overflow: visible; position: relative; width: 110px;\">\r\n                                            <div class=\"dropdown dropup\"> <a href=\"#\" class=\"btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                                                    data-toggle=\"dropdown\"> <i class=\"la la-ellipsis-h\"></i> </a>\r\n                                                <div class=\"dropdown-menu dropdown-menu-right\"> <a class=\"dropdown-item\"\r\n                                                        href=\"#\"><i class=\"la la-edit\"></i> Edit Details</a> <a class=\"dropdown-item\"\r\n                                                        href=\"#\"><i class=\"la la-leaf\"></i> Update Status</a> <a class=\"dropdown-item\"\r\n                                                        href=\"#\"><i class=\"la la-print\"></i> Generate Report</a> </div>\r\n                                            </div> <a href=\"#\" class=\"m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                                                title=\"View \"> <i class=\"la la-edit\"></i> </a>\r\n                                        </span></td>\r\n                                </tr>\r\n                                <tr data-row=\"8\" class=\"m-datatable__row\" style=\"left: 0px;\">\r\n                                    <td class=\"m-datatable__cell--center m-datatable__cell m-datatable__cell--check\"\r\n                                        data-field=\"RecordID\"><span style=\"width: 50px;\"><label class=\"m-checkbox m-checkbox--single m-checkbox--solid m-checkbox--brand\"><input\r\n                                                    type=\"checkbox\" value=\"9\"><span></span></label></span></td>\r\n                                    <td data-field=\"OrderID\" class=\"m-datatable__cell\"><span style=\"width: 110px;\">14783-319</span></td>\r\n                                    <td data-field=\"ShipName\" class=\"m-datatable__cell\"><span style=\"width: 110px;\">Stiedemann-Kemmer</span></td>\r\n                                    <td data-field=\"Currency\" class=\"m-datatable__cell\"><span style=\"width: 100px;\">IDR</span></td>\r\n                                    <td data-field=\"ShipAddress\" class=\"m-datatable__cell\"><span style=\"width: 110px;\">10625\r\n                                            Dixon Road</span></td>\r\n                                    <td data-field=\"ShipDate\" class=\"m-datatable__cell\"><span style=\"width: 110px;\">11/11/2016</span></td>\r\n                                    <td data-field=\"Latitude\" class=\"m-datatable__cell\"><span style=\"width: 110px;\">-8.2137</span></td>\r\n                                    <td data-field=\"Status\" class=\"m-datatable__cell\"><span style=\"width: 110px;\"><span\r\n                                                class=\"m-badge  m-badge--metal m-badge--wide\">Delivered</span></span></td>\r\n                                    <td data-field=\"Type\" class=\"m-datatable__cell\"><span style=\"width: 110px;\"><span\r\n                                                class=\"m-badge m-badge--accent m-badge--dot\"></span>&nbsp;<span class=\"m--font-bold m--font-accent\">Direct</span></span></td>\r\n                                    <td data-field=\"Actions\" class=\"m-datatable__cell\"><span style=\"overflow: visible; position: relative; width: 110px;\">\r\n                                            <div class=\"dropdown dropup\"> <a href=\"#\" class=\"btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                                                    data-toggle=\"dropdown\"> <i class=\"la la-ellipsis-h\"></i> </a>\r\n                                                <div class=\"dropdown-menu dropdown-menu-right\"> <a class=\"dropdown-item\"\r\n                                                        href=\"#\"><i class=\"la la-edit\"></i> Edit Details</a> <a class=\"dropdown-item\"\r\n                                                        href=\"#\"><i class=\"la la-leaf\"></i> Update Status</a> <a class=\"dropdown-item\"\r\n                                                        href=\"#\"><i class=\"la la-print\"></i> Generate Report</a> </div>\r\n                                            </div> <a href=\"#\" class=\"m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                                                title=\"View \"> <i class=\"la la-edit\"></i> </a>\r\n                                        </span></td>\r\n                                </tr>\r\n                                <tr data-row=\"9\" class=\"m-datatable__row m-datatable__row--even\" style=\"left: 0px;\">\r\n                                    <td class=\"m-datatable__cell--center m-datatable__cell m-datatable__cell--check\"\r\n                                        data-field=\"RecordID\"><span style=\"width: 50px;\"><label class=\"m-checkbox m-checkbox--single m-checkbox--solid m-checkbox--brand\"><input\r\n                                                    type=\"checkbox\" value=\"10\"><span></span></label></span></td>\r\n                                    <td data-field=\"OrderID\" class=\"m-datatable__cell\"><span style=\"width: 110px;\">59011-454</span></td>\r\n                                    <td data-field=\"ShipName\" class=\"m-datatable__cell\"><span style=\"width: 110px;\">Daniel-Feest</span></td>\r\n                                    <td data-field=\"Currency\" class=\"m-datatable__cell\"><span style=\"width: 100px;\">COP</span></td>\r\n                                    <td data-field=\"ShipAddress\" class=\"m-datatable__cell\"><span style=\"width: 110px;\">48004\r\n                                            Mariners Cove Circle</span></td>\r\n                                    <td data-field=\"ShipDate\" class=\"m-datatable__cell\"><span style=\"width: 110px;\">12/15/2016</span></td>\r\n                                    <td data-field=\"Latitude\" class=\"m-datatable__cell\"><span style=\"width: 110px;\">4.6375</span></td>\r\n                                    <td data-field=\"Status\" class=\"m-datatable__cell\"><span style=\"width: 110px;\"><span\r\n                                                class=\"m-badge  m-badge--danger m-badge--wide\">Danger</span></span></td>\r\n                                    <td data-field=\"Type\" class=\"m-datatable__cell\"><span style=\"width: 110px;\"><span\r\n                                                class=\"m-badge m-badge--primary m-badge--dot\"></span>&nbsp;<span class=\"m--font-bold m--font-primary\">Retail</span></span></td>\r\n                                    <td data-field=\"Actions\" class=\"m-datatable__cell\"><span style=\"overflow: visible; position: relative; width: 110px;\">\r\n                                            <div class=\"dropdown dropup\"> <a href=\"#\" class=\"btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                                                    data-toggle=\"dropdown\"> <i class=\"la la-ellipsis-h\"></i> </a>\r\n                                                <div class=\"dropdown-menu dropdown-menu-right\"> <a class=\"dropdown-item\"\r\n                                                        href=\"#\"><i class=\"la la-edit\"></i> Edit Details</a> <a class=\"dropdown-item\"\r\n                                                        href=\"#\"><i class=\"la la-leaf\"></i> Update Status</a> <a class=\"dropdown-item\"\r\n                                                        href=\"#\"><i class=\"la la-print\"></i> Generate Report</a> </div>\r\n                                            </div> <a href=\"#\" class=\"m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill\"\r\n                                                title=\"View \"> <i class=\"la la-edit\"></i> </a>\r\n                                        </span></td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                        <div class=\"m-datatable__pager m-datatable--paging-loaded clearfix\">\r\n                            <ul class=\"m-datatable__pager-nav\">\r\n                                <li><a title=\"First\" class=\"m-datatable__pager-link m-datatable__pager-link--first m-datatable__pager-link--disabled\"\r\n                                        data-page=\"1\" disabled=\"disabled\"><i class=\"la la-angle-double-left\"></i></a></li>\r\n                                <li><a title=\"Previous\" class=\"m-datatable__pager-link m-datatable__pager-link--prev m-datatable__pager-link--disabled\"\r\n                                        data-page=\"1\" disabled=\"disabled\"><i class=\"la la-angle-left\"></i></a></li>\r\n                                <li style=\"display: none;\"><a title=\"More pages\" class=\"m-datatable__pager-link m-datatable__pager-link--more-prev\"\r\n                                        data-page=\"1\"><i class=\"la la-ellipsis-h\"></i></a></li>\r\n                                <li style=\"display: none;\"><input type=\"text\" class=\"m-pager-input form-control\" title=\"Page number\"></li>\r\n                                <li><a class=\"m-datatable__pager-link m-datatable__pager-link-number m-datatable__pager-link--active\"\r\n                                        data-page=\"1\" title=\"1\">1</a></li>\r\n                                <li><a class=\"m-datatable__pager-link m-datatable__pager-link-number\" data-page=\"2\"\r\n                                        title=\"2\">2</a></li>\r\n                                <li><a class=\"m-datatable__pager-link m-datatable__pager-link-number\" data-page=\"3\"\r\n                                        title=\"3\">3</a></li>\r\n                                <li><a class=\"m-datatable__pager-link m-datatable__pager-link-number\" data-page=\"4\"\r\n                                        title=\"4\">4</a></li>\r\n                                <li><a class=\"m-datatable__pager-link m-datatable__pager-link-number\" data-page=\"5\"\r\n                                        title=\"5\">5</a></li>\r\n                                <li><a class=\"m-datatable__pager-link m-datatable__pager-link-number\" data-page=\"6\"\r\n                                        title=\"6\">6</a></li>\r\n                                <li><a title=\"More pages\" class=\"m-datatable__pager-link m-datatable__pager-link--more-next\"\r\n                                        data-page=\"7\"><i class=\"la la-ellipsis-h\"></i></a></li>\r\n                                <li><a title=\"Next\" class=\"m-datatable__pager-link m-datatable__pager-link--next\"\r\n                                        data-page=\"2\"><i class=\"la la-angle-right\"></i></a></li>\r\n                                <li><a title=\"Last\" class=\"m-datatable__pager-link m-datatable__pager-link--last\"\r\n                                        data-page=\"10\"><i class=\"la la-angle-double-right\"></i></a></li>\r\n                            </ul>\r\n                            <div class=\"m-datatable__pager-info\">\r\n                                <div class=\"dropdown bootstrap-select m-datatable__pager-size\" style=\"width: 70px;\"><select\r\n                                        class=\"selectpicker m-datatable__pager-size\" title=\"Select page size\"\r\n                                        data-width=\"70px\" data-selected=\"10\" tabindex=\"-98\">\r\n                                        <option class=\"bs-title-option\" value=\"\">Select page size</option>\r\n                                        <option value=\"10\">10</option>\r\n                                        <option value=\"20\">20</option>\r\n                                        <option value=\"30\">30</option>\r\n                                        <option value=\"50\">50</option>\r\n                                        <option value=\"100\">100</option>\r\n                                    </select><button type=\"button\" class=\"btn dropdown-toggle btn-light\" data-toggle=\"dropdown\"\r\n                                        role=\"button\" title=\"Select page size\">\r\n                                        <div class=\"filter-option\">\r\n                                            <div class=\"filter-option-inner\">10</div>\r\n                                        </div>&nbsp;<span class=\"bs-caret\"><span class=\"caret\"></span></span>\r\n                                    </button>\r\n                                    <div class=\"dropdown-menu \" role=\"combobox\">\r\n                                        <div class=\"inner show\" role=\"listbox\" aria-expanded=\"false\" tabindex=\"-1\">\r\n                                            <ul class=\"dropdown-menu inner show\"></ul>\r\n                                        </div>\r\n                                    </div>\r\n                                </div><span class=\"m-datatable__pager-detail\">Displaying 1 - 10 of 100 records</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!--end::Content-->\r\n                </div>\r\n            </div>\r\n            <!--end:: m-portlets-->\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/business-modules/catalogue/partner-data/partner.component.sass":
/*!********************************************************************************!*\
  !*** ./src/app/business-modules/catalogue/partner-data/partner.component.sass ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/business-modules/catalogue/partner-data/partner.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/business-modules/catalogue/partner-data/partner.component.ts ***!
  \******************************************************************************/
/*! exports provided: PartnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnerComponent", function() { return PartnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PartnerComponent = /** @class */ (function () {
    function PartnerComponent() {
    }
    PartnerComponent.prototype.ngOnInit = function () {
    };
    PartnerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-partner',
            template: __webpack_require__(/*! ./partner.component.html */ "./src/app/business-modules/catalogue/partner-data/partner.component.html"),
            styles: [__webpack_require__(/*! ./partner.component.sass */ "./src/app/business-modules/catalogue/partner-data/partner.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], PartnerComponent);
    return PartnerComponent;
}());



/***/ }),

/***/ "./src/app/business-modules/catalogue/port-index/port-index.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/business-modules/catalogue/port-index/port-index.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-content\">\r\n  <div class=\"row\">\r\n      <div class=\"col-xl-12\">\r\n          <!--begin:: m-portlet-->\r\n          <div class=\"m-portlet\">\r\n              <div class=\"m-portlet__head\">\r\n                  <div class=\"m-portlet__head-caption\">\r\n                      <div class=\"m-portlet__head-title\">\r\n                          <h3 class=\"m-portlet__head-text\">\r\n                              Port Index Page\r\n                          </h3>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n              <div class=\"m-portlet__body\">\r\n                  <!--begin::Content-->\r\n                  <p>Port Index Page</p>\r\n                  <!--end::Content-->\r\n              </div>\r\n          </div>\r\n          <!--end:: m-portlets-->\r\n      </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/business-modules/catalogue/port-index/port-index.component.sass":
/*!*********************************************************************************!*\
  !*** ./src/app/business-modules/catalogue/port-index/port-index.component.sass ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/business-modules/catalogue/port-index/port-index.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/business-modules/catalogue/port-index/port-index.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PortIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortIndexComponent", function() { return PortIndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortIndexComponent = /** @class */ (function () {
    function PortIndexComponent() {
    }
    PortIndexComponent.prototype.ngOnInit = function () {
    };
    PortIndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-port-index',
            template: __webpack_require__(/*! ./port-index.component.html */ "./src/app/business-modules/catalogue/port-index/port-index.component.html"),
            styles: [__webpack_require__(/*! ./port-index.component.sass */ "./src/app/business-modules/catalogue/port-index/port-index.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], PortIndexComponent);
    return PortIndexComponent;
}());



/***/ }),

/***/ "./src/app/business-modules/catalogue/stage-management/stage-management.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/business-modules/catalogue/stage-management/stage-management.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-content\">\r\n  <div class=\"row\">\r\n      <div class=\"col-xl-12\">\r\n          <!--begin:: m-portlet-->\r\n          <div class=\"m-portlet\">\r\n              <div class=\"m-portlet__head\">\r\n                  <div class=\"m-portlet__head-caption\">\r\n                      <div class=\"m-portlet__head-title\">\r\n                          <h3 class=\"m-portlet__head-text\">\r\n                              Stage Management Page\r\n                          </h3>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n              <div class=\"m-portlet__body\">\r\n                  <!--begin::Content-->\r\n                  <p>Stage Management Page</p>\r\n                  <!--end::Content-->\r\n              </div>\r\n          </div>\r\n          <!--end:: m-portlets-->\r\n      </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/business-modules/catalogue/stage-management/stage-management.component.sass":
/*!*********************************************************************************************!*\
  !*** ./src/app/business-modules/catalogue/stage-management/stage-management.component.sass ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/business-modules/catalogue/stage-management/stage-management.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/business-modules/catalogue/stage-management/stage-management.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: StageManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StageManagementComponent", function() { return StageManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StageManagementComponent = /** @class */ (function () {
    function StageManagementComponent() {
    }
    StageManagementComponent.prototype.ngOnInit = function () {
    };
    StageManagementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stage-management',
            template: __webpack_require__(/*! ./stage-management.component.html */ "./src/app/business-modules/catalogue/stage-management/stage-management.component.html"),
            styles: [__webpack_require__(/*! ./stage-management.component.sass */ "./src/app/business-modules/catalogue/stage-management/stage-management.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], StageManagementComponent);
    return StageManagementComponent;
}());



/***/ }),

/***/ "./src/app/business-modules/catalogue/unit/unit.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/business-modules/catalogue/unit/unit.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-content\">\r\n  <div class=\"row\">\r\n      <div class=\"col-xl-12\">\r\n          <!--begin:: m-portlet-->\r\n          <div class=\"m-portlet\">\r\n              <div class=\"m-portlet__head\">\r\n                  <div class=\"m-portlet__head-caption\">\r\n                      <div class=\"m-portlet__head-title\">\r\n                          <h3 class=\"m-portlet__head-text\">\r\n                              Unit Page\r\n                          </h3>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n              <div class=\"m-portlet__body\">\r\n                  <!--begin::Content-->\r\n                  <p>Unit page</p>\r\n                  <!--end::Content-->\r\n              </div>\r\n          </div>\r\n          <!--end:: m-portlets-->\r\n      </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/business-modules/catalogue/unit/unit.component.sass":
/*!*********************************************************************!*\
  !*** ./src/app/business-modules/catalogue/unit/unit.component.sass ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/business-modules/catalogue/unit/unit.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/business-modules/catalogue/unit/unit.component.ts ***!
  \*******************************************************************/
/*! exports provided: UnitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitComponent", function() { return UnitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UnitComponent = /** @class */ (function () {
    function UnitComponent() {
    }
    UnitComponent.prototype.ngOnInit = function () {
    };
    UnitComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-unit',
            template: __webpack_require__(/*! ./unit.component.html */ "./src/app/business-modules/catalogue/unit/unit.component.html"),
            styles: [__webpack_require__(/*! ./unit.component.sass */ "./src/app/business-modules/catalogue/unit/unit.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], UnitComponent);
    return UnitComponent;
}());



/***/ }),

/***/ "./src/app/business-modules/catalogue/warehouse/warehouse.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/business-modules/catalogue/warehouse/warehouse.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-content\">\r\n  <div class=\"row\">\r\n      <div class=\"col-xl-12\">\r\n          <!--begin:: m-portlet-->\r\n          <div class=\"m-portlet\">\r\n              <div class=\"m-portlet__head\">\r\n                  <div class=\"m-portlet__head-caption\">\r\n                      <div class=\"m-portlet__head-title\">\r\n                          <h3 class=\"m-portlet__head-text\">\r\n                              Warehouse Page\r\n                          </h3>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n              <div class=\"m-portlet__body\">\r\n                  <!--begin::Content-->\r\n                  <p>Warehouse page</p>\r\n                  <!--end::Content-->\r\n              </div>\r\n          </div>\r\n          <!--end:: m-portlets-->\r\n      </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/business-modules/catalogue/warehouse/warehouse.component.sass":
/*!*******************************************************************************!*\
  !*** ./src/app/business-modules/catalogue/warehouse/warehouse.component.sass ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/business-modules/catalogue/warehouse/warehouse.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/business-modules/catalogue/warehouse/warehouse.component.ts ***!
  \*****************************************************************************/
/*! exports provided: WarehouseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseComponent", function() { return WarehouseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WarehouseComponent = /** @class */ (function () {
    function WarehouseComponent() {
    }
    WarehouseComponent.prototype.ngOnInit = function () {
    };
    WarehouseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-warehouse',
            template: __webpack_require__(/*! ./warehouse.component.html */ "./src/app/business-modules/catalogue/warehouse/warehouse.component.html"),
            styles: [__webpack_require__(/*! ./warehouse.component.sass */ "./src/app/business-modules/catalogue/warehouse/warehouse.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], WarehouseComponent);
    return WarehouseComponent;
}());



/***/ })

}]);
//# sourceMappingURL=business-modules-catalogue-catalogue-module.js.map