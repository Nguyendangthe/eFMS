(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./business-modules/accounting/accounting.module": [
		"./src/app/business-modules/accounting/accounting.module.ts",
		"business-modules-accounting-accounting-module"
	],
	"./business-modules/catalogue/catalogue.module": [
		"./src/app/business-modules/catalogue/catalogue.module.ts",
		"business-modules-catalogue-catalogue-module"
	],
	"./business-modules/documentation/documentation.module": [
		"./src/app/business-modules/documentation/documentation.module.ts",
		"business-modules-documentation-documentation-module"
	],
	"./business-modules/operation/operation.module": [
		"./src/app/business-modules/operation/operation.module.ts",
		"business-modules-operation-operation-module"
	],
	"./business-modules/report/report.module": [
		"./src/app/business-modules/report/report.module.ts",
		"business-modules-report-report-module"
	],
	"./business-modules/support/support.module": [
		"./src/app/business-modules/support/support.module.ts",
		"business-modules-support-support-module"
	],
	"./business-modules/system/system.module": [
		"./src/app/business-modules/system/system.module.ts",
		"business-modules-system-system-module"
	],
	"./business-modules/tool-setting/tool.module": [
		"./src/app/business-modules/tool-setting/tool.module.ts",
		"business-modules-tool-setting-tool-module"
	],
	"./design-modules/design-modules.module": [
		"./src/app/design-modules/design-modules.module.ts",
		"design-modules-design-modules-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _master_page_master_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./master-page/master-page.component */ "./src/app/master-page/master-page.component.ts");
/* harmony import */ var _notfound_page_notfound_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notfound-page/notfound-page.component */ "./src/app/notfound-page/notfound-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    /**
     * Lazy load business modules
     */
    {
        path: 'home',
        component: _master_page_master_page_component__WEBPACK_IMPORTED_MODULE_3__["MasterPageComponent"],
        children: [
            {
                path: 'system',
                loadChildren: './business-modules/system/system.module#SystemModule'
            },
            {
                path: 'catalogue',
                loadChildren: './business-modules/catalogue/catalogue.module#CatalogueModule'
            },
            {
                path: 'accounting',
                loadChildren: './business-modules/accounting/accounting.module#AccountingModule'
            },
            {
                path: 'documentation',
                loadChildren: './business-modules/documentation/documentation.module#DocumentationModule'
            },
            {
                path: 'operation',
                loadChildren: './business-modules/operation/operation.module#OperationModule'
            },
            {
                path: 'report',
                loadChildren: './business-modules/report/report.module#ReportModule'
            },
            {
                path: 'support',
                loadChildren: './business-modules/support/support.module#SupportModule'
            },
            {
                path: 'tool',
                loadChildren: './business-modules/tool-setting/tool.module#ToolModule'
            },
            {
                path: 'designs-zone',
                loadChildren: './design-modules/design-modules.module#DesignModulesModule'
            }
        ]
    },
    /**
     * PAGE NOT FOUND
     */
    {
        path: 'page-not-found',
        component: _notfound_page_notfound_page_component__WEBPACK_IMPORTED_MODULE_4__["NotfoundPageComponent"]
    },
    {
        path: '**',
        redirectTo: 'page-not-found',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng4-loading-spinner> </ng4-loading-spinner>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _master_page_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./master-page/header/header.component */ "./src/app/master-page/header/header.component.ts");
/* harmony import */ var _master_page_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./master-page/footer/footer.component */ "./src/app/master-page/footer/footer.component.ts");
/* harmony import */ var _master_page_page_sidebar_page_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./master-page/page-sidebar/page-sidebar.component */ "./src/app/master-page/page-sidebar/page-sidebar.component.ts");
/* harmony import */ var _master_page_subheader_subheader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./master-page/subheader/subheader.component */ "./src/app/master-page/subheader/subheader.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _master_page_master_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./master-page/master-page.component */ "./src/app/master-page/master-page.component.ts");
/* harmony import */ var _notfound_page_notfound_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./notfound-page/notfound-page.component */ "./src/app/notfound-page/notfound-page.component.ts");
/* harmony import */ var src_services_base_base_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/services-base/base.service */ "./src/services-base/base.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _master_page_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./master-page/breadcrumb/breadcrumb.component */ "./src/app/master-page/breadcrumb/breadcrumb.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _master_page_master_page_component__WEBPACK_IMPORTED_MODULE_12__["MasterPageComponent"],
                _notfound_page_notfound_page_component__WEBPACK_IMPORTED_MODULE_13__["NotfoundPageComponent"],
                _master_page_header_header_component__WEBPACK_IMPORTED_MODULE_0__["HeaderComponent"],
                _master_page_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"],
                _master_page_page_sidebar_page_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["PageSidebarComponent"],
                _master_page_subheader_subheader_component__WEBPACK_IMPORTED_MODULE_3__["SubheaderComponent"],
                _master_page_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_18__["BreadcrumbComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_10__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_16__["ToastrModule"].forRoot(),
                ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_17__["Ng4LoadingSpinnerModule"].forRoot()
            ],
            providers: [src_services_base_base_service__WEBPACK_IMPORTED_MODULE_14__["BaseService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  login works!\r\n</p>\r\n<button routerLink=\"/home\">Go to Home</button>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
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

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/master-page/breadcrumb/breadcrumb.component.html":
/*!******************************************************************!*\
  !*** ./src/app/master-page/breadcrumb/breadcrumb.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-subheader \">\r\n  <div class=\"d-flex align-items-center\">\r\n    <div class=\"mr-auto\">\r\n      <ul class=\"m-subheader__breadcrumbs m-nav m-nav--inline\">\r\n        <li class=\"m-nav__item\">\r\n          <a href=\"\" class=\"m-nav__link\">\r\n            <span class=\"m-nav__link-text\">Dashboard</span>\r\n          </a>\r\n        </li>\r\n        <li class=\"m-nav__separator\">-</li>\r\n        <li class=\"m-nav__item\">\r\n          <a href=\"\" class=\"m-nav__link\">\r\n            <span class=\"m-nav__link-text\">Master Page</span>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <div>\r\n      <div class=\"m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push\"\r\n        m-dropdown-toggle=\"hover\" aria-expanded=\"true\">\r\n        <button class=\"btn btn-priamry\">button demo</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/master-page/breadcrumb/breadcrumb.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/master-page/breadcrumb/breadcrumb.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".m-subheader__breadcrumbs {\n  font-size: 12px; }\n"

/***/ }),

