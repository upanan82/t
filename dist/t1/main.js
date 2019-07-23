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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"text\" #input id=\"search\" [(ngModel)]=\"searchText\" />\n<ul *ngIf=\"!!result.length\">\n  <li *ngFor=\"let item of result\" [ngClass]=\"!!score ? 'err' : 'exec'\">{{item}}</li>\n</ul>\n<span *ngIf=\"!result.length && !!searchText\">&#9760;</span>\n<div *ngIf=\"dblShow\">\n  <img *ngFor=\"let img of images\" src=\"{{img}}\" />\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n  width: 100%;\n  font-size: .7rem;\n  border: none;\n  outline: none; }\n\nul {\n  margin: .5rem 0 0; }\n\nul li {\n    font-size: .7rem; }\n\nul li.exec {\n      color: green; }\n\nul li.err {\n      color: darkorange; }\n\nspan {\n  font-size: 3rem;\n  color: darkred; }\n\nimg {\n  width: 8rem;\n  border: 1px solid black;\n  margin: 2px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxkbXl0cm8ub255c2hjaGVua29cXERlc2t0b3BcXHQxL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhLEVBQUE7O0FBR2Y7RUFDRSxpQkFBaUIsRUFBQTs7QUFEbkI7SUFJSSxnQkFBZ0IsRUFBQTs7QUFKcEI7TUFPTSxZQUFZLEVBQUE7O0FBUGxCO01BV00saUJBQWlCLEVBQUE7O0FBS3ZCO0VBQ0UsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IC43cmVtO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG51bCB7XHJcbiAgbWFyZ2luOiAuNXJlbSAwIDA7XHJcblxyXG4gIGxpIHtcclxuICAgIGZvbnQtc2l6ZTogLjdyZW07XHJcblxyXG4gICAgJi5leGVjIHtcclxuICAgICAgY29sb3I6IGdyZWVuO1xyXG4gICAgfVxyXG5cclxuICAgICYuZXJyIHtcclxuICAgICAgY29sb3I6IGRhcmtvcmFuZ2U7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5zcGFuIHtcclxuICBmb250LXNpemU6IDNyZW07XHJcbiAgY29sb3I6IGRhcmtyZWQ7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgd2lkdGg6IDhyZW07XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgbWFyZ2luOiAycHg7XHJcbn1cclxuIl19 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fuse.js */ "./node_modules/fuse.js/dist/fuse.js");
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fuse_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test */ "./src/app/test.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.result = [];
        this.score = null;
        this.images = _test__WEBPACK_IMPORTED_MODULE_3__["images"];
        this.dblShow = false;
        this.fuse = null;
        this._searchText = '';
        var options = {
            shouldSort: true,
            includeScore: true,
            threshold: 0.2,
            location: 0,
            distance: 9,
            maxPatternLength: 32,
            minMatchCharLength: 32,
            keys: [
                'question'
            ]
        };
        for (;;) {
            var secure = prompt();
            if (secure === '12') {
                break;
            }
        }
        this.fuse = new fuse_js__WEBPACK_IMPORTED_MODULE_2__(_test__WEBPACK_IMPORTED_MODULE_3__["test"], options);
    }
    Object.defineProperty(AppComponent.prototype, "searchText", {
        get: function () {
            return this._searchText;
        },
        set: function (val) {
            this._searchText = val.trim();
            if (!!val) {
                this.search();
            }
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.dblclick = function () {
        this.dblShow = true;
    };
    AppComponent.prototype.blur = function () {
        this.clear();
    };
    AppComponent.prototype.click = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.clear();
                        return [4 /*yield*/, this.focus()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent.prototype.windowFocus = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.clear();
                        return [4 /*yield*/, this.focus()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent.prototype.search = function () {
        var result = this.fuse.search(this._searchText);
        if (!result.length) {
            this.result = [];
            this.score = null;
        }
        else {
            this.result = result[0].item.answer;
            this.score = result[0].score;
        }
    };
    AppComponent.prototype.clear = function () {
        this.searchText = '';
        this.result = [];
        this.score = null;
        this.dblShow = false;
    };
    AppComponent.prototype.focus = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, setTimeout(function () {
                            _this.input.nativeElement.focus();
                        }, 0)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('input'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AppComponent.prototype, "input", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:dblclick'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AppComponent.prototype, "dblclick", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:blur'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AppComponent.prototype, "blur", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:click'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", Promise)
    ], AppComponent.prototype, "click", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:focus'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", Promise)
    ], AppComponent.prototype, "windowFocus", null);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/test.ts":
/*!*************************!*\
  !*** ./src/app/test.ts ***!
  \*************************/
/*! exports provided: images, test */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "images", function() { return images; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "test", function() { return test; });
var images = [
    '../assets/01.jpg',
    '../assets/02.jpg',
    '../assets/03.jpg',
    '../assets/04.jpg',
    '../assets/05.jpg',
    '../assets/06.jpg',
    '../assets/07.jpg',
    '../assets/08.jpg',
    '../assets/09.jpg',
    '../assets/10.jpg',
    '../assets/11.jpg',
    '../assets/12.jpg',
    '../assets/13.jpg',
    '../assets/14.jpg',
    '../assets/15.jpg',
    '../assets/16.jpg',
    '../assets/17.jpg',
    '../assets/18.jpg',
    '../assets/19.jpg',
    '../assets/20.jpg',
    '../assets/21.jpg',
    '../assets/22.jpg',
    '../assets/23.jpg',
];
var test = [
    {
        question: 'Головними областями програмної інженерії згідно SWEBOK є',
        answer: [
            'конструювання програмного забезпечення',
            'інженерія вимог'
        ]
    },
    {
        question: 'Організаційними областями програмної інженерії згідно SWEBOK є',
        answer: [
            'керування конфігурацією',
            'процес інженерії програмних систем'
        ]
    },
    {
        question: 'Головними областями програмної інженерії згідно SWEBOK не є',
        answer: [
            'керування конфігурацією',
            'процес інженерії програмних систем'
        ]
    },
    {
        question: 'Валідація вимог - це',
        answer: [
            'перевірка повноти, несуперечності і однозначності специфікації і правильності виконання функцій системи відповідно до вимог'
        ]
    },
    {
        question: 'Основні систематичні методи забезпечення якості програм включають в себе',
        answer: [
            'верифікація компонентів',
            'верифікація вимог',
            'валідація вимог'
        ]
    },
    {
        question: 'Структурна декомпозиції продукту',
        answer: [
            'дерево, що показує ієрархічність результатів проекту'
        ]
    },
    {
        question: 'Структурна декомпозиції робіт',
        answer: [
            'дерево, що показує розподіл завдань необхідних для досягнення цілі'
        ]
    },
    {
        question: 'Мережевий графік',
        answer: [
            'граф взаємозвязків між роботами проекту плану з вказанням тривалості окремих робіт'
        ]
    },
    {
        question: 'Діаграма Ганта',
        answer: [
            'графік робіт за проектом з вказаними календарними датами'
        ]
    },
    {
        question: 'Керування проектом - це',
        answer: [
            'керівництво роботами команди виконавців проекту для реалізації проекту з використанням методів керування, планування і контролю робіт, керування ризиками, ефективною організацією роботи і комунікаційними потоками в команді виконавців'
        ]
    },
    {
        question: 'Планування - це',
        answer: [
            'процес розподілу і призначення ресурсів (матеріальних і людських) з урахуванням вартості і часу виконання проекту'
        ]
    },
    {
        question: 'Основними складовими будь-якого проекту є',
        answer: [
            'ресурси (людські, фінансові, технічні)',
            'час виконання проекту',
            'вартість виконання проекту'
        ]
    },
    {
        question: 'Відповідальність за координацію і реалізацію основних складових проекту несе',
        answer: [
            'менеджер проекту'
        ]
    },
    {
        question: 'Відповідальність за ідейну, функціональну сторону проекту несе',
        answer: [
            'головний програміст'
        ]
    },
    {
        question: 'Склад і кількість співробітників, що входять в команду проекту, залежить від',
        answer: [
            'масштабу робіт',
            'досвіду співробітників'
        ]
    },
    {
        question: 'Ризики можуть бути',
        answer: [
            '"Відомі", які можна планувати',
            '"Невідомі", які не ідентифіковано і не можуть бути спрогнозовані'
        ]
    },
    {
        question: 'Планування керування ризиками - це',
        answer: [
            'процес прийняття рішень щодо попередження ризиків, або зменшення їх наслідків'
        ]
    },
    {
        question: 'Кількісна оцінка ризиків - це',
        answer: [
            'процес визначення ймовірності виникнення ризиків, впливу наслідків ризиків на проект і прийняття рішень з оцінки ризику'
        ]
    },
    {
        question: 'Визначення вимог, як правило, проводиться',
        answer: [
            'шляхом обговорення поглядів замовника на систему з майбутніми її розробниками'
        ]
    },
    {
        question: 'Вимоги до програмного забезпечення складаються з',
        answer: [
            'системних вимог',
            'функціональних вимог',
            'нефункціональних вимог'
        ]
    },
    {
        question: 'Нефункціональні вимоги для більшості сучасних багатокористувацьких програмних систем включають такі умови і обмеження',
        answer: [
            'конфіденційність, безпеку і захист даних',
            'одночасність доступу до системи користувачів',
            'відмовостійкість',
            'продуктивність'
        ]
    },
    {
        question: 'Нефункціональні вимоги визначають',
        answer: [
            'деякі обмеження до властивостей функцій або до системи, важливих для користувачів або розробників'
        ]
    },
    {
        question: 'Вимоги користувачів визначають',
        answer: [
            'мети і завдання, які користувачам дозволить вирішувати майбутня система'
        ]
    },
    {
        question: 'Функціональні вимоги визначають',
        answer: [
            'перелік функцій або сервісів, які повинна виконувати система, а також обмежень на дані і поведінку системи'
        ]
    },
    {
        question: 'Системні вимоги визначають',
        answer: [
            'зовнішні умови для виконання системних функцій і обмежень на створюваний продукт, а також вимоги до опису підсистем'
        ]
    },
    {
        question: 'В обговоренні вимог на систему беруть участь',
        answer: [
            'представники замовника з декількох професійних груп',
            'аналітики і розробники майбутньої системи'
        ]
    },
    {
        question: 'Що дає узгоджена область дій по проекту',
        answer: [
            'можливість оцінити необхідні інвестиції в проект'
        ]
    },
    {
        question: 'Специфікація вимог до програмного забезпечення - це',
        answer: [
            'формалізоване опис функціональних, нефункціональних і системних вимог, вимог до характеристик якості, а також до структури програмного забезпечення, принципам взаємодії з іншими компонентами, алгоритмам і структурі даних системи',
        ]
    },
    {
        question: 'Інструментальні засоби розробки програмного забезпечення  це',
        answer: [
            'засоби підтримки кодування і тестування (компілятори, генератори програм, отладчики і ін)'
        ]
    },
    {
        question: 'Теоретичні засоби розробки програмного забезпечення  це',
        answer: [
            'методи верифікації та докази правильності специфікації програм'
        ]
    },
    {
        question: 'Мета процесу валідації',
        answer: [
            'переконатися, що готова продукція дійсно задовольняє свого вихідного призначенню'
        ]
    },
    {
        question: 'Налагодження - це',
        answer: [
            'перевірка опису програмного обєкта на мові програмування з метою виявлення в ньому помилок і подальше їх усунення'
        ]
    },
    {
        question: 'Інспекція програмного забезпечення - це',
        answer: [
            'статична перевірка відповідності програми заданим специфікаціями'
        ]
    },
    {
        question: 'Статичний аналіз програмного забезпечення полягає в',
        answer: [
            'інспекції вихідного коду і наскрізному контролю програми'
        ]
    },
    {
        question: 'Динамічні методи тестування використовуються',
        answer: [
            'в процесі виконання програм'
        ]
    },
    {
        question: 'Основні методи тестування включають',
        answer: [
            'метод "чорної скрині"',
            'метод "скляної скрині"',
            'метод "білої скрині"'
        ]
    },
    {
        question: 'Функціональні тести створюються по',
        answer: [
            'зовнішнім специфікаціям функцій',
            'проектній інформації',
            'тексту на мові програмування'
        ]
    },
    {
        question: 'Всі помилки, які виникають в програмах, прийнято поділяти на такі класи',
        answer: [
            'помилки інтерфейсів',
            'помилки обсягу даних',
            'логічні і функціональні помилки'
        ]
    },
    {
        question: 'Відповідно до міжнародного стандарту ANSI / IEEE-729-83 Помилка (error) - це',
        answer: [
            'стан програми, при якому видаються неправильні результати, причиною яких є вади в операторах програми або в технологічному процесі її розробки'
        ]
    },
    {
        question: 'Відповідно до міжнародного стандарту ANSI / IEEE-729-83 дефект (fault) - це',
        answer: [
            'наслідок помилок розробника на будь-якому з етапів розробки, яка може міститися в початкових або проектних специфікаціях, текстах кодів програм, експлуатаційної документації та тп'
        ]
    },
    {
        question: 'Відповідно до міжнародного стандарту ANSI / IEEE-729-83 Відмова (failure) - це',
        answer: [
            'відхилення програми від функціонування або неможливість програми виконувати функції, визначені вимогами і обмеженнями'
        ]
    },
    {
        question: "\u0412 \u043E\u0431\u043E\u0432'\u044F\u0437\u043A\u0438 \u0456\u043D\u0436\u0435\u043D\u0435\u0440\u0430-\u0442\u0435\u0441\u0442\u0443\u0432\u0430\u043B\u044C\u043D\u0438\u043A\u0430 \u0432\u0445\u043E\u0434\u044F\u0442\u044C",
        answer: [
            'оцінка тестів',
            'створення тестових сценаріїв',
            'складання плану тесту'
        ]
    },
    {
        question: "\u0412 \u043E\u0431\u043E\u0432'\u044F\u0437\u043A\u0438 \u0456\u043D\u0436\u0435\u043D\u0435\u0440\u0430-\u0442\u0435\u0441\u0442\u0443\u0432\u0430\u043B\u044C\u043D\u0438\u043A\u0430 \u043D\u0435 \u0432\u043A\u043B\u044E\u0447\u0430\u044E\u0442\u044C\u0441\u044F",
        answer: [
            'виправлення помилок, виявлених на етапі тестування'
        ]
    },
    {
        question: 'RUP (Rational Unified Process) - це',
        answer: [
            'керівництво роботами команди виконавців проекту для реалізації проекту з використанням методів керування, планування і контролю робіт'
        ]
    },
    {
        question: 'Модель процесу розробки програмного забезпечення - це',
        answer: [
            'модель, яка визначає структуру процесів і керівництво ними протягом усього часу життя проекту'
        ]
    },
    {
        question: 'Модель керування ризиками - це',
        answer: [
            'модель, за допомогою якої визначається порядок і умови реалізації превентивних рішень і заходів щодо виявлення найбільш істотних моментів ризику'
        ]
    },
    {
        question: 'Модель процесу проектування - це',
        answer: [
            'модель, яка визначає цілі та завдання процесу розробки виробничої архітектури з паралельним і ітераційним виконанням окремих робіт'
        ]
    },
    {
        question: 'Модель проектної групи - це',
        answer: [
            "\u043C\u043E\u0434\u0435\u043B\u044C, \u044F\u043A\u0430 \u0432\u0438\u0437\u043D\u0430\u0447\u0430\u0454 \u0440\u043E\u043B\u0456, \u043E\u0431\u043E\u0432'\u044F\u0437\u043A\u0438 \u043A\u043E\u0436\u043D\u043E\u0433\u043E \u0443\u0447\u0430\u0441\u043D\u0438\u043A\u0430 \u043F\u0440\u043E\u0435\u043A\u0442\u0443 \u0456 \u0440\u043E\u0437\u043F\u043E\u0434\u0456\u043B \u043C\u0456\u0436 \u043D\u0438\u043C\u0438 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0456"
        ]
    },
    {
        question: 'Реінженерія  - це',
        answer: [
            'удосконалення застарілого ПЗ шляхом його реорганізації або реструктуризації, а також перепрограмування окремих елементів або настроювання параметрів на іншу платформу, середовище виконання зі збереженням зручності його супроводу'
        ]
    },
    {
        question: 'Рефакторинг - це',
        answer: [
            'перетворення програмного коду, зміна внутрішньої структури програмного забезпечення для полегшення розуміння коду і легшого внесення подальших змін без зміни зовнішньої поведінки самої системи'
        ]
    },
    {
        question: 'Причини, що вимагають перетворення вихідного коду програм в іншу мову, можуть бути',
        answer: [
            'оновлення платформи апаратних засобів, на якій може не виконуватися компілятор мови програмування',
            'недолік кваліфікованого персоналу для програм, написаних в мові програмування, що вийшли з ужитку'
        ]
    },
    {
        question: 'Операції рефакторінгу над компонентами задовольняють умовам',
        answer: [
            'написання системної специфікації починається не з "нуля", а з розгляду можливостей старої успадковане системи',
            'операція не змінює функціональність компонента і новий компонент може застосовуватися в раніше побудованих компонентних системах'
        ]
    },
    {
        question: 'Вимоги - це',
        answer: [
            'властивості, якими має володіти ПО для адекватного визначення функцій, умов і обмежень виконання програмного забезпечення, а також обсягів даних, технічного забезпечення та середовища функціонування'
        ]
    },
    {
        question: 'Процес перевірки правильності специфікацій вимог на їх відповідність, несуперечність, повноту і здійсненність, а також на відповідність стандартам - це',
        answer: [
            'верифікація вимог'
        ]
    },
    {
        question: 'Інженерія вимог',
        answer: [
            'Виявлення, аналіз, специфікація, перевірка потреб користувача, або властивостей розроблюваного ПЗ'
        ]
    },
    {
        question: 'Проектування',
        answer: [
            'Процес визначення архітектури, складу компонентів, інтерфейсів та інших характеристик до системи.'
        ]
    },
    {
        question: 'Конструювання',
        answer: [
            'Кодування, модульне та інтеграційне тестування, відлагодження.'
        ]
    },
    {
        question: 'Тестування',
        answer: [
            'Перевірка поведінки системи на відповідність до специфікації, пошук дефектів.'
        ]
    },
    {
        question: 'Супровід програмного забезпечення',
        answer: [
            'Поліпшення, оптимізація системи та процесів роботи з нею після вводу до експлуатації.'
        ]
    },
    {
        question: 'Тестування ефективності програмного забезпечення дозволяє перевірити',
        answer: [
            'продуктивність',
            'максимально допустиме навантаження',
            'максимальний обсяг даних'
        ]
    },
    {
        question: 'Тестування ефективності програмного забезпечення не дозволяє перевірити',
        answer: [
            'роботу системи на різних конфігураціях апаратури'
        ]
    },
    {
        question: 'Чим вважається супровід відповідно до стандартів ISO / IEC 12207 та ISO / IEC 14764',
        answer: [
            'модифікацією програмного продукту в процесі експлуатації за умови збереження цілісності продукту'
        ]
    },
    {
        question: 'Реорганізація коду для поліпшення характеристик і показників якості програм без зміни їх поведінки - це',
        answer: [
            'рефакторинг'
        ]
    },
    {
        question: 'Збірка програмного забезпечення - це',
        answer: [
            "\u043E\u0431'\u0454\u0434\u043D\u0430\u043D\u043D\u044F \u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0438\u0445 \u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043D\u043E\u0433\u043E \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0435\u043D\u043D\u044F \u0456 \u043A\u043E\u043D\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u0439\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u0432 \u0454\u0434\u0438\u043D\u0443 \u0432\u0438\u043A\u043E\u043D\u0443\u0432\u0430\u043D\u0443 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0443"
        ]
    },
    {
        question: 'Якість програмного забезпечення - це',
        answer: [
            'набір властивостей продукту, які характеризують його здатність задовольнити встановлені або передбачувані потреби замовника'
        ]
    },
    {
        question: '',
        answer: [
            '',
            ''
        ]
    },
    {
        question: 'До характеристик якості програмного забезпечення відносять',
        answer: [
            'ефективність',
            'надійність',
            'переносимість'
        ]
    },
    {
        question: 'Діяльності і техніки гарантії якості програмного забезпечення включають',
        answer: [
            'інспекцію програмного забезпечення',
            'валідацію програмного забезпечення'
        ]
    },
    {
        question: 'Життєвий цикл програмної системи - це',
        answer: [
            'певна послідовність процесів (етапів), починаючи від постановки задачі до її втілення в готову програму, експлуатації та вилучення з експлуатації'
        ]
    }, {
        question: "\u0413\u043E\u043B\u043E\u0432\u043D\u0430 \u043C\u0435\u0442\u0430 \u043E\u0431'\u0454\u043A\u0442\u043D\u043E\u0433\u043E \u0430\u043D\u0430\u043B\u0456\u0437\u0443 - \u0446\u0435",
        answer: [
            "\u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0438 \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u043D\u0443 \u043E\u0431\u043B\u0430\u0441\u0442\u044C \u044F\u043A \u043C\u043D\u043E\u0436\u0438\u043D\u0443 \u043E\u0431'\u0454\u043A\u0442\u0456\u0432 \u0437 \u0432\u043B\u0430\u0441\u0442\u0438\u0432\u043E\u0441\u0442\u044F\u043C\u0438 \u0456 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0430\u043C\u0438, \u044F\u043A\u0456 \u0454 \u0434\u043E\u0441\u0442\u0430\u0442\u043D\u0456\u043C\u0438 \u0434\u043B\u044F \u0457\u0445 \u0432\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0456 \u0456\u0434\u0435\u043D\u0442\u0438\u0444\u0456\u043A\u0430\u0446\u0456\u0457, \u0430 \u0442\u0430\u043A\u043E\u0436 \u0434\u043B\u044F \u0437\u0430\u0432\u0434\u0430\u043D\u043D\u044F \u043F\u043E\u0432\u0435\u0434\u0456\u043D\u043A\u0438 \u043E\u0431'\u0454\u043A\u0442\u0456\u0432 \u0432 \u0440\u0430\u043C\u043A\u0430\u0445 \u043E\u0431\u0440\u0430\u043D\u043E\u0457 \u0441\u0438\u0441\u0442\u0435\u043C\u0438 \u043F\u043E\u043D\u044F\u0442\u044C \u0456 \u0430\u0431\u0441\u0442\u0440\u0430\u043A\u0446\u0456\u0439"
        ]
    }, {
        question: 'Завдання проектування - це',
        answer: [
            'побудова архітектури системи'
        ]
    }, {
        question: 'Архітектура системи - це',
        answer: [
            'структурна схема компонентів системи, що взаємодіють між собою через інтерфейси'
        ]
    },
    {
        question: 'Умови побудови архітектури системи включають в себе',
        answer: [
            'декомпозиція системи на компоненти або модулі',
            'ієрархічне уявлення абстракції системи і приховування тих деталей, які будуть відпрацьовані на наступних рівнях'
        ]
    },
    {
        question: "\u0412\u0438\u043C\u043E\u0433\u0438, \u0449\u043E \u043F\u0440\u0435\u0434'\u044F\u0432\u043B\u044F\u044E\u0442\u044C\u0441\u044F \u0434\u043E \u044F\u043A\u043E\u0441\u0442\u0456 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043D\u043E\u0433\u043E \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0435\u043D\u043D\u044F, \u0441\u0442\u0430\u0432\u043B\u044F\u0442\u044C\u0441\u044F \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u043E \u0434\u043E",
        answer: [
            'умов застосування',
            'складності вирішуваних завдань'
        ]
    },
    {
        question: 'Функціональність - це',
        answer: [
            'сукупність властивостей, що визначають здатність програмного забезпечення виконувати певний перелік функцій, які задовольняють потребам відповідно до призначення'
        ]
    },
    {
        question: 'Надійність - це',
        answer: [
            'група властивостей, що обумовлює здатність програмного забезпечення зберігати працездатність і перетворювати вихідні дані в результат за встановлений період часу, характер відмов якого є наслідком внутрішніх дефектів і умов його застосування'
        ]
    },
    {
        question: 'Зручність застосування - це',
        answer: [
            'сукупність властивостей програмного забезпечення для передбачуваного кола користувачів і відображають легкість його освоєння і адаптації до постійно змінюваних умов експлуатації, стабільність роботи і підготовки даних, зрозумілість результатів, зручності внесення змін до програмної документацію і в програми'
        ]
    },
    {
        question: 'Супроводжуванність - це',
        answer: [
            'група властивостей, що визначає зусилля, необхідні для виконання, пристосованість до діагностики відмов і наслідків внесення змін, модифікації і атестації модифікується програмного забезпечення'
        ]
    }, {
        question: 'Раціональність (ефективність) - це',
        answer: [
            'група властивостей, що характеризується ступенем відповідності використовуваних ресурсів середовища функціонування рівню якості (надійності) функціонування програмного забезпечення при заданих умовах застосування'
        ]
    }, {
        question: 'Переносимість - це',
        answer: [
            'група властивостей програмного забезпечення, що забезпечує його пристосованість для перенесення з одного середовища функціонування в інші, зусилля для перенесення і адаптацію програмного забезпечення до нового середовища функціонування'
        ]
    },
    {
        question: 'До складових надійності програмного забезпечення не належить',
        answer: [
            'функціональна повнота'
        ]
    },
    {
        question: 'До складових надійності програмного забезпечення відносяться',
        answer: [
            'безвідмовність',
            'стійкість до помилок',
            'відновлюванність'
        ]
    },
    {
        question: 'Досягнення надійності програмного забезпечення забезпечується',
        answer: [
            'запобіганням відмови',
            'усуненням відмови',
            'оцінкою можливості появи нових відмов і заходів боротьби з ними'
        ]
    },
    {
        question: 'Метрики програмного продукту включають',
        answer: [
            'зовнішні метрики, що позначають властивості продукту, видимі користувачеві',
            'внутрішні метрики, що позначають властивості, видимі тільки команді розробників'
        ]
    },
    {
        question: 'Внутрішні метрики продукту включають',
        answer: [
            'метрики розміру',
            'метрики складності програми'
        ]
    }, {
        question: 'Зовнішні метрики продукту включають',
        answer: [
            'метрики надійності',
            'метрики зручності застосування'
        ]
    }, {
        question: 'Напрацювання на відмову як атрибут надійності визначає',
        answer: [
            'середній час між появою загроз'
        ]
    },
    {
        question: 'При підході, орієнтованому на продукт, оцінка якості проводиться після випробування програмних систем. Цей підхід базується на припущенні, що',
        answer: [
            'чим більше виявлено та усунуто помилок в процесі випробування продукту, тим вище його якість'
        ]
    }, {
        question: 'Інженерія якості - це',
        answer: [
            'набір організаційних структур, методик, заходів, процесів і ресурсів для здійснення керування якістю'
        ]
    }, {
        question: 'Планування якості являє собою',
        answer: [
            'діяльність, спрямовану на визначення цілей і вимог до якості'
        ]
    }, {
        question: 'Програмні системи слід відносити до класу',
        answer: [
            'систем, що самовідновлюються'
        ]
    },
    {
        question: 'Інтенсивність відмов - це',
        answer: [
            'частота появи відмов або дефектів в програмних системах при їх тестуванні або експлуатації'
        ]
    },
    {
        question: 'Абстрагування - це',
        answer: [
            'виділення істотних аспектів системи і відволікання від несуттєвих'
        ]
    },
    {
        question: 'Сутність структурного підходу до розробки програмних систем - це',
        answer: [
            'декомпозиція (розбиття) системи на функції, які в свою чергу діляться на підфункції, на завдання і так далі'
        ]
    },
    {
        question: "\u041E\u0431'\u0454\u043A\u0442\u043D\u043E-\u043E\u0440\u0456\u0454\u043D\u0442\u043E\u0432\u0430\u043D\u0438\u0439 \u043F\u0456\u0434\u0445\u0456\u0434 (\u041E\u041E\u041F) - \u0446\u0435",
        answer: [
            "\u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0456\u044F \u0440\u043E\u0437\u0440\u043E\u0431\u043A\u0438, \u0432 \u0440\u0430\u043C\u043A\u0430\u0445 \u044F\u043A\u043E\u0457 \u0440\u043E\u0437\u0440\u043E\u0431\u043D\u0438\u043A\u0438 \u0441\u0438\u0441\u0442\u0435\u043C\u0438 \u0437\u0430\u043C\u0456\u0441\u0442\u044C \u043E\u043F\u0435\u0440\u0430\u0446\u0456\u0439 \u0456 \u0444\u0443\u043D\u043A\u0446\u0456\u0439 \u043C\u0438\u0441\u043B\u044F\u0442\u044C \u043E\u0431'\u0454\u043A\u0442\u0430\u043C\u0438"
        ]
    },
    /**
     *
     *
     *
     *
     *
     *
     * Data Base
     *
     *
     *
     */
    {
        question: 'Виберіть визначення  2-ий нормальної форми',
        answer: [
            'відношення знаходиться в 2-йнормальной формі, якщо воно знаходиться в 1-ій нормальній формі і немає функціональних залежностей між неключових атрибутами і частини первинного ключа'
        ]
    },
    {
        question: 'Виберіть конструкції мови PL / SQL, які не є циклами',
        answer: [
            'IF … THEN … END IF',
            'SELECT … INTO … FROM …'
        ]
    },
    {
        question: 'Виберіть приклади команди SELECT, в яких правильно були використані агрегатні функції',
        answer: [
            'Select AVG(ocenka) from Students',
            'Select COUNT(DISTINCT group_number) from Student',
            'Select group_number from Student group by group_number having AVG(ocenka) > 35'
        ]
    },
    {
        question: 'Виберіть правильні визначення змінних типу запис в мові PL / SQL',
        answer: [
            'FOR VAR2 IN CURSOR1 LOOP … END LOOP',
            'DECLARE VAR4 SGROUP%ROWTYPE',
            'TYPE P IS RECORD (subject VARCHAR2 (22),sport VARCHAR2 (22)); MyPref P;'
        ]
    },
    {
        question: 'Виберіть ключі таблиці, які можна оголосити в одній таблиці більш ніж один раз',
        answer: [
            'UNIQUE',
            'FOREIGN KEY'
        ]
    },
    {
        question: 'Виберіть правильні визначення ключів таблиці, вся команда Create table повинна бути правильною',
        answer: [
            'Create table B(a1 integer, b1 integer references A(a2),  PRIMARY KEY(a1,b1))',
            'Create table D(d1 CHAR(10), d2 VARCHAR(5), PRIMARY KEY(d1,d2))'
        ]
    },
    {
        question: 'Виберіть події, на які може реагувати тригер PL / SQL',
        answer: [
            'до виконання команди Insert into',
            'після команди Update'
        ]
    },
    {
        question: 'Виберіть з нижче наведених запитів той, який містить пов’язаний (корельований) запит',
        answer: [
            'Select * from Student a where avg_ocenka > (Select AVG(avg_ocenka) from Student b where a.group_number = b.group_number)'
        ]
    },
    {
        question: 'Скільки разів виконується пов’язаний (корельований) підзапит для непорожній таблиці',
        answer: [
            'стільки разів, скільки рядків перегляне зовнішній запит'
        ]
    },
    {
        question: 'Які з нижче перерахованих назв є підмовою мови SQL',
        answer: [
            'DML',
            'DDL'
        ]
    },
    {
        question: 'SELECT * FROM Student GROUP BY student_id ORDER BY student_id',
        answer: [
            'помилка між ключовими словами SELECT і FROM'
        ]
    },
    {
        question: 'SELECT group_id FROM Student WHERE COUNT(student_id) > 5 GROUP BY group_id',
        answer: [
            'помилка після ключового слова WHERE'
        ]
    },
    {
        question: 'SELECT group_id FROM Student GROUP BY group_id HAVING COUNT(student_id) > 5 ORDER BY group_id',
        answer: [
            'помилки в запиті немає'
        ]
    },
    {
        question: 'SELECT student_id, group_id FROM Student st, SGroup gr  WHERE st.group_id = gr.group_id',
        answer: [
            'помилка SELECT student_id, group_id'
        ]
    },
    {
        question: 'SELECT firstname, groupname FROM SGroup gr INNER JOIN Student as st ON Group.group_id = Student.group_id;',
        answer: [
            'ошибка INLINE JOIN'
        ]
    },
    {
        question: 'SELECT student_id FROM Student WHERE ocenka = (SELECT ocenka FROM Student WHERE group_id = 101)',
        answer: [
            'помилка WHERE ocenka = ('
        ]
    },
    {
        question: 'SELECT student_id FROM Student WHERE ocenka IN (SELECT MAX(ocenka) FROM Student WHERE group_id = 101)',
        answer: [
            'помилки в запиті немає'
        ]
    },
    {
        question: 'UPDATE TABLE Student SET ocenka = 4 WHERE student_id = 7',
        answer: [
            'помилка UPDATE TABLE Student'
        ]
    },
    {
        question: 'CREATE TABLE Student ( student_id integer PRIMARY KEY, group_id integer REFERENCES Group (group_id), Fio varchar(100) UNIQUE KEY, ocenka float, CHECK(ocenka BETWEEN 3 AND 5))',
        answer: [
            'помилка Fio varchar(100) UNIQUE KEY'
        ]
    },
    /**
      *
      *
      *
      *
      *
      *
      * Software Architecture
      *
      *
      *
      */
    {
        question: 'Ефективність застосування багатопоточності полягає',
        answer: [
            'в поділі завдань за пріоритетами',
            'у виконанні тривалих завдань у фоновому режимі'
        ]
    },
    {
        question: 'Гарна архітектура програмного забезпечення повинна',
        answer: [
            'розкривати структуру системи',
            'реалізовувати всі варіанти використання і сценарії',
            'по можливості відповідати всім вимогам різних зацікавлених сторін',
            'виконувати вимоги, як по функціональності, так і за якістю'
        ]
    },
    {
        question: 'До основних принципів проектування архітектури ПЗ відносяться',
        answer: [
            "\u043F\u0440\u0438\u043D\u0446\u0438\u043F \u043F\u043E\u0434\u0456\u043B\u0443 \u0444\u0443\u043D\u043A\u0446\u0456\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0456 \u0434\u043B\u044F \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0435\u043D\u043D\u044F \u0432\u0438\u0441\u043E\u043A\u043E\u0457 \u0437\u0432'\u044F\u0437\u043D\u0456\u0441\u0442\u044C \u0456 \u0441\u043B\u0430\u0431\u043A\u043E\u0457 \u0437\u0430\u043B\u0435\u0436\u043D\u043E\u0441\u0442\u0456",
            'принцип єдності відповідальності',
            'принцип мінімального знання',
            'мінімізація попереднього проектування'
        ]
    },
    {
        question: 'Двійкова серіализація дозволяє',
        answer: [
            "\u043F\u0435\u0440\u0435\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F \u0441\u0442\u0430\u043D\u0443 \u043E\u0431'\u0454\u043A\u0442\u0430 \u0432 \u0444\u043E\u0440\u043C\u0443, \u043F\u0440\u0438\u0434\u0430\u0442\u043D\u0443 \u0434\u043B\u044F \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u043D\u044F \u0430\u0431\u043E \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0456",
            'зберігати вірність типів',
            "\u0437\u0430\u0441\u0442\u043E\u0441\u043E\u0432\u0443\u0432\u0430\u0442\u0438 \u0432\u0456\u0434\u0434\u0430\u043B\u0435\u043D\u0443 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0443 \u043E\u0431'\u0454\u043A\u0442\u0456\u0432 \"\u0437\u0430 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F\u043C\""
        ]
    },
    {
        question: 'Основна мета дисципліни програмної архітектури є',
        answer: [
            'зниження складності системи шляхом абстракції і розмежування повноважень'
        ]
    },
    {
        question: 'Стандартна XML серіализація дозволяє',
        answer: [
            "\u043F\u0435\u0440\u0435\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u0441\u0442\u0430\u043D \u043E\u0431'\u0454\u043A\u0442\u0430 \u0432 \u0444\u043E\u0440\u043C\u0443, \u043F\u0440\u0438\u0434\u0430\u0442\u043D\u0443 \u0434\u043B\u044F \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u043D\u044F \u0430\u0431\u043E \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0456",
            'використовувати тільки відкриті властивості і поля'
        ]
    },
    {
        question: 'Стандартна JSON серіализація дозволяє',
        answer: [
            "\u043F\u0435\u0440\u0435\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u0441\u0442\u0430\u043D \u043E\u0431'\u0454\u043A\u0442\u0430 \u0432 \u0444\u043E\u0440\u043C\u0443, \u043F\u0440\u0438\u0434\u0430\u0442\u043D\u0443 \u0434\u043B\u044F \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u043D\u044F \u0430\u0431\u043E \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0456",
            'використовувати тільки відкриті властивості і поля'
        ]
    },
    {
        question: 'Вкажіть коректні правила іменування для XML Element',
        answer: [
            "\u0456\u043C'\u044F \u0442\u0435\u0433\u0443 \u043C\u0430\u0454 \u043F\u043E\u0447\u0438\u043D\u0430\u0442\u0438\u0441\u044F \u0437 \u0431\u0443\u043A\u0432\u0438 \u0430\u0431\u043E \u0441\u0438\u043C\u0432\u043E\u043B\u0443 \u043F\u0456\u0434\u043A\u0440\u0435\u0441\u043B\u0435\u043D\u043D\u044F",
            "\u0456\u043C'\u044F \u0442\u0435\u0433\u0443 \u043D\u0435 \u043C\u043E\u0436\u0435 \u043F\u043E\u0447\u0438\u043D\u0430\u0442\u0438\u0441\u044F \u0437 \u0440\u044F\u0434\u043A\u0430 \u00ABxml\u00BB \u0432 \u0431\u0443\u0434\u044C-\u044F\u043A\u043E\u043C\u0443 \u0440\u0435\u0433\u0456\u0441\u0442\u0440\u0456"
        ]
    },
    {
        question: 'Вкажіть коректні правила іменування для атрибутів XML Element',
        answer: [
            "\u0456\u043C'\u044F \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430 \u043F\u043E\u0432\u0438\u043D\u043D\u043E \u043F\u043E\u0447\u0438\u043D\u0430\u0442\u0438\u0441\u044F \u0437 \u0431\u0443\u043A\u0432\u0438 \u0430\u0431\u043E \u0441\u0438\u043C\u0432\u043E\u043B\u0443 \u043F\u0456\u0434\u043A\u0440\u0435\u0441\u043B\u0435\u043D\u043D\u044F",
            "\u0456\u043C'\u044F \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430 \u043D\u0435 \u043C\u043E\u0436\u0435 \u043F\u043E\u0447\u0438\u043D\u0430\u0442\u0438\u0441\u044F \u0437 \u0440\u044F\u0434\u043A\u0430 \u00ABxml\u00BB \u0432 \u0431\u0443\u0434\u044C-\u044F\u043A\u043E\u043C\u0443 \u0440\u0435\u0433\u0456\u0441\u0442\u0440\u0456"
        ]
    },
    {
        question: 'Вкажіть правильний синтаксис для XML Element',
        answer: [
            '<Tag * [attribName = "value"]> body </ tag>',
            '<Tag * [attribName = "value"] />'
        ]
    },
    {
        question: 'В COM-технології для забезпечення коректної взаємодії многопоточного клієнта і однопотокового сервера використовують',
        answer: [
            'апартменти (apartments)'
        ]
    },
    {
        question: 'В COM-технології інформація про місцезнаходження COM-сервера знаходиться',
        answer: [
            'в реєстрі операційної системи'
        ]
    },
    {
        question: 'В COM-технології маршалінга (marshaling) використовується для',
        answer: [
            'упаковки і розпаковування параметрів методів під час виклику методу через кордони процесу'
        ]
    },
    {
        question: 'Якщо застосування використовує COM-сервер, реалізований у вигляді DLL то це дозволяє',
        answer: [
            "\u0437\u043C\u0435\u043D\u0448\u0438\u0442\u0438 \u043D\u0430\u043A\u043B\u0430\u0434\u043D\u0456 \u0432\u0438\u0442\u0440\u0430\u0442\u0438 \u043D\u0430 \u0432\u0438\u043A\u043B\u0438\u043A \u043C\u0435\u0442\u043E\u0434\u0456\u0432 COM-\u043E\u0431'\u0454\u043A\u0442\u0430"
        ]
    },
    {
        question: 'Якщо застосування використовує COM-сервер, реалізований у вигляді EXE то це дозволяє',
        answer: [
            'збільшити надійність застосування'
        ]
    },
    {
        question: 'До поведінкових шаблонах (Behavioral design patterns) відносяться',
        answer: [
            'Спостерігач (Observer)',
        ]
    },
    {
        question: 'До породжує шаблонами (Creational design patterns) відносяться',
        answer: [
            'Відкладене ініціалізація (Lazy initialization)'
        ]
    },
    {
        question: 'До структурних шаблонах (Structural design patterns) відносяться',
        answer: [
            'Шаблон Фасад (Facade)'
        ]
    },
    {
        question: 'До шаблонами паралельного програмування (Concurrency design patterns) відносяться',
        answer: [
            'Блокування з подвійною перевіркою (Double-checked locking)'
        ]
    },
    {
        question: 'За допомогою шаблонів проектування',
        answer: [
            'забезпечують загальний (уніфікований) словник предметної області',
            'спрощується документування архітектури ПО',
            'розглядають проблему на абстрактному рівні',
            'виділяють важливі частини архітектури в компактній формі'
        ]
    },
    {
        question: "\u0428\u0430\u0431\u043B\u043E\u043D\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u0443\u0432\u0430\u043D\u043D\u044F, \u044F\u043A\u0456 \u0430\u0431\u0441\u0442\u0440\u0430\u0433\u0443\u044E\u0442\u044C \u043F\u0440\u043E\u0446\u0435\u0441 \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F \u0435\u043A\u0437\u0435\u043C\u043F\u043B\u044F\u0440\u0430 \u043A\u043B\u0430\u0441\u0443 \u0456 \u0434\u043E\u0437\u0432\u043E\u043B\u044F\u044E\u0442\u044C \u0437\u0440\u043E\u0431\u0438\u0442\u0438 \u0441\u0438\u0441\u0442\u0435\u043C\u0443 \u043D\u0435\u0437\u0430\u043B\u0435\u0436\u043D\u043E\u044E \u0432\u0456\u0434 \u0441\u043F\u043E\u0441\u043E\u0431\u0443 \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F, \u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0446\u0456\u0457 \u0442\u0430 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044F \u043E\u0431'\u0454\u043A\u0442\u0456\u0432 \u0432\u0456\u0434\u043D\u043E\u0441\u044F\u0442\u044C\u0441\u044F \u0434\u043E",
        answer: [
            'породжуючими шаблонами (Creational design patterns)'
        ]
    },
    {
        question: "\u0428\u0430\u0431\u043B\u043E\u043D\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u0443\u0432\u0430\u043D\u043D\u044F, \u044F\u043A\u0456 \u0432\u0438\u0437\u043D\u0430\u0447\u0430\u044E\u0442\u044C \u0432\u0437\u0430\u0454\u043C\u043E\u0434\u0456\u044E \u043C\u0456\u0436 \u043E\u0431'\u0454\u043A\u0442\u0430\u043C\u0438, \u0437\u0431\u0456\u043B\u044C\u0448\u0443\u044E\u0447\u0438 \u0442\u0430\u043A\u0438\u043C \u0447\u0438\u043D\u043E\u043C \u0439\u043E\u0433\u043E \u0433\u043D\u0443\u0447\u043A\u0456\u0441\u0442\u044C \u0432\u0456\u0434\u043D\u043E\u0441\u044F\u0442\u044C\u0441\u044F \u0434\u043E",
        answer: [
            'поведінковим шаблонами (Behavioral design patterns)'
        ]
    },
    {
        question: "\u0428\u0430\u0431\u043B\u043E\u043D\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u0443\u0432\u0430\u043D\u043D\u044F, \u044F\u043A\u0456 \u0432\u0438\u0437\u043D\u0430\u0447\u0430\u044E\u0442\u044C \u0440\u0456\u0437\u043D\u0456 \u0441\u043A\u043B\u0430\u0434\u043D\u0456 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0438, \u044F\u043A\u0456 \u0437\u043C\u0456\u043D\u044E\u044E\u0442\u044C \u0456\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0432\u0436\u0435 \u0456\u0441\u043D\u0443\u044E\u0447\u0438\u0445 \u043E\u0431'\u0454\u043A\u0442\u0456\u0432 \u0430\u0431\u043E \u0439\u043E\u0433\u043E \u0440\u0435\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044E, \u0434\u043E\u0437\u0432\u043E\u043B\u044F\u044E\u0447\u0438 \u043F\u043E\u043B\u0435\u0433\u0448\u0438\u0442\u0438 \u0440\u043E\u0437\u0440\u043E\u0431\u043A\u0443 \u0456 \u043E\u043F\u0442\u0438\u043C\u0456\u0437\u0443\u0432\u0430\u0442\u0438 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0443 \u0432\u0456\u0434\u043D\u043E\u0441\u044F\u0442\u044C\u0441\u044F \u0434\u043E",
        answer: [
            'структурним шаблонами (Structural design patterns)'
        ]
    },
    {
        question: 'Вкажіть анти-патерн використання одного шаблону для вирішення всіх можливих і неможливих завдань',
        answer: [
            'Golden hammer'
        ]
    },
    {
        question: 'Вкажіть анти-патерн змішання рівня бізнес-логіки та інтерфейсу',
        answer: [
            'Magic pushbutton'
        ]
    }
];


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

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\dmytro.onyshchenko\Desktop\t1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map