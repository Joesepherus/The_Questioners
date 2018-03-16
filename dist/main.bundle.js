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
                __WEBPACK_IMPORTED_MODULE_11__todo_todo_component__["a" /* TodoComponent */]
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

module.exports = "<div class=\"col-md-12\">\n  <div class=\"w3-card-4\">\n    <div class=\"w3-container w3-green\">\n      <h2>New QaA</h2>\n    </div>\n    <form name=\"newTaskForm\" id=\"newTaskForm\" class=\"w3-container\n    aboutNewTaskForm\" method=\"post\" (ngSubmit)=\"addQaA()\" #qaaForm=\"ngForm\">\n      <p>\n        <label class=\"newTaskType\">Title:</label>\n        <textarea class=\"w3-input\" name=\"newTaskTitle\" cols=\"40\" rows=\"1\"\n        [(ngModel)]=\"qaa.title\" name=\"title\" required></textarea>\n      </p>\n      <p>\n        <label class=\"newTaskType\">Description:</label>\n        <textarea class=\"w3-input\" name=\"newTaskDescription\" cols=\"40\"\n        rows=\"3\" [(ngModel)]=\"qaa.description\" name=\"description\"\n        required></textarea>\n      </p>\n      <div>\n        <label class=\"newTaskType\">Type:</label>\n      </div>\n      <select [(ngModel)]=\"qaa.type\" name=\"type\" required>\n        <option value=\"\"></option>\n        <option value=\"Javascript\">Javascript</option>\n        <option value=\"HTML\">HTML</option>\n        <option value=\"CSS\">CSS</option>\n        <option value=\"Data structures\">Data structures</option>\n        <option value=\"Other\">Other</option>\n      </select>\n    </form>\n    <button class=\"col-md-2 addBtn btn btn-success\" form=\"newTaskForm\"\n    type=\"submit\" [disabled]=\"!qaaForm.form.valid\">Submit</button>\n  </div>\n\n</div>"

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
        console.log(this.qaa);
        this.qaaAll.push(this.qaa);
        this.http.post('/qaa', this.qaa)
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

module.exports = "<button type=\"button\" class=\"btn btn-danger btn-md deleteBtn\"\n(click)=\"deleteQaa(qaa._id, qaa)\">Delete</button>"

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
        this.http.delete('/qaa/' + id)
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

module.exports = "<div class=\"container\">\n  <!-- Trigger the modal with a button -->\n  <!-- Modal -->\n  <div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n      <!-- Modal content-->\n      <div class=\"modal-content\">\n        <div id=\"editModalHeader\" class=\"modal-header\">\n          <button type=\"button\" class=\"close\"\n          data-dismiss=\"modal\">&times;</button>\n          <h4 class=\"modal-title\">Edit QaA</h4>\n        </div>\n        <div class=\"modal-body editQaABody\">\n          <form *ngIf=\"qaa\" id=\"editTaskForm\" class=\"w3-container\" method=\"post\"\n          (ngSubmit)=\"editQaa(id)\">\n            <p>\n              <label class=\"newTaskType\">Title:</label>\n              <textarea class=\"w3-input\" name=\"editTitle\" cols=\"40\" rows=\"1\"\n              [(ngModel)]=\"qaa.title\" name=\"title\" required></textarea>\n            </p>\n            <p>\n              <label class=\"newTaskType\">Description:</label>\n              <textarea class=\"w3-input editQaADescription\"\n              name=\"editDescription\" cols=\"40\" rows=\"1\"\n              [(ngModel)]=\"qaa.description\" name=\"description\"\n              required></textarea>\n            </p>\n            <div>\n              <label class=\"newTaskType\">Type</label>\n            </div>\n            <select name=\"editType\" id=\"editSelect\"\n            (change)=\"changeColor($event)\" [(ngModel)]=\"qaa.type\"\n            name=\"type\" required>\n              <option value=\"\"></option>\n              <option value=\"Javascript\">Javascript</option>\n              <option value=\"HTML\">HTML</option>\n              <option value=\"CSS\">CSS</option>\n              <option value=\"Data structures\">Data structures</option>\n              <option value=\"Other\">Other</option>\n            </select>\n          </form>\n        </div>\n        <div class=\"modal-footer\">\n          <button class=\"col-md-2 editBtn btn btn-success\"\n          form=\"editTaskForm\" type=\"submit\">Submit</button>\n          <button type=\"button\" class=\"btn btn-default\"\n          data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>"

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