/***/ "./src/app/master-page/breadcrumb/breadcrumb.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/master-page/breadcrumb/breadcrumb.component.ts ***!
  \****************************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
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

var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent() {
    }
    BreadcrumbComponent.prototype.ngOnInit = function () {
    };
    BreadcrumbComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-breadcrumb',
            template: __webpack_require__(/*! ./breadcrumb.component.html */ "./src/app/master-page/breadcrumb/breadcrumb.component.html"),
            styles: [__webpack_require__(/*! ./breadcrumb.component.scss */ "./src/app/master-page/breadcrumb/breadcrumb.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());



/***/ }),

/***/ "./src/app/master-page/footer/footer.component.html":
/*!**********************************************************!*\
  !*** ./src/app/master-page/footer/footer.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-container m-container--fluid m-container--full-height m-page__container\">\r\n  <div class=\"m-stack m-stack--flex-tablet-and-mobile m-stack--ver m-stack--desktop\">\r\n    <div class=\"m-stack__item m-stack__item--left m-stack__item--middle m-stack__item--last\">\r\n      <span class=\"m-footer__copyright\">\r\n        2018 &copy; eFMS by\r\n        <a href=\"https://www.itlvn.com/\" target=\"_blank\" class=\"m-link\">\r\n          ITL\r\n        </a>\r\n      </span>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/master-page/footer/footer.component.ts":
/*!********************************************************!*\
  !*** ./src/app/master-page/footer/footer.component.ts ***!
  \********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/master-page/footer/footer.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/master-page/header/header.component.html":
/*!**********************************************************!*\
  !*** ./src/app/master-page/header/header.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-container m-container--fluid m-container--full-height\">\r\n    <div class=\"m-stack m-stack--ver m-stack--desktop\">\r\n        <!-- BEGIN: Brand -->\r\n        <div class=\"m-stack__item m-brand  m-brand--skin-dark \">\r\n            <div class=\"m-stack m-stack--ver m-stack--general\">\r\n                <div class=\"m-stack__item m-stack__item--middle m-brand__logo\">\r\n                    <a href=\"javascript:;\" class=\"m-brand__logo-wrapper\">\r\n                        <img alt=\"\" src=\"assets/demo/default/media/img/logo/logo-default.png\">\r\n                    </a>\r\n                </div>\r\n                <div class=\"m-stack__item m-stack__item--middle m-brand__tools\">\r\n                    <!-- BEGIN: Left Aside Minimize Toggle -->\r\n                    <a href=\"javascript:;\" id=\"m_aside_left_minimize_toggle\" class=\"m-brand__icon m-brand__toggler m-brand__toggler--left m--visible-desktop-inline-block\">\r\n                        <span></span>\r\n                    </a>\r\n                    <!-- END -->\r\n                    <!-- BEGIN: Responsive Aside Left Menu Toggler -->\r\n                    <a href=\"javascript:;\" id=\"m_aside_left_offcanvas_toggle\" class=\"m-brand__icon m-brand__toggler m-brand__toggler--left m--visible-tablet-and-mobile-inline-block\">\r\n                        <span></span>\r\n                    </a>\r\n                    <!-- END -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- END: Brand -->\r\n        <div class=\"m-stack__item m-stack__item--fluid m-header-head\" id=\"m_header_nav\">\r\n            <!-- BEGIN: Horizontal Menu -->\r\n            <button class=\"m-aside-header-menu-mobile-close  m-aside-header-menu-mobile-close--skin-dark \" id=\"m_aside_header_menu_mobile_close_btn\">\r\n                <i class=\"la la-close\"></i>\r\n            </button>\r\n            <div class=\"m-header-menu\">\r\n                <h3 class=\"m-subheader__title\">{{Page_Info}}</h3>\r\n            </div>\r\n            <!-- END: Horizontal Menu -->\r\n            <!-- BEGIN: Topbar -->\r\n            <div id=\"m_header_topbar\" class=\"m-topbar  m-stack m-stack--ver m-stack--general\">\r\n                <div class=\"m-stack__item m-topbar__nav-wrapper\">\r\n                    <ul class=\"m-topbar__nav m-nav m-nav--inline\">\r\n                        <li class=\"m-nav__item m-topbar__user-profile m-topbar__user-profile--img  m-dropdown m-dropdown--medium m-dropdown--arrow m-dropdown--header-bg-fill m-dropdown--align-right m-dropdown--mobile-full-width m-dropdown--skin-light\">\r\n                            <a href=\"#\" class=\"m-nav__link m-dropdown__toggle\">\r\n                                <span class=\"m-topbar__userpic\">\r\n                                    <img src=\"assets/app/media/img/users/user-default.png\" class=\"m--img-rounded m--marginless m--img-centered\" alt=\"\">\r\n                                </span>\r\n                                <span class=\"m-topbar__username\">\r\n                                    Sunrise\r\n                                    <i class=\"m-menu__ver-arrow la la-angle-down\"></i>\r\n                                </span>\r\n                            </a>\r\n                            <div class=\"m-dropdown__wrapper\">\r\n                                <span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\"></span>\r\n                                <div class=\"m-dropdown__inner\">\r\n                                    <div class=\"m-dropdown__header m--align-center\" style=\"background: url(assets/app/media/img/misc/user_profile_bg.jpg); background-size: cover;\">\r\n                                        <div class=\"m-card-user m-card-user--skin-dark\">\r\n                                            <div class=\"m-card-user__pic\">\r\n                                                <img src=\"assets/app/media/img/users/user-default.png\" class=\"m--img-rounded m--marginless\"alt=\"\">\r\n                                            </div>\r\n                                            <div class=\"m-card-user__details\">\r\n                                                <span class=\"m-card-user__name m--font-weight-500\">\r\n                                                    Sunrise\r\n                                                </span>\r\n                                                <a href=\"\" class=\"m-card-user__email m--font-weight-300 m-link\">\r\n                                                    sunrise@gmail.com\r\n                                                </a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"m-dropdown__body\">\r\n                                        <div class=\"m-dropdown__content\">\r\n                                            <ul class=\"m-nav m-nav--skin-light\">\r\n                                                <li class=\"m-nav__item\">\r\n                                                    <a href=\"header/profile.html\" class=\"m-nav__link\">\r\n                                                        <i class=\"m-nav__link-icon flaticon-profile-1\"></i>\r\n                                                        <span class=\"m-nav__link-title\">\r\n                                                            <span class=\"m-nav__link-wrap\">\r\n                                                                <span class=\"m-nav__link-text\">\r\n                                                                    My Profile\r\n                                                                </span>\r\n                                                                <span class=\"m-nav__link-badge\">\r\n                                                                    <span class=\"m-badge m-badge--success\">\r\n                                                                        2\r\n                                                                    </span>\r\n                                                                </span>\r\n                                                            </span>\r\n                                                        </span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-nav__item\">\r\n                                                    <a href=\"header/profile.html\" class=\"m-nav__link\">\r\n                                                        <i class=\"m-nav__link-icon flaticon-share\"></i>\r\n                                                        <span class=\"m-nav__link-text\">\r\n                                                            Activity\r\n                                                        </span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-nav__item\">\r\n                                                    <a href=\"header/profile.html\" class=\"m-nav__link\">\r\n                                                        <i class=\"m-nav__link-icon flaticon-chat-1\"></i>\r\n                                                        <span class=\"m-nav__link-text\">\r\n                                                            Messages\r\n                                                        </span>\r\n                                                    </a>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </li>\r\n                        <li class=\"m-nav__item m-topbar__item\">\r\n                            <a href=\"javascript:;\" class=\"m-menu__link m-menu__toggle\">\r\n                                <i class=\"m-menu__link-icon icon-switch\"></i>\r\n                                <span class=\"m-menu__link-text\">\r\n                                    Logout\r\n                                </span>\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <!-- END: Topbar -->\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/master-page/header/header.component.ts":
/*!********************************************************!*\
  !*** ./src/app/master-page/header/header.component.ts ***!
  \********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
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

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "Page_Info", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/master-page/header/header.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/master-page/master-page.component.css":
/*!*******************************************************!*\
  !*** ./src/app/master-page/master-page.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/master-page/master-page.component.html":
/*!********************************************************!*\
  !*** ./src/app/master-page/master-page.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- begin:: Page -->\r\n<app-header id=\"m_header\" class=\"m-grid__item m-header \" m-minimize-offset=\"200\" m-minimize-mobile-offset=\"200\" [Page_Info]=\"Component_name\"></app-header>\r\n<!-- begin::Body -->\r\n<div class=\"m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body\">\r\n  <!-- BEGIN: Left Aside -->\r\n  <button class=\"m-aside-left-close  m-aside-left-close--skin-dark \" id=\"m_aside_left_close_btn\">\r\n      <i class=\"la la-close\"></i>\r\n  </button>\r\n  <app-page-sidebar id=\"m_aside_left\" class=\"m-grid__item\tm-aside-left  m-aside-left--skin-dark\" (Page_Information)=\"MenuChanged($event)\"></app-page-sidebar>\r\n  <!-- END: Left Aside -->\r\n  \r\n  <div class=\"m-grid__item m-grid__item--fluid m-wrapper\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n<!-- end::Body -->\r\n<!-- <app-footer class=\"m-grid__item m-footer ng-star-inserted\"></app-footer> -->"

/***/ }),

