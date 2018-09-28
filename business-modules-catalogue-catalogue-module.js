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
/* harmony import */ var _partner_partner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./partner/partner.component */ "./src/app/business-modules/catalogue/partner/partner.component.ts");
/* harmony import */ var _warehouse_warehouse_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./warehouse/warehouse.component */ "./src/app/business-modules/catalogue/warehouse/warehouse.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        redirectTo: 'partner',
        pathMatch: 'full'
    },
    {
        path: 'location',
        component: _location_location_component__WEBPACK_IMPORTED_MODULE_2__["LocationComponent"]
    },
    {
        path: 'partner',
        component: _partner_partner_component__WEBPACK_IMPORTED_MODULE_3__["PartnerComponent"]
    },
    {
        path: 'ware-house',
        component: _warehouse_warehouse_component__WEBPACK_IMPORTED_MODULE_4__["WarehouseComponent"]
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
/* harmony import */ var _partner_partner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./partner/partner.component */ "./src/app/business-modules/catalogue/partner/partner.component.ts");
/* harmony import */ var _location_location_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./location/location.component */ "./src/app/business-modules/catalogue/location/location.component.ts");
/* harmony import */ var _warehouse_warehouse_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./warehouse/warehouse.component */ "./src/app/business-modules/catalogue/warehouse/warehouse.component.ts");
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
            declarations: [_partner_partner_component__WEBPACK_IMPORTED_MODULE_3__["PartnerComponent"], _location_location_component__WEBPACK_IMPORTED_MODULE_4__["LocationComponent"], _warehouse_warehouse_component__WEBPACK_IMPORTED_MODULE_5__["WarehouseComponent"]],
        })
    ], CatalogueModule);
    return CatalogueModule;
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

/***/ "./src/app/business-modules/catalogue/partner/partner.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/business-modules/catalogue/partner/partner.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-content\">\r\n  <div class=\"row\">\r\n      <div class=\"col-xl-12\">\r\n          <!--begin:: m-portlet-->\r\n          <div class=\"m-portlet\">\r\n              <div class=\"m-portlet__head\">\r\n                  <div class=\"m-portlet__head-caption\">\r\n                      <div class=\"m-portlet__head-title\">\r\n                          <h3 class=\"m-portlet__head-text\">\r\n                              Partner Page\r\n                          </h3>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n              <div class=\"m-portlet__body\">\r\n                  <!--begin::Content-->\r\n                  <p>Partner page</p>\r\n                  <!--end::Content-->\r\n              </div>\r\n          </div>\r\n          <!--end:: m-portlets-->\r\n      </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/business-modules/catalogue/partner/partner.component.sass":
/*!***************************************************************************!*\
  !*** ./src/app/business-modules/catalogue/partner/partner.component.sass ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/business-modules/catalogue/partner/partner.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/business-modules/catalogue/partner/partner.component.ts ***!
  \*************************************************************************/
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
            template: __webpack_require__(/*! ./partner.component.html */ "./src/app/business-modules/catalogue/partner/partner.component.html"),
            styles: [__webpack_require__(/*! ./partner.component.sass */ "./src/app/business-modules/catalogue/partner/partner.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], PartnerComponent);
    return PartnerComponent;
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