module.exports = "<button id=\"modalButton\" type=\"button\" class=\"modal-button btn btn-info btn-md\neditBtn\" data-toggle=\"modal\" data-target=\"#myModal\"\n(click)=\"editModalForm($event, testing)\">Edit</button>"

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
        this.http.put('/qaa/' + id, this.testing)
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

module.exports = "<div class=\"container QaA\">\n  <div class=\"row\">\n    <app-qaa-create [qaaAll]=\"qaaAll\"></app-qaa-create>\n\n    <div class=\"col-md-10\">\n      <h2>QaA</h2>\n    </div>\n\n    <div class=\"col-md-1 selector\">\n      <select id=\"selector\">\n        <option value=\"all\" selected=\"selected\">all</option>\n        <option value=\"inprogress\">inprogress</option>\n        <option value=\"passed\">passed</option>\n        <option value=\"failed\">failed</option>\n        <option value=\"Javascript\">Javascript</option>\n        <option value=\"HTML\">HTML</option>\n        <option value=\"CSS\">CSS</option>\n        <option value=\"Data structures\">Data structures</option>\n        <option value=\"Other\">Other</option>\n      </select>\n    </div>\n\n    <div class=\"col-md-12\">\n      <p ng-model=\"numberOfQaA\">Number of QaA: {{ numberOfQaA }}</p>\n    </div>\n\n    <div class=\"col-md-3\">\n      <a (click)=\"scrollToTheEndOfPage()\">Scroll to the bottom</a>\n    </div>\n\n    <ul class=\"col-md-12\" id=\"myUL\">\n      <div *ngFor=\"let qaa of qaaAll.reverse(); let last = last; let i = index\" [ngClass]=\"isLast(last)\">\n        <li (click)=\"dropFunction($event)\" class=\"aboutDefault aboutDropbtn2\">\n          <div class=\"col-md-12 QaAPara\">{{ qaa.title }}</div>\n          <div class=\"col-md-12\">\n            <span class=\"label label-default\">{{ qaa.type }}</span>\n          </div>\n          <div class=\"aboutDropdown-content\" id=\"drop\">\n            <div class=\"col-md-8\">\n              <p class=\"dropPara QaAPara\">{{ qaa.description }}</p>\n            </div>\n            <div class=\"pull-right col-md-4\">\n              <span class=\"badge\">Posted {{ qaa.create_date }}</span>\n              <br>\n              <app-qaa-edit [qaaAll]=\"qaaAll\" [testing]=\"qaaAll[i]\" (updateTesting)=\"onNotify($event)\"></app-qaa-edit>\n              <br>\n              <app-qaa-delete [qaaAll]=\"qaaAll\" [qaa]=\"qaa\"></app-qaa-delete>\n            </div>\n          </div>\n        </li>\n      </div>\n    </ul>\n\n    <div class=\"col-md-3\">\n      <a (click)=\"scrollToTheStartOfPage()\">Scroll to the top</a>\n    </div>\n\n  </div>\n</div>\n\n<app-qaa-edit-modal [qaa]=\"test\"></app-qaa-edit-modal>\n"

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
        this.qaas = this.qaa;
    }
    QaaComponent.prototype.onNotify = function (val) {
        console.log(val);
        this.test = val;
    };
    QaaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/qaa').subscribe(function (data) {
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

/***/ "./src/app/todo/todo.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/todo/todo.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  todo works!\n</p>\n"

/***/ }),

/***/ "./src/app/todo/todo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoComponent; });
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

var TodoComponent = /** @class */ (function () {
    function TodoComponent() {
    }
    TodoComponent.prototype.ngOnInit = function () {
    };
    TodoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-todo',
            template: __webpack_require__("./src/app/todo/todo.component.html"),
            styles: [__webpack_require__("./src/app/todo/todo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TodoComponent);
    return TodoComponent;
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