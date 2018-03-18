webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__qaa_qaa_component__ = __webpack_require__("./src/app/qaa/qaa.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__qaa_create_qaa_create_component__ = __webpack_require__("./src/app/qaa-create/qaa-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__qaa_delete_qaa_delete_component__ = __webpack_require__("./src/app/qaa-delete/qaa-delete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__qaa_edit_qaa_edit_component__ = __webpack_require__("./src/app/qaa-edit/qaa-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__qaa_edit_modal_qaa_edit_modal_component__ = __webpack_require__("./src/app/qaa-edit-modal/qaa-edit-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__todo_todo_component__ = __webpack_require__("./src/app/todo/todo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__todo_create_todo_create_component__ = __webpack_require__("./src/app/todo-create/todo-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__todo_edit_modal_todo_edit_modal_component__ = __webpack_require__("./src/app/todo-edit-modal/todo-edit-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__todo_edit_todo_edit_component__ = __webpack_require__("./src/app/todo-edit/todo-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__todo_delete_todo_delete_component__ = __webpack_require__("./src/app/todo-delete/todo-delete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__words_words_component__ = __webpack_require__("./src/app/words/words.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__words_create_words_create_component__ = __webpack_require__("./src/app/words-create/words-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__words_edit_words_edit_component__ = __webpack_require__("./src/app/words-edit/words-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__words_edit_modal_words_edit_modal_component__ = __webpack_require__("./src/app/words-edit-modal/words-edit-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__words_delete_words_delete_component__ = __webpack_require__("./src/app/words-delete/words-delete.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var appRoutes = [
    {
        path: 'qaas',
        component: __WEBPACK_IMPORTED_MODULE_5__qaa_qaa_component__["a" /* QaaComponent */],
        data: { title: 'QaA' }
    },
    {
        path: 'todo',
        component: __WEBPACK_IMPORTED_MODULE_11__todo_todo_component__["a" /* TodoComponent */],
        data: { title: 'To-do list' }
    },
    {
        path: 'words',
        component: __WEBPACK_IMPORTED_MODULE_16__words_words_component__["a" /* WordsComponent */],
        data: { title: 'Words' }
    },
    {
        path: '',
        redirectTo: '/qaas',
        pathMatch: 'full'
    },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__qaa_qaa_component__["a" /* QaaComponent */],
                __WEBPACK_IMPORTED_MODULE_7__qaa_create_qaa_create_component__["a" /* QaaCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_8__qaa_delete_qaa_delete_component__["a" /* QaaDeleteComponent */],
                __WEBPACK_IMPORTED_MODULE_9__qaa_edit_qaa_edit_component__["a" /* QaaEditComponent */],
                __WEBPACK_IMPORTED_MODULE_10__qaa_edit_modal_qaa_edit_modal_component__["a" /* QaaEditModalComponent */],
                __WEBPACK_IMPORTED_MODULE_11__todo_todo_component__["a" /* TodoComponent */],
                __WEBPACK_IMPORTED_MODULE_12__todo_create_todo_create_component__["a" /* TodoCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_13__todo_edit_modal_todo_edit_modal_component__["a" /* TodoEditModalComponent */],
                __WEBPACK_IMPORTED_MODULE_14__todo_edit_todo_edit_component__["a" /* TodoEditComponent */],
                __WEBPACK_IMPORTED_MODULE_15__todo_delete_todo_delete_component__["a" /* TodoDeleteComponent */],
                __WEBPACK_IMPORTED_MODULE_16__words_words_component__["a" /* WordsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__words_create_words_create_component__["a" /* WordsCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_18__words_edit_words_edit_component__["a" /* WordsEditComponent */],
                __WEBPACK_IMPORTED_MODULE_19__words_edit_modal_words_edit_modal_component__["a" /* WordsEditModalComponent */],
                __WEBPACK_IMPORTED_MODULE_20__words_delete_words_delete_component__["a" /* WordsDeleteComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                )
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/qaa-create/qaa-create.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/qaa-create/qaa-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\r\n  <div class=\"w3-card-4\">\r\n    <div class=\"w3-container w3-green\">\r\n      <h2>New QaA</h2>\r\n    </div>\r\n    <form name=\"newTaskForm\" id=\"newTaskForm\" class=\"w3-container\r\n    aboutNewTaskForm\" method=\"post\" (ngSubmit)=\"addQaA()\" #qaaForm=\"ngForm\">\r\n      <p>\r\n        <label class=\"newTaskType\">Title:</label>\r\n        <textarea class=\"w3-input\" name=\"newTaskTitle\" cols=\"40\" rows=\"1\"\r\n        [(ngModel)]=\"qaa.title\" name=\"title\" required></textarea>\r\n      </p>\r\n      <p>\r\n        <label class=\"newTaskType\">Description:</label>\r\n        <textarea class=\"w3-input\" name=\"newTaskDescription\" cols=\"40\" rows=\"3\"\r\n        [(ngModel)]=\"qaa.description\" name=\"description\" required></textarea>\r\n      </p>\r\n      <div>\r\n        <label class=\"newTaskType\">Type:</label>\r\n      </div>\r\n      <select [(ngModel)]=\"qaa.type\" name=\"type\" required>\r\n        <option value=\"\"></option>\r\n        <option value=\"Javascript\">Javascript</option>\r\n        <option value=\"HTML\">HTML</option>\r\n        <option value=\"CSS\">CSS</option>\r\n        <option value=\"Data structures\">Data structures</option>\r\n        <option value=\"Other\">Other</option>\r\n      </select>\r\n    </form>\r\n    <button class=\"col-md-2 addBtn btn btn-success\" form=\"newTaskForm\"\r\n    type=\"submit\" [disabled]=\"!qaaForm.form.valid\">Submit</button>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/qaa-create/qaa-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QaaCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QaaCreateComponent = /** @class */ (function () {
    function QaaCreateComponent(http) {
        this.http = http;
        this.qaa = {};
    }
    QaaCreateComponent.prototype.ngOnInit = function () {
    };
    QaaCreateComponent.prototype.addQaA = function () {
        this.qaaAll.push(this.qaa);
        this.http.post('/api/qaa', this.qaa)
            .subscribe(function (res) {
        }, function (err) {
            console.log(err);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], QaaCreateComponent.prototype, "qaaAll", void 0);
    QaaCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-qaa-create',
            template: __webpack_require__("./src/app/qaa-create/qaa-create.component.html"),
            styles: [__webpack_require__("./src/app/qaa-create/qaa-create.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], QaaCreateComponent);
    return QaaCreateComponent;
}());



/***/ }),

/***/ "./src/app/qaa-delete/qaa-delete.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/qaa-delete/qaa-delete.component.html":
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" class=\"btn btn-danger btn-md deleteBtn\"\r\n(click)=\"deleteQaa(qaa._id, qaa)\">Delete</button>"

/***/ }),

/***/ "./src/app/qaa-delete/qaa-delete.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QaaDeleteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QaaDeleteComponent = /** @class */ (function () {
    function QaaDeleteComponent(http) {
        this.http = http;
        this.qaa = {};
    }
    QaaDeleteComponent.prototype.ngOnInit = function () {
    };
    QaaDeleteComponent.prototype.deleteQaa = function (id) {
        this.qaaAll.splice(-1, 1);
        this.http.delete('/api/qaa/' + id)
            .subscribe(function (res) {
        }, function (err) {
            console.log(err);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], QaaDeleteComponent.prototype, "qaaAll", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], QaaDeleteComponent.prototype, "qaa", void 0);
    QaaDeleteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-qaa-delete',
            template: __webpack_require__("./src/app/qaa-delete/qaa-delete.component.html"),
            styles: [__webpack_require__("./src/app/qaa-delete/qaa-delete.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], QaaDeleteComponent);
    return QaaDeleteComponent;
}());



/***/ }),

/***/ "./src/app/qaa-edit-modal/qaa-edit-modal.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/qaa-edit-modal/qaa-edit-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <!-- Trigger the modal with a button -->\r\n  <!-- Modal -->\r\n  <div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n      <!-- Modal content-->\r\n      <div class=\"modal-content\">\r\n        <div id=\"editModalHeader\" class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\"\r\n          data-dismiss=\"modal\">&times;</button>\r\n          <h4 class=\"modal-title\">Edit QaA</h4>\r\n        </div>\r\n        <div class=\"modal-body editQaABody\">\r\n          <form *ngIf=\"qaa\" id=\"editTaskForm\" class=\"w3-container\" method=\"post\"\r\n          (ngSubmit)=\"editQaa(id)\">\r\n            <p>\r\n              <label class=\"newTaskType\">Title:</label>\r\n              <textarea class=\"w3-input\" name=\"editTitle\" cols=\"40\" rows=\"1\"\r\n              [(ngModel)]=\"qaa.title\" name=\"title\" required></textarea>\r\n            </p>\r\n            <p>\r\n              <label class=\"newTaskType\">Description:</label>\r\n              <textarea class=\"w3-input editQaADescription\"\r\n              name=\"editDescription\" cols=\"40\" rows=\"1\"\r\n              [(ngModel)]=\"qaa.description\" name=\"description\"\r\n              required></textarea>\r\n            </p>\r\n            <div>\r\n              <label class=\"newTaskType\">Type</label>\r\n            </div>\r\n            <select name=\"editType\" id=\"editSelect\"\r\n            (change)=\"changeColor($event)\" [(ngModel)]=\"qaa.type\"\r\n            name=\"type\" required>\r\n              <option value=\"\"></option>\r\n              <option value=\"Javascript\">Javascript</option>\r\n              <option value=\"HTML\">HTML</option>\r\n              <option value=\"CSS\">CSS</option>\r\n              <option value=\"Data structures\">Data structures</option>\r\n              <option value=\"Other\">Other</option>\r\n            </select>\r\n          </form>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button class=\"col-md-2 editBtn btn btn-success\"\r\n          form=\"editTaskForm\" type=\"submit\">Submit</button>\r\n          <button type=\"button\" class=\"btn btn-default\"\r\n          data-dismiss=\"modal\">Close</button>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/qaa-edit-modal/qaa-edit-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QaaEditModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QaaEditModalComponent = /** @class */ (function () {
    function QaaEditModalComponent() {
        this.qaa = {};
    }
    QaaEditModalComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], QaaEditModalComponent.prototype, "qaaAll", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], QaaEditModalComponent.prototype, "qaa", void 0);
    QaaEditModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-qaa-edit-modal',
            template: __webpack_require__("./src/app/qaa-edit-modal/qaa-edit-modal.component.html"),
            styles: [__webpack_require__("./src/app/qaa-edit-modal/qaa-edit-modal.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], QaaEditModalComponent);
    return QaaEditModalComponent;
}());



/***/ }),

/***/ "./src/app/qaa-edit/qaa-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/qaa-edit/qaa-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<button id=\"modalButton\" type=\"button\" class=\"modal-button btn btn-info btn-md\r\neditBtn\" data-toggle=\"modal\" data-target=\"#myModal\"\r\n(click)=\"editModalForm($event, testing)\">Edit</button>"

/***/ }),

