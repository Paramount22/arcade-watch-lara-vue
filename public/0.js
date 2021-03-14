(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/Users.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/views/Users.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      users: []
    };
  },
  created: function created() {
    var _this = this;

    axios.get('/api/users').then(function (response) {
      _this.users = response.data;
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/Users.vue?vue&type=template&id=69470639&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/views/Users.vue?vue&type=template&id=69470639&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", { staticClass: "posts-page" }, [
    _c("h1", { staticClass: "title is-4" }, [_vm._v("users")]),
    _vm._v(" "),
    _c("table", { staticClass: "table is-bordered is-striped is-fullwidth" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "tbody",
        _vm._l(_vm.users, function(user) {
          return _c("tr", { key: user.id }, [
            _c("td", [_vm._v(_vm._s(user.id) + " ")]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(user.name) + " ")]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(user.email) + " ")]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(user.created_at) + " ")])
          ])
        }),
        0
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("id")]),
        _vm._v(" "),
        _c("th", [_vm._v("user")]),
        _vm._v(" "),
        _c("th", [_vm._v("email")]),
        _vm._v(" "),
        _c("th", [_vm._v("registerd at")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/views/Users.vue":
/*!********************************************!*\
  !*** ./resources/js/admin/views/Users.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_vue_vue_type_template_id_69470639_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Users.vue?vue&type=template&id=69470639&scoped=true& */ "./resources/js/admin/views/Users.vue?vue&type=template&id=69470639&scoped=true&");
/* harmony import */ var _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Users.vue?vue&type=script&lang=js& */ "./resources/js/admin/views/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Users_vue_vue_type_template_id_69470639_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Users_vue_vue_type_template_id_69470639_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "69470639",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/views/Users.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/views/Users.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/admin/views/Users.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/views/Users.vue?vue&type=template&id=69470639&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./resources/js/admin/views/Users.vue?vue&type=template&id=69470639&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_69470639_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=template&id=69470639&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/Users.vue?vue&type=template&id=69470639&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_69470639_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_69470639_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);