(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div image-preview-container [min-zoom]=\"0.15\" [max-zoom]=\"1.0\" [zoom-step]=\"0.05\">\n  <img *ngFor=\"let picsum of picsumList\"\n       [src]=\"picsum.preview_url\"\n       [image-url]=\"picsum.url\"\n       [image-name]=\"picsum.filename\"\n       [image-data]=\"picsum\">   \n</div>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  min-width: 300px;\n  min-height: 300px;\n  background-image: url(/assets/loader.gif);\n  background-repeat: no-repeat;\n  background-position-x: 50px;\n  background-position-y: 50px;\n  vertical-align: bottom; }\n  img:hover {\n    box-shadow: 0px 0 50px white;\n    position: relative;\n    z-index: 100; }\n"

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
/* harmony import */ var _services_picsum_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/picsum.service */ "./src/app/services/picsum.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(picsum) {
        this.picsum = picsum;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Gets 25 random pictures from picsum service
        this.picsum.getRandomList(25).subscribe(function (list) { return _this.picsumList = list; }, function (error) { });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_picsum_service__WEBPACK_IMPORTED_MODULE_1__["PicsumService"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_picsum_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/picsum.service */ "./src/app/services/picsum.service.ts");
/* harmony import */ var _my_ui_kit_my_ui_kit_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-ui-kit/my-ui-kit.module */ "./src/app/my-ui-kit/my-ui-kit.module.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _my_ui_kit_my_ui_kit_module__WEBPACK_IMPORTED_MODULE_5__["MyUiKitModule"]
            ],
            providers: [_services_picsum_service__WEBPACK_IMPORTED_MODULE_4__["PicsumService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/my-ui-kit/components/dialog-overlay/dialog-overlay.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/my-ui-kit/components/dialog-overlay/dialog-overlay.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/my-ui-kit/components/dialog-overlay/dialog-overlay.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/my-ui-kit/components/dialog-overlay/dialog-overlay.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.9);\n  mix-blend-mode: normal;\n  box-sizing: border-box;\n  z-index: 999; }\n"

/***/ }),

/***/ "./src/app/my-ui-kit/components/dialog-overlay/dialog-overlay.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/my-ui-kit/components/dialog-overlay/dialog-overlay.component.ts ***!
  \*********************************************************************************/
/*! exports provided: DialogOverlayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverlayComponent", function() { return DialogOverlayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * DialogOveraly is a part of ModalDialogService
 */
var DialogOverlayComponent = /** @class */ (function () {
    function DialogOverlayComponent() {
    }
    DialogOverlayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dialog-overlay',
            template: __webpack_require__(/*! ./dialog-overlay.component.html */ "./src/app/my-ui-kit/components/dialog-overlay/dialog-overlay.component.html"),
            styles: [__webpack_require__(/*! ./dialog-overlay.component.scss */ "./src/app/my-ui-kit/components/dialog-overlay/dialog-overlay.component.scss")]
        })
    ], DialogOverlayComponent);
    return DialogOverlayComponent;
}());



/***/ }),