/***/ "./src/app/qaa-edit/qaa-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QaaEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QaaEditComponent = /** @class */ (function () {
    function QaaEditComponent(http) {
        this.http = http;
        this.testing = {};
        this.test = {};
        this.updateTesting = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.numberOfLi = 7;
    }
    QaaEditComponent.prototype.ngOnInit = function () {
    };
    QaaEditComponent.prototype.editQaa = function (id) {
        this.http.put('/api/qaa/' + id, this.testing)
            .subscribe(function (res) {
        }, function (err) {
            console.log(err);
        });
    };
    // giving modal form placeholder values for each input txt
    QaaEditComponent.prototype.editModalForm = function ($event, elem) {
        var li = document.getElementsByTagName("LI");
        var i;
        console.log(elem);
        console.log(this.testing);
        this.test = elem;
        this.updateTesting.emit(this.test);
        for (i = this.numberOfLi; i < this.qaaAll.length; i++) {
            if (this.qaaAll[i]._id == elem._id) {
                this.test = elem;
            }
        }
        this.elem = $event.target;
        // change the header color to the type of the task
        switch (__WEBPACK_IMPORTED_MODULE_2_jquery__(this.elem).closest("li")[0].children[1].children[0].innerHTML) {
            case "Javascript":
                __WEBPACK_IMPORTED_MODULE_2_jquery__("#editModalHeader").css('background', 'blueviolet');
                break;
            case "CSS":
                __WEBPACK_IMPORTED_MODULE_2_jquery__("#editModalHeader").css('background', '#ffc900');
                break;
            case "HTML":
                __WEBPACK_IMPORTED_MODULE_2_jquery__("#editModalHeader").css('background', '#048E16');
                break;
            case "Data structures":
                __WEBPACK_IMPORTED_MODULE_2_jquery__("#editModalHeader").css('background', '#900C3E');
                break;
            case "Other":
                __WEBPACK_IMPORTED_MODULE_2_jquery__("#editModalHeader").css('background', '#FFFF');
                break;
        }
    };
    QaaEditComponent.prototype.changeColor = function ($event) {
        console.log($event);
        var liToChange = this.elem.closest("li");
        var modalElem = $event.target;
        var liClasses = __WEBPACK_IMPORTED_MODULE_2_jquery__(liToChange).attr('class').split(' ');
        if (liClasses.length > 2) {
            __WEBPACK_IMPORTED_MODULE_2_jquery__(liToChange).removeClass(liClasses.pop());
        }
        var liContentClasses = __WEBPACK_IMPORTED_MODULE_2_jquery__(liToChange.children[2]).attr('class').split(' ');
        if (liContentClasses.length > 1) {
            __WEBPACK_IMPORTED_MODULE_2_jquery__(liToChange.children[2]).removeClass(liContentClasses.pop());
        }
        // change the header color to the type of the task
        switch (modalElem.value) {
            case "Javascript":
                __WEBPACK_IMPORTED_MODULE_2_jquery__("#editModalHeader").css('background', 'blueviolet');
                liToChange.classList.add("javascript");
                liToChange.children[2].classList.add("javascript-content");
                break;
            case "CSS":
                __WEBPACK_IMPORTED_MODULE_2_jquery__("#editModalHeader").css('background', '#ffc900');
                liToChange.classList.add("css");
                liToChange.children[2].classList.add("css-content");
                break;
            case "HTML":
                __WEBPACK_IMPORTED_MODULE_2_jquery__("#editModalHeader").css('background', '#048E16');
                liToChange.classList.add("html");
                liToChange.children[2].classList.add("html-content");
                break;
            case "Data structures":
                __WEBPACK_IMPORTED_MODULE_2_jquery__("#editModalHeader").css('background', '#900C3E');
                liToChange.classList.add("DataStructures");
                liToChange.children[2].classList.add("DataStructures-content");
                break;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], QaaEditComponent.prototype, "qaaAll", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], QaaEditComponent.prototype, "testing", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], QaaEditComponent.prototype, "test", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], QaaEditComponent.prototype, "updateTesting", void 0);
    QaaEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-qaa-edit',
            template: __webpack_require__("./src/app/qaa-edit/qaa-edit.component.html"),
            styles: [__webpack_require__("./src/app/qaa-edit/qaa-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], QaaEditComponent);
    return QaaEditComponent;
}());



