(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/Posts.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/views/Posts.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      posts: []
    };
  },
  created: function created() {
    var _this = this;

    axios.get('/api/posts').then(function (response) {
      _this.posts = response.data;
    });
  },
  methods: {
    shorten: function shorten(text) {
      var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
      return _.truncate(text, {
        length: len
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/Posts.vue?vue&type=style&index=0&id=6725d2f8&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/lib/loader.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/views/Posts.vue?vue&type=style&index=0&id=6725d2f8&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "small[data-v-6725d2f8] {\n  padding-left: 1rem;\n  color: grey;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/Posts.vue?vue&type=style&index=0&id=6725d2f8&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/lib/loader.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/views/Posts.vue?vue&type=style&index=0&id=6725d2f8&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/sass-loader/lib/loader.js??ref--8-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Posts.vue?vue&type=style&index=0&id=6725d2f8&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/Posts.vue?vue&type=style&index=0&id=6725d2f8&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/Posts.vue?vue&type=template&id=6725d2f8&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/views/Posts.vue?vue&type=template&id=6725d2f8&scoped=true& ***!
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
    _c("h1", { staticClass: "title is-4" }, [_vm._v("posts")]),
    _vm._v(" "),
    _c("table", { staticClass: "table is-bordered is-striped is-fullwidth" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "tbody",
        _vm._l(_vm.posts, function(post) {
          return _c("tr", { key: post.id }, [
            _c("td", [_vm._v(_vm._s(post.id) + " ")]),
            _vm._v(" "),
            _c("td", [
              _vm._v(_vm._s(post.title) + " "),
              _c("small", [_vm._v(_vm._s(_vm.shorten(post.text)))])
            ]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(post.user_id))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(post.created_at))])
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
        _c("th", [_vm._v("title")]),
        _vm._v(" "),
        _c("th", [_vm._v("user")]),
        _vm._v(" "),
        _c("th", [_vm._v("published at")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/views/Posts.vue":
/*!********************************************!*\
  !*** ./resources/js/admin/views/Posts.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Posts_vue_vue_type_template_id_6725d2f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Posts.vue?vue&type=template&id=6725d2f8&scoped=true& */ "./resources/js/admin/views/Posts.vue?vue&type=template&id=6725d2f8&scoped=true&");
/* harmony import */ var _Posts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Posts.vue?vue&type=script&lang=js& */ "./resources/js/admin/views/Posts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Posts_vue_vue_type_style_index_0_id_6725d2f8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Posts.vue?vue&type=style&index=0&id=6725d2f8&lang=scss&scoped=true& */ "./resources/js/admin/views/Posts.vue?vue&type=style&index=0&id=6725d2f8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Posts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Posts_vue_vue_type_template_id_6725d2f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Posts_vue_vue_type_template_id_6725d2f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6725d2f8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/views/Posts.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/views/Posts.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/admin/views/Posts.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Posts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Posts.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/Posts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Posts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/views/Posts.vue?vue&type=style&index=0&id=6725d2f8&lang=scss&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/admin/views/Posts.vue?vue&type=style&index=0&id=6725d2f8&lang=scss&scoped=true& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Posts_vue_vue_type_style_index_0_id_6725d2f8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/sass-loader/lib/loader.js??ref--8-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Posts.vue?vue&type=style&index=0&id=6725d2f8&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/Posts.vue?vue&type=style&index=0&id=6725d2f8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Posts_vue_vue_type_style_index_0_id_6725d2f8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Posts_vue_vue_type_style_index_0_id_6725d2f8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Posts_vue_vue_type_style_index_0_id_6725d2f8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Posts_vue_vue_type_style_index_0_id_6725d2f8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/admin/views/Posts.vue?vue&type=template&id=6725d2f8&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./resources/js/admin/views/Posts.vue?vue&type=template&id=6725d2f8&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Posts_vue_vue_type_template_id_6725d2f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Posts.vue?vue&type=template&id=6725d2f8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/Posts.vue?vue&type=template&id=6725d2f8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Posts_vue_vue_type_template_id_6725d2f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Posts_vue_vue_type_template_id_6725d2f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);