/***/ "./src/app/my-ui-kit/components/image-previewer/image-previewer.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/my-ui-kit/components/image-previewer/image-previewer.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header *ngIf=\"!dragging\">\n  <span class=\"button back\" (click)=\"onCloseButtonClick()\">\n      <svg viewBox=\"0 0 448 512\">\n        <path d=\"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z\"></path>\n      </svg>\n  </span>\n  <span class=\"button file-icon\">\n    <svg viewBox=\"0 0 384 512\">\n      <path d=\"M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm160-14.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z\"></path>\n    </svg>\n  </span>\n  <span class=\"title\">{{currentPicture?.name}}</span>\n  <div class=\"actions-panel\">\n    <span class=\"button print\" (click)=\"print()\">\n      <svg viewBox=\"0 0 512 512\">\n        <path d=\"M448 192V77.25c0-8.49-3.37-16.62-9.37-22.63L393.37 9.37c-6-6-14.14-9.37-22.63-9.37H96C78.33 0 64 14.33 64 32v160c-35.35 0-64 28.65-64 64v112c0 8.84 7.16 16 16 16h48v96c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32v-96h48c8.84 0 16-7.16 16-16V256c0-35.35-28.65-64-64-64zm-64 256H128v-96h256v96zm0-224H128V64h192v48c0 8.84 7.16 16 16 16h48v96zm48 72c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z\"></path>\n      </svg>\n    </span>\n    <!-- <span class=\"button download\">\n      <svg viewBox=\"0 0 512 512\">\n        <path d=\"M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z\"></path>\n      </svg>\n    </span> -->\n    <span class=\"button close\" (click)=\"onCloseButtonClick()\">  \n        <svg viewBox=\"0 0 352 512\">\n          <path d=\"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z\"></path>\n        </svg>\n      </span>\n  </div>\n</header>\n\n<img #picture (load)=\"onPictureLoaded()\" class=\"picture\" [src]=\"currentPicture?.url\" [style.opacity]=\"loading?0:1\">\n\n<div class=\"controls\" *ngIf=\"!dragging\">\n  <div class=\"control page-switcher\">\n    Page <input #picNum integer-only\n                 (keyup)=\"onPictureNumberInputKeyUp( $event, picNum.value )\"\n                 [min-value]=\"1\"\n                 [max-value]=\"pictures?.length\"\n                 [value]=\"pictureIndex+1\"\n                 [size]=\"pictures?.length.toString().length\"\n                 [attr.maxlength]=\"pictures?.length.toString().length\"\n                 type=\"text\">/ {{pictures?.length}}\n  </div>\n  <div class=\"control\" *ngIf=\"!loading\">\n   <span class=\"button zoom-out\" (click)=\"zoomOutButtonClick()\">\n     <svg viewBox=\"0 0 448 512\">\n       <path d=\"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path>\n     </svg>\n   </span>\n   Zoom\n   <span class=\"button zoom-in\" (click)=\"zoomInButtonClick()\">\n     <svg viewBox=\"0 0 448 512\">\n       <path d=\"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path>\n     </svg>\n   </span>\n  </div>\n</div>\n\n<span class=\"nav-button prev\" *ngIf=\"!dragging&&!isLastPicture\" (click)=\"gotoNextPicture()\">\n    <svg viewBox=\"0 0 256 512\">\n        <path  d=\"M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z\"></path>\n    </svg>\n</span>\n<span class=\"nav-button next\" *ngIf=\"!dragging&&!isFirstPicture\" (click)=\"gotoPrevPicture()\">\n    <svg viewBox=\"0 0 256 512\">\n      <path d=\"M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z\"></path>\n    </svg>\n</span>\n\n<div class=\"zoom-info\" [style.opacity]=\"zoomInfo?0.8:0\">\n  {{formatedZoomString}} %\n</div>\n\n<span class=\"loader\" *ngIf=\"loading\">\n  <svg version=\"1.1\" id=\"L3\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n  viewBox=\"0 0 100 100\" enable-background=\"new 0 0 0 0\" xml:space=\"preserve\">\n<circle fill=\"none\" stroke=\"#fff\" stroke-width=\"4\" cx=\"50\" cy=\"50\" r=\"44\" style=\"opacity:0.5;\"/>\n  <circle fill=\"#fff\" stroke=\"#e74c3c\" stroke-width=\"3\" cx=\"8\" cy=\"54\" r=\"6\" >\n    <animateTransform \n      attributeName=\"transform\"\n      dur=\"2s\"\n      type=\"rotate\"\n      from=\"0 50 48\"\n      to=\"360 50 52\"\n      repeatCount=\"indefinite\" />\n    \n  </circle>\n</svg>\n</span> \n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/my-ui-kit/components/image-previewer/image-previewer.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/my-ui-kit/components/image-previewer/image-previewer.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  z-index: 1000;\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  color: #ffffff; }\n\n.button {\n  width: 48px;\n  height: 48px;\n  cursor: pointer;\n  position: relative;\n  flex-shrink: 0;\n  border-radius: 25%;\n  transition: border-radius 0.05s linear; }\n\n.button svg {\n    width: 24px;\n    fill: #ffffff;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%); }\n\n.button:hover {\n    background-color: rgba(0, 0, 0, 0.5); }\n\n.button:active:hover {\n    border-radius: 50%;\n    background-color: rgba(0, 0, 0, 0.5); }\n\nheader {\n  background-color: #333333;\n  position: absolute;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  width: 100%;\n  height: 72px;\n  padding: 0 32px;\n  font-weight: bold;\n  font-size: 36px;\n  /* .print, .download{} */ }\n\nheader .back {\n    margin-right: 8px; }\n\nheader .back svg {\n      -webkit-transform: translate(-51%, -50%);\n              transform: translate(-51%, -50%); }\n\nheader .file-icon {\n    cursor: default;\n    pointer-events: none; }\n\nheader .close {\n    margin-left: 36px; }\n\nheader .title {\n    margin-left: 16px;\n    width: 100%; }\n\nheader .actions-panel {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    height: 100%;\n    width: 100%; }\n\n.picture {\n  position: absolute;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  opacity: 0;\n  transition: opacity 0.5s linear; }\n\n.nav-button {\n  width: 48px;\n  height: 48px;\n  background-color: #333333;\n  border-radius: 50%;\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%); }\n\n.nav-button:hover {\n    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); }\n\n.nav-button:hover:active {\n    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5); }\n\n.nav-button svg {\n    fill: #ffffff;\n    width: 16px;\n    position: absolute;\n    left: 50%;\n    right: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%); }\n\n.nav-button.prev {\n    right: 36px; }\n\n.nav-button.prev svg {\n      -webkit-transform: translate(-40%, 22%);\n              transform: translate(-40%, 22%); }\n\n.nav-button.next {\n    left: 36px; }\n\n.nav-button.next svg {\n      -webkit-transform: translate(-50%, 22%);\n              transform: translate(-50%, 22%); }\n\n.controls {\n  position: absolute;\n  display: flex;\n  left: 50%;\n  bottom: 18px;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%); }\n\n.controls .control {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 140px;\n    height: 48px;\n    padding: 0px 0px;\n    background-color: #333333; }\n\n.controls .control:first-child {\n      margin-right: 8px; }\n\n.controls .control input {\n      background-color: rgba(0, 0, 0, 0.5);\n      border: none;\n      color: #ffffff;\n      text-align: center;\n      padding: 4px;\n      margin: 0 8px;\n      -webkit-transform: translateY(2px);\n              transform: translateY(2px); }\n\n.controls .control .zoom-in, .controls .control .zoom-out {\n      width: 36px;\n      height: 36px; }\n\n.controls .control .zoom-in svg, .controls .control .zoom-out svg {\n        width: 16px; }\n\n.controls .control .zoom-in:first-child, .controls .control .zoom-out:first-child {\n        margin-right: 8px; }\n\n.controls .control .zoom-in:last-child, .controls .control .zoom-out:last-child {\n        margin-left: 8px; }\n\n.zoom-info {\n  border-radius: 25%;\n  background-color: #333333;\n  opacity: 0.8;\n  width: 120px;\n  height: 80px;\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  left: 50%;\n  top: 50%;\n  font-weight: bold;\n  font-size: 38px;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  opacity: 0;\n  transition: opacity 0.25s linear; }\n\n.loader {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  width: 150px;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n"