/***/ }),

/***/ "./src/app/qaa/qaa.component.css":
/***/ (function(module, exports) {

module.exports = ".QaAPara {\r\n    width: 100%;\r\n    white-space: -moz-pre-wrap; /* Firefox */\r\n    white-space: -pre-wrap; /* ancient Opera */\r\n    white-space: -o-pre-wrap; /* newer Opera */\r\n    white-space: pre-wrap; /* Chrome; W3C standard */\r\n    word-wrap: break-word; /* IE */\r\n    font-family: Georgia, 'Times New Roman', Times, serif;\r\n}\r\n\r\n.editQaABody {\r\n    height: 350px;\r\n}\r\n\r\n.editQaADescription {\r\n    height: 100px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/qaa/qaa.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container QaA\">\r\n  <div class=\"row\">\r\n    <app-qaa-create [qaaAll]=\"qaaAll\"></app-qaa-create>\r\n\r\n    <div class=\"col-md-10\">\r\n      <h2>QaA</h2>\r\n    </div>\r\n\r\n    <div class=\"col-md-1 selector\">\r\n      <select id=\"selector\">\r\n        <option value=\"all\" selected=\"selected\">all</option>\r\n        <option value=\"inprogress\">inprogress</option>\r\n        <option value=\"passed\">passed</option>\r\n        <option value=\"failed\">failed</option>\r\n        <option value=\"Javascript\">Javascript</option>\r\n        <option value=\"HTML\">HTML</option>\r\n        <option value=\"CSS\">CSS</option>\r\n        <option value=\"Data structures\">Data structures</option>\r\n        <option value=\"Other\">Other</option>\r\n      </select>\r\n    </div>\r\n\r\n    <div class=\"col-md-12\">\r\n      <p>Number of QaA: {{ numberOfQaA }}</p>\r\n    </div>\r\n\r\n    <div class=\"col-md-3\">\r\n      <a (click)=\"scrollToTheEndOfPage()\">Scroll to the bottom</a>\r\n    </div>\r\n\r\n    <ul class=\"col-md-12\" id=\"myUL\">\r\n      <div *ngFor=\"let qaa of qaaAll.reverse(); let last = last; let i = index\"\r\n      [ngClass]=\"isLast(last)\">\r\n        <li (click)=\"dropFunction($event)\" class=\"aboutDefault aboutDropbtn2\">\r\n          <div class=\"col-md-12 QaAPara\">{{ qaa.title }}</div>\r\n          <div class=\"col-md-12\">\r\n            <span class=\"label label-default\">{{ qaa.type }}</span>\r\n          </div>\r\n          <div class=\"aboutDropdown-content\" id=\"drop\">\r\n            <div class=\"col-md-8\">\r\n              <p class=\"dropPara QaAPara\">{{ qaa.description }}</p>\r\n            </div>\r\n            <div class=\"pull-right col-md-4\">\r\n              <span class=\"badge\">Posted {{ qaa.create_date }}</span>\r\n              <br>\r\n              <app-qaa-edit [qaaAll]=\"qaaAll\" [testing]=\"qaaAll[i]\"\r\n              (updateTesting)=\"onNotify($event)\"></app-qaa-edit>\r\n              <br>\r\n              <app-qaa-delete [qaaAll]=\"qaaAll\" [qaa]=\"qaa\"></app-qaa-delete>\r\n            </div>\r\n          </div>\r\n        </li>\r\n      </div>\r\n    </ul>\r\n\r\n    <div class=\"col-md-3\">\r\n      <a (click)=\"scrollToTheStartOfPage()\">Scroll to the top</a>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n<app-qaa-edit-modal [qaa]=\"test\"></app-qaa-edit-modal>\r\n"

/***/ }),