/***/ "./src/app/master-page/master-page.component.ts":
/*!******************************************************!*\
  !*** ./src/app/master-page/master-page.component.ts ***!
  \******************************************************/
/*! exports provided: MasterPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterPageComponent", function() { return MasterPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_base_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services-base/base.service */ "./src/services-base/base.service.ts");
/* harmony import */ var _page_sidebar_page_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-sidebar/page-sidebar.component */ "./src/app/master-page/page-sidebar/page-sidebar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MasterPageComponent = /** @class */ (function () {
    function MasterPageComponent(baseService, router, cdRef) {
        this.baseService = baseService;
        this.router = router;
        this.cdRef = cdRef;
        this.Page_Info = {};
    }
    MasterPageComponent.prototype.ngAfterViewInit = function () {
        this.Page_Info = this.Page_side_bar.Page_Info;
        // console.log(this.Page_Info);
    };
    MasterPageComponent.prototype.ngOnInit = function () {
        this.cdRef.detectChanges();
    };
    MasterPageComponent.prototype.MenuChanged = function (event) {
        this.Page_Info = event;
        this.Component_name = event.children;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_page_sidebar_page_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["PageSidebarComponent"]),
        __metadata("design:type", Object)
    ], MasterPageComponent.prototype, "Page_side_bar", void 0);
    MasterPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-master-page',
            template: __webpack_require__(/*! ./master-page.component.html */ "./src/app/master-page/master-page.component.html"),
            styles: [__webpack_require__(/*! ./master-page.component.css */ "./src/app/master-page/master-page.component.css")]
        }),
        __metadata("design:paramtypes", [src_services_base_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], MasterPageComponent);
    return MasterPageComponent;
}());