/***/ }),

/***/ "./src/app/my-ui-kit/components/image-previewer/image-previewer.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/my-ui-kit/components/image-previewer/image-previewer.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ImagePreviewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagePreviewerComponent", function() { return ImagePreviewerComponent; });
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

/**
 * Implements image previewer component
 */
var ImagePreviewerComponent = /** @class */ (function () {
    function ImagePreviewerComponent(hostElement, renderer) {
        this.hostElement = hostElement;
        this.renderer = renderer;
        /**
         * Picture index from pictures to show
         */
        this.pictureIndex = -1;
        /**
         * Minimum allowed zoom
         */
        this.minZoom = 0.15;
        /**
         * Maximum allowed zoom
         */
        this.maxZoom = 1.0;
        /**
         * Zoom step while changing scale by mouse wheel or "+"/"-" buttons
         */
        this.zoomStep = 0.05;
        /**
         * This event emit when user closes dialog.
         * When user Clicks "close button" or press "escape" key.
         */
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * True if picture is dragging now by user
         */
        this.dragging = false;
        /**
         * True if picture is loading now
         */
        this.loading = true;
        /**
         * True if information about scale presents on screen
         */
        this.zoomInfo = false;
        /**
         * Current picture position
         */
        this.picturePos = { x: 0, y: 0 };
    }
    Object.defineProperty(ImagePreviewerComponent.prototype, "currentPicture", {
        /**
         * Current picture
         */
        get: function () {
            return this.pictures &&
                this.pictureIndex < this.pictures.length &&
                this.pictureIndex >= 0
                ? this.pictures[this.pictureIndex]
                : null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Initiates the transition to the next picture
     */
    ImagePreviewerComponent.prototype.gotoNextPicture = function () {
        var pictureIndex = this.pictureIndex + 1;
        if (pictureIndex < this.pictures.length) {
            this.pictureIndex = pictureIndex;
            this.loading = true;
        }
    };
    /**
     * Initiates the transition to the previous picture
     */
    ImagePreviewerComponent.prototype.gotoPrevPicture = function () {
        var pictureIndex = this.pictureIndex - 1;
        if (pictureIndex >= 0) {
            this.pictureIndex = pictureIndex;
            this.loading = true;
        }
    };
    Object.defineProperty(ImagePreviewerComponent.prototype, "isLastPicture", {
        /**
         * Returns true if current picture is last
         */
        get: function () {
            return this.pictureIndex === this.pictures.length - 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImagePreviewerComponent.prototype, "isFirstPicture", {
        /**
         * Returns true if current picture is first
         */
        get: function () {
            return this.pictureIndex === 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * window:keyup callback
     * @param event
     */
    ImagePreviewerComponent.prototype.onkeyup = function (event) {
        console.log(event.keyCode);
        //escape key pressed
        if (event.keyCode === 27) {
            this.onCloseButtonClick();
            return;
        }
        //left key pressed
        if (event.keyCode === 37) {
            this.gotoPrevPicture();
            return;
        }
        //right key pressed
        if (event.keyCode === 39) {
            this.gotoNextPicture();
            return;
        }
        if (this.loading) {
            return;
        }
        //Plus key pressed
        if ((event.keyCode === 107) || (event.keyCode === 187)) {
            this.zoomInButtonClick();
            return;
        }
        //Minus key pressed
        if ((event.keyCode === 109) || (event.keyCode === 189)) {
            this.zoomOutButtonClick();
            return;
        }
    };
    /**
     * mousedown callback
     * @param event
     */
    ImagePreviewerComponent.prototype.onMouseDown = function (event) {
        var _this = this;
        if (this.loading) {
            return;
        }
        //Starts dragging only if left mouse key pressed
        if (event.button !== 0) {
            return;
        }
        //and mouse on hostElement or picture
        if (event.target === this.hostElement.nativeElement ||
            event.target === this.picture.nativeElement) {
            //calls this to prevent browser image dragging process
            event.preventDefault();
            this.dragStartPoint = { x: event.clientX, y: event.clientY };
            this.newPicturePos = { x: 0, y: 0 };
            this.dragging = true;
            //set mousemove and mouseup listeners
            this.mouseMoveUnlisten = this.renderer.listen(this.hostElement.nativeElement, 'mousemove', function (event) { return _this.onMouseMove(event); });
            this.mouseUpUnlisten = this.renderer.listen(this.hostElement.nativeElement, 'mouseup', function () { return _this.onMouseUp(); });
        }
    };
    /**
     * mousemove callback
     * @param event
     */
    ImagePreviewerComponent.prototype.onMouseMove = function (event) {
        //if mouse up released outside the document
        if (event.buttons === 0) {
            this.onMouseUp(); //then emit mouseup callback manually
            return;
        }
        this.newPicturePos = this.checkBoundaries({
            x: this.picturePos.x + event.clientX - this.dragStartPoint.x,
            y: this.picturePos.y + event.clientY - this.dragStartPoint.y
        });
        this.movePicture(this.newPicturePos);
    };
    /**
     * mouseup callback
     */
    ImagePreviewerComponent.prototype.onMouseUp = function () {
        this.mouseMoveUnlisten();
        this.mouseMoveUnlisten = null;
        this.mouseUpUnlisten();
        this.mouseUpUnlisten = null;
        this.picturePos = this.newPicturePos;
        this.newPicturePos = null;
        this.dragging = false;
    };
    /**
     * mousewheel callback
     * @param event
     */
    ImagePreviewerComponent.prototype.onMouseWheel = function (event) {
        //disable scaling while picture loading
        if (this.loading) {
            return;
        }
        this.zoom -= this.zoomStep * Math.abs(event.deltaY) / event.deltaY;
    };
    /**
     * window:resize callback
     * @param event
     */
    ImagePreviewerComponent.prototype.onResize = function (event) {
        //disable resizing while picture loading
        if (this.loading) {
            return;
        }
        this.initialResize();
        this.centerPicture();
    };
    /**
     * Checks if picture is inside screen boundaries and corrects postion if necessary
     * @param pos - picture pos
     * @return corrected picture position
     */
    ImagePreviewerComponent.prototype.checkBoundaries = function (pos) {
        var pictureRect = this.pictureRect;
        var hostRect = this.hostRect;
        if (pictureRect.width > hostRect.width) {
            if (pos.x + pictureRect.width < hostRect.width) {
                pos.x = hostRect.width - pictureRect.width;
            }
            else if (pos.x > 0) {
                pos.x = 0;
            }
        }
        else {
            if (pos.x + pictureRect.width > hostRect.width) {
                pos.x = hostRect.width - pictureRect.width;
            }
            else if (pos.x < 0) {
                pos.x = 0;
            }
        }
        if (pictureRect.height > hostRect.height) {
            if (pos.y + pictureRect.height < hostRect.height) {
                pos.y = hostRect.height - pictureRect.height;
            }
            else if (pos.y > 0) {
                pos.y = 0;
            }
        }
        else {
            if (pos.y + pictureRect.height > hostRect.height) {
                pos.y = hostRect.height - pictureRect.height;
            }
            else if (pos.y < 0) {
                pos.y = 0;
            }
        }
        return pos;
    };
    /**
     * Moves picture to new position
     * @param pos - new picture position
     */
    ImagePreviewerComponent.prototype.movePicture = function (pos) {
        this.renderer.setStyle(this.picture.nativeElement, 'left', pos.x + "px");
        this.renderer.setStyle(this.picture.nativeElement, 'top', pos.y + "px");
    };
    /**
     * Resizes picture to screen fit
     */
    ImagePreviewerComponent.prototype.initialResize = function () {
        var hostRect = this.hostRect;
        var wrapRect = {
            left: 100,
            top: 100,
            right: 100,
            bottom: 100,
            width: this.hostRect.width - 200,
            height: this.hostRect.height - 200
        };
        var ratio = Math.min(wrapRect.width / this.pictureNaturalWidth, wrapRect.height / this.pictureNaturalHeight);
        this.renderer.setStyle(this.picture.nativeElement, 'width', this.pictureNaturalWidth * ratio + 'px');
        this.renderer.setStyle(this.picture.nativeElement, 'height', this.pictureNaturalHeight * ratio + 'px');
    };
    /**
     * Moves picture to screen center
     */
    ImagePreviewerComponent.prototype.centerPicture = function () {
        var pictureRect = this.pictureRect;
        var center = this.center;
        this.picturePos = {
            x: center.x - pictureRect.width / 2,
            y: center.y - pictureRect.height / 2
        };
        this.movePicture(this.picturePos);
    };
    Object.defineProperty(ImagePreviewerComponent.prototype, "center", {
        /**
         * Screen center
         */
        get: function () {
            var hostRect = this.hostRect;
            return {
                x: hostRect.width / 2,
                y: hostRect.height / 2
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImagePreviewerComponent.prototype, "hostRect", {
        /**
         * Screen bounding rectangle
         */
        get: function () {
            return this.hostElement.nativeElement.getBoundingClientRect();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImagePreviewerComponent.prototype, "pictureRect", {
        /**
         * Picture bounding rectangle
         */
        get: function () {
            return this.picture.nativeElement.getBoundingClientRect();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImagePreviewerComponent.prototype, "pictureNaturalWidth", {
        /**
         * Original picture width
         */
        get: function () {
            return this.picture.nativeElement.naturalWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImagePreviewerComponent.prototype, "pictureNaturalHeight", {
        /**
         * Original picture height
         */
        get: function () {
            return this.picture.nativeElement.naturalHeight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImagePreviewerComponent.prototype, "zoom", {
        /**
         * Getter for current picture zoom
         */
        get: function () {
            var pictureRect = this.pictureRect;
            return Math.min(pictureRect.width / this.pictureNaturalWidth, pictureRect.height / this.pictureNaturalHeight);
        },
        /**
         * Setter for current picture zoom
         */
        set: function (value) {
            if (value < this.minZoom) {
                value = this.minZoom;
            }
            else if (value > this.maxZoom) {
                value = this.maxZoom;
            }
            this.renderer.setStyle(this.picture.nativeElement, 'width', this.pictureNaturalWidth * value + 'px');
            this.renderer.setStyle(this.picture.nativeElement, 'height', this.pictureNaturalHeight * value + 'px');
            this.centerPicture();
            this.zoomChanged();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Calls when zoom changed to show information about scale on sreen
     */
    ImagePreviewerComponent.prototype.zoomChanged = function () {
        var _this = this;
        this.zoomInfo = true;
        if (this.zoomInfoTimeout) {
            clearTimeout(this.zoomInfoTimeout);
        }
        this.zoomInfoTimeout = setTimeout(function () {
            _this.zoomInfoTimeout = null;
            _this.zoomInfo = false;
        }, 1000);
    };
    Object.defineProperty(ImagePreviewerComponent.prototype, "formatedZoomString", {
        /**
         * Getter for formated zoom string
         */
        get: function () {
            return Math.round(this.zoom * 100).toString();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * On picture loaded callback
     */
    ImagePreviewerComponent.prototype.onPictureLoaded = function () {
        this.loading = false;
        this.initialResize();
        this.centerPicture();
    };
    /**
     * On close button click handler
     */
    ImagePreviewerComponent.prototype.onCloseButtonClick = function () {
        this.onClose.emit();
    };
    /**
     * Zoom in button click handler
     */
    ImagePreviewerComponent.prototype.zoomInButtonClick = function () {
        this.zoom += this.zoomStep;
    };
    /**
     * Zoom out button click handler
     */
    ImagePreviewerComponent.prototype.zoomOutButtonClick = function () {
        this.zoom -= this.zoomStep;
    };
    /**
     * Picture number key up callback
     * @param event - keyup event
     * @param value - input value
     */
    ImagePreviewerComponent.prototype.onPictureNumberInputKeyUp = function (event, value) {
        //if pressed Enter key
        if (event.keyCode === 13) {
            var newIndex = parseInt(value) - 1;
            if (!isNaN(newIndex)) {
                if (newIndex !== this.pictureIndex) {
                    this.pictureIndex = newIndex;
                    this.loading = true;
                }
            }
            else {
                this.renderer.setProperty(this.picNum.nativeElement, 'value', (this.pictureIndex + 1).toString());
            }
            this.picNum.nativeElement.blur();
        }
        event.stopImmediatePropagation();
    };
    /**
     * Shows print dialog for picture print
     */
    ImagePreviewerComponent.prototype.print = function () {
        var popup = window.open('', 'print', "toolbar=no,location=no,directories=no,menubar=no,scrollbars=yes");
        popup.document.open();
        popup.document.write("<img src=\"" + this.currentPicture.url + "\">");
        popup.document.close();
        popup.focus();
        popup.print();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('pictures'),
        __metadata("design:type", Array)
    ], ImagePreviewerComponent.prototype, "pictures", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('picture-index'),
        __metadata("design:type", Number)
    ], ImagePreviewerComponent.prototype, "pictureIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('min-zoom'),
        __metadata("design:type", Number)
    ], ImagePreviewerComponent.prototype, "minZoom", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('max-zoom'),
        __metadata("design:type", Number)
    ], ImagePreviewerComponent.prototype, "maxZoom", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('zoom-step'),
        __metadata("design:type", Number)
    ], ImagePreviewerComponent.prototype, "zoomStep", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ImagePreviewerComponent.prototype, "onClose", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('picture'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ImagePreviewerComponent.prototype, "picture", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('picNum'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ImagePreviewerComponent.prototype, "picNum", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], ImagePreviewerComponent.prototype, "onkeyup", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mousedown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], ImagePreviewerComponent.prototype, "onMouseDown", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('wheel', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ImagePreviewerComponent.prototype, "onMouseWheel", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ImagePreviewerComponent.prototype, "onResize", null);
    ImagePreviewerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-image-previewer',
            template: __webpack_require__(/*! ./image-previewer.component.html */ "./src/app/my-ui-kit/components/image-previewer/image-previewer.component.html"),
            styles: [__webpack_require__(/*! ./image-previewer.component.scss */ "./src/app/my-ui-kit/components/image-previewer/image-previewer.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], ImagePreviewerComponent);
    return ImagePreviewerComponent;
}());



/***/ }),

/***/ "./src/app/my-ui-kit/directives/image-preview-container.directive.ts":
/*!***************************************************************************!*\
  !*** ./src/app/my-ui-kit/directives/image-preview-container.directive.ts ***!
  \***************************************************************************/
/*! exports provided: ImagePreviewContainerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagePreviewContainerDirective", function() { return ImagePreviewContainerDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _image_preview_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-preview.directive */ "./src/app/my-ui-kit/directives/image-preview.directive.ts");
/* harmony import */ var _services_modal_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/modal-dialog.service */ "./src/app/my-ui-kit/services/modal-dialog.service.ts");
/* harmony import */ var _components_image_previewer_image_previewer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/image-previewer/image-previewer.component */ "./src/app/my-ui-kit/components/image-previewer/image-previewer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Implements image previewer container directive
 * Container for pictures
 */
var ImagePreviewContainerDirective = /** @class */ (function () {
    function ImagePreviewContainerDirective(modalDialog) {
        this.modalDialog = modalDialog;
    }
    /**
     * Finds all pictures inside container and set up for work with them
     */
    ImagePreviewContainerDirective.prototype.prepareImgs = function () {
        var _this = this;
        this.pictures = [];
        this.imgs.map(function (el) {
            _this.pictures.push({
                url: el.imageURL,
                name: el.imageName,
                data: el.imageData
            });
            el.onclick.subscribe(function (src) { return _this.showViewer(src); });
        });
    };
    /**
     * Shows image previewer
     * @param url - picture url to show and calculate pictureIndex
     */
    ImagePreviewContainerDirective.prototype.showViewer = function (url) {
        var _this = this;
        this.viewer = this.modalDialog.show(_components_image_previewer_image_previewer_component__WEBPACK_IMPORTED_MODULE_3__["ImagePreviewerComponent"]);
        var instance = this.viewer.instance;
        instance.pictures = this.pictures;
        instance.pictureIndex = this.pictures.findIndex(function (picture) { return picture.url === url; });
        if (this.minZoom != null) {
            instance.minZoom = this.minZoom;
        }
        if (this.maxZoom != null) {
            instance.maxZoom = this.maxZoom;
        }
        if (this.zoomStep != null) {
            instance.zoomStep = this.zoomStep;
        }
        instance.onClose.subscribe(function () { return _this.hideViewer(); });
    };
    /**
     * Hides image previewer
     */
    ImagePreviewContainerDirective.prototype.hideViewer = function () {
        this.viewer.instance.onClose.unsubscribe();
        this.modalDialog.hide(this.viewer);
    };
    /**
     * Calls when directive content is initialized
     */
    ImagePreviewContainerDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.imgs.changes.subscribe(function () { return _this.prepareImgs(); });
        this.prepareImgs();
    };
    /**
     * Component destructor
     */
    ImagePreviewContainerDirective.prototype.ngOnDestroy = function () {
        this.imgs.forEach(function (el) {
            el.onclick.unsubscribe();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('min-zoom'),
        __metadata("design:type", Number)
    ], ImagePreviewContainerDirective.prototype, "minZoom", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('max-zoom'),
        __metadata("design:type", Number)
    ], ImagePreviewContainerDirective.prototype, "maxZoom", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('zoom-step'),
        __metadata("design:type", Number)
    ], ImagePreviewContainerDirective.prototype, "zoomStep", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(_image_preview_directive__WEBPACK_IMPORTED_MODULE_1__["ImagePreviewDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], ImagePreviewContainerDirective.prototype, "imgs", void 0);
    ImagePreviewContainerDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[image-preview-container]'
        }),
        __metadata("design:paramtypes", [_services_modal_dialog_service__WEBPACK_IMPORTED_MODULE_2__["ModalDialogService"]])
    ], ImagePreviewContainerDirective);
    return ImagePreviewContainerDirective;
}());



/***/ }),

/***/ "./src/app/my-ui-kit/directives/image-preview.directive.ts":
/*!*****************************************************************!*\
  !*** ./src/app/my-ui-kit/directives/image-preview.directive.ts ***!
  \*****************************************************************/
/*! exports provided: ImagePreviewDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagePreviewDirective", function() { return ImagePreviewDirective; });
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

/**
 * Implements image directive
 * Directive for describing picture properties
 */
var ImagePreviewDirective = /** @class */ (function () {
    function ImagePreviewDirective() {
        /**
         * This directive emits onclick event
         */
        this.onclick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * Callback for on click event
     */
    ImagePreviewDirective.prototype.onClick = function () {
        this.onclick.emit(this.imageURL);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('image-url'),
        __metadata("design:type", String)
    ], ImagePreviewDirective.prototype, "imageURL", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('image-name'),
        __metadata("design:type", String)
    ], ImagePreviewDirective.prototype, "imageName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('image-data'),
        __metadata("design:type", Object)
    ], ImagePreviewDirective.prototype, "imageData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ImagePreviewDirective.prototype, "onclick", void 0);
    ImagePreviewDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[image-url]',
            host: {
                '(click)': 'onClick()'
            }
        })
    ], ImagePreviewDirective);
    return ImagePreviewDirective;
}());



/***/ }),

/***/ "./src/app/my-ui-kit/directives/integer-only.directive.ts":
/*!****************************************************************!*\
  !*** ./src/app/my-ui-kit/directives/integer-only.directive.ts ***!
  \****************************************************************/
/*! exports provided: IntegerOnlyDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntegerOnlyDirective", function() { return IntegerOnlyDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Implements integer only directive
 * Directive for html input element.
 * Allows to input integer values from specific range.
 */
var IntegerOnlyDirective = /** @class */ (function (_super) {
    __extends(IntegerOnlyDirective, _super);
    function IntegerOnlyDirective(host, renderer) {
        var _this = _super.call(this, renderer, host, true) || this;
        _this.host = host;
        _this.renderer = renderer;
        _this.pattern = /^[0-9]+$/;
        /**
         * Min allowed integer value
         */
        _this.minValue = Number.MIN_VALUE;
        /**
         * Max allowed integer value
         */
        _this.maxValue = Number.MAX_VALUE;
        return _this;
    }
    IntegerOnlyDirective.prototype.ngAfterViewInit = function () {
        this.prevValue = this.host.nativeElement.value;
    };
    /**
     * Updates the value on the input event.
     */
    IntegerOnlyDirective.prototype.onInput = function (value) {
        var notValid = false;
        if (value.length > 0) {
            if (!this.pattern.test(value)) {
                notValid = true;
            }
            else {
                var number = parseInt(value);
                if (isNaN(number) || (number < this.minValue) || (number > this.maxValue)) {
                    notValid = true;
                }
            }
            if ((value.length > 1) && (value[0] === '0')) {
                notValid = true;
            }
        }
        if (notValid) {
            value = this.prevValue;
        }
        else {
            this.prevValue = value;
        }
        this.writeValue(value);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('min-value'),
        __metadata("design:type", Number)
    ], IntegerOnlyDirective.prototype, "minValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('max-value'),
        __metadata("design:type", Number)
    ], IntegerOnlyDirective.prototype, "maxValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('input', ['$event.target.value']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], IntegerOnlyDirective.prototype, "onInput", null);
    IntegerOnlyDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({ selector: "input[integer-only]" }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], IntegerOnlyDirective);
    return IntegerOnlyDirective;
}(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"]));



/***/ }),

/***/ "./src/app/my-ui-kit/my-ui-kit.module.ts":
/*!***********************************************!*\
  !*** ./src/app/my-ui-kit/my-ui-kit.module.ts ***!
  \***********************************************/
/*! exports provided: MyUiKitModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyUiKitModule", function() { return MyUiKitModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_dialog_overlay_dialog_overlay_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/dialog-overlay/dialog-overlay.component */ "./src/app/my-ui-kit/components/dialog-overlay/dialog-overlay.component.ts");
/* harmony import */ var _directives_image_preview_container_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directives/image-preview-container.directive */ "./src/app/my-ui-kit/directives/image-preview-container.directive.ts");
/* harmony import */ var _directives_image_preview_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directives/image-preview.directive */ "./src/app/my-ui-kit/directives/image-preview.directive.ts");
/* harmony import */ var _directives_integer_only_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/integer-only.directive */ "./src/app/my-ui-kit/directives/integer-only.directive.ts");
/* harmony import */ var _components_image_previewer_image_previewer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/image-previewer/image-previewer.component */ "./src/app/my-ui-kit/components/image-previewer/image-previewer.component.ts");
/* harmony import */ var _services_modal_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/modal-dialog.service */ "./src/app/my-ui-kit/services/modal-dialog.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var MyUiKitModule = /** @class */ (function () {
    function MyUiKitModule() {
    }
    MyUiKitModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _components_dialog_overlay_dialog_overlay_component__WEBPACK_IMPORTED_MODULE_2__["DialogOverlayComponent"],
                _directives_image_preview_container_directive__WEBPACK_IMPORTED_MODULE_3__["ImagePreviewContainerDirective"],
                _directives_image_preview_directive__WEBPACK_IMPORTED_MODULE_4__["ImagePreviewDirective"],
                _directives_integer_only_directive__WEBPACK_IMPORTED_MODULE_5__["IntegerOnlyDirective"],
                _components_image_previewer_image_previewer_component__WEBPACK_IMPORTED_MODULE_6__["ImagePreviewerComponent"],
                _components_dialog_overlay_dialog_overlay_component__WEBPACK_IMPORTED_MODULE_2__["DialogOverlayComponent"]
            ],
            entryComponents: [
                _components_image_previewer_image_previewer_component__WEBPACK_IMPORTED_MODULE_6__["ImagePreviewerComponent"],
                _components_dialog_overlay_dialog_overlay_component__WEBPACK_IMPORTED_MODULE_2__["DialogOverlayComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["BrowserModule"]
            ],
            exports: [
                _directives_image_preview_container_directive__WEBPACK_IMPORTED_MODULE_3__["ImagePreviewContainerDirective"],
                _directives_image_preview_directive__WEBPACK_IMPORTED_MODULE_4__["ImagePreviewDirective"]
            ],
            providers: [
                _services_modal_dialog_service__WEBPACK_IMPORTED_MODULE_7__["ModalDialogService"]
            ]
        })
    ], MyUiKitModule);
    return MyUiKitModule;
}());