/***/ "./src/app/qaa/qaa.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QaaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QaaComponent = /** @class */ (function () {
    function QaaComponent(http) {
        this.http = http;
        this.qaa = {};
        this.qaas = {};
        this.numberOfLi = 7;
        this.qaaAll = [];
    }
    QaaComponent.prototype.onNotify = function (val) {
        console.log(val);
        this.test = val;
    };
    QaaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/api/qaa').subscribe(function (data) {
            _this.qaaAll = data;
        });
        __WEBPACK_IMPORTED_MODULE_2_jquery__(document).ready(function () {
            __WEBPACK_IMPORTED_MODULE_2_jquery__("#QaA").addClass('active');
            document.title = "QaA - Questions and Answers";
        });
        __WEBPACK_IMPORTED_MODULE_2_jquery__('#selector').change(function () {
            var li = document.getElementsByTagName("LI");
            var i;
            for (i = this.numberOfLi; i < li.length; i++) {
                if (this.value == "passed") {
                    if (li[i].children[1].children[0].innerHTML == "passed") {
                        li[i].style.display = "flex";
                    }
                    else {
                        li[i].style.display = "none";
                    }
                }
                else if (this.value == "inprogress") {
                    if (li[i].children[1].children[0].innerHTML == "inprogress") {
                        li[i].style.display = "flex";
                    }
                    else {
                        li[i].style.display = "none";
                    }
                }
                else if (this.value == "failed") {
                    if (li[i].children[1].children[0].innerHTML == "failed") {
                        li[i].style.display = "flex";
                    }
                    else {
                        li[i].style.display = "none";
                    }
                }
                if (this.value == "Javascript") {
                    if (li[i].children[1].children[0].innerHTML == "Javascript") {
                        li[i].style.display = "flex";
                    }
                    else {
                        li[i].style.display = "none";
                    }
                }
                else if (this.value == "HTML") {
                    if (li[i].children[1].children[0].innerHTML == "HTML") {
                        li[i].style.display = "flex";
                    }
                    else {
                        li[i].style.display = "none";
                    }
                }
                else if (this.value == "CSS") {
                    if (li[i].children[1].children[0].innerHTML == "CSS") {
                        li[i].style.display = "flex";
                    }
                    else {
                        li[i].style.display = "none";
                    }
                }
                else if (this.value == "Data structures") {
                    if (li[i].children[1].children[0].innerHTML == "Data structures") {
                        li[i].style.display = "flex";
                    }
                    else {
                        li[i].style.display = "none";
                    }
                }
                else if (this.value == "Other") {
                    if (li[i].children[1].children[0].innerHTML == "Other") {
                        li[i].style.display = "flex";
                    }
                    else {
                        li[i].style.display = "none";
                    }
                }
                else {
                    li[i].style.display = "flex";
                }
            }
        });
    };
    QaaComponent.prototype.scrollToTheEndOfPage = function () {
        window.scrollTo(0, document.body.scrollHeight);
    };
    QaaComponent.prototype.scrollToTheStartOfPage = function () {
        window.scrollTo(0, 0);
    };
    QaaComponent.prototype.isLast = function (check) {
        if (check == true) {
            var li = document.getElementsByTagName("LI");
            var i;
            this.numberOfQaA = li.length - this.numberOfLi;
            for (i = this.numberOfLi; i < li.length; i++) {
                switch (li[i].children[1].children[0].innerHTML) {
                    case "Javascript":
                        li[i].classList.add("javascript");
                        li[i].children[2].classList.add("javascript-content");
                        break;
                    case "HTML":
                        li[i].classList.add("html");
                        li[i].children[2].classList.add("html-content");
                        break;
                    case "CSS":
                        li[i].classList.add("css");
                        li[i].children[2].classList.add("css-content");
                        break;
                    case "Data structures":
                        li[i].classList.add("DataStructures");
                        li[i].children[2].classList.add("DataStructures-content");
                }
                /*switch(li[i].children[1].children[0].innerHTML){
                  case "passed":
                    li[i].classList.add("passed");
                    break;
                  case "failed":
                    li[i].classList.add("failed");
                    li[i].children[1].classList.add("failed-content");
                    break;
                }*/
                /*if(li[i].children[2].children[4].innerHTML == "") {
                  li[i].children[2].children[4].innerHTML = "not completed";
                }*/
            }
        }
    };
    // switching between selected values
    QaaComponent.prototype.dropFunction = function ($event) {
        var elem = $event.target;
        if (elem.tagName !== "LI") {
            elem = __WEBPACK_IMPORTED_MODULE_2_jquery__(elem).closest("li")[0];
        }
        elem.children[2].classList.toggle("show");
    };
    QaaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-qaa',
            template: __webpack_require__("./src/app/qaa/qaa.component.html"),
            styles: [__webpack_require__("./src/app/qaa/qaa.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], QaaComponent);
    return QaaComponent;
}());



/***/ }),

/***/ "./src/app/todo-create/todo-create.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/todo-create/todo-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n  <div class=\"w3-card-4\">\n    <div class=\"w3-container w3-green\">\n      <h2>New task</h2>\n    </div>\n    <form name=\"newTaskForm\" id=\"newTaskForm\" class=\"w3-container newTaskForm\"\n    method=\"post\" (ngSubmit)=\"addTodo()\" #todoForm=\"ngForm\">\n      <p>\n        <label class=\"newTaskType\">Title:</label>\n        <input class=\"w3-input\" name=\"newTaskTitle\" id=\"inputTitle\" type=\"text\"\n        [(ngModel)]=\"todo.title\" name=\"title\" required>\n      </p>\n      <p>\n        <label class=\"newTaskType\">Description:</label>\n        <input class=\"w3-input\" name=\"newTaskDescription\" id=\"inputDescription\"\n        type=\"text\" [(ngModel)]=\"todo.description\" name=\"description\" required>\n      </p>\n      <div>\n        <label class=\"newTaskType\">Type:</label>\n      </div>\n      <select [(ngModel)]=\"todo.type\" name=\"type\" required>\n        <option value=\"\"></option>\n        <option value=\"work\">work</option>\n        <option value=\"watch later\">watch later</option>\n        <option value=\"personal\">personal</option>\n        <option value=\"school\">school</option>\n      </select>\n    </form>\n    <button class=\"col-md-2 addBtn btn btn-success\" form=\"newTaskForm\"\n    type=\"submit\" [disabled]=\"!todoForm.form.valid\">Submit</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/todo-create/todo-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoCreateComponent = /** @class */ (function () {
    function TodoCreateComponent(http) {
        this.http = http;
        this.todo = {};
    }
    TodoCreateComponent.prototype.ngOnInit = function () {
    };
    TodoCreateComponent.prototype.addTodo = function () {
        this.todoAll.push(this.todo);
        this.http.post('/api/todo', this.todo)
            .subscribe(function (res) {
        }, function (err) {
            console.log(err);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], TodoCreateComponent.prototype, "todoAll", void 0);
    TodoCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-todo-create',
            template: __webpack_require__("./src/app/todo-create/todo-create.component.html"),
            styles: [__webpack_require__("./src/app/todo-create/todo-create.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], TodoCreateComponent);
    return TodoCreateComponent;
}());



/***/ }),

/***/ "./src/app/todo-delete/todo-delete.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/todo-delete/todo-delete.component.html":
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" class=\"btn btn-danger btn-md deleteBtn\"\n(click)=\"deleteTodo(todo._id, todo)\">Delete</button>"

/***/ }),