/***/ }),

/***/ "./src/app/master-page/page-sidebar/page-sidebar.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/master-page/page-sidebar/page-sidebar.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Left Aside -->\r\n<button class=\"m-aside-left-close  m-aside-left-close--skin-dark \" id=\"m_aside_left_close_btn\">\r\n    <i class=\"la la-close\"></i>\r\n</button>\r\n<div id=\"m_aside_left\" class=\"m-grid__item\tm-aside-left  m-aside-left--skin-dark \">\r\n    <!-- BEGIN: Aside Menu -->\r\n    <div id=\"m_ver_menu\" class=\"m-aside-menu  m-aside-menu--skin-dark m-aside-menu--submenu-skin-dark \" m-menu-vertical=\"1\" m-menu-scrollable=\"0\" m-menu-dropdown-timeout=\"500\">\r\n        <ul class=\"m-menu__nav\" style=\"padding: 30px 30px 0\">\r\n            <li class=\"m-menu__item\" style=\"margin-bottom: 20px;\">\r\n                <div class=\"m-input-icon m-input-icon--right\">\r\n                    <input type=\"text\" class=\"form-control m-input\" placeholder=\"Search\">\r\n                    <span class=\"m-input-icon__icon m-input-icon__icon--right\">\r\n                        <span>\r\n                            <i class=\"icon-search\"></i>\r\n                        </span>\r\n                    </span>\r\n                </div>\r\n            </li>\r\n            <li class=\"m-menu__item\">\r\n                <a class=\"btn btn-danger m-btn m-btn--custom m-btn--icon m-btn--uppercase btn-block\" data-toggle=\"modal\" href=\"#create-job-modal\" (click)=\"gotoJobManagement()\">\r\n                    <span>\r\n                        <i class=\"la la-plus\"></i>\r\n                        <span>Create Job</span>\r\n                    </span>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n        <ul class=\"m-menu__nav  m-menu__nav--dropdown-submenu-arrow \">\r\n            <li class=\"m-menu__item  m-menu__item--submenu\" aria-haspopup=\"true\" m-menu-submenu-toggle=\"hover\" *ngFor=\"let item of Menu;let i = index;\" #parrent [id]=\"i\">\r\n                <a href=\"javascript:;\" class=\"m-menu__link m-menu__toggle\" (click)=\"open_sub_menu(i)\">\r\n                    <i [class]=\"'m-menu__link-icon '+item.icon\"></i>\r\n                    <span class=\"m-menu__link-text\">\r\n                        {{item.parent_name}}\r\n                    </span>\r\n                    <i class=\"m-menu__ver-arrow la la-angle-right\"></i>\r\n                </a>\r\n                <div class=\"m-menu__submenu\" *ngIf=\"item.display_child\">\r\n                    <span class=\"m-menu__arrow\"></span>\r\n                    <ul class=\"m-menu__subnav\">\r\n                        <li class=\"m-menu__item m-menu__item\" aria-haspopup=\"true\" *ngFor=\"let sub_item of item.childs;let k = index;\" [id]=\"i+'-'+k\">\r\n                            <a [routerLink]=\"item.route_parent+sub_item.route_child\" class=\"m-menu__link \" (click)=\"sub_menu_click(sub_item.name,i,k)\">\r\n                                <i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n                                    <span></span>\r\n                                </i>\r\n                                <span class=\"m-menu__link-text\">\r\n                                    {{sub_item.name}}\r\n                                </span>\r\n                            </a>\r\n                        </li>\r\n                       \r\n                    </ul>\r\n                </div>\r\n            </li>           \r\n        </ul>\r\n    </div>\r\n    <!-- END: Aside Menu -->\r\n</div>\r\n<!-- END: Left Aside -->"

