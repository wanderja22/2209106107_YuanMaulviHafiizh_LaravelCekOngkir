/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/ongkir.js":
/*!********************************!*\
  !*** ./resources/js/ongkir.js ***!
  \********************************/
/***/ (() => {

$(document).ready(function () {
  $('select[name="origin_province"]').on('change', function () {
    var provinceId = $(this).val();
    if (provinceId) {
      $.ajax({
        url: '/get-cities/' + provinceId,
        type: 'GET',
        dataType: 'json',
        success: function success(data) {
          $('select[name="origin_city"]').empty();
          $.each(data, function (key, value) {
            $('select[name="origin_city"]').append('<option value="' + key + '">' + value + '</option>');
          });
        }
      });
    } else {
      $('select[name="origin_city"]').empty();
    }
  });
});
$(document).ready(function () {
  $('#destination_city').select2();
});

/***/ }),

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleError: Module Error (from ./node_modules/postcss-loader/dist/cjs.js):\nLoading PostCSS \"tailwindcss\" plugin failed: Cannot find module 'tailwindcss'\nRequire stack:\n- C:\\Users\\LENOVO\\cangkir_2\\node_modules\\postcss-loader\\dist\\utils.js\n- C:\\Users\\LENOVO\\cangkir_2\\node_modules\\postcss-loader\\dist\\index.js\n- C:\\Users\\LENOVO\\cangkir_2\\node_modules\\postcss-loader\\dist\\cjs.js\n- C:\\Users\\LENOVO\\cangkir_2\\node_modules\\webpack\\lib\\ProgressPlugin.js\n- C:\\Users\\LENOVO\\cangkir_2\\node_modules\\webpack\\lib\\index.js\n- C:\\Users\\LENOVO\\cangkir_2\\node_modules\\webpack-cli\\lib\\webpack-cli.js\n- C:\\Users\\LENOVO\\cangkir_2\\node_modules\\webpack-cli\\lib\\bootstrap.js\n- C:\\Users\\LENOVO\\cangkir_2\\node_modules\\webpack-cli\\bin\\cli.js\n- C:\\Users\\LENOVO\\cangkir_2\\node_modules\\webpack\\bin\\webpack.js\n\n(@C:\\Users\\LENOVO\\cangkir_2\\resources\\css\\app.css)\n    at Object.emitError (C:\\Users\\LENOVO\\cangkir_2\\node_modules\\webpack\\lib\\NormalModule.js:614:6)\n    at getPostcssOptions (C:\\Users\\LENOVO\\cangkir_2\\node_modules\\postcss-loader\\dist\\utils.js:225:19)\n    at Object.loader (C:\\Users\\LENOVO\\cangkir_2\\node_modules\\postcss-loader\\dist\\index.js:65:42)");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_modules__["./resources/js/ongkir.js"]();
/******/ 	// This entry module doesn't tell about it's top-level declarations so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/css/app.css"]();
/******/ 	
/******/ })()
;