/***/ "./src/app/todo-delete/todo-delete.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoDeleteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoDeleteComponent = /** @class */ (function () {
    function TodoDeleteComponent(http) {
        this.http = http;
        this.todo = {};
    }
    TodoDeleteComponent.prototype.ngOnInit = function () {
    };
    TodoDeleteComponent.prototype.deleteTodo = function (id) {
        this.todoAll.splice(-1, 1);
        this.http.delete('/api/todo/' + id)
            .subscribe(function (res) {
        }, function (err) {
            console.log(err);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], TodoDeleteComponent.prototype, "todoAll", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], TodoDeleteComponent.prototype, "todo", void 0);
    TodoDeleteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-todo-delete',
            template: __webpack_require__("./src/app/todo-delete/todo-delete.component.html"),
            styles: [__webpack_require__("./src/app/todo-delete/todo-delete.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], TodoDeleteComponent);
    return TodoDeleteComponent;
}());



/***/ }),

/***/ "./src/app/todo-edit-modal/todo-edit-modal.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/todo-edit-modal/todo-edit-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <!-- Trigger the modal with a button -->\n  <!-- Modal -->\n  <div class=\"modal fade\" id=\"editModal\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n      <!-- Modal content-->\n      <div class=\"modal-content\">\n        <div id=\"editModalHeader\" class=\"modal-header\">\n          <button type=\"button\" class=\"close\"\n          data-dismiss=\"modal\">&times;</button>\n          <h4 class=\"modal-title\">Edit Task</h4>\n        </div>\n        <div class=\"modal-body\">\n          <form *ngIf=\"todo\" id=\"editTaskForm\" class=\"w3-container\"\n          method=\"post\" (ngSubmit)=\"editTodo(id)\">\n            <p>\n              <label class=\"newTaskType\">Title:</label>\n              <input id=\"test_input\" class=\"w3-input\" name=\"title\"\n              type=\"text\" [(ngModel)]=\"todo.title\" required>\n            </p>\n            <p>\n              <label class=\"newTaskType\">Description:</label>\n              <input class=\"w3-input\" name=\"description\"\n              [(ngModel)]=\"todo.description\" type=\"text\" required>\n            </p>\n            <div>\n              <label class=\"newTaskType\">Type</label>\n            </div>\n            <select name=\"type\" id=\"editSelect\" [(ngModel)]=\"todo.type\"\n            required>\n              <option value=\"\"></option>\n              <option value=\"work\">work</option>\n              <option value=\"personal\">personal</option>\n              <option value=\"school\">school</option>\n              <option value=\"watch later\">watch later</option>\n            </select>\n          </form>\n        </div>\n        <div class=\"modal-footer\">\n          <button class=\"col-md-2 editBtn btn btn-success\" form=\"editTaskForm\"\n          type=\"submit\">Submit</button>\n          <button type=\"button\" class=\"btn btn-default\"\n          data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/todo-edit-modal/todo-edit-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoEditModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TodoEditModalComponent = /** @class */ (function () {
    function TodoEditModalComponent() {
        this.todo = {};
    }
    TodoEditModalComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], TodoEditModalComponent.prototype, "todoAll", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], TodoEditModalComponent.prototype, "todo", void 0);
    TodoEditModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-todo-edit-modal',
            template: __webpack_require__("./src/app/todo-edit-modal/todo-edit-modal.component.html"),
            styles: [__webpack_require__("./src/app/todo-edit-modal/todo-edit-modal.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TodoEditModalComponent);
    return TodoEditModalComponent;
}());



/***/ }),

/***/ "./src/app/todo-edit/todo-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/todo-edit/todo-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<button id=\"modalButton\" type=\"button\" class=\"modal-button btn btn-success\nbtn-md editBtn\" data-toggle=\"modal\" data-target=\"#editModal\"\n(click)=\"editModalForm($event, testing)\">Edit</button>"

/***/ }),

/***/ "./src/app/todo-edit/todo-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoEditComponent = /** @class */ (function () {
    function TodoEditComponent(http) {
        this.http = http;
        this.testing = {};
        this.test = {};
        this.updateTesting = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.numberOfLi = 7;
    }
    TodoEditComponent.prototype.ngOnInit = function () {
    };
    TodoEditComponent.prototype.editTodo = function (id) {
        this.http.put('/api/todo/' + id, this.testing)
            .subscribe(function (res) {
        }, function (err) {
            console.log(err);
        });
    };
    // giving modal form placeholder values for each input txt
    TodoEditComponent.prototype.editModalForm = function ($event, elem) {
        var li = document.getElementsByTagName("LI");
        var i;
        console.log(elem);
        console.log(this.testing);
        this.test = elem;
        this.updateTesting.emit(this.test);
        for (i = this.numberOfLi; i < this.todoAll.length; i++) {
            if (this.todoAll[i]._id == elem._id) {
                this.test = elem;
            }
        }
        this.elem = $event.target;
        // change the header color to the type of the task
        switch (elem.type) {
            case "work":
                __WEBPACK_IMPORTED_MODULE_2_jquery__("#editModalHeader").css('background', 'blueviolet');
                break;
            case "personal":
                __WEBPACK_IMPORTED_MODULE_2_jquery__("#editModalHeader").css('background', '#ffc900');
                break;
            case "school":
                __WEBPACK_IMPORTED_MODULE_2_jquery__("#editModalHeader").css('background', '#048E16');
                break;
            case "watch later":
                __WEBPACK_IMPORTED_MODULE_2_jquery__("#editModalHeader").css('background', '#900C3E');
                break;
        }
    };
    TodoEditComponent.prototype.changeColor = function ($event) {
        console.log($event);
        var liToChange = this.elem.closest("li");
        var modalElem = $event.target;
        var liClasses = __WEBPACK_IMPORTED_MODULE_2_jquery__(liToChange).attr('class').split(' ');
        if (liClasses.length > 1) {
            __WEBPACK_IMPORTED_MODULE_2_jquery__(liToChange).removeClass(liClasses.pop());
        }
        var liContentClasses = __WEBPACK_IMPORTED_MODULE_2_jquery__(liToChange.children[2]).attr('class').split(' ');
        if (liContentClasses.length > 1) {
            __WEBPACK_IMPORTED_MODULE_2_jquery__(liToChange.children[2]).removeClass(liContentClasses.pop());
        }
        // change the header color to the type of the task
        switch (modalElem.value) {
            case "Javascript":
                __WEBPACK_IMPORTED_MODULE_2_jquery__("#editModalHeader").css('background', 'blueviolet');
                liToChange.classList.add("javascript");
                liToChange.children[2].classList.add("javascript-content");
                break;
            case "CSS":
                __WEBPACK_IMPORTED_MODULE_2_jquery__("#editModalHeader").css('background', '#ffc900');
                liToChange.classList.add("css");
                liToChange.children[2].classList.add("css-content");
                break;
            case "HTML":
                __WEBPACK_IMPORTED_MODULE_2_jquery__("#editModalHeader").css('background', '#048E16');
                liToChange.classList.add("html");
                liToChange.children[2].classList.add("html-content");
                break;
            case "Data structures":
                __WEBPACK_IMPORTED_MODULE_2_jquery__("#editModalHeader").css('background', '#900C3E');
                liToChange.classList.add("DataStructures");
                liToChange.children[2].classList.add("DataStructures-content");
                break;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], TodoEditComponent.prototype, "todoAll", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], TodoEditComponent.prototype, "testing", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], TodoEditComponent.prototype, "test", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], TodoEditComponent.prototype, "updateTesting", void 0);
    TodoEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-todo-edit',
            template: __webpack_require__("./src/app/todo-edit/todo-edit.component.html"),
            styles: [__webpack_require__("./src/app/todo-edit/todo-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], TodoEditComponent);
    return TodoEditComponent;
}());