/***/ }),

/***/ "./src/app/master-page/page-sidebar/page-sidebar.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/master-page/page-sidebar/page-sidebar.component.ts ***!
  \********************************************************************/
/*! exports provided: PageSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageSidebarComponent", function() { return PageSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageSidebarComponent = /** @class */ (function () {
    function PageSidebarComponent(router) {
        this.router = router;
        this.index_parrent_menu = 0;
        this.index_sub_menu = 0;
        this.previous_menu_id = null;
        this.previous_menu_index = null;
        this.previous_parent = null;
        this.previous_children = null;
        //action_component="";
        this.Page_Information = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.Page_Component = "";
        this.Page_Info = {
            parent: "",
            children: ""
        };
        /**
         * MENU COMPONENTS DEFINITION
         */
        this.Menu = [
            // Catalogue Module
            {
                parent_name: "Catalogue",
                icon: "icon-books",
                route_parent: "/home/catalogue/",
                display_child: false,
                childs: [
                    { name: "Warehouse", route_child: "ware-house" },
                    { name: "Port Index", route_child: "port-index" },
                    { name: "Partner Data", route_child: "partner-data" },
                    { name: "Commodity", route_child: "commodity" },
                    { name: "Stage Management", route_child: "stage-management" },
                    { name: "Unit", route_child: "unit" },
                    { name: "Location", route_child: "location" },
                    { name: "Charge", route_child: "charge" },
                ]
            },
            //Operation Module 
            {
                parent_name: "Operation",
                icon: "icon-cogs",
                route_parent: "/home/operation/",
                display_child: false,
                childs: [
                    { name: "Job Management", route_child: "job-management" },
                    { name: "Assignment", route_child: "assigment" },
                    { name: "Trucking Assigment", route_child: "trucking-assigment" },
                ]
            },
            // Documentation Module
            {
                parent_name: "Documentation",
                icon: "icon-file-text2",
                route_parent: "/home/documentation/",
                display_child: false,
                childs: [
                    { name: "Inland Trucking", route_child: "inland-trucking" },
                    { name: "Air Export", route_child: "air-export" },
                    { name: "Air Import", route_child: "air-import" },
                    { name: "Sea Consol Export", route_child: "sea-consol-export" },
                    { name: "Sea Consol Import", route_child: "sea-consol-import" },
                    { name: "Sea FCL Export", route_child: "sea-fcl-export" },
                    { name: "Sea FCL Import", route_child: "sea-fcl-import" },
                    { name: "Sea LCL Export", route_child: "sea-lcl-export" },
                    { name: "Sea LCL Import", route_child: "sea-lcl-import" },
                ]
            },
            //Accouting Module
            {
                parent_name: "Accounting",
                icon: "icon-calculator",
                route_parent: "/home/accounting/",
                display_child: false,
                childs: [
                    { name: "Account Receivable Payable", route_child: "account-receivable-payable" },
                    { name: "Advance Payment", route_child: "advance-payment" },
                    { name: "Settlement Payment", route_child: "settlement-payment" },
                    { name: "Statement of Account", route_child: "statement-of-account" }
                ]
            },
            //System Module
            {
                parent_name: "System",
                icon: "icon-database",
                route_parent: "/home/system/",
                display_child: false,
                childs: [
                    { name: "User Management", route_child: "user-management" },
                    { name: "Group", route_child: "group" },
                    { name: "Role", route_child: "role" },
                    { name: "Permission", route_child: "permission" },
                    { name: "Department", route_child: "department" },
                    { name: "Company Informations", route_child: "company-info" }
                ]
            },
            //Tool-setting Module
            {
                parent_name: "Tool - Setting",
                icon: "icon-wrench",
                route_parent: "/home/tool/",
                display_child: false,
                childs: [
                    { name: "ID Definition", route_child: "id-definition" },
                    { name: "Tariff", route_child: "tariff" },
                    { name: "Ecus Connection", route_child: "ecus-connection" },
                    { name: "KPI", route_child: "kpi" },
                    { name: "Supplier", route_child: "supplier" },
                ]
            },
            //Report Module
            {
                parent_name: "Report",
                icon: "icon-stats-bars",
                route_parent: "/home/report/",
                display_child: false,
                childs: [
                    { name: "P/L Report", route_child: "pl-report" },
                    { name: "Performance Report", route_child: "performance-report" },
                    { name: "Shipment Overview", route_child: "shipment-overview" },
                ]
            },
            // Designs ZONE , included html template for components
            {
                parent_name: 'Designs Zone',
                icon: 'icon-format_paint',
                route_parent: "/home/designs-zone/",
                display_child: false,
                childs: [
                    { name: "Form", route_child: "form" },
                    { name: "Table", route_child: "table" }
                ]
            }
        ];
    }
    PageSidebarComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var router = this.router.url.split('/');
        var current_child_route = router[router.length - 1];
        var parentInd = null;
        var childInd = null;
        var child_name = null;
        for (var i = 0; i < this.Menu.length; i++) {
            for (var j = 0; j < this.Menu[i].childs.length; j++) {
                if (this.Menu[i].childs[j].route_child == current_child_route) {
                    this.Page_Info.parent = this.Menu[i].parent_name;
                    this.Page_Info.children = this.Menu[i].childs[j].name;
                    this.Page_Information.emit(this.Page_Info);
                    this.open_sub_menu(i);
                    this.Menu[i].display_child = true;
                    parentInd = i;
                    childInd = j;
                    child_name = this.Menu[i].childs[j].name;
                }
            }
        }
        if (parentInd != null && childInd != null) {
            setTimeout(function () {
                _this.sub_menu_click(child_name, parentInd, childInd);
            }, 500);
        }
    };
    PageSidebarComponent.prototype.ngOnInit = function () {
    };
    PageSidebarComponent.prototype.open_sub_menu = function (index) {
        if (this.previous_menu_index != null) {
            this.Menu[this.previous_menu_index].display_child = false;
            var previous_menu = document.getElementById(this.previous_menu_index.toString());
            if (index != this.previous_menu_index) {
                previous_menu.classList.remove('m-menu__item--open');
                var check_class = previous_menu.classList.contains('m-menu__item--open');
            }
        }
        this.previous_menu_index = index;
        this.index_parrent_menu = index;
        var parentMenu = document.getElementById(index.toString());
        if (parentMenu.classList.contains('m-menu__item--open')) {
            parentMenu.classList.remove('m-menu__item--open');
        }
        else {
            parentMenu.classList.add('m-menu__item--open');
        }
        this.Menu[index].display_child = !this.Menu[index].display_child;
        // this.Page_Info.parent= this.Menu[index].parent_name;    
    };
    PageSidebarComponent.prototype.sub_menu_click = function (sub_menu_name, parrent_index, children_index) {
        var current_parent = document.getElementById(parrent_index.toString());
        var current_children = document.getElementById(parrent_index.toString() + '-' + children_index.toString());
        if (this.previous_children != null) {
            this.previous_children.classList.remove('m-menu__item--active');
            this.previous_parent.classList.remove('m-menu__item--open');
            this.previous_parent.classList.remove('m-menu__item--active');
        }
        this.previous_children = current_children;
        this.previous_parent = current_parent;
        current_parent.classList.add('m-menu__item--open');
        current_parent.classList.add('m-menu__item--active');
        current_children.classList.add('m-menu__item--active');
        for (var i = 0; i < this.Menu.length; i++) {
            for (var j = 0; j < this.Menu[i].childs.length; j++) {
                if (this.Menu[i].childs[j].name == sub_menu_name) {
                    this.Page_Info.parent = this.Menu[i].parent_name;
                    this.Page_Info.children = this.Menu[i].childs[j].name;
                    this.Page_Information.emit(this.Page_Info);
                    break;
                }
            }
        }
    };
    PageSidebarComponent.prototype.gotoJobManagement = function () {
        var _this = this;
        this.router.navigate(['/home/operation/job-management']);
        this.open_sub_menu(1);
        setTimeout(function () {
            _this.sub_menu_click('Job Management', 1, 0);
        }, 200);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PageSidebarComponent.prototype, "Page_Information", void 0);
    PageSidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-sidebar',
            template: __webpack_require__(/*! ./page-sidebar.component.html */ "./src/app/master-page/page-sidebar/page-sidebar.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PageSidebarComponent);
    return PageSidebarComponent;
}());