/***/ }),

/***/ "./src/app/my-ui-kit/services/modal-dialog.service.ts":
/*!************************************************************!*\
  !*** ./src/app/my-ui-kit/services/modal-dialog.service.ts ***!
  \************************************************************/
/*! exports provided: ModalDialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDialogService", function() { return ModalDialogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_dialog_overlay_dialog_overlay_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/dialog-overlay/dialog-overlay.component */ "./src/app/my-ui-kit/components/dialog-overlay/dialog-overlay.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Service for adding/removing popup dialogs
 */
var ModalDialogService = /** @class */ (function () {
    function ModalDialogService(applicationRef, resolver, injector) {
        this.applicationRef = applicationRef;
        this.resolver = resolver;
        this.injector = injector;
        /**
         * Number of opened popup dialogs
         * @type {number}
         */
        this.numDialogs = 0;
    }
    /**
     * Shows component as popup dialog
     * @param dialogClass - popup component class
     * @param data - some data to attach to popup dialog
     * @returns instance of just created popup dailog
     */
    ModalDialogService.prototype.show = function (dialogClass, data) {
        if (this.numDialogs == 0) {
            this.showOverlay();
        }
        if (this.numDialogs === 0) {
            document.body.style.overflow = 'hidden';
        }
        this.numDialogs++;
        return this.add(dialogClass, data);
    };
    /**
     * Closes existed popup dialog
     * @param dialog - dialog instance
     */
    ModalDialogService.prototype.hide = function (dialog) {
        this.numDialogs--;
        if (this.numDialogs == 0) {
            this.hideOverlay();
            document.body.style.overflow = 'auto';
        }
        this.remove(dialog);
    };
    /**
     * Shows overlay
     */
    ModalDialogService.prototype.showOverlay = function () {
        this.overlayRef = this.add(_components_dialog_overlay_dialog_overlay_component__WEBPACK_IMPORTED_MODULE_1__["DialogOverlayComponent"]);
    };
    /**
     * Hides overlay
     */
    ModalDialogService.prototype.hideOverlay = function () {
        this.remove(this.overlayRef);
        this.overlayRef = null;
    };
    /**
     * Adds component to screen
     * @param component - component class
     * @param data - some data to attach to popup dialog
     * @returns instance of just created popup dailog
     */
    ModalDialogService.prototype.add = function (component, data) {
        var factory = this.resolver.resolveComponentFactory(component);
        var componentRef = factory.create(this.injector);
        this.applicationRef.attachView(componentRef.hostView);
        var domElement = componentRef.hostView.rootNodes[0];
        document.body.appendChild(domElement);
        if (data) {
            componentRef.instance.data = data;
        }
        return componentRef;
    };
    /**
     * Removes dialog from screen
     * @param component - popup dialog instance
     */
    ModalDialogService.prototype.remove = function (component) {
        this.applicationRef.detachView(component.hostView);
        component.destroy();
    };
    ModalDialogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], ModalDialogService);
    return ModalDialogService;
}());