/***/ }),

/***/ "./src/app/todo/todo.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/todo/todo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container todolist\">\r\n  <div class=\"row\">\r\n\r\n    <app-todo-create [todoAll]=\"todoAll\"></app-todo-create>\r\n\r\n    <div class=\"col-md-10\">\r\n      <h2>Tasks</h2>\r\n    </div>\r\n\r\n\r\n    <div class=\"col-md-1 selector\">\r\n      <select id=\"selector\" ng-options=\"view.select for view in views\"\r\n      ng-change=\"select()\">\r\n        <option value=\"\">none</option>\r\n\r\n      </select>\r\n    </div>\r\n\r\n    <div class=\"col-md-12\">\r\n      <p ng-model=\"numberOfQaA\">Number of todos: {{todoAll.length}}\r\n      </p>\r\n    </div>\r\n    <ul class=\"col-md-12\" id=\"myUL\">\r\n      <div *ngFor=\"let todo of todoAll.reverse(); let last = last; let i =\r\n      index\" [ngClass]=\"isLast(last)\">\r\n        <li (click)=\"dropFunction($event)\" class=\"default dropbtn2\">\r\n          <div>\r\n            <img class=\"checkImg\" src=\"..\\..\\assets\\img\\check2.png\">\r\n            <img class=\"checkImg\" src=\"..\\..\\assets\\img\\disable.png\">\r\n            <img class=\"checkImg\" src=\"..\\..\\assets\\img\\clock.png\">\r\n            <span>{{todo.title}}</span>\r\n          </div>\r\n          <div class=\"dropdown-content\" id=\"drop\">\r\n            <p class=\"label label-default\">Posted {{todo.create_date}}</p>\r\n            <p class=\"label label-default\">{{todo.type}}</p>\r\n            <p class=\"label label-default\">{{todo.state}}</p>\r\n            <p class=\"dropPara\">{{todo.description}}</p>\r\n            <div class=\"modal-button\">\r\n              <app-todo-edit [todoAll]=\"todoAll\" [testing]=\"todoAll[i]\"\r\n              (updateTesting)=\"onNotify($event)\"></app-todo-edit>\r\n\r\n              <app-todo-delete [todoAll]=\"todoAll\"\r\n              [todo]=\"todo\"></app-todo-delete>\r\n            </div>\r\n          </div>\r\n          <span class=\"closeBtn\" (click)=\"removeTask($event,\r\n          todo)\">&#215;</span>\r\n          <span class=\"check\" (click)=\"checkTask($event, todo)\">&#x2713;</span>\r\n        </li>\r\n      </div>\r\n\r\n    </ul>\r\n\r\n    <app-todo-edit-modal [todo]=\"test\"></app-todo-edit-modal>\r\n\r\n\r\n  </div>\r\n</div>\r\n<br>"

/***/ }),

/***/ "./src/app/todo/todo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoComponent = /** @class */ (function () {
    function TodoComponent(http) {
        this.http = http;
        this.numberOfLi = 7;
        this.isLast = function (check) {
            if (check == true) {
                var li = document.getElementsByTagName("LI");
                var i;
                this.numberOfTodo = li.length - this.numberOfLi;
                for (i = this.numberOfLi; i < li.length; i++) {
                    switch (li[i].children[1].children[1].innerHTML) {
                        case "work":
                            li[i].classList.add("work");
                            li[i].children[1].classList.add("work-content");
                            break;
                        case "personal":
                            li[i].classList.add("personal");
                            li[i].children[1].classList.add("personal-content");
                            break;
                        case "school":
                            li[i].classList.add("school");
                            li[i].children[1].classList.add("school-content");
                            break;
                        case "watch later":
                            li[i].classList.add("watchLater");
                            li[i].children[1].classList.add("watchLater-content");
                            var org_html = li[i].children[1].children[0].innerHTML;
                            var new_html = "<a href=" +
                                this.todoAll[this.todoAll.length - i + 5].description + ">"
                                + this.todoAll[this.todoAll.length - i + 5].description + "</a>";
                            li[i].children[1].children[0].innerHTML = new_html;
                            break;
                    }
                    switch (li[i].children[1].children[2].innerHTML) {
                        case "completed":
                            //li[i].classList.add("completed");  
                            li[i].children[0].children[0].style.display = "inline";
                            break;
                        case "removed":
                            // li[i].classList.add("removed");
                            // li[i].children[1].classList.add("removed-content");
                            li[i].children[0].children[1].style.display = "inline";
                            break;
                        case "inprogress":
                            li[i].children[0].children[2].style.display = "inline";
                            break;
                    }
                    if (li[i].children[1].children[4].innerHTML == "") {
                        li[i].children[1].children[4].innerHTML = "not completed";
                    }
                }
            }
        };
        this.todoAll = [];
    }
    TodoComponent.prototype.onNotify = function (val) {
        console.log(val);
        this.test = val;
    };
    TodoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/api/todo').subscribe(function (data) {
            _this.todoAll = data;
        });
        __WEBPACK_IMPORTED_MODULE_2_jquery__(document).ready(function () {
            __WEBPACK_IMPORTED_MODULE_2_jquery__("#todolist").addClass('active');
            document.title = "To-do list";
        });
    };
    // Click on a close button to hide the current list item
    TodoComponent.prototype.removeTask = function ($event, todo) {
        var elem = $event.target;
        var li = elem.parentElement;
        if (li.children[1].children[2].innerHTML != "removed") {
            li.children[1].children[2].innerHTML = "removed";
            li.children[0].children[1].style.display = "inline";
            li.children[0].children[2].style.display = "none";
            li.children[0].children[0].style.display = "none";
        }
        else {
            li.children[1].children[2].innerHTML = "inprogress";
            li.children[0].children[1].style.display = "none";
            li.children[0].children[2].style.display = "inline";
        }
        if (todo.state != "removed") {
            todo.state = "removed";
            todo.completed_date = new Date();
            this.http.put('api/todo/removed/' + todo._id, todo)
                .subscribe(function (res) {
            }, function (err) {
                console.log(err);
            });
        }
        else {
            todo.state = "inprogress";
            todo.completed_date = new Date();
            this.http.put('api/todo/inprogress/' + todo._id, todo)
                .subscribe(function (res) {
            }, function (err) {
                console.log(err);
            });
        }
    };
    TodoComponent.prototype.checkTask = function ($event, todo) {
        var elem = $event.target;
        var li = elem.parentElement;
        // li.classList.toggle('completed');
        if (li.children[1].children[2].innerHTML != "completed") {
            li.children[1].children[2].innerHTML = "completed";
            li.children[0].children[0].style.display = "inline";
            li.children[0].children[1].style.display = "none";
            li.children[0].children[2].style.display = "none";
        }
        else {
            li.children[1].children[2].innerHTML = "inprogress";
            li.children[0].children[0].style.display = "none";
            li.children[0].children[2].style.display = "inline";
        }
        if (todo.state != "completed") {
            todo.state = "completed";
            todo.completed_date = new Date();
            this.http.put('/api/todo/completed/' + todo._id, todo)
                .subscribe(function (res) {
            }, function (err) {
                console.log(err);
            });
        }
        else {
            todo.state = "inprogress";
            todo.completed_date = new Date();
            this.http.put('/api/todo/inprogress/' + todo._id, todo)
                .subscribe(function (res) {
            }, function (err) {
                console.log(err);
            });
        }
    };
    // for pagination WIP
    /*myApp.filter('startFrom', function () { return function (input, start) {
      start = +start; //parse to int if (typeof input == "undefined") { return;
        }
        return input.slice(start);
      }
    });*/
    TodoComponent.prototype.dropFunction = function ($event) {
        var elem = $event.target;
        if (elem.tagName !== "LI") {
            elem = __WEBPACK_IMPORTED_MODULE_2_jquery__(elem).closest("li")[0];
        }
        elem.children[1].classList.toggle("show");
    };
    TodoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-todo',
            template: __webpack_require__("./src/app/todo/todo.component.html"),
            styles: [__webpack_require__("./src/app/todo/todo.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], TodoComponent);
    return TodoComponent;
}());