/***/ }),

/***/ "./src/app/master-page/subheader/subheader.component.html":
/*!****************************************************************!*\
  !*** ./src/app/master-page/subheader/subheader.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-subheader \">\r\n  <div class=\"d-flex align-items-center\">\r\n    <div class=\"mr-auto\">\r\n      <ul class=\"m-subheader__breadcrumbs m-nav m-nav--inline\">\r\n        <li class=\"m-nav__item\">\r\n          <a href=\"\" class=\"m-nav__link\">\r\n            <span class=\"m-nav__link-text\">Dashboard</span>\r\n          </a>\r\n        </li>\r\n        <li class=\"m-nav__separator\">-</li>\r\n        <li class=\"m-nav__item\">\r\n          <a href=\"\" class=\"m-nav__link\">\r\n            <span class=\"m-nav__link-text\">Master Page</span>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <div>\r\n      <div class=\"m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push\"\r\n        m-dropdown-toggle=\"hover\" aria-expanded=\"true\">\r\n        <button class=\"btn btn-priamry\">button demo</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/master-page/subheader/subheader.component.sass":
/*!****************************************************************!*\
  !*** ./src/app/master-page/subheader/subheader.component.sass ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/master-page/subheader/subheader.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/master-page/subheader/subheader.component.ts ***!
  \**************************************************************/