/***/ }),

/***/ "./src/app/services/picsum.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/picsum.service.ts ***!
  \********************************************/
/*! exports provided: PicsumService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PicsumService", function() { return PicsumService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Service for getting images from picsum.photos resource
 */
var PicsumService = /** @class */ (function () {
    function PicsumService(http) {
        this.http = http;
        this.ENDPOINTS_ROOT = 'https://picsum.photos/';
    }
    /**
     * Requests all accesible photos
     * @returns Observable of PicsumList
     */
    PicsumService.prototype.getList = function () {
        var _this = this;
        return this.http.get(this.ENDPOINTS_ROOT + "list").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (list) { return list.map(function (item) { return (__assign({}, item, { preview_url: _this.getLinkById(item.id), url: _this.getLinkById(item.id, item.width, item.height) })); }); }));
    };
    /**
     * Returns Observable of random `size` photos
     * @param size - number of random photos to return
     * @returns Observable of PicsumList
     */
    PicsumService.prototype.getRandomList = function (size) {
        return this.getList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (list) {
            var randomList = new Array(size);
            for (var i = 0; i < size; i++) {
                var randomIndex = Math.round(Math.random() * (list.length - 1));
                randomList[i] = list.splice(randomIndex, 1)[0];
            }
            return randomList;
        }));
    };
    /**
     * Creates link to picture with special width & height
     * @param id - picture id
     * @param width - picture width
     * @param height - picture height
     * @returns link to picture
     */
    PicsumService.prototype.getLinkById = function (id, width, height) {
        if (width === void 0) { width = 300; }
        var link = "" + this.ENDPOINTS_ROOT + width + "/";
        if (height != null) {
            link += height + "/";
        }
        return link + "?image=" + id;
    };
    PicsumService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PicsumService);
    return PicsumService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\projects\image-previewer\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map