/***/ }),

/***/ "./src/app/words-create/words-create.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/words-create/words-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n  <div class=\"w3-card-4\">\n      <div class=\"w3-container w3-green\">\n          <h2>New Word</h2>\n      </div>\n      <form name=\"newTaskForm\" id=\"newTaskForm\" class=\"w3-container\n      aboutNewTaskForm\" method=\"post\" (ngSubmit)=\"addWords()\"\n      #wordsForm=\"ngForm\">\n          <p>\n              <label class=\"newTaskType\">Word:</label>\n              <textarea class=\"w3-input\" name=\"word\" cols=\"40\" rows=\"1\"\n              [(ngModel)]=\"words.word\" required></textarea>\n          </p>\n          <p>\n              <label class=\"newTaskType\">Description:</label>\n              <textarea class=\"w3-input\" name=\"description\" cols=\"40\" rows=\"3\"\n              [(ngModel)]=\"words.description\" required></textarea>\n          </p>\n          <div>\n              <label class=\"newTaskType\">Translation:</label>\n              <textarea class=\"w3-input\" name=\"translation\" cols=\"40\" rows=\"1\"\n              [(ngModel)]=\"words.translation\" required></textarea>\n\n          </div>\n      </form>\n      <button class=\"col-md-2 addBtn btn btn-success\" form=\"newTaskForm\"\n      type=\"submit\" [disabled]=\"!wordsForm.form.valid\">Submit</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/words-create/words-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordsCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WordsCreateComponent = /** @class */ (function () {
    function WordsCreateComponent(http) {
        this.http = http;
        this.words = {};
    }
    WordsCreateComponent.prototype.ngOnInit = function () {
    };
    WordsCreateComponent.prototype.addWords = function () {
        this.wordsAll.push(this.words);
        this.http.post('/api/words', this.words)
            .subscribe(function (res) {
        }, function (err) {
            console.log(err);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], WordsCreateComponent.prototype, "wordsAll", void 0);
    WordsCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-words-create',
            template: __webpack_require__("./src/app/words-create/words-create.component.html"),
            styles: [__webpack_require__("./src/app/words-create/words-create.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], WordsCreateComponent);
    return WordsCreateComponent;
}());



/***/ }),

/***/ "./src/app/words-delete/words-delete.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/words-delete/words-delete.component.html":
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" class=\"btn btn-danger btn-md deleteBtn\"\n(click)=\"deleteWords(words._id, words)\">Delete</button>"

/***/ }),

/***/ "./src/app/words-delete/words-delete.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordsDeleteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WordsDeleteComponent = /** @class */ (function () {
    function WordsDeleteComponent(http) {
        this.http = http;
        this.words = {};
    }
    WordsDeleteComponent.prototype.ngOnInit = function () {
    };
    WordsDeleteComponent.prototype.deleteWords = function (id) {
        this.wordsAll.splice(-1, 1);
        this.http.delete('/api/words/' + id)
            .subscribe(function (res) {
        }, function (err) {
            console.log(err);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], WordsDeleteComponent.prototype, "wordsAll", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], WordsDeleteComponent.prototype, "words", void 0);
    WordsDeleteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-words-delete',
            template: __webpack_require__("./src/app/words-delete/words-delete.component.html"),
            styles: [__webpack_require__("./src/app/words-delete/words-delete.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], WordsDeleteComponent);
    return WordsDeleteComponent;
}());



/***/ }),