/*! exports provided: SubheaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubheaderComponent", function() { return SubheaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _page_sidebar_page_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../page-sidebar/page-sidebar.component */ "./src/app/master-page/page-sidebar/page-sidebar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SubheaderComponent = /** @class */ (function () {
    function SubheaderComponent() {
        this.Page_Info = {};
    }
    SubheaderComponent.prototype.ngAfterViewInit = function () {
        // throw new Error("Method not implemented.");
        // this.Page_Info = this.pageSideBar.Page_Info;
        //  / console.log(this.Page_Info);
    };
    SubheaderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_page_sidebar_page_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["PageSidebarComponent"]),
        __metadata("design:type", Object)
    ], SubheaderComponent.prototype, "pageSideBar", void 0);
    SubheaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-subheader',
            template: __webpack_require__(/*! ./subheader.component.html */ "./src/app/master-page/subheader/subheader.component.html"),
            styles: [__webpack_require__(/*! ./subheader.component.sass */ "./src/app/master-page/subheader/subheader.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], SubheaderComponent);
    return SubheaderComponent;
}());



/***/ }),

/***/ "./src/app/notfound-page/notfound-page.component.css":
/*!***********************************************************!*\
  !*** ./src/app/notfound-page/notfound-page.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/notfound-page/notfound-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/notfound-page/notfound-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>PAGE NOT FOUND</h1>"

/***/ }),

/***/ "./src/app/notfound-page/notfound-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/notfound-page/notfound-page.component.ts ***!
  \**********************************************************/
/*! exports provided: NotfoundPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundPageComponent", function() { return NotfoundPageComponent; });
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

var NotfoundPageComponent = /** @class */ (function () {
    function NotfoundPageComponent() {
    }
    NotfoundPageComponent.prototype.ngOnInit = function () {
    };
    NotfoundPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notfound-page',
            template: __webpack_require__(/*! ./notfound-page.component.html */ "./src/app/notfound-page/notfound-page.component.html"),
            styles: [__webpack_require__(/*! ./notfound-page.component.css */ "./src/app/notfound-page/notfound-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotfoundPageComponent);
    return NotfoundPageComponent;
}());



/***/ }),

/***/ "./src/constants/system.const.ts":
/*!***************************************!*\
  !*** ./src/constants/system.const.ts ***!
  \***************************************/
