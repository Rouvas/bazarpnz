function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/adminboard/adminboard.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminboard/adminboard.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminboardAdminboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"lime-container\">\n    <div class=\"lime-body\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <div class=\"card bg-info text-white\">\n                        <div class=\"card-body\">\n                            <div class=\"dashboard-info row\">\n                                <div class=\"info-text col-md-6\">\n                                    <h5 class=\"card-title\">Доброго времени суток, {{name}}!</h5>\n                                    <p>В личном кабинете вы можете:</p>\n                                    <ul>\n                                        <li>Управлять всеми объявлениями</li>\n                                        <li>Управлять аккаунтами пользователей</li>\n                                        <li>Управлять категорями объявлений</li>\n                                    </ul>\n                                </div>\n                                <div class=\"info-image col-md-6\"></div>\n                            </div>\n                        </div>\n                    </div>\n                </div>      \n                <div class=\"col-md-4\">\n                    <div class=\"card\">\n                        <div class=\"card-body\">\n                            <div class=\"\">\n                                <div class=\"\">\n                                    <h5 class=\"card-title\">Ваш аккаунт</h5>\n                                    <li>Ваше имя: {{name}} </li>\n                                    <li>Ваш E-Mail: {{email}}</li>\n                                    <li>Ваш телефон: {{number}}</li>\n                                    <li>Ваш статус: {{rolename}}</li>\n                                    <a href=\"#\" class=\"btn btn-warning m-t-xs\" style=\"margin-right: 10px;\" (click)=\"openModal(changedata)\" onclick=\"return false;\">Изменить данные</a>\n                                    <a href=\"#\" class=\"btn btn-warning m-t-xs\" (click)=\"openModal(forgetpass)\" onclick=\"return false;\" >Сменить пароль</a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>                      \n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <div class=\"card stat-card\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">Всего аккаунтов</h5>\n                            <h2 class=\"float-right\">{{this.allaccounts}}</h2>\n                            <p>Пользователи</p>\n                            <div class=\"progress\" style=\"height: 10px;\">\n                                <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 100%\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"card stat-card\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">Всего активных объявлений</h5>\n                            <h2 class=\"float-right\">{{this.objectKeys(this.countadverts).length}}</h2>\n                            <p>Учитываются проверенные</p>\n                            <div class=\"progress\" style=\"height: 10px;\">\n                                <progressbar  [max]=\"this.objectKeys(this.alladverts).length\" [value]=\"this.objectKeys(this.countadverts).length\">\n                                  </progressbar>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <div class=\"card\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">Управление аккаунтами</h5>\n                            <div class=\"justify-content-center\">\n                            <mat-form-field>\n                                <mat-label>Введите почту, id, либо имя пользователя</mat-label>\n                                <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Джеймс\" #input>\n                              </mat-form-field>\n                            </div>\n                              <div class=\"mat-elevation-z8\" style=\"justify-content:center;\">\n                                <table mat-table [dataSource]=\"dataSource\" matSort>\n                              \n                                  <!-- ID Column -->\n                                  <ng-container matColumnDef=\"id\">\n                                    <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\n                                    <td mat-cell *matCellDef=\"let row\" style='word-break: break-all;'> {{row.id}} </td>\n                                  </ng-container>\n                              \n                                  <!-- Progress Column -->\n                                  <ng-container matColumnDef=\"name\">\n                                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Имя </th>\n                                    <td mat-cell *matCellDef=\"let row\"> {{row.name}} </td>\n                                  </ng-container>\n                              \n                                  <!-- Name Column -->\n                                  <ng-container matColumnDef=\"role\">\n                                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Роль </th>\n                                    <td mat-cell *matCellDef=\"let row\"> {{row.role}} </td>\n                                  </ng-container>\n                              \n                                  <!-- Color Column -->\n                                  <ng-container matColumnDef=\"color\">\n                                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Действие </th>\n                                    <td mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\" (click)=\"openModal(openaccount,row.id)\" > <a class=\"badge badge-success\">Открыть</a> </td>\n                                  </ng-container>\n                              \n                                  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                                  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                              \n                                  <!-- Row shown when there is no matching data. -->\n                                  <tr class=\"mat-row\" *matNoDataRow>\n                                    <td class=\"mat-cell\" colspan=\"4\">No data matching the filter \"{{input.value}}\"</td>\n                                  </tr>\n                                </table>\n                              \n                                <!-- <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator> -->\n                              </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"card\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">Управление объявлениями</h5>\n                            <div class=\"justify-content-center\">\n                            <mat-form-field>\n                                <mat-label>Введите название, id, либо статус</mat-label>\n                                <input matInput (keyup)=\"applyFilter2($event)\" placeholder=\"Огнетушитель\" #input>\n                              </mat-form-field>\n                            </div>\n                              <div class=\"mat-elevation-z8\" style=\"justify-content:center;\">\n                                <table mat-table [dataSource]=\"dataSource2\" matSort>\n                              \n                                  <!-- ID Column -->\n                                  <ng-container matColumnDef=\"id\">\n                                    <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\n                                    <td mat-cell *matCellDef=\"let row\" style='word-break: break-all;'> {{row.id}} </td>\n                                  </ng-container>\n                              \n                                  <!-- Progress Column -->\n                                  <ng-container matColumnDef=\"name\">\n                                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Название </th>\n                                    <td mat-cell *matCellDef=\"let row\"> {{row.name}} </td>\n                                  </ng-container>\n                              \n                                  <!-- Name Column -->\n                                  <ng-container matColumnDef=\"role\">\n                                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Статус </th>\n                                    <td mat-cell *matCellDef=\"let row\"> {{row.role}} </td>\n                                  </ng-container>\n                              \n                                  <!-- Color Column -->\n                                  <ng-container matColumnDef=\"color\">\n                                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Действие </th>\n                                    <td mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\" routerLink=\"/advert/{{row.id}}\" > <a class=\"badge badge-success\">Открыть</a> </td>\n                                  </ng-container>\n                              \n                                  <tr mat-header-row *matHeaderRowDef=\"displayedColumns2\"></tr>\n                                  <tr mat-row *matRowDef=\"let row; columns: displayedColumns2;\"></tr>\n                              \n                                  <!-- Row shown when there is no matching data. -->\n                                  <tr class=\"mat-row\" *matNoDataRow>\n                                    <td class=\"mat-cell\" colspan=\"4\">No data matching the filter \"{{input.value}}\"</td>\n                                  </tr>\n                                </table>\n                              \n                                <!-- <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator> -->\n                              </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <div class=\"card\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">Управление категориями</h5>\n                            \n                            <mat-form-field>\n                                <mat-label>Введите почту, id, либо имя пользователя</mat-label>\n                                <input matInput (keyup)=\"applyFilter3($event)\" placeholder=\"Недвижимость\" #input>\n                              </mat-form-field>\n                            \n                              <div class=\"mat-elevation-z9\" style=\"justify-content:center;\">\n                                <table mat-table [dataSource]=\"dataSource3\" matSort>\n                              \n                                  <!-- ID Column -->\n                                  <ng-container matColumnDef=\"name\">\n                                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Название </th>\n                                    <td mat-cell *matCellDef=\"let row\" style='word-break: break-all;'> {{row.name}} </td>\n                                  </ng-container>\n                              \n                              \n                                  <!-- Color Column -->\n                                  <ng-container matColumnDef=\"color\">\n                                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Действие </th>\n                                    <td mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\" (click)=\"openModal(openaccount,row.name)\" > <a class=\"badge badge-success\">Открыть</a> </td>\n                                  </ng-container>\n                              \n                                  <tr mat-header-row *matHeaderRowDef=\"displayedColumns3\"></tr>\n                                  <tr mat-row *matRowDef=\"let row; columns: displayedColumns3;\"></tr>\n                              \n                                  <!-- Row shown when there is no matching data. -->\n                                  <tr class=\"mat-row\" *matNoDataRow>\n                                    <td class=\"mat-cell\" colspan=\"4\">No data matching the filter \"{{input.value}}\"</td>\n                                  </tr>\n                                </table>\n\n                                <!-- <mat-paginator [length]=\"this.resultsLength3\" [pageSize]=\"5\"></mat-paginator> -->\n                        \n                                <!-- <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator> -->\n                              </div>\n                              <button  href=\"./lk\" class=\"btn btn-info btn-block\"> Добавить категорию  </button>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"card\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">Управление районами</h5>\n                            <div class=\"justify-content-center\">\n                            <mat-form-field>\n                                <mat-label>Введите название, id, либо статус</mat-label>\n                                <input matInput (keyup)=\"applyFilter4($event)\" placeholder=\"Огнетушитель\" #input>\n                              </mat-form-field>\n                            </div>\n                              <div class=\"mat-elevation-z8\" style=\"justify-content:center;\">\n                                <table mat-table [dataSource]=\"dataSource4\" matSort>\n                              \n                                  <!-- ID Column -->\n                                  <ng-container matColumnDef=\"name\">\n                                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Название </th>\n                                    <td mat-cell *matCellDef=\"let row\" style='word-break: break-all;'> {{row.name}} </td>\n                                  </ng-container>                 \n                              \n                                  <!-- Color Column -->\n                                  <ng-container matColumnDef=\"color\">\n                                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Действие </th>\n                                    <td mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\" routerLink=\"/advert/{{row.id}}\" > <a class=\"badge badge-success\">Открыть</a> </td>\n                                  </ng-container>\n                              \n                                  <tr mat-header-row *matHeaderRowDef=\"displayedColumns4\"></tr>\n                                  <tr mat-row *matRowDef=\"let row; columns: displayedColumns4;\"></tr>\n                              \n                                  <!-- Row shown when there is no matching data. -->\n                                  <tr class=\"mat-row\" *matNoDataRow>\n                                    <td class=\"mat-cell\" colspan=\"4\">No data matching the filter \"{{input.value}}\"</td>\n                                  </tr>\n                                </table>\n                              \n                                <!-- <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator> -->\n                                \n                              </div>\n                              <button  href=\"./lk\" class=\"btn btn-info btn-block\"> Добавить район  </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <!-- Новости и жалобы -->\n\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <div class=\"card\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">Управление новостями</h5>\n                            <div class=\"justify-content-center\">\n                            <mat-form-field>\n                                <mat-label>Введите почту, id, либо имя пользователя</mat-label>\n                                <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Джеймс\" #input>\n                              </mat-form-field>\n                            </div>\n                              <div class=\"mat-elevation-z8\" style=\"justify-content:center;\">\n                                <table mat-table [dataSource]=\"dataSource\" matSort>\n                              \n                                  <!-- ID Column -->\n                                  <ng-container matColumnDef=\"id\">\n                                    <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\n                                    <td mat-cell *matCellDef=\"let row\" style='word-break: break-all;'> {{row.id}} </td>\n                                  </ng-container>\n                              \n                                  <!-- Progress Column -->\n                                  <ng-container matColumnDef=\"name\">\n                                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Имя </th>\n                                    <td mat-cell *matCellDef=\"let row\"> {{row.name}} </td>\n                                  </ng-container>\n                              \n                                  <!-- Name Column -->\n                                  <ng-container matColumnDef=\"role\">\n                                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Роль </th>\n                                    <td mat-cell *matCellDef=\"let row\"> {{row.role}} </td>\n                                  </ng-container>\n                              \n                                  <!-- Color Column -->\n                                  <ng-container matColumnDef=\"color\">\n                                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Действие </th>\n                                    <td mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\" (click)=\"openModal(openaccount,row.id)\" > <a class=\"badge badge-success\">Открыть</a> </td>\n                                  </ng-container>\n                              \n                                  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                                  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                              \n                                  <!-- Row shown when there is no matching data. -->\n                                  <tr class=\"mat-row\" *matNoDataRow>\n                                    <td class=\"mat-cell\" colspan=\"4\">No data matching the filter \"{{input.value}}\"</td>\n                                  </tr>\n                                </table>\n                              \n                                <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n                              </div>\n                              <button  href=\"./lk\" class=\"btn btn-info btn-block\"> Добавить новость  </button>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"card\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">Управление жалобами</h5>\n                            <div class=\"justify-content-center\">\n                            <mat-form-field>\n                                <mat-label>Введите название, id, либо статус</mat-label>\n                                <input matInput (keyup)=\"applyFilter2($event)\" placeholder=\"Огнетушитель\" #input>\n                              </mat-form-field>\n                            </div>\n                              <div class=\"mat-elevation-z8\" style=\"justify-content:center;\">\n                                <table mat-table [dataSource]=\"dataSource2\" matSort>\n                              \n                                  <!-- ID Column -->\n                                  <ng-container matColumnDef=\"id\">\n                                    <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\n                                    <td mat-cell *matCellDef=\"let row\" style='word-break: break-all;'> {{row.id}} </td>\n                                  </ng-container>\n                              \n                                  <!-- Progress Column -->\n                                  <ng-container matColumnDef=\"name\">\n                                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Имя </th>\n                                    <td mat-cell *matCellDef=\"let row\"> {{row.name}} </td>\n                                  </ng-container>\n                              \n                                  <!-- Name Column -->\n                                  <ng-container matColumnDef=\"role\">\n                                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Статус </th>\n                                    <td mat-cell *matCellDef=\"let row\"> {{row.role}} </td>\n                                  </ng-container>\n                              \n                                  <!-- Color Column -->\n                                  <ng-container matColumnDef=\"color\">\n                                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Действие </th>\n                                    <td mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\" routerLink=\"/advert/{{row.id}}\" > <a class=\"badge badge-success\">Открыть</a> </td>\n                                  </ng-container>\n                              \n                                  <tr mat-header-row *matHeaderRowDef=\"displayedColumns2\"></tr>\n                                  <tr mat-row *matRowDef=\"let row; columns: displayedColumns2;\"></tr>\n                              \n                                  <!-- Row shown when there is no matching data. -->\n                                  <tr class=\"mat-row\" *matNoDataRow>\n                                    <td class=\"mat-cell\" colspan=\"4\">No data matching the filter \"{{input.value}}\"</td>\n                                  </tr>\n                                </table>\n                              \n                                <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n                              </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"card\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">Общая сводка по сервису</h5>\n                            <div class=\"table-responsive\">\n                                <table class=\"table\">\n                                    <thead>\n                                        <tr>\n                                            <th scope=\"col\">Всего объявлений</th>\n                                            <th scope=\"col\">Всего категорий</th>\n                                            <!-- <th scope=\"col\">Общее количество посетителей</th> -->\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr>\n                                            <td>{{this.objectKeys(this.alladverts).length}}</td>\n                                            <td>{{this.objectKeys(this.allcategory).length}}</td>\n                                            <!-- <td>Просмотрели объявления: </td> -->\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>      \n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n<ng-template #forgetpass>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\">Восстановление пароля</h4>\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"container\">\n            \n        <div class=\"card\">\n            <article class=\"card-body\">\n                 <form (ngSubmit)=\"onRecovered(forgetemail)\">\n                <div class=\"form-group\">\n                    <label>Введите вашу почту для начала операции</label>\n                    <input name=\"forgetemail\" class=\"form-control\" placeholder=\"Email\" type=\"email\" [(ngModel)]=\"forgetemail\">\n                </div> \n \n                <div class=\"form-group\">\n                    <button type=\"submit\" class=\"btn btn-primary btn-block\"> Отправить  </button>\n                </div>                                                         \n            </form>\n            <alert type=\"danger\" *ngIf=\"isrecovered==2\">\n                <strong>О, нет!</strong> Кажется вы допустили ошибку при вводе данных.\n              </alert>\n        \n              <alert type=\"success\" *ngIf=\"isrecovered==1\">\n                <strong>Отлично!</strong> Мы отправили вам на почту ссылку для смены пароля.\n              </alert>  \n            </article>\n        \n            </div>\n        \n        \n        </div>\n    </div>\n  </ng-template>\n\n  <ng-template #changedata>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\">Изменение данных</h4>\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"container\">\n            \n        <div class=\"card\">\n            <article class=\"card-body\">\n                 <form (ngSubmit)=\"onChangeData(thisname,thisnumber)\">\n                <div class=\"form-group\">\n                    <label>Имя</label>\n                    <input name=\"\" class=\"form-control\" placeholder=\"Имя\" type=\"text\" [(ngModel)]=\"thisname\"  [ngModelOptions]=\"{standalone: true}\">\n                </div> \n                <div class=\"form-group\">\n                    <label>Номер телефона</label>\n                    <input name=\"\" class=\"form-control\"[textMask]=\"{mask: mask}\" placeholder=\"+7 (   ) - \" type=\"text\" [(ngModel)]=\"thisnumber\"  [ngModelOptions]=\"{standalone: true}\">\n                </div> \n \n                <div class=\"form-group\"> \n                </div> \n                <div class=\"form-group\">\n                    <button type=\"accept\" class=\"btn btn-primary btn-block\"> Сохранить  </button>\n                </div>                                                         \n            </form>\n            <alert type=\"danger\" *ngIf=\"ischanged==2\">\n                <strong>О, нет!</strong> Кажется вы допустили ошибку при вводе данных.\n              </alert>\n        \n              <alert type=\"success\" *ngIf=\"ischanged==1\">\n                <strong>Отлично!</strong> Мы сохранили ваши данные.\n              </alert>  \n            </article>\n        \n            </div>\n        \n        \n        </div>\n    </div>\n  </ng-template>\n\n  <ng-template #newadvert>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\">Добавить объявление</h4>\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"container\">\n            \n        <div class=\"card\">\n            <article class=\"card-body\">\n                 <form (ngSubmit)=\"onNewAdvert(category,newadvertname,place,price,additional)\">\n                <div class=\"form-group\">\n                    <label>Ваше имя</label>\n                    <input name=\"\" class=\"form-control\" placeholder=\"Имя\" type=\"text\" [(ngModel)]=\"name\"  [ngModelOptions]=\"{standalone: true}\" disabled>\n                </div> \n                <div class=\"form-group\">\n                    <label>Ваш номер телефона</label>\n                    <input name=\"\" class=\"form-control\"[textMask]=\"{mask: mask}\" placeholder=\"+7 (   ) - \" type=\"text\" [(ngModel)]=\"number\"  [ngModelOptions]=\"{standalone: true}\" disabled>\n                </div> \n                <div class=\"form-group\">\n                    <label>Название объявления</label>\n                    <input name=\"\" class=\"form-control\" placeholder=\"Введите название...\" type=\"text\" [(ngModel)]=\"newadvertname\"  [ngModelOptions]=\"{standalone: true}\" >\n                </div>  \n                <div class=\"form-group\">\n                    <label>Цена (в рублях)</label>\n                    <input name=\"\" class=\"form-control\" placeholder=\"Введите цену..\" type=\"number\" [(ngModel)]=\"price\"  [ngModelOptions]=\"{standalone: true}\" >\n                </div>\n                <div class=\"form-group\">\n                    <label>Категория</label>\n                    <input name=\"\" class=\"form-control\" [typeahead]=\"this.categories\" placeholder=\"Выберите категорию, начиная вводить\" type=\"text\" [(ngModel)]=\"category\"  [ngModelOptions]=\"{standalone: true}\" >\n                </div> \n                <div class=\"form-group\">\n                    <label>Район</label>\n                    <input name=\"\" class=\"form-control\" placeholder=\"Введите район продажи...\" type=\"text\" [(ngModel)]=\"place\"  [ngModelOptions]=\"{standalone: true}\" >\n                </div> \n                <div class=\"form-group\">\n                    <label>Подробности</label>\n                    <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\" [(ngModel)]=\"additional\" [ngModelOptions]=\"{standalone: true}\"></textarea>\n                </div>                \n\n                <div class=\"form-group\">\n                    <button class=\"btn btn-primary btn-block\"> Отправить  </button>\n                </div>                                                         \n            </form>\n            <alert type=\"danger\" *ngIf=\"isnewadvert==2\">\n                <strong>О, нет!</strong> Кажется вы допустили ошибку при вводе данных.\n              </alert>\n        \n              <alert type=\"success\" *ngIf=\"isnewadvert==1\">\n                <strong>Отлично!</strong> Мы отправили ваше объявление на проверку.\n              </alert>  \n            </article>\n        \n            </div>\n        \n        \n        </div>\n    </div>\n  </ng-template>\n\n  <ng-template #openaccount>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\">Modal</h4>\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      {{this.openedacc}}\n    </div>\n</ng-template>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/advert/advert.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/advert/advert.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdvertAdvertComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<ngx-spinner bdColor = \"rgba(0, 0, 0, 0.8)\" size = \"medium\" color = \"#fff\" type = \"timer\" [fullScreen] = \"true\"><p style=\"color: white\" > Loading... </p></ngx-spinner>\n<div class=\"container\">\n\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n        <div class=\"card  text-black\">\n            <div class=\"card-body\">\n                <div class=\"dashboard-info row\">\n                    <div class=\"info-text col-md-6\">\n                        <h5 class=\"card-title\">Последние новости!</h5>\n                    </div>\n                    <div *ngFor=\"let i of objectKeys(this.anyAlerts)\">\n                      <alert [type]=\"this.anyAlerts[i].type\">{{ this.anyAlerts[i].msg }}</alert>\n                   </div>       \n                </div>\n            </div>\n        </div>\n    </div>      \n    <div class=\"col-md-4\">\n        <div class=\"card\">\n            <div class=\"card-body\" *ngIf=\"auth.user | async as user; else showLogin\">\n                        <h5 class=\"card-title\">Добро пожаловать, {{name}}</h5>\n                        <li>Ваше имя: {{name}} </li>\n                        <li>Ваш E-Mail: {{email}}</li>\n                        <li>Ваш телефон: {{number}}</li>\n                        <li>Ваш статус: {{rolename}}</li>\n            </div>\n\n            <ng-template #showLogin>\n              <div class=\"card-body\">\n                <h5 class=\"card-title\">Добро пожаловать!</h5>\n                <li>Вы находитесь режиме гостя. </li>\n                <li>Ваш доступен просмотр объявлений.</li>\n                <li>Для создания объявлений, войдите.</li>\n                <li>Либо зарегестрируйтесь.</li>\n                <a class=\"btn btn-success m-t-xs\" routerLink=\"/auth\" onclick=\"return false;\">Войти или зарегестрироваться</a>\n             </div>\n            </ng-template>\n\n        </div>\n    </div>                      \n</div>\n\n\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n          <div class=\"card\">\n              <div class=\"card-body\">\n                  <h5 class=\"card-title\">Категории объявлений</h5>\n                  <div class=\"table-responsive\">\n                      <table class=\"table\">\n                          <thead>\n                              <tr>\n                                  <th scope=\"col\">Название</th>\n                                  <th scope=\"col\">Действие</th>\n                              </tr>\n                          </thead>\n                          <tbody>\n                              <tr *ngFor=\"let i of objectKeys(this.cdatabase)\">\n                                  <td>{{i}}</td>\n                                  <td><a class=\"badge badge-info\" href=\"/category/{{i}}\">Открыть</a></td>\n                              </tr>\n                          </tbody>\n                      </table>\n                  </div>      \n              </div>\n          </div>\n      </div>\n  </div>\n      <!-- Далее идет блок с расписанием -->\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">Все объявления на сайте</h5>\n                    <div class=\"table-responsive\">\n                        <table class=\"table\">\n                            <thead>\n                                <tr>\n                                    <th scope=\"col\">Категория</th>\n                                    <th scope=\"col\">Название</th>\n                                    <th scope=\"col\">Цена</th>\n                                    <th scope=\"col\">Дата публикации</th>\n                                    <th scope=\"col\">Действие</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let i of objectKeys(this.alladverts)\">\n                                    <td>{{this.alladverts[i]['category']}}</td>\n                                    <td>{{this.alladverts[i]['name']}}</td>\n                                    <td>{{this.alladverts[i]['price']}}₽</td>\n                                    <td>{{this.alladverts[i]['date']}}</td>\n                                    <td><a href=\"./advert/{{i}}\" class=\"badge badge-success\">Открыть</a></td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>      \n                </div>\n            </div>\n        </div>\n    </div>\n          \n  </div> \n    <ng-template #errorpage>\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Ошибка!</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"ModalRef.hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        \n      Допущена ошибка при вводе, либо ничего не введено.\n      Попробуйте еще раз.\n    \n      </div>\n    </ng-template>\n    \n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/all-adverts/all-adverts.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-adverts/all-adverts.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAllAdvertsAllAdvertsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card  \">\n                    <div class=\"card-body \">\n                        <div class=\"\">\n                        <h5 class=\"card-title\">Категория - \"{{id}}\"</h5>\n                        <div class=\"table-responsive\">\n                            <table class=\"table \">\n                                <thead>\n                                    <tr>\n                                        <th scope=\"col\">О категории</th>\n                                        <th scope=\"col\">Количество объявлений</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr>\n                                        <td>{{cdatabase}}</td>\n                                        <td>365</td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>      \n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    \n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">Все объявления данной категории</h5>\n                    <div class=\"table-responsive\">\n                        <table class=\"table\">\n                            <thead>\n                                <tr>\n                                    <th scope=\"col\">Категория</th>\n                                    <th scope=\"col\">Название</th>\n                                    <th scope=\"col\">Цена</th>\n                                    <th scope=\"col\">Дата публикации</th>\n                                    <th scope=\"col\">Действие</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <td>0776</td>\n                                    <td>Sale Management</td>\n                                    <td>$18, 560</td>\n                                    <td>$18, 560</td>\n                                    <td><span class=\"badge badge-success\">Finished</span></td>\n                                </tr>\n                                <tr>\n                                    <td>0759</td>\n                                    <td>Dropbox</td>\n                                    <td>$40, 672</td>\n                                    <td>$18, 560</td>\n                                    <td><span class=\"badge badge-warning\">Waiting</span></td>\n                                </tr>\n                                <tr>\n                                    <td>0741</td>\n                                    <td>Social Media</td>\n                                    <td>$13, 378</td>\n                                    <td>$18, 560</td>\n                                    <td><span class=\"badge badge-info\">In Progress</span></td>\n                                </tr>\n                                <tr>\n                                    <td>0740</td>\n                                    <td>Envato Market</td>\n                                    <td>$17, 456</td>\n                                    <td>$18, 560</td>\n                                    <td><span class=\"badge badge-info\">In Progress</span></td>\n                                </tr>\n                                <tr>\n                                    <td>0735</td>\n                                    <td>Graphic Design</td>\n                                    <td>$29, 999</td>\n                                    <td>$18, 560</td>\n                                    <td><span class=\"badge badge-secondary\">Canceled</span></td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>      \n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Шапка -->\n\n<div class=\"lime-header\">\n  <nav class=\"navbar navbar-expand-lg\">\n\n      <a class=\"navbar-brand\" href=\"#\">BazarPNZ</a>\n      <span dropdown>\n      <button class=\"navbar-toggler\" type=\"button\" id=\"basic-link\" dropdownToggle data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"openModal(menu)\" onclick=\"return false;\">\n          <i class=\"material-icons\">keyboard_arrow_down</i>\n      </button>\n      <!-- <ul class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu>\n        <li><a class=\"dropdown-item\" href=\"#\">Главная страница</a></li>\n        <li><a class=\"dropdown-item\" href=\"./lk\">Личный кабинет</a></li>\n        <li class=\"divider\"></li>\n        <li><a class=\"dropdown-item\" href=\"#\">Выйти из аккаунта</a></li>\n\n    </ul> -->\n    </span>\n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n          <form class=\"form-inline my-2 my-lg-0 search\">\n              <input name=\"Search\" class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Поиск по названиям объявлений...\" aria-label=\"Search\" [(ngModel)]=\"selectedValue\"  [typeahead]=\"Search\"  typeaheadOptionField=\"name\" (typeaheadOnSelect)=\"onSelect($event)\">\n          </form>\n          <ul class=\"navbar-nav ml-auto\" >\n              <li class=\"nav-item dropdown\" dropdown>\n                  <a class=\"nav-link dropdown-toggle\" href=\"#\" dropdownToggle role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" onclick=\"return false;\">\n                      <i class=\"material-icons\">more_vert</i>\n                  </a>\n                  <ul class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu>\n                      <li><a class=\"dropdown-item\" routerLink=\"/\" >Главная страница</a></li>\n                      <li *ngIf=\"auth.user | async as user; else showLogin\"><a class=\"dropdown-item\" routerLink=\"/lk\">Личный кабинет</a></li>\n                      <ng-template #showLogin>\n                        <a class=\"dropdown-item\" routerLink=\"/auth\" >Войти или зарегестрироваться</a>\n                      </ng-template>\n                      <li class=\"divider\" *ngIf=\"auth.user | async as user;\"></li>\n                      <li *ngIf=\"auth.user | async as user;\"><a class=\"dropdown-item\" href=\"#\"  (click)=\"onLogout()\" onclick=\"return false;\">Выйти из аккаунта</a></li>\n\n                  </ul>\n              </li>\n          </ul>\n      </div>\n  </nav>\n</div>\n\n<!-- Блоки -->\n<router-outlet></router-outlet>\n\n<!-- Подвал -->\n<!-- <footer class=\"no-print\">\n  <div class=\"mini-footer\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"copyright-text\">\n            <p>© 2020\n              Школа 68 г. Пензы, Пензенской области.\n             <br></p>\n             <div *ngIf=\"auth.user | async as user; else showLogin\">\n               <button class=\"btn btn-success\" routerLink = \"/setup\" routerLinkActive=\"active-link\" style=\"margin-right: 5px;\" >Войти в редактор</button>\n               <button class=\"btn btn-warning\" (click)=\"onLogout()\" >Выход из аккаунта</button>\n              </div>\n             \n             <ng-template #showLogin>\n              <a routerLink=\"/auth\" routerLinkActive=\"active\" >Авторизация</a>\n            </ng-template>\n            <p class=\"font-weight-light\">Версия 2.0</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer> -->\n\n<ng-template #menu>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Навигация</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n      <div class=\"container\">\n          \n      <div class=\"card\">\n          <article class=\"card-body\">\n            <label style=\"justify-content: center;\">Поиск по названиям объявлений</label>\n            <form class=\"form-inline my-2 my-lg-0 search justify-content-center\">\n              <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Поиск по названиям объявлений...\" aria-label=\"Search\">\n              <!-- <button  href=\"#\" class=\"btn btn-info mr-sm-2\"> Открыть  </button> -->\n          </form>\n\n          <button  href=\"#\" class=\"btn btn-info btn-block\" style=\"margin-top:10px\"> Главная страница  </button>\n          <button  href=\"./lk\" class=\"btn btn-info btn-block\"> Личный кабинет  </button>\n          \n           <hr>\n           <button  href=\"#\" class=\"btn btn-primary btn-block\"> Выйти из аккаунта  </button>\n      \n    \n \n          </article>\n      \n          </div>\n      \n      \n      </div>\n  </div>\n</ng-template>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthAuthComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"reg\" *ngIf=\"condition\">\n    <aside class=\"col-sm-4\">\n<div class=\"card\">\n    <article class=\"card-body\">\n        <button class=\"float-right btn btn-primary\" (click)=\"toggle()\">Регистрация</button>\n    <h4 class=\"card-title mb-4 mt-1\">Войти</h4>\n         <form (submit)=\"onLogin(email,password)\">\n        <div class=\"form-group\">\n            <label>Почта</label>\n            <input name=\"\" class=\"form-control\" placeholder=\"Email\" type=\"email\" [(ngModel)]=\"email\"  [ngModelOptions]=\"{standalone: true}\">\n        </div> \n        <div class=\"form-group\">\n            <a class=\"float-right\" href=\"##\" (click)=\"openModal(forgetpass)\" onclick=\"return false;\">Забыли пароль?</a>\n            <label>Пароль</label>\n            <input class=\"form-control\" placeholder=\"******\" type=\"password\" [(ngModel)]=\"password\"  [ngModelOptions]=\"{standalone: true}\">\n        </div> \n        <div class=\"form-group\"> \n        </div> \n        <div class=\"form-group\">\n            <button type=\"submit\" class=\"btn btn-primary btn-block\"> Войти  </button>\n        </div>                                                         \n    </form>\n    <alert type=\"danger\" *ngIf=\"isloggined==2\">\n        <strong>О, нет!</strong> Кажется вы допустили ошибку при вводе данных.\n      </alert>\n\n      <alert type=\"success\" *ngIf=\"isloggined==1\">\n        <strong>Отлично!</strong> Загружаем ваш аккаунт и отправляем вас в личный кабинет.\n      </alert>  \n    </article>\n\n    </div>\n\n</aside>\n</div>\n\n\n<div class=\"reg\" *ngIf=\"!condition\">\n    <aside class=\"col-sm-6 \">\n<div class=\"card\">\n    <article class=\"card-body\">\n        <button class=\"float-right btn btn-primary\"  (click)=\"toggle()\">Есть аккаунт?</button>\n    <h4 class=\"card-title mb-4 mt-1\">Регистрация</h4>\n         <form (submit)=\"onRegister(email,password,name,number)\">\n            <div class=\"form-group\">\n                <label>Ваше имя</label>\n                <input name=\"\" class=\"form-control\" placeholder=\"Имя\" type=\"text\" [(ngModel)]=\"name\"  [ngModelOptions]=\"{standalone: true}\">\n            </div>   \n            <div class=\"form-group\">\n                <label>Номер телефона</label>\n                <input name=\"\" [textMask]=\"{mask: mask}\" class=\"form-control\" placeholder=\"Номер телефона\" type=\"text\" [(ngModel)]=\"number\"  [ngModelOptions]=\"{standalone: true}\">\n            </div> \n        <div class=\"form-group\">\n            <label>Почта</label>\n            <input name=\"\" class=\"form-control\" placeholder=\"Email\" type=\"email\" [(ngModel)]=\"email\"  [ngModelOptions]=\"{standalone: true}\">\n        </div> \n        <div class=\"form-group\">\n            <label>Пароль</label>\n            <input class=\"form-control\" placeholder=\"******\" type=\"password\" [(ngModel)]=\"password\"  [ngModelOptions]=\"{standalone: true}\">\n        </div> \n        <div class=\"form-group\"> \n        </div>  \n        <div class=\"form-group\">\n            <button type=\"submit\" class=\"btn btn-primary btn-block\"> Зарегестрироваться </button>\n        </div>                                                            \n    </form>\n    <alert type=\"danger\" *ngIf=\"isregistered==2\">\n        <strong>О, нет!</strong> Кажется вы допустили ошибку при вводе данных, либо такая почта уже используется.\n      </alert>\n\n      <alert type=\"success\" *ngIf=\"isregistered==1\">\n        <strong>Отлично!</strong> Сохраняем ваш аккаунт и отправляем вас в личный кабинет.\n      </alert> \n    </article>\n    </div>\n</aside>\n</div>\n\n<ng-template #forgetpass>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\">Восстановление пароля</h4>\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"container\" *ngIf=\"condition\">\n            \n        <div class=\"card\">\n            <article class=\"card-body\">\n                 <form (submit)=\"onRecovered(email)\">\n                <div class=\"form-group\">\n                    <label>Почта</label>\n                    <input name=\"\" class=\"form-control\" placeholder=\"Email\" type=\"email\" [(ngModel)]=\"email\"  [ngModelOptions]=\"{standalone: true}\">\n                </div> \n \n                <div class=\"form-group\"> \n                </div> \n                <div class=\"form-group\">\n                    <button type=\"accept\" class=\"btn btn-primary btn-block\"> Отправить  </button>\n                </div>                                                         \n            </form>\n            <alert type=\"danger\" *ngIf=\"isrecovered==2\">\n                <strong>О, нет!</strong> Кажется вы допустили ошибку при вводе данных.\n              </alert>\n        \n              <alert type=\"success\" *ngIf=\"isrecovered==1\">\n                <strong>Отлично!</strong> Мы отправили вам на почту ссылку для восстановления пароля.\n              </alert>  \n            </article>\n        \n            </div>\n        \n        \n        </div>\n    </div>\n  </ng-template>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/editor/editor.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/editor/editor.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEditorEditorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"lime-container\">\n    <div class=\"lime-body\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <div class=\"card bg-info text-white\">\n                        <div class=\"card-body\">\n                            <div class=\"dashboard-info row\">\n                                <div class=\"info-text col-md-6\">\n                                    <h5 class=\"card-title\">Добро пожаловать, {{name}}!</h5>\n                                    <p>В режиме редактора вы можете управлять объявлениями.</p>\n                                    <ul>\n                                        <li>Посмотрите список неопубликованных объявлений</li>\n                                        <li>Откройте и изучите</li>\n                                        <li>Разрешите или запретите публикацию</li>\n                                    </ul>\n                                </div>\n                                <div class=\"info-image col-md-6\"></div>\n                            </div>\n                        </div>\n                    </div>\n                </div>      \n                <div class=\"col-md-4\">\n                    <div class=\"card\">\n                        <div class=\"card-body\">\n                            <div class=\"\">\n                                <div class=\"\">\n                                    <h5 class=\"card-title\">Ваш аккаунт</h5>\n                                    <li>Ваше имя: {{name}} </li>\n                                    <li>Ваш E-Mail: {{email}}</li>\n                                    <li>Ваш телефон: {{number}}</li>\n                                    <li>Ваш статус: {{rolename}}</li>\n                                    <a href=\"#\" class=\"btn btn-warning m-t-xs\" style=\"margin-right: 10px;\" (click)=\"openModal(changedata)\" onclick=\"return false;\">Изменить данные</a>\n                                    <a href=\"#\" class=\"btn btn-warning m-t-xs\" (click)=\"openModal(forgetpass)\" onclick=\"return false;\" >Сменить пароль</a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>                      \n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"card\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">Неопубликованные объявления</h5>\n                            <div class=\"table-responsive\">\n                                <table class=\"table\">\n                                    <thead>\n                                        <tr>\n                                            <th scope=\"col\">Категория</th>\n                                            <th scope=\"col\">Название</th>\n                                            <th scope=\"col\">Цена</th>\n                                            <th scope=\"col\">Дата публикации</th>\n                                            <th scope=\"col\">Действие</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr *ngFor=\"let i of objectKeys(this.newadverts)\">\n                                            <td>{{this.newadverts[i]['category']}}</td>\n                                            <td>{{this.newadverts[i]['name']}}</td>\n                                            <td>{{this.newadverts[i]['price']}}₽</td>\n                                            <td>{{this.newadverts[i]['date']}}</td>\n                                            <td><a href=\"./advert/{{i}}\" class=\"badge badge-success\">Открыть</a></td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>      \n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n<ng-template #forgetpass>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\">Восстановление пароля</h4>\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"container\">\n            \n        <div class=\"card\">\n            <article class=\"card-body\">\n                 <form (submit)=\"onRecovered(email)\">\n                <div class=\"form-group\">\n                    <label>Введите вашу почту для начала операции</label>\n                    <input name=\"\" class=\"form-control\" placeholder=\"Email\" type=\"email\" [(ngModel)]=\"email\"  [ngModelOptions]=\"{standalone: true}\">\n                </div> \n \n                <div class=\"form-group\"> \n                </div> \n                <div class=\"form-group\">\n                    <button type=\"accept\" class=\"btn btn-primary btn-block\"> Отправить  </button>\n                </div>                                                         \n            </form>\n            <alert type=\"danger\" *ngIf=\"isrecovered==2\">\n                <strong>О, нет!</strong> Кажется вы допустили ошибку при вводе данных.\n              </alert>\n        \n              <alert type=\"success\" *ngIf=\"isrecovered==1\">\n                <strong>Отлично!</strong> Мы отправили вам на почту ссылку для смены пароля.\n              </alert>  \n            </article>\n        \n            </div>\n        \n        \n        </div>\n    </div>\n  </ng-template>\n\n  <ng-template #changedata>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\">Изменение данных</h4>\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"container\">\n            \n        <div class=\"card\">\n            <article class=\"card-body\">\n                 <form (submit)=\"onRecovered(email)\">\n                <div class=\"form-group\">\n                    <label>Имя</label>\n                    <input name=\"\" class=\"form-control\" placeholder=\"Имя\" type=\"text\" [(ngModel)]=\"name\"  [ngModelOptions]=\"{standalone: true}\">\n                </div> \n                <div class=\"form-group\">\n                    <label>Номер телефона</label>\n                    <input name=\"\" class=\"form-control\"[textMask]=\"{mask: mask}\" placeholder=\"+7 (   ) - \" type=\"text\" [(ngModel)]=\"number\"  [ngModelOptions]=\"{standalone: true}\">\n                </div> \n \n                <div class=\"form-group\"> \n                </div> \n                <div class=\"form-group\">\n                    <button type=\"accept\" class=\"btn btn-primary btn-block\"> Сохранить  </button>\n                </div>                                                         \n            </form>\n            <alert type=\"danger\" *ngIf=\"isrecovered==2\">\n                <strong>О, нет!</strong> Кажется вы допустили ошибку при вводе данных.\n              </alert>\n        \n              <alert type=\"success\" *ngIf=\"isrecovered==1\">\n                <strong>Отлично!</strong> Мы сохранили ваши данные.\n              </alert>  \n            </article>\n        \n            </div>\n        \n        \n        </div>\n    </div>\n  </ng-template>\n\n  <ng-template #newadvert>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\">Добавить объявление</h4>\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"container\">\n            \n        <div class=\"card\">\n            <article class=\"card-body\">\n                 <form (submit)=\"onRecovered(email)\">\n                <div class=\"form-group\">\n                    <label>Ваше имя</label>\n                    <input name=\"\" class=\"form-control\" placeholder=\"Имя\" type=\"text\" [(ngModel)]=\"name\"  [ngModelOptions]=\"{standalone: true}\" disabled>\n                </div> \n                <div class=\"form-group\">\n                    <label>Ваш номер телефона</label>\n                    <input name=\"\" class=\"form-control\"[textMask]=\"{mask: mask}\" placeholder=\"+7 (   ) - \" type=\"text\" [(ngModel)]=\"number\"  [ngModelOptions]=\"{standalone: true}\" disabled>\n                </div> \n                <div class=\"form-group\">\n                    <label>Название объявления</label>\n                    <input name=\"\" class=\"form-control\" placeholder=\"Введите название...\" type=\"text\" [(ngModel)]=\"newadvertname\"  [ngModelOptions]=\"{standalone: true}\" >\n                </div>  \n                <div class=\"form-group\">\n                    <label>Цена</label>\n                    <input name=\"\" class=\"form-control\" placeholder=\"Введите цену..\" type=\"text\" [(ngModel)]=\"newadvertname\"  [ngModelOptions]=\"{standalone: true}\" >\n                </div>\n                <div class=\"form-group\">\n                    <label>Категория</label>\n                    <input name=\"\" class=\"form-control\" placeholder=\"Выберите категорию, начиная вводить\" type=\"text\" [(ngModel)]=\"category\"  [ngModelOptions]=\"{standalone: true}\" >\n                </div> \n                <div class=\"form-group\">\n                    <label>Подробности</label>\n                    <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\" [(ngModel)]=\"additional\" [ngModelOptions]=\"{standalone: true}\"></textarea>\n                </div>                \n\n                <div class=\"form-group\">\n                    <button type=\"accept\" class=\"btn btn-primary btn-block\"> Отправить  </button>\n                </div>                                                         \n            </form>\n            <alert type=\"danger\" *ngIf=\"isrecovered==2\">\n                <strong>О, нет!</strong> Кажется вы допустили ошибку при вводе данных.\n              </alert>\n        \n              <alert type=\"success\" *ngIf=\"isrecovered==1\">\n                <strong>Отлично!</strong> Мы отправили ваше объявление на проверку.\n              </alert>  \n            </article>\n        \n            </div>\n        \n        \n        </div>\n    </div>\n  </ng-template>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/lk/lk.component.html":
  /*!****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lk/lk.component.html ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLkLkComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "        <div class=\"lime-container\">\n            <div class=\"lime-body\">\n                <div class=\"container\">\n                    <div class=\"row\">\n                        <div class=\"col-md-8\">\n                            <div class=\"card bg-info text-white\">\n                                <div class=\"card-body\">\n                                    <div class=\"dashboard-info row\">\n                                        <div class=\"info-text col-md-6\">\n                                            <h5 class=\"card-title\">Добро пожаловать, {{name}}!</h5>\n                                            <p>В личном кабинете вы можете добавить новое объявление.</p>\n                                            <ul>\n                                                <li>Придумайте интересное объявление</li>\n                                                <li>Оцените его стоимость адекватно</li>\n                                                <li>Напишите объявление</li>\n                                            </ul>\n                                            <a href=\"#\" class=\"btn btn-warning m-t-xs\" (click)=\"openModal(newadvert)\" onclick=\"return false;\">Создать объявление</a>\n                                        </div>\n                                        <div class=\"info-image col-md-6\"></div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>      \n                        <div class=\"col-md-4\">\n                            <div class=\"card\">\n                                <div class=\"card-body\">\n                                    <div class=\"\">\n                                        <div class=\"\">\n                                            <h5 class=\"card-title\">Ваш аккаунт</h5>\n                                            <li>Ваше имя: {{name}} </li>\n                                            <li>Ваш E-Mail: {{email}}</li>\n                                            <li>Ваш телефон: {{number}}</li>\n                                            <li>Ваш статус: {{rolename}}</li>\n                                            <a href=\"#\" class=\"btn btn-warning m-t-xs\" style=\"margin-right: 10px;\" (click)=\"openModal(changedata)\" onclick=\"return false;\">Изменить данные</a>\n                                            <a href=\"#\" class=\"btn btn-warning m-t-xs\" (click)=\"openModal(forgetpass)\" onclick=\"return false;\" >Сменить пароль</a>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>                      \n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <div class=\"card\">\n                                <div class=\"card-body\">\n                                    <h5 class=\"card-title\">Ваши объявления</h5>\n                                    <div class=\"table-responsive\">\n                                        <table class=\"table\">\n                                            <thead>\n                                                <tr>\n                                                    <th scope=\"col\">Категория</th>\n                                                    <th scope=\"col\">Название</th>\n                                                    <th scope=\"col\">Цена</th>\n                                                    <th scope=\"col\">Дата публикации</th>\n                                                    <th scope=\"col\">Действие</th>\n                                                </tr>\n                                            </thead>\n                                            <tbody>\n                                                <tr *ngFor=\"let i of objectKeys(this.myadverts)\">\n                                                    <td>{{this.myadverts[i]['category']}}</td>\n                                                    <td>{{this.myadverts[i]['name']}}</td>\n                                                    <td>{{this.myadverts[i]['price']}}₽</td>\n                                                    <td>{{this.myadverts[i]['date']}}</td>\n                                                    <td><a href=\"./advert/{{i}}\" class=\"badge badge-success\">Открыть</a></td>\n                                                </tr>\n                                            </tbody>\n                                        </table>\n                                    </div>      \n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n\n\n        <ng-template #forgetpass>\n            <div class=\"modal-header\">\n              <h4 class=\"modal-title pull-left\">Восстановление пароля</h4>\n              <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"container\">\n                    \n                <div class=\"card\">\n                    <article class=\"card-body\">\n                         <form (ngSubmit)=\"onRecovered(forgetemail)\">\n                        <div class=\"form-group\">\n                            <label>Введите вашу почту для начала операции</label>\n                            <input name=\"forgetemail\" class=\"form-control\" placeholder=\"Email\" type=\"email\" [(ngModel)]=\"forgetemail\">\n                        </div> \n         \n                        <div class=\"form-group\">\n                            <button type=\"submit\" class=\"btn btn-primary btn-block\"> Отправить  </button>\n                        </div>                                                         \n                    </form>\n                    <alert type=\"danger\" *ngIf=\"isrecovered==2\">\n                        <strong>О, нет!</strong> Кажется вы допустили ошибку при вводе данных.\n                      </alert>\n                \n                      <alert type=\"success\" *ngIf=\"isrecovered==1\">\n                        <strong>Отлично!</strong> Мы отправили вам на почту ссылку для смены пароля.\n                      </alert>  \n                    </article>\n                \n                    </div>\n                \n                \n                </div>\n            </div>\n          </ng-template>\n        \n          <ng-template #changedata>\n            <div class=\"modal-header\">\n              <h4 class=\"modal-title pull-left\">Изменение данных</h4>\n              <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"container\">\n                    \n                <div class=\"card\">\n                    <article class=\"card-body\">\n                         <form (ngSubmit)=\"onChangeData(thisname,thisnumber)\">\n                        <div class=\"form-group\">\n                            <label>Имя</label>\n                            <input name=\"\" class=\"form-control\" placeholder=\"Имя\" type=\"text\" [(ngModel)]=\"thisname\"  [ngModelOptions]=\"{standalone: true}\">\n                        </div> \n                        <div class=\"form-group\">\n                            <label>Номер телефона</label>\n                            <input name=\"\" class=\"form-control\"[textMask]=\"{mask: mask}\" placeholder=\"+7 (   ) - \" type=\"text\" [(ngModel)]=\"thisnumber\"  [ngModelOptions]=\"{standalone: true}\">\n                        </div> \n         \n                        <div class=\"form-group\"> \n                        </div> \n                        <div class=\"form-group\">\n                            <button type=\"accept\" class=\"btn btn-primary btn-block\"> Сохранить  </button>\n                        </div>                                                         \n                    </form>\n                    <alert type=\"danger\" *ngIf=\"ischanged==2\">\n                        <strong>О, нет!</strong> Кажется вы допустили ошибку при вводе данных.\n                      </alert>\n                \n                      <alert type=\"success\" *ngIf=\"ischanged==1\">\n                        <strong>Отлично!</strong> Мы сохранили ваши данные.\n                      </alert>  \n                    </article>\n                \n                    </div>\n                \n                \n                </div>\n            </div>\n          </ng-template>\n        \n          <ng-template #newadvert>\n            <div class=\"modal-header\">\n              <h4 class=\"modal-title pull-left\">Добавить объявление</h4>\n              <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"container\">\n                    \n                <div class=\"card\">\n                    <article class=\"card-body\">\n                         <form (ngSubmit)=\"onNewAdvert(category,newadvertname,place,price,additional)\">\n                        <div class=\"form-group\">\n                            <label>Ваше имя</label>\n                            <input name=\"\" class=\"form-control\" placeholder=\"Имя\" type=\"text\" [(ngModel)]=\"name\"  [ngModelOptions]=\"{standalone: true}\" disabled>\n                        </div> \n                        <div class=\"form-group\">\n                            <label>Ваш номер телефона</label>\n                            <input name=\"\" class=\"form-control\"[textMask]=\"{mask: mask}\" placeholder=\"+7 (   ) - \" type=\"text\" [(ngModel)]=\"number\"  [ngModelOptions]=\"{standalone: true}\" disabled>\n                        </div> \n                        <div class=\"form-group\">\n                            <label>Название объявления</label>\n                            <input name=\"\" class=\"form-control\" placeholder=\"Введите название...\" type=\"text\" [(ngModel)]=\"newadvertname\"  [ngModelOptions]=\"{standalone: true}\" >\n                        </div>  \n                        <div class=\"form-group\">\n                            <label>Цена (в рублях)</label>\n                            <input name=\"\" class=\"form-control\" placeholder=\"Введите цену..\" type=\"number\" [(ngModel)]=\"price\"  [ngModelOptions]=\"{standalone: true}\" >\n                        </div>\n                        <div class=\"form-group\">\n                            <label>Категория</label>\n                            <input name=\"\" class=\"form-control\" [typeahead]=\"this.categories\" placeholder=\"Выберите категорию, начиная вводить\" type=\"text\" [(ngModel)]=\"category\"  [ngModelOptions]=\"{standalone: true}\" >\n                        </div> \n                        <div class=\"form-group\">\n                            <label>Район</label>\n                            <input name=\"\" class=\"form-control\" [typeahead]=\"this.places\" placeholder=\"Введите район продажи...\" type=\"text\" [(ngModel)]=\"place\"  [ngModelOptions]=\"{standalone: true}\" >\n                        </div> \n                        <div class=\"form-group\">\n                            <label>Подробности</label>\n                            <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\" [(ngModel)]=\"additional\" [ngModelOptions]=\"{standalone: true}\"></textarea>\n                        </div>                \n\n                        <div class=\"form-group\">\n                            <button class=\"btn btn-primary btn-block\"> Отправить  </button>\n                        </div>                                                         \n                    </form>\n                    <alert type=\"danger\" *ngIf=\"isnewadvert==2\">\n                        <strong>О, нет!</strong> Кажется вы допустили ошибку при вводе данных.\n                      </alert>\n                \n                      <alert type=\"success\" *ngIf=\"isnewadvert==1\">\n                        <strong>Отлично!</strong> Мы отправили ваше объявление на проверку.\n                      </alert>  \n                    </article>\n                \n                    </div>\n                \n                \n                </div>\n            </div>\n          </ng-template>\n        ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNotFoundNotFoundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<body class=\"error-page err-404\">\n    <div class=\"container\">\n        <div class=\"error-container\">\n            <div class=\"error-info\">\n                <h1>404</h1>\n                <p>Кажется, вы попали не по адресу.<br>Пожалуйста, перейдите на <a href=\"./\">главную страницу</a>.</p>\n            </div>\n            <div class=\"error-image\"></div>\n        </div>\n    </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/selected-advert/selected-advert.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/selected-advert/selected-advert.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSelectedAdvertSelectedAdvertComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n\n<div class=\"row\">\n    <div class=\"col-md-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h5 class=\"card-title\"> Информация об объявлении</h5>\n                <div class=\"table-responsive\">\n                    <table class=\"table\">\n                        <thead>\n                            <tr>\n                                <th scope=\"col\">Категория</th>\n                                <th scope=\"col\">Название</th>\n                                <th scope=\"col\">Цена</th>       \n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td>{{this.category}}</td>\n                                <td>{{this.name}}</td>\n                                <td>{{this.price}} ₽</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>      \n            </div>\n        </div>\n    </div>\n\n\n    <div class=\"col-md-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h5 class=\"card-title\"> Информация о продавце</h5>\n                <div class=\"table-responsive\">\n                    <table class=\"table\">\n                        <thead>\n                            <tr>\n                                <th scope=\"col\">Имя</th>\n                                <th scope=\"col\">Телефон</th>\n                                <th scope=\"col\">E-Mail</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td>{{this.ownername}}</td>\n                                <td>{{this.ownernumber}}</td>\n                                <td>{{this.ownermail}}</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>      \n            </div>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <!-- <h5 class=\"card-title\"></h5> -->\n                <div class=\"table-responsive\">\n                    <table class=\"table\">\n                        <thead>\n                            <tr>\n                                <th scope=\"col\">Район продажи</th>\n                                <th scope=\"col\">ID объявления в базе</th>\n                                <th scope=\"col\">Дата публикации</th>       \n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td>{{this.place}}</td>\n                                <td>{{this.advertid}}</td>\n                                <td>{{this.date}}</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>  \n                <li>Описание объявления: {{this.text}}</li>  \n                 \n            </div>\n        </div>\n    </div>\n</div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/adminboard/adminboard.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/adminboard/adminboard.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminboardAdminboardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\n    width: 100%;\n  }\n  \n  .mat-form-field {\n    font-size: 14px;\n    width: 100%;\n  }\n  \n  td, th {\n    width: 25%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5ib2FyZC9hZG1pbmJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsV0FBVztFQUNiOztFQUVBO0lBQ0UsVUFBVTtFQUNaIiwiZmlsZSI6InNyYy9hcHAvYWRtaW5ib2FyZC9hZG1pbmJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICB0ZCwgdGgge1xuICAgIHdpZHRoOiAyNSU7XG4gIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/adminboard/adminboard.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/adminboard/adminboard.component.ts ***!
    \****************************************************/

  /*! exports provided: AdminboardComponent */

  /***/
  function srcAppAdminboardAdminboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminboardComponent", function () {
      return AdminboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/database/es2015/index.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");

    var AdminboardComponent = /*#__PURE__*/function () {
      function AdminboardComponent(db, auth, modalService) {
        var _this = this;

        _classCallCheck(this, AdminboardComponent);

        this.db = db;
        this.auth = auth;
        this.modalService = modalService;
        this.adverts = [];
        this.advertsval = {};
        this.users = [];
        this.usersval = {};
        this.categories = [];
        this.categoriesval = {};
        this.mask = ['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
        this.alladverts = {};
        this.countadverts = {};
        this.allcategory = {};
        this.objectKeys = Object.keys;
        this.displayedColumns = ['id', 'name', 'role', 'color'];
        this.displayedColumns2 = ['id', 'name', 'role', 'color'];
        this.displayedColumns3 = ['name', 'color'];
        this.displayedColumns4 = ['name', 'color'];
        this.allplacesval = {};
        this.allplaces = [];
        this.getUsers();
        this.getAdverts();
        this.getCategories();
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.users);
        this.dataSource2 = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.adverts);
        this.dataSource3 = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.categories);
        this.dataSource4 = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.allplaces);
        this.auth.authState.subscribe(function (user) {
          if (user) _this.userId = user.uid;
          if (user) _this.email = user.email;

          _this.getAccount(_this.userId);
        });
      }

      _createClass(AdminboardComponent, [{
        key: "openModal",
        value: function openModal(template, id) {
          this.modalRef = this.modalService.show(template);
          this.openedacc = id;
        }
      }, {
        key: "getCountAdverts",
        value: function getCountAdverts() {
          var _this2 = this;

          this.db.object('adverts').valueChanges().subscribe(function (val) {
            _this2.countadverts = val;

            var _iterator = _createForOfIteratorHelper(_this2.objectKeys(_this2.countadverts)),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var i = _step.value;

                if (_this2.countadverts[i]['status'] != 1) {
                  delete _this2.countadverts[i];
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          });
        }
      }, {
        key: "getAdverts",
        value: function getAdverts() {
          var _this3 = this;

          this.db.object('adverts').valueChanges().subscribe(function (val) {
            _this3.alladverts = val; // Полная бд

            var _iterator2 = _createForOfIteratorHelper(_this3.objectKeys(_this3.alladverts)),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var i = _step2.value;

                if (_this3.alladverts[i]['status'] == 0) {
                  _this3.alladverts[i]['status'] = 'Проверка';
                } else if (_this3.alladverts[i]['status'] == 1) {
                  _this3.alladverts[i]['status'] = 'Опубл.';
                } else {
                  _this3.alladverts[i]['status'] = 'Блок.';
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            var count = 0;

            var _iterator3 = _createForOfIteratorHelper(_this3.objectKeys(_this3.alladverts)),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var _i = _step3.value;
                _this3.adverts[count] = {
                  name: _this3.alladverts[_i]['name'],
                  id: _i,
                  role: _this3.alladverts[_i]['status']
                };
                count = count + 1;
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            _this3.dataSource2 = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this3.adverts);
          });
        }
      }, {
        key: "getCategories",
        value: function getCategories() {
          var _this4 = this;

          this.db.object('category').valueChanges().subscribe(function (val) {
            _this4.allcategory = val; // Полная бд

            var count = 0;

            var _iterator4 = _createForOfIteratorHelper(_this4.objectKeys(_this4.allcategory)),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var i = _step4.value;
                _this4.categories[count] = {
                  name: i
                };
                count = count + 1;
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            console.log(_this4.categories);
            _this4.dataSource3 = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this4.categories);
            _this4.dataSource3.paginator = _this4.paginator3;
            _this4.dataSource3.sort = _this4.sort3;
            _this4.resultsLength3 = count;
          });
        }
      }, {
        key: "getPlaces",
        value: function getPlaces() {
          var _this5 = this;

          this.db.object('place').valueChanges().subscribe(function (val) {
            _this5.allplacesval = val; // Полная бд

            var count = 0;

            var _iterator5 = _createForOfIteratorHelper(_this5.objectKeys(_this5.allplacesval)),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var i = _step5.value;
                _this5.allplaces[count] = {
                  name: i
                };
                count = count + 1;
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }

            _this5.dataSource4 = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this5.allplaces);
            _this5.dataSource4.paginator = _this5.paginator4;
            _this5.dataSource4.sort = _this5.sort4;
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getCountAdverts();
          this.getAdverts();
          this.getCategories();
          this.getPlaces();
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.dataSource2.paginator = this.paginator2;
          this.dataSource2.sort = this.sort2;
          this.dataSource3.paginator = this.paginator3;
          this.dataSource3.sort = this.sort3;
        }
      }, {
        key: "getAccount",
        value: function getAccount(userid) {
          var _this6 = this;

          this.db.object('accounts/' + userid).valueChanges().subscribe(function (val) {
            _this6.database = val; // Полная бд

            _this6.role = _this6.database['role'];

            if (_this6.role == 0) {
              _this6.rolename = 'Пользователь';
            } else if (_this6.role == 1) {
              _this6.rolename = 'Редактор';
            } else {
              _this6.rolename = 'Администратор';
            }

            _this6.number = _this6.database['number'];
            _this6.thisnumber = _this6.number;
            _this6.name = _this6.database['name'];
            _this6.thisname = _this6.name;
          });
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(event) {
          var filterValue = event.target.value;
          this.dataSource.filter = filterValue.trim().toLowerCase();

          if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
          }
        }
      }, {
        key: "applyFilter2",
        value: function applyFilter2(event) {
          var filterValue2 = event.target.value;
          this.dataSource2.filter = filterValue2.trim().toLowerCase();

          if (this.dataSource2.paginator) {
            this.dataSource2.paginator.firstPage();
          }
        }
      }, {
        key: "applyFilter3",
        value: function applyFilter3(event) {
          var filterValue3 = event.target.value;
          this.dataSource3.filter = filterValue3.trim().toLowerCase();

          if (this.dataSource3.paginator) {
            this.dataSource3.paginator.firstPage();
          }
        }
      }, {
        key: "applyFilter4",
        value: function applyFilter4(event) {
          var filterValue4 = event.target.value;
          this.dataSource4.filter = filterValue4.trim().toLowerCase();

          if (this.dataSource4.paginator) {
            this.dataSource4.paginator.firstPage();
          }
        }
      }, {
        key: "getUsers",
        value: function getUsers() {
          var _this7 = this;

          this.db.object('accounts').valueChanges().subscribe(function (val) {
            _this7.usersval = val; // Полная бд

            var _iterator6 = _createForOfIteratorHelper(_this7.objectKeys(_this7.usersval)),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var i = _step6.value;

                if (_this7.usersval[i]['role'] == 0) {
                  _this7.usersval[i]['role'] = 'Польз.';
                } else if (_this7.usersval[i]['role'] == 1) {
                  _this7.usersval[i]['role'] = 'Редактор';
                } else {
                  _this7.usersval[i]['role'] = 'Админ.';
                }
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }

            var count = 0;

            var _iterator7 = _createForOfIteratorHelper(_this7.objectKeys(_this7.usersval)),
                _step7;

            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var _i2 = _step7.value;
                _this7.users[count] = {
                  name: _this7.usersval[_i2]['name'],
                  id: _i2,
                  role: _this7.usersval[_i2]['role']
                };
                count = count + 1;
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }

            _this7.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this7.users);
            _this7.allaccounts = _this7.users.length;
            _this7.dataSource.paginator = _this7.paginator;
            _this7.dataSource.sort = _this7.sort;
          });
        }
      }]);

      return AdminboardComponent;
    }();

    AdminboardComponent.ctorParameters = function () {
      return [{
        type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"]
      }, {
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
      "static": true
    })], AdminboardComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], {
      "static": true
    })], AdminboardComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
      "static": true
    })], AdminboardComponent.prototype, "paginator2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], {
      "static": true
    })], AdminboardComponent.prototype, "sort2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
      "static": true
    })], AdminboardComponent.prototype, "paginator3", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], {
      "static": true
    })], AdminboardComponent.prototype, "sort3", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
      "static": true
    })], AdminboardComponent.prototype, "paginator4", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], {
      "static": true
    })], AdminboardComponent.prototype, "sort4", void 0);
    AdminboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-adminboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./adminboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/adminboard/adminboard.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./adminboard.component.css */
      "./src/app/adminboard/adminboard.component.css"))["default"]]
    })], AdminboardComponent);
    /***/
  },

  /***/
  "./src/app/advert/Advert.component.css":
  /*!*********************************************!*\
    !*** ./src/app/advert/Advert.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdvertAdvertComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkdmVydC9BZHZlcnQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/advert/advert.component.ts":
  /*!********************************************!*\
    !*** ./src/app/advert/advert.component.ts ***!
    \********************************************/

  /*! exports provided: AdvertComponent */

  /***/
  function srcAppAdvertAdvertComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdvertComponent", function () {
      return AdvertComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/database/es2015/index.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");

    var AdvertComponent = /*#__PURE__*/function () {
      function AdvertComponent(modalService, db, SpinnerService, auth) {
        var _this8 = this;

        _classCallCheck(this, AdvertComponent);

        this.modalService = modalService;
        this.db = db;
        this.SpinnerService = SpinnerService;
        this.auth = auth;
        this.anyAlerts = [];
        this.cdatabase = new Object();
        this.alladverts = new Object();
        this.classShedule = {};
        this.objectKeys = Object.keys;
        this.causeError = 0;
        this.daysall = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]; // Дни недели

        this.daysallz = ["1", "2", "3", "4", "5", "6"]; //Простите меня за это

        this.colour = "table-success"; //Для подстветки цвета

        this.num = "";
        this.SpinnerService.show();
        this.auth.authState.subscribe(function (user) {
          if (user) _this8.userId = user.uid;
          if (user) _this8.email = user.email;

          _this8.getAccount(_this8.userId);
        });
      }

      _createClass(AdvertComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // this.getSchedule();
          this.getAlerts();
          this.getCategory();
          this.getAdverts();
          this.day = new Date().getDay() - 1;

          if (localStorage.getItem('class') == null) {
            this.SpinnerService.hide();
          }
        }
      }, {
        key: "getAlerts",
        value: function getAlerts() {
          var _this9 = this;

          this.db.object('alerts').valueChanges().subscribe(function (val) {
            _this9.anyAlerts = val;

            _this9.SpinnerService.hide();
          });
        }
      }, {
        key: "getAdverts",
        value: function getAdverts() {
          var _this10 = this;

          this.db.object('adverts').valueChanges().subscribe(function (val) {
            _this10.alladverts = val; // Полная бд
            //  this.classes = this.objectKeys(val).sort();  // Список классов
            //  if (localStorage.getItem('class') != null) {
            //   this.num = localStorage.getItem('class');
            //   this.openRasp();
            //  this.SpinnerService.hide();
            // }
          });
        }
      }, {
        key: "openModal",
        value: function openModal(template) {
          this.ModalRef = this.modalService.show(template);
        }
      }, {
        key: "openError",
        value: function openError(template) {
          this.num = this.num.replace(/\s/g, '');

          if (Object.keys(this.database).includes(this.num.toLowerCase())) {} else {
            this.ModalRef = this.modalService.show(template);
            return false;
          }
        }
      }, {
        key: "openTime",
        value: function openTime() {
          this.pageClass = undefined;
        } // openRasp() {
        //   localStorage.setItem('class', this.num);
        //   if (Object.keys(this.database).includes(this.num.toLowerCase())) {  
        //     this.pageClass = this.num.toUpperCase().replace(/(\d+)/g, '$1 "');;
        //     this.classShedule = this.database[this.num.toLowerCase()]; 
        //     this.localst = this.pageClass.toLowerCase();
        //   } else {
        //     //Выводим модалку с ошибкой
        //     this.causeError = 1;
        //     localStorage.setItem('class', '');
        //     this.num = '';
        //   }
        // }

      }, {
        key: "getAccount",
        value: function getAccount(userid) {
          var _this11 = this;

          this.db.object('accounts/' + userid).valueChanges().subscribe(function (val) {
            _this11.database = val; // Полная бд

            _this11.role = _this11.database['role'];

            if (_this11.role == 0) {
              _this11.rolename = 'Пользователь';
            } else if (_this11.role == 1) {
              _this11.rolename = 'Редактор';
            } else {
              _this11.rolename = 'Администратор';
            }

            _this11.number = _this11.database['number'];
            _this11.name = _this11.database['name'];
          });
        }
      }, {
        key: "getCategory",
        value: function getCategory() {
          var _this12 = this;

          this.db.object('category').valueChanges().subscribe(function (val) {
            _this12.cdatabase = val; // Полная бд

            console.log(_this12.cdatabase);
          });
        }
      }]);

      return AdvertComponent;
    }();

    AdvertComponent.ctorParameters = function () {
      return [{
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]
      }, {
        type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]
      }, {
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]
      }];
    };

    AdvertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-advert',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./advert.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/advert/advert.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./Advert.component.css */
      "./src/app/advert/Advert.component.css"))["default"]]
    })], AdvertComponent);
    /***/
  },

  /***/
  "./src/app/all-adverts/all-adverts.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/all-adverts/all-adverts.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAllAdvertsAllAdvertsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsbC1hZHZlcnRzL2FsbC1hZHZlcnRzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/all-adverts/all-adverts.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/all-adverts/all-adverts.component.ts ***!
    \******************************************************/

  /*! exports provided: AllAdvertsComponent */

  /***/
  function srcAppAllAdvertsAllAdvertsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllAdvertsComponent", function () {
      return AllAdvertsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/database/es2015/index.js");

    var AllAdvertsComponent = /*#__PURE__*/function () {
      function AllAdvertsComponent(activateRoute, db) {
        _classCallCheck(this, AllAdvertsComponent);

        this.activateRoute = activateRoute;
        this.db = db;
        this.id = activateRoute.snapshot.params['id'];
        this.getCategory(this.id);
      }

      _createClass(AllAdvertsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getCategory",
        value: function getCategory(id) {
          var _this13 = this;

          this.db.object('category/' + this.id).valueChanges().subscribe(function (val) {
            _this13.cdatabase = val; // Полная бд

            console.log(_this13.cdatabase);
          });
        }
      }]);

      return AllAdvertsComponent;
    }();

    AllAdvertsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]
      }];
    };

    AllAdvertsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-all-adverts',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./all-adverts.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/all-adverts/all-adverts.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./all-adverts.component.css */
      "./src/app/all-adverts/all-adverts.component.css"))["default"]]
    })], AllAdvertsComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _advert_advert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./advert/advert.component */
    "./src/app/advert/advert.component.ts");
    /* harmony import */


    var _auth_auth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./auth/auth.component */
    "./src/app/auth/auth.component.ts");
    /* harmony import */


    var _lk_lk_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./lk/lk.component */
    "./src/app/lk/lk.component.ts");
    /* harmony import */


    var _editor_editor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./editor/editor.component */
    "./src/app/editor/editor.component.ts");
    /* harmony import */


    var _all_adverts_all_adverts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./all-adverts/all-adverts.component */
    "./src/app/all-adverts/all-adverts.component.ts");
    /* harmony import */


    var _selected_advert_selected_advert_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./selected-advert/selected-advert.component */
    "./src/app/selected-advert/selected-advert.component.ts");
    /* harmony import */


    var _adminboard_adminboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./adminboard/adminboard.component */
    "./src/app/adminboard/adminboard.component.ts");
    /* harmony import */


    var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./not-found/not-found.component */
    "./src/app/not-found/not-found.component.ts");

    var routes = [{
      path: '',
      component: _advert_advert_component__WEBPACK_IMPORTED_MODULE_3__["AdvertComponent"]
    }, {
      path: 'auth',
      component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"]
    }, {
      path: 'lk',
      component: _lk_lk_component__WEBPACK_IMPORTED_MODULE_5__["LkComponent"]
    }, {
      path: 'editor',
      component: _editor_editor_component__WEBPACK_IMPORTED_MODULE_6__["EditorComponent"]
    }, {
      path: 'category/:id',
      component: _all_adverts_all_adverts_component__WEBPACK_IMPORTED_MODULE_7__["AllAdvertsComponent"]
    }, {
      path: 'advert/:id',
      component: _selected_advert_selected_advert_component__WEBPACK_IMPORTED_MODULE_8__["SelectedAdvertComponent"]
    }, {
      path: 'adminboard',
      component: _adminboard_adminboard_component__WEBPACK_IMPORTED_MODULE_9__["AdminboardComponent"]
    }, {
      path: '**',
      component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__["NotFoundComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/database/es2015/index.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(auth, router, modalService, db) {
        _classCallCheck(this, AppComponent);

        this.auth = auth;
        this.router = router;
        this.modalService = modalService;
        this.db = db;
        this.objectKeys = Object.keys;
        this.Search = [{}];
        this.takeAdvert = {};
      }

      _createClass(AppComponent, [{
        key: "onSelect",
        value: function onSelect(event) {
          this.router.navigate(['/advert', event.item['id']]);
        }
      }, {
        key: "getAdverts",
        value: function getAdverts() {
          var _this14 = this;

          this.db.object('adverts').valueChanges().subscribe(function (val) {
            _this14.takeAdvert = val; // Полная бд

            var count = 0;

            var _iterator8 = _createForOfIteratorHelper(_this14.objectKeys(_this14.takeAdvert)),
                _step8;

            try {
              for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                var i = _step8.value;
                _this14.Search[count] = {
                  name: _this14.takeAdvert[i]['name'],
                  id: i
                };
                count = count + 1;
              }
            } catch (err) {
              _iterator8.e(err);
            } finally {
              _iterator8.f();
            }
          });
        }
      }, {
        key: "openModal",
        value: function openModal(template) {
          this.modalRef = this.modalService.show(template);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getAdverts();
        }
      }, {
        key: "onLogout",
        value: function onLogout() {
          this.auth.auth.signOut();
          this.router.navigate(['/']);
        }
      }, {
        key: "onSetup",
        value: function onSetup() {
          this.router.navigate['/settings'];
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]
      }, {
        type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _all_adverts_all_adverts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./all-adverts/all-adverts.component */
    "./src/app/all-adverts/all-adverts.component.ts");
    /* harmony import */


    var _advert_advert_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./advert/advert.component */
    "./src/app/advert/advert.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-bootstrap/alert */
    "./node_modules/ngx-bootstrap/alert/fesm2015/ngx-bootstrap-alert.js");
    /* harmony import */


    var ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-bootstrap/typeahead */
    "./node_modules/ngx-bootstrap/typeahead/fesm2015/ngx-bootstrap-typeahead.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ngx-bootstrap/dropdown */
    "./node_modules/ngx-bootstrap/dropdown/fesm2015/ngx-bootstrap-dropdown.js");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/es2015/index.js");
    /* harmony import */


    var angular2_text_mask__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! angular2-text-mask */
    "./node_modules/angular2-text-mask/dist/angular2TextMask.js");
    /* harmony import */


    var angular2_text_mask__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_15__);
    /* harmony import */


    var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ngx-bootstrap/progressbar */
    "./node_modules/ngx-bootstrap/progressbar/fesm2015/ngx-bootstrap-progressbar.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/esm2015/drag-drop.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/esm2015/portal.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/esm2015/scrolling.js");
    /* harmony import */


    var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/cdk/stepper */
    "./node_modules/@angular/cdk/esm2015/stepper.js");
    /* harmony import */


    var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/cdk/table */
    "./node_modules/@angular/cdk/esm2015/table.js");
    /* harmony import */


    var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/cdk/tree */
    "./node_modules/@angular/cdk/esm2015/tree.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/esm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/esm2015/badge.js");
    /* harmony import */


    var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/bottom-sheet */
    "./node_modules/@angular/material/esm2015/bottom-sheet.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/esm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/esm2015/checkbox.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/esm2015/chips.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/esm2015/stepper.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/esm2015/datepicker.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/esm2015/divider.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/esm2015/expansion.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/esm2015/grid-list.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/esm2015/menu.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/esm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/esm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/esm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/esm2015/sidenav.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/esm2015/slider.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/esm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/esm2015/tabs.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/esm2015/tooltip.js");
    /* harmony import */


    var _angular_material_tree__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(
    /*! @angular/material/tree */
    "./node_modules/@angular/material/esm2015/tree.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/database/es2015/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(
    /*! @angular/fire/auth-guard */
    "./node_modules/@angular/fire/auth-guard/es2015/index.js");
    /* harmony import */


    var _auth_auth_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(
    /*! ./auth/auth.component */
    "./src/app/auth/auth.component.ts");
    /* harmony import */


    var _lk_lk_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(
    /*! ./lk/lk.component */
    "./src/app/lk/lk.component.ts");
    /* harmony import */


    var _editor_editor_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(
    /*! ./editor/editor.component */
    "./src/app/editor/editor.component.ts");
    /* harmony import */


    var _adminboard_adminboard_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(
    /*! ./adminboard/adminboard.component */
    "./src/app/adminboard/adminboard.component.ts");
    /* harmony import */


    var _selected_advert_selected_advert_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(
    /*! ./selected-advert/selected-advert.component */
    "./src/app/selected-advert/selected-advert.component.ts");
    /* harmony import */


    var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(
    /*! ./not-found/not-found.component */
    "./src/app/not-found/not-found.component.ts"); //


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _all_adverts_all_adverts_component__WEBPACK_IMPORTED_MODULE_5__["AllAdvertsComponent"], _advert_advert_component__WEBPACK_IMPORTED_MODULE_6__["AdvertComponent"], _auth_auth_component__WEBPACK_IMPORTED_MODULE_61__["AuthComponent"], _lk_lk_component__WEBPACK_IMPORTED_MODULE_62__["LkComponent"], _editor_editor_component__WEBPACK_IMPORTED_MODULE_63__["EditorComponent"], _adminboard_adminboard_component__WEBPACK_IMPORTED_MODULE_64__["AdminboardComponent"], _selected_advert_selected_advert_component__WEBPACK_IMPORTED_MODULE_65__["SelectedAdvertComponent"], _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_66__["NotFoundComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_15__["TextMaskModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_11__["TypeaheadModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["ModalModule"].forRoot(), ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_10__["AlertModule"].forRoot(), ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_13__["BsDropdownModule"].forRoot(), ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_14__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_58__["environment"].firebase), _angular_fire_database__WEBPACK_IMPORTED_MODULE_57__["AngularFireDatabaseModule"], _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_60__["AngularFireAuthGuardModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_59__["AngularFireAuthModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_20__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_21__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_22__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_17__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_25__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_26__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_27__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_28__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_29__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_30__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_31__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_32__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_33__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_34__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_35__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_36__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_37__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_38__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_39__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_40__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_41__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_42__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_43__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_44__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_45__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_41__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_46__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_47__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_48__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_49__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_50__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_51__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_52__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_53__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_54__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_55__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_56__["MatTreeModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_18__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__["ScrollingModule"], ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_16__["ProgressbarModule"].forRoot()],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/auth/auth.component.css":
  /*!*****************************************!*\
    !*** ./src/app/auth/auth.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthAuthComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYXV0aC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/auth/auth.component.ts":
  /*!****************************************!*\
    !*** ./src/app/auth/auth.component.ts ***!
    \****************************************/

  /*! exports provided: AuthComponent */

  /***/
  function srcAppAuthAuthComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthComponent", function () {
      return AuthComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/database/es2015/index.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AuthComponent = /*#__PURE__*/function () {
      function AuthComponent(auth, db, modalService, router) {
        _classCallCheck(this, AuthComponent);

        this.auth = auth;
        this.db = db;
        this.modalService = modalService;
        this.router = router;
        this.mask = ['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
        this.condition = true;
      }

      _createClass(AuthComponent, [{
        key: "toggle",
        value: function toggle() {
          this.condition = !this.condition;
        }
      }, {
        key: "openModal",
        value: function openModal(template) {
          this.modalRef = this.modalService.show(template);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onLogin",
        value: function onLogin(email, password) {
          var _this15 = this;

          var promise = new Promise(function (resolve, reject) {
            _this15.auth.auth.signInWithEmailAndPassword(email, password).then(function (result) {
              _this15.isloggined = 1;

              _this15.router.navigate(['/lk']);
            }, function (error) {
              return _this15.isloggined = 2;
            });
          });
        }
      }, {
        key: "onRegister",
        value: function onRegister(email, password, name, number) {
          var _this16 = this;

          var promise = new Promise(function (resolve, reject) {
            _this16.auth.auth.createUserWithEmailAndPassword(email, password).then(function (result) {
              _this16.isregistered = 1;
              var updates = {};
              updates[result.user.uid] = {
                email: email,
                name: name,
                number: number,
                role: 0
              };

              _this16.db.object('accounts').update(updates);
            }, function (error) {
              return _this16.isregistered = 2;
            });
          });
        }
      }, {
        key: "onRecovered",
        value: function onRecovered(email) {
          var _this17 = this;

          this.auth.auth.sendPasswordResetEmail(email).then(function (result) {
            _this17.isrecovered = 1;
          }, function (error) {
            return _this17.isrecovered = 2;
          });
        }
      }]);

      return AuthComponent;
    }();

    AuthComponent.ctorParameters = function () {
      return [{
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
      }, {
        type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]
      }, {
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-auth',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./auth.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./auth.component.css */
      "./src/app/auth/auth.component.css"))["default"]]
    })], AuthComponent);
    /***/
  },

  /***/
  "./src/app/editor/editor.component.css":
  /*!*********************************************!*\
    !*** ./src/app/editor/editor.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppEditorEditorComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXRvci9lZGl0b3IuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/editor/editor.component.ts":
  /*!********************************************!*\
    !*** ./src/app/editor/editor.component.ts ***!
    \********************************************/

  /*! exports provided: EditorComponent */

  /***/
  function srcAppEditorEditorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditorComponent", function () {
      return EditorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/database/es2015/index.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");

    var EditorComponent = /*#__PURE__*/function () {
      function EditorComponent(auth, db, modalService) {
        var _this18 = this;

        _classCallCheck(this, EditorComponent);

        this.auth = auth;
        this.db = db;
        this.modalService = modalService;
        this.mask = ['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
        this.newadverts = {};
        this.objectKeys = Object.keys;
        this.auth.authState.subscribe(function (user) {
          if (user) _this18.userId = user.uid;
          if (user) _this18.email = user.email;
          console.log(_this18.userId);

          _this18.getAccount(_this18.userId);

          _this18.getAdverts(_this18.userId);
        });
      }

      _createClass(EditorComponent, [{
        key: "openModal",
        value: function openModal(template) {
          this.modalRef = this.modalService.show(template);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getAccount",
        value: function getAccount(userid) {
          var _this19 = this;

          this.db.object('accounts/' + userid).valueChanges().subscribe(function (val) {
            _this19.database = val; // Полная бд

            console.log(_this19.database);
            _this19.role = _this19.database['role'];

            if (_this19.role == 0) {
              _this19.rolename = 'Пользователь';
            } else if (_this19.role == 1) {
              _this19.rolename = 'Редактор';
            } else {
              _this19.rolename = 'Администратор';
            }

            _this19.number = _this19.database['number'];
            _this19.name = _this19.database['name'];
          });
        }
      }, {
        key: "getAdverts",
        value: function getAdverts(userid) {
          var _this20 = this;

          this.db.object('adverts').valueChanges().subscribe(function (val) {
            _this20.newadverts = val; // Полная бд

            var sorting;

            var _iterator9 = _createForOfIteratorHelper(_this20.objectKeys(_this20.newadverts)),
                _step9;

            try {
              for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                var i = _step9.value;

                if (_this20.newadverts[i]['status'] != 0) {
                  delete _this20.newadverts[i];
                }
              }
            } catch (err) {
              _iterator9.e(err);
            } finally {
              _iterator9.f();
            }

            console.log(_this20.newadverts);
          });
        }
      }]);

      return EditorComponent;
    }();

    EditorComponent.ctorParameters = function () {
      return [{
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
      }, {
        type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]
      }, {
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]
      }];
    };

    EditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-editor',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./editor.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/editor/editor.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./editor.component.css */
      "./src/app/editor/editor.component.css"))["default"]]
    })], EditorComponent);
    /***/
  },

  /***/
  "./src/app/lk/lk.component.css":
  /*!*************************************!*\
    !*** ./src/app/lk/lk.component.css ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppLkLkComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xrL2xrLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/lk/lk.component.ts":
  /*!************************************!*\
    !*** ./src/app/lk/lk.component.ts ***!
    \************************************/

  /*! exports provided: LkComponent */

  /***/
  function srcAppLkLkComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LkComponent", function () {
      return LkComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/database/es2015/index.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! text-mask-addons/dist/createNumberMask */
    "./node_modules/text-mask-addons/dist/createNumberMask.js");
    /* harmony import */


    var text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_5__);

    var numberMask = text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_5___default()({
      prefix: '',
      suffix: ' $' // This will put the dollar sign at the end, with a space.

    });

    var LkComponent = /*#__PURE__*/function () {
      function LkComponent(auth, db, modalService) {
        var _this21 = this;

        _classCallCheck(this, LkComponent);

        this.auth = auth;
        this.db = db;
        this.modalService = modalService;
        this.mask = ['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
        this.maskPrice = [' ', /\d/, '₽'];
        this.myadverts = {};
        this.objectKeys = Object.keys;
        this.auth.authState.subscribe(function (user) {
          if (user) _this21.userId = user.uid;
          if (user) _this21.email = user.email;
          console.log(_this21.userId);

          _this21.getAccount(_this21.userId);

          _this21.getAdverts(_this21.userId);
        });
      }

      _createClass(LkComponent, [{
        key: "openModal",
        value: function openModal(template) {
          this.modalRef = this.modalService.show(template);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getCategory();
          this.getPlaces();
        }
      }, {
        key: "onNewAdvert",
        value: function onNewAdvert(category, newadvertname, place, price, additional) {
          var days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
          var months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
          var myDate = new Date();
          var fullDate = myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + ", " + days[myDate.getDay()];
          var obj = {
            category: category,
            date: fullDate,
            name: newadvertname,
            owner: this.userId,
            place: place,
            price: price,
            status: 0,
            text: additional
          };
          console.log(obj);
          this.db.list('adverts').push(obj);
          this.isnewadvert = 1;
        }
      }, {
        key: "onChangeData",
        value: function onChangeData(thisname, thisnumber) {
          var obj = {
            name: thisname,
            number: thisnumber
          };
          this.db.object('accounts/' + this.userId).update(obj);
          this.ischanged = 1;
        }
      }, {
        key: "getCategory",
        value: function getCategory() {
          var _this22 = this;

          this.db.object('category').valueChanges().subscribe(function (val) {
            _this22.cdatabase = val; // Полная бд

            _this22.categories = _this22.objectKeys(_this22.cdatabase);
          });
        }
      }, {
        key: "getPlaces",
        value: function getPlaces() {
          var _this23 = this;

          this.db.object('place').valueChanges().subscribe(function (val) {
            _this23.pdatabase = val; // Полная бд

            _this23.places = _this23.objectKeys(_this23.pdatabase);
          });
        }
      }, {
        key: "getAdverts",
        value: function getAdverts(userid) {
          var _this24 = this;

          this.db.object('adverts').valueChanges().subscribe(function (val) {
            _this24.myadverts = val; // Полная бд

            var sorting;

            var _iterator10 = _createForOfIteratorHelper(_this24.objectKeys(_this24.myadverts)),
                _step10;

            try {
              for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                var i = _step10.value;

                if (_this24.myadverts[i]['owner'] != userid) {
                  delete _this24.myadverts[i];
                }
              }
            } catch (err) {
              _iterator10.e(err);
            } finally {
              _iterator10.f();
            }

            console.log(_this24.myadverts);
          });
        }
      }, {
        key: "getAccount",
        value: function getAccount(userid) {
          var _this25 = this;

          this.db.object('accounts/' + userid).valueChanges().subscribe(function (val) {
            _this25.database = val; // Полная бд

            console.log(_this25.database);
            _this25.role = _this25.database['role'];

            if (_this25.role == 0) {
              _this25.rolename = 'Пользователь';
            } else if (_this25.role == 1) {
              _this25.rolename = 'Редактор';
            } else {
              _this25.rolename = 'Администратор';
            }

            _this25.number = _this25.database['number'];
            _this25.thisnumber = _this25.number;
            _this25.name = _this25.database['name'];
            _this25.thisname = _this25.name;
          });
        }
      }, {
        key: "onRecovered",
        value: function onRecovered(email) {
          var _this26 = this;

          console.log(email);
          this.auth.auth.sendPasswordResetEmail(email).then(function (result) {
            _this26.isrecovered = 1;
          }, function (error) {
            return _this26.isrecovered = 2;
          });
        }
      }]);

      return LkComponent;
    }();

    LkComponent.ctorParameters = function () {
      return [{
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
      }, {
        type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]
      }, {
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]
      }];
    };

    LkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-lk',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./lk.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/lk/lk.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./lk.component.css */
      "./src/app/lk/lk.component.css"))["default"]]
    })], LkComponent);
    /***/
  },

  /***/
  "./src/app/not-found/not-found.component.css":
  /*!***************************************************!*\
    !*** ./src/app/not-found/not-found.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNotFoundNotFoundComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/not-found/not-found.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/not-found/not-found.component.ts ***!
    \**************************************************/

  /*! exports provided: NotFoundComponent */

  /***/
  function srcAppNotFoundNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
      return NotFoundComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NotFoundComponent = /*#__PURE__*/function () {
      function NotFoundComponent() {
        _classCallCheck(this, NotFoundComponent);
      }

      _createClass(NotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NotFoundComponent;
    }();

    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-not-found',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./not-found.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./not-found.component.css */
      "./src/app/not-found/not-found.component.css"))["default"]]
    })], NotFoundComponent);
    /***/
  },

  /***/
  "./src/app/selected-advert/selected-advert.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/selected-advert/selected-advert.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSelectedAdvertSelectedAdvertComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGVjdGVkLWFkdmVydC9zZWxlY3RlZC1hZHZlcnQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/selected-advert/selected-advert.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/selected-advert/selected-advert.component.ts ***!
    \**************************************************************/

  /*! exports provided: SelectedAdvertComponent */

  /***/
  function srcAppSelectedAdvertSelectedAdvertComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectedAdvertComponent", function () {
      return SelectedAdvertComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/database/es2015/index.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");

    var SelectedAdvertComponent = /*#__PURE__*/function () {
      function SelectedAdvertComponent(activateRoute, db, router, auth) {
        var _this27 = this;

        _classCallCheck(this, SelectedAdvertComponent);

        this.activateRoute = activateRoute;
        this.db = db;
        this.router = router;
        this.auth = auth;
        this.objectKeys = Object.keys;
        this.getSee = {};
        this.id = activateRoute.snapshot.params['id'];
        this.getAdvert(this.id);
        this.auth.authState.subscribe(function (user) {
          if (user) _this27.userId = user.uid;
        });
      }

      _createClass(SelectedAdvertComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.onChangeData();
          window.location.reload();
        }
      }, {
        key: "checkPerson",
        value: function checkPerson(user, advert) {
          var _this28 = this;

          console.log(user);
          console.log(advert);
          console.log(this.userId);

          if (user == null) {
            if (this.cdatabase['status'] != 1) {
              this.router.navigate(['/Sorry']);
            }
          }

          if (user != null) {
            this.db.object('accounts/' + this.userId).valueChanges().subscribe(function (val) {
              _this28.database = val; // Полная бд

              console.log(val);
              _this28.myrole = _this28.database['role'];
              console.log(_this28.myrole);

              if (_this28.cdatabase['status'] != 1) {
                if (_this28.userId != _this28.cdatabase['owner'] && _this28.myrole == 0) {
                  _this28.router.navigate(['/Sorry']);
                }
              }
            });
          } // if (this.userId == this.cdatabase['owner']){
          //   console.log('Это твое объявление');
          // }

        }
      }, {
        key: "onChangeData",
        value: function onChangeData() {
          var _this29 = this;

          this.db.object('counter').valueChanges().subscribe(function (val) {
            _this29.getSee = val;
            _this29.getSee['all'] = _this29.getSee['all'] + 1;

            _this29.db.object('counter').update(_this29.getSee);
          }); // count = count + 1;
          // this.db.object('counter').update(count);
        }
      }, {
        key: "getAdvert",
        value: function getAdvert(id) {
          var _this30 = this;

          this.db.object('adverts/' + this.id).valueChanges().subscribe(function (val) {
            if (val == null) {
              _this30.router.navigate(['/Sorry']);
            }

            _this30.cdatabase = val; // Полная бд

            _this30.category = _this30.cdatabase['category'];
            _this30.name = _this30.cdatabase['name'];
            _this30.price = _this30.cdatabase['price'];
            _this30.date = _this30.cdatabase['date'];
            _this30.place = _this30.cdatabase['place'];
            _this30.advertid = _this30.id;
            _this30.text = _this30.cdatabase['text'];

            _this30.db.object('accounts/' + _this30.cdatabase['owner']).valueChanges().subscribe(function (val) {
              _this30.udatabase = val; // Полная бд

              _this30.ownername = _this30.udatabase['name'];
              _this30.ownernumber = _this30.udatabase['number'];
              _this30.ownermail = _this30.udatabase['email'];

              _this30.checkPerson(_this30.udatabase, _this30.cdatabase);
            });
          });
        }
      }, {
        key: "getAccount",
        value: function getAccount(userid) {
          var _this31 = this;

          this.db.object('accounts/' + userid).valueChanges().subscribe(function (val) {
            _this31.database = val; // Полная бд
          });
        }
      }]);

      return SelectedAdvertComponent;
    }();

    SelectedAdvertComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]
      }];
    };

    SelectedAdvertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-selected-advert',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./selected-advert.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/selected-advert/selected-advert.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./selected-advert.component.css */
      "./src/app/selected-advert/selected-advert.component.css"))["default"]]
    })], SelectedAdvertComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      firebase: {
        apiKey: "AIzaSyD6emLbEH2PJRmDLmKIW5CUgRmiinVDnjU",
        authDomain: "bazarpnz-rouvasweb.firebaseapp.com",
        databaseURL: "https://bazarpnz-rouvasweb.firebaseio.com",
        projectId: "bazarpnz-rouvasweb",
        storageBucket: "bazarpnz-rouvasweb.appspot.com",
        messagingSenderId: "650674497756",
        appId: "1:650674497756:web:798e23249d2a81239b6c19"
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/Rouvas799/Documents/GitHub/bazarpnz/bazarpnz/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map