/***/ "./src/app/words-edit-modal/words-edit-modal.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/words-edit-modal/words-edit-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <!-- Trigger the modal with a button -->\n  <!-- Modal -->\n  <div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n      <!-- Modal content-->\n      <div class=\"modal-content\">\n        <div id=\"editModalHeader\" class=\"modal-header\">\n          <button type=\"button\" class=\"close\"\n          data-dismiss=\"modal\">&times;</button>\n          <h4 class=\"modal-title\">Edit Word</h4>\n        </div>\n        <div class=\"modal-body editQaABody\">\n          <form *ngIf=\"words\" id=\"editTaskForm\" class=\"w3-container\"\n          method=\"post\" (ngSubmit)=\"editWords(words._id)\">\n            <p>\n              <label class=\"newTaskType\">Word:</label>\n              <textarea class=\"w3-input\" name=\"word\" cols=\"40\" rows=\"1\"\n              [(ngModel)]=\"words.word\" required></textarea>\n            </p>\n            <p>\n              <label class=\"newTaskType\">Description:</label>\n              <textarea class=\"w3-input editQaADescription\"\n              name=\"description\" cols=\"40\" rows=\"1\"\n              [(ngModel)]=\"words.description\" required></textarea>\n            </p>\n            <p>\n              <label class=\"newTaskType\">Translation:</label>\n              <textarea class=\"w3-input editQaADescription\"\n              name=\"translation\" cols=\"40\" rows=\"1\"\n              [(ngModel)]=\"words.translation\" required></textarea>\n            </p>\n          </form>\n        </div>\n        <div class=\"modal-footer\">\n          <button class=\"col-md-2 editBtn btn btn-success\"\n          form=\"editTaskForm\" type=\"submit\">Submit</button>\n          <button type=\"button\" class=\"btn btn-default\"\n          data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/words-edit-modal/words-edit-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordsEditModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WordsEditModalComponent = /** @class */ (function () {
    function WordsEditModalComponent(http) {
        this.http = http;
        this.words = {};
    }
    WordsEditModalComponent.prototype.ngOnInit = function () {
    };
    WordsEditModalComponent.prototype.editWords = function (id) {
        this.http.put('/api/words/' + id, this.words)
            .subscribe(function (res) {
        }, function (err) {
            console.log(err);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], WordsEditModalComponent.prototype, "wordsAll", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], WordsEditModalComponent.prototype, "words", void 0);
    WordsEditModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-words-edit-modal',
            template: __webpack_require__("./src/app/words-edit-modal/words-edit-modal.component.html"),
            styles: [__webpack_require__("./src/app/words-edit-modal/words-edit-modal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], WordsEditModalComponent);
    return WordsEditModalComponent;
}());



/***/ }),

/***/ "./src/app/words-edit/words-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/words-edit/words-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<button id=\"modalButton\" type=\"button\" class=\"modal-button btn btn-info btn-md\neditBtn\" data-toggle=\"modal\" data-target=\"#myModal\"\n(click)=\"editModalForm($event, testing)\">Edit</button>"

/***/ }),

/***/ "./src/app/words-edit/words-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordsEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WordsEditComponent = /** @class */ (function () {
    function WordsEditComponent(http) {
        this.http = http;
        this.testing = {};
        this.test = {};
        this.updateTesting = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.numberOfLi = 7;
    }
    WordsEditComponent.prototype.ngOnInit = function () {
    };
    // giving modal form placeholder values for each input txt
    WordsEditComponent.prototype.editModalForm = function ($event, elem) {
        var li = document.getElementsByTagName("LI");
        var i;
        console.log(elem);
        console.log(this.testing);
        this.test = elem;
        this.updateTesting.emit(this.test);
        for (i = this.numberOfLi; i < this.wordsAll.length; i++) {
            if (this.wordsAll[i]._id == elem._id) {
                this.test = elem;
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], WordsEditComponent.prototype, "wordsAll", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], WordsEditComponent.prototype, "testing", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], WordsEditComponent.prototype, "test", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], WordsEditComponent.prototype, "updateTesting", void 0);
    WordsEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-words-edit',
            template: __webpack_require__("./src/app/words-edit/words-edit.component.html"),
            styles: [__webpack_require__("./src/app/words-edit/words-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], WordsEditComponent);
    return WordsEditComponent;
}());



/***/ }),

/***/ "./src/app/words/words.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/words/words.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container QaA\">\n  <div class=\"row\">\n\n    <app-words-create [wordsAll]=\"wordsAll\"></app-words-create>\n\n    <div class=\"col-md-10\">\n      <h2>All Words</h2>\n    </div>\n\n    <div class=\"col-md-12\">\n      <p>Number of Words: {{numberOfWords}}</p>\n    </div>\n\n    <div class=\"col-md-3\">\n      <a (click)=\"scrollToTheEndOfPage()\">Scroll to the bottom</a>\n    </div>\n\n    <ul class=\"col-md-12\" id=\"myUL\">\n      <div *ngFor=\"let words of wordsAll.reverse(); let last = last; let i =\n      index\">\n        <li (click)=\"dropFunction($event)\" class=\"aboutDefault aboutDropbtn2\">\n          <div class=\"col-md-12 QaAPara\">{{words.word}}</div>\n          <div class=\"aboutDropdown-content\" id=\"drop\">\n            <div class=\"col-md-8\">\n              <p class=\"dropPara QaAPara\">{{words.description}}</p>\n            </div>\n            <div class=\"col-md-8\">\n              <p class=\"dropPara QaAPara\">{{words.translation}}</p>\n            </div>\n            <div class=\"pull-right col-md-4\">\n              <span class=\"badge\">Posted {{words.create_date}}</span>\n              <br>\n              <app-words-edit [wordsAll]=\"wordsAll\" [testing]=\"wordsAll[i]\"\n              (updateTesting)=\"onNotify($event)\"></app-words-edit>\n              <br>\n              <app-words-delete [wordsAll]=\"wordsAll\"\n              [words]=\"words\"></app-words-delete>\n            </div>\n          </div>\n        </li>\n      </div>\n    </ul>\n\n    <div class=\"col-md-3\">\n      <a (click)=\"scrollToTheStartOfPage()\">Scroll to the top</a>\n    </div>\n\n  </div>\n</div>\n\n<app-words-edit-modal [words]=\"test\"></app-words-edit-modal>\n"

/***/ }),

/***/ "./src/app/words/words.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WordsComponent = /** @class */ (function () {
    function WordsComponent(http) {
        this.http = http;
        this.word = {};
        this.words = {};
        this.numberOfLi = 7;
        this.wordsAll = [];
    }
    WordsComponent.prototype.onNotify = function (val) {
        console.log(val);
        this.test = val;
    };
    WordsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/api/words').subscribe(function (data) {
            _this.wordsAll = data;
        });
        __WEBPACK_IMPORTED_MODULE_2_jquery__(document).ready(function () {
            __WEBPACK_IMPORTED_MODULE_2_jquery__("#Words").addClass('active');
            document.title = "Words";
        });
    };
    WordsComponent.prototype.scrollToTheEndOfPage = function () {
        window.scrollTo(0, document.body.scrollHeight);
    };
    WordsComponent.prototype.scrollToTheStartOfPage = function () {
        window.scrollTo(0, 0);
    };
    WordsComponent.prototype.dropFunction = function ($event) {
        var elem = $event.target;
        if (elem.tagName !== "LI") {
            elem = __WEBPACK_IMPORTED_MODULE_2_jquery__(elem).closest("li")[0];
        }
        elem.children[1].classList.toggle("show");
    };
    WordsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-words',
            template: __webpack_require__("./src/app/words/words.component.html"),
            styles: [__webpack_require__("./src/app/words/words.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], WordsComponent);
    return WordsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map