/*! exports provided: SystemConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemConstants", function() { return SystemConstants; });
var SystemConstants = /** @class */ (function () {
    function SystemConstants() {
    }
    //Local Storage Key
    SystemConstants.LSK_CURRENT_USER = 'CURRENT_USER';
    SystemConstants.LSK_CURRENT_WORKPLACE_ID = 'CURRENT_WORKPLACE_ID';
    SystemConstants.LSK_CURRENT_LANG = 'CURRENT_LANG';
    SystemConstants.LSL_CACHE_REMEMBER = 'CACHE_REMEMBER';
    //Security
    SystemConstants.PATH_RSA_PUBLIC_KEY = './auth/z_rsa_public.key';
    SystemConstants.PATH_HOME_PAGE = '/app/main/home';
    SystemConstants.PATH_LOGIN_PAGE = '/login';
    SystemConstants.AUTH_ISSUER = 'http://localhost:5000';
    SystemConstants.AUTH_CLIENT_ID = 'eTMS';
    SystemConstants.AUTH_SCOPE = 'openid profile offline_access etms_scope dnt_api';
    //Language
    SystemConstants.CURRENT_LANGUAGE = localStorage.getItem(SystemConstants.LSK_CURRENT_LANG);
    SystemConstants.CURRENT_WORKPLACE_ID = localStorage.getItem(SystemConstants.LSK_CURRENT_WORKPLACE_ID);
    SystemConstants.DEFAULT_LANGUAGE = "en-US";
    SystemConstants.DEFAULT_HOME_PAGE = "/app/main/home";
    //Page size for ngx-pageination options
    SystemConstants.OPTIONS_PAGE_SIZE = 10;
    SystemConstants.MAX_ITEMS_PER_REQUEST = 100;
    return SystemConstants;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/services-base/base.service.ts":
/*!*******************************************!*\
  !*** ./src/services-base/base.service.ts ***!
  \*******************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var typescript_string_operations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! typescript-string-operations */ "./node_modules/typescript-string-operations/dist/index.min.js");
/* harmony import */ var typescript_string_operations__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(typescript_string_operations__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_constants_system_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/constants/system.const */ "./src/constants/system.const.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BaseService = /** @class */ (function () {
    function BaseService(_http, _router, toastr, spinnerService) {
        this._http = _http;
        this._router = _router;
        this.toastr = toastr;
        this.spinnerService = spinnerService;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        this.baseUrl = "";
        this.showError = true;
    }
    BaseService.prototype.formatURL = function (url) {
        if (this.baseUrl === "") {
            return url;
        }
        return typescript_string_operations__WEBPACK_IMPORTED_MODULE_3__["String"].Format("{0}{1}/{2}", this.baseUrl, src_constants_system_const__WEBPACK_IMPORTED_MODULE_4__["SystemConstants"].CURRENT_LANGUAGE, url);
    };
    BaseService.prototype.setBaseUrl = function (url) {
        this.baseUrl = url;
    };
    /**
     * GET request without handle error and state,
     * you must handle error or state by yourself
     * @param url
     */
    BaseService.prototype.get = function (url) {
        return this._http.get(url, { headers: this.headers });
    };
    /**
     * GET request within handle error and state, if display_notify is true
     * application will display toast notification with message get from handle state,
     * @param url
     * @param display_error
     * @param display_spinner
     */
    BaseService.prototype.getAsync = function (url, display_error, display_spinner) {
        var _this = this;
        if (display_error === void 0) { display_error = false; }
        if (display_spinner === void 0) { display_spinner = false; }
        if (display_spinner)
            this.spinnerService.show();
        return this._http.get(url, { headers: this.headers }).toPromise().then(function (res) {
            _this.toastr.success("success");
            _this.spinnerService.hide();
            return res;
        }).catch(function (error) {
            if (display_error) {
                _this.handleError(error);
            }
            return error;
        });
    };
    /**
     * POST request without handle error and state,
     * you must handle error or state by yourself
     * @param url
     * @param data
     */
    BaseService.prototype.post = function (url, data) {
        return this._http.post(url, data, { headers: this.headers });
    };
    /**
     * POST request within handle error and state, if display_notify is true
     * application will display toast notification with message get from handle state,
     * @param url
     * @param data
     * @param display_notify
     * @param display_spinner
     */
    BaseService.prototype.postAsync = function (url, data, display_notify, display_spinner) {
        var _this = this;
        if (display_notify === void 0) { display_notify = true; }
        if (display_spinner === void 0) { display_spinner = false; }
        if (display_spinner)
            this.spinnerService.show();
        return this._http.post(url, data, { headers: this.headers }).toPromise().then(function (res) {
            _this.spinnerService.hide();
            _this.handleState(res, display_notify);
            return res;
        }).catch(function (error) {
            _this.handleError(error);
        });
    };
    /**
     * PUT request without handle error and state,
     * you must handle error or state by yourself
     * @param url
     * @param data
     */
    BaseService.prototype.put = function (url, data) {
        return this._http.put(url, data, { headers: this.headers });
    };
    /**
     * PUT request within handle error and state, if display_notify is true
     * application will display toast notification with message get from handle state,
     * @param url
     * @param data
     * @param display_notify
     * @param display_spinner
     */
    BaseService.prototype.putAsync = function (url, data, display_notify, display_spinner) {
        var _this = this;
        if (display_notify === void 0) { display_notify = true; }
        if (display_spinner === void 0) { display_spinner = false; }
        if (display_spinner)
            this.spinnerService.show();
        return this._http.put(url, data, { headers: this.headers }).toPromise().then(function (res) {
            _this.spinnerService.hide();
            _this.handleState(res, display_notify);
        }).catch(function (error) {
            _this.handleError(error);
        });
    };
    /**
     * DELETE request without handle error and state,
     * you must handle error or state by yourself
     * @param url
     */
    BaseService.prototype.delete = function (url) {
        return this._http.delete(url, { headers: this.headers });
    };
    /**
     * PUT request within handle error and state, if display_notify is true
     * application will display toast notification with message get from handle state,
     * @param url
     * @param display_notify
     * @param display_spinner
     */
    BaseService.prototype.deleteAsync = function (url, display_notify, display_spinner) {
        var _this = this;
        if (display_notify === void 0) { display_notify = true; }
        if (display_spinner === void 0) { display_spinner = false; }
        if (display_spinner)
            this.spinnerService.show();
        return this._http.delete(url, { headers: this.headers }).toPromise().then(function (res) {
            _this.spinnerService.hide();
            _this.handleState(res, display_notify);
        }).catch(function (error) {
            _this.handleError(error);
        });
    };
    /**
     * Handle state return from server and display toast notification
     * @param response
     * @param display_notify
     */
    BaseService.prototype.handleState = function (response, display_notify) {
        if (display_notify === void 0) { display_notify = false; }
        if (response.status == true && display_notify == true) {
            this.toastr.success(response.message);
        }
        if (response.status == false && display_notify == true) {
            this.toastr.error(response.message);
        }
    };
    /**
     * Handle and display toast notificaton to show error returned from request
     * @param error
     */
    BaseService.prototype.handleError = function (error) {
        this.toastr.error(error.statusText.toString());
    };
    BaseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"], ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__["Ng4LoadingSpinnerService"]])
    ], BaseService);
    return BaseService;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\FMS WEB PROJECT\eFMS-WebApp\WebApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map