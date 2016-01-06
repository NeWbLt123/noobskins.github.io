module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _this = this;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _reactDom = __webpack_require__(31);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _fbjsLibExecutionEnvironment = __webpack_require__(3);

  var _libLocation = __webpack_require__(10);

  var _libLocation2 = _interopRequireDefault(_libLocation);

  var _componentsLayout = __webpack_require__(6);

  var _componentsLayout2 = _interopRequireDefault(_componentsLayout);

  var routes = {
    '/404': function _() {
      return __webpack_require__(11);
    }, '/500': function _() {
      return __webpack_require__(12);
    }, '/about': function about() {
      return __webpack_require__(13);
    }, '/blog': function blog() {
      return __webpack_require__(14);
    }, '/blog/test-article-one': function blogTestArticleOne() {
      return __webpack_require__(15);
    }, '/blog/test-article-two': function blogTestArticleTwo() {
      return __webpack_require__(16);
    }, '/': function _() {
      return __webpack_require__(17);
    } }; // Auto-generated on build. See tools/lib/routes-loader.js

  var route = function route(path, callback) {
    var handler, component;
    return regeneratorRuntime.async(function route$(context$1$0) {
      while (1) switch (context$1$0.prev = context$1$0.next) {
        case 0:
          handler = routes[path] || routes['/404'];
          context$1$0.next = 3;
          return regeneratorRuntime.awrap(handler());

        case 3:
          component = context$1$0.sent;
          context$1$0.next = 6;
          return regeneratorRuntime.awrap(callback(_react2['default'].createElement(
            _componentsLayout2['default'],
            null,
            _react2['default'].createElement(component)
          )));

        case 6:
        case 'end':
          return context$1$0.stop();
      }
    }, null, _this);
  };

  function run() {
    var _this2 = this;

    var container = document.getElementById('app');
    _libLocation2['default'].listen(function (location) {
      route(location.pathname, function callee$2$0(component) {
        return regeneratorRuntime.async(function callee$2$0$(context$3$0) {
          while (1) switch (context$3$0.prev = context$3$0.next) {
            case 0:
              return context$3$0.abrupt('return', _reactDom2['default'].render(component, container, function () {
                // Track the page view event via Google Analytics
                window.ga('send', 'pageview');
              }));

            case 1:
            case 'end':
              return context$3$0.stop();
          }
        }, null, _this2);
      });
    });
  }

  if (_fbjsLibExecutionEnvironment.canUseDOM) {
    // Run the application when both DOM is ready
    // and page content is loaded
    if (window.addEventListener) {
      window.addEventListener('DOMContentLoaded', run);
    } else {
      window.attachEvent('onload', run);
    }
  }

  exports['default'] = { route: route, routes: routes };
  module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

  module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports) {

  /*
  	MIT License http://www.opensource.org/licenses/mit-license.php
  	Author Tobias Koppers @sokra
  */
  // css base code, injected by the css-loader
  module.exports = function() {
  	var list = [];

  	// return the list of modules as css string
  	list.toString = function toString() {
  		var result = [];
  		for(var i = 0; i < this.length; i++) {
  			var item = this[i];
  			if(item[2]) {
  				result.push("@media " + item[2] + "{" + item[1] + "}");
  			} else {
  				result.push(item[1]);
  			}
  		}
  		return result.join("");
  	};

  	// import a list of modules into the list
  	list.i = function(modules, mediaQuery) {
  		if(typeof modules === "string")
  			modules = [[null, modules, ""]];
  		var alreadyImportedModules = {};
  		for(var i = 0; i < this.length; i++) {
  			var id = this[i][0];
  			if(typeof id === "number")
  				alreadyImportedModules[id] = true;
  		}
  		for(i = 0; i < modules.length; i++) {
  			var item = modules[i];
  			// skip already imported module
  			// this implementation is not 100% perfect for weird media query combinations
  			//  when a module is imported multiple times with different media queries.
  			//  I hope this will never occur (Hey this way we have smaller bundles)
  			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
  				if(mediaQuery && !item[2]) {
  					item[2] = mediaQuery;
  				} else if(mediaQuery) {
  					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
  				}
  				list.push(item);
  			}
  		}
  	};
  	return list;
  };


/***/ },
/* 3 */
/***/ function(module, exports) {

  module.exports = require("fbjs/lib/ExecutionEnvironment");

/***/ },
/* 4 */
/***/ function(module, exports) {

  module.exports = require("material-ui/lib/raised-button");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _materialUiLibStylesColors = __webpack_require__(24);

  var _materialUiLibStylesColors2 = _interopRequireDefault(_materialUiLibStylesColors);

  var _materialUiLibUtilsColorManipulator = __webpack_require__(29);

  var _materialUiLibUtilsColorManipulator2 = _interopRequireDefault(_materialUiLibUtilsColorManipulator);

  var _materialUiLibStylesSpacing = __webpack_require__(25);

  var _materialUiLibStylesSpacing2 = _interopRequireDefault(_materialUiLibStylesSpacing);

  var _materialUiLibStylesZIndex = __webpack_require__(27);

  var _materialUiLibStylesZIndex2 = _interopRequireDefault(_materialUiLibStylesZIndex);

  exports['default'] = {
    spacing: _materialUiLibStylesSpacing2['default'],
    zIndex: _materialUiLibStylesZIndex2['default'],
    fontFamily: 'Roboto, sans-serif',
    palette: {
      primary1Color: _materialUiLibStylesColors2['default'].indigo700,
      primary2Color: _materialUiLibStylesColors2['default'].purple700,
      primary3Color: _materialUiLibStylesColors2['default'].lightBlack,
      accent1Color: _materialUiLibStylesColors2['default'].amber300,
      accent2Color: _materialUiLibStylesColors2['default'].grey100,
      accent3Color: _materialUiLibStylesColors2['default'].grey500,
      textColor: _materialUiLibStylesColors2['default'].darkBlack,
      alternateTextColor: _materialUiLibStylesColors2['default'].white,
      canvasColor: _materialUiLibStylesColors2['default'].white,
      borderColor: _materialUiLibStylesColors2['default'].grey300,
      disabledColor: _materialUiLibUtilsColorManipulator2['default'].fade(_materialUiLibStylesColors2['default'].darkBlack, 0.3),
      pickerHeaderColor: _materialUiLibStylesColors2['default'].cyan500
    }
  };
  module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  /* React components */
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _materialUiLibStylesThemeManager = __webpack_require__(26);

  var _materialUiLibStylesThemeManager2 = _interopRequireDefault(_materialUiLibStylesThemeManager);

  /* Css */

  __webpack_require__(18);

  /* Other files and images */

  var _CustomTheme = __webpack_require__(5);

  var _CustomTheme2 = _interopRequireDefault(_CustomTheme);

  // Custom theme applied to the whole application.

  /* Children components */

  var _Navigation = __webpack_require__(9);

  var _Navigation2 = _interopRequireDefault(_Navigation);

  var Layout = (function (_Component) {
    _inherits(Layout, _Component);

    function Layout() {
      _classCallCheck(this, Layout);

      _get(Object.getPrototypeOf(Layout.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Layout, [{
      key: 'getChildContext',
      value: function getChildContext() {
        return {
          muiTheme: _materialUiLibStylesThemeManager2['default'].getMuiTheme(_CustomTheme2['default'])
        };
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'Layout' },
          _react2['default'].createElement('script', { src: 'https://code.jquery.com/jquery-2.1.4.min.js', type: 'text/javascript' }),
          (function () {
            return _react2['default'].createElement(
              'div',
              null,
              _react2['default'].createElement(_Navigation2['default'], null),
              _react2['default'].createElement('div', { className: 'fullBanner' })
            );
          })(),
          this.props.children
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        children: _react.PropTypes.element.isRequired
      },
      enumerable: true
    }, {
      key: 'childContextTypes',
      value: {
        muiTheme: _react2['default'].PropTypes.object
      },
      enumerable: true
    }]);

    return Layout;
  })(_react.Component);

  exports['default'] = Layout;
  module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

  /* React components */
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _materialUiLibRaisedButton = __webpack_require__(4);

  var _materialUiLibRaisedButton2 = _interopRequireDefault(_materialUiLibRaisedButton);

  var LoginButton = (function (_Component) {
    _inherits(LoginButton, _Component);

    function LoginButton() {
      _classCallCheck(this, LoginButton);

      _get(Object.getPrototypeOf(LoginButton.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(LoginButton, [{
      key: 'render',
      value: function render() {
        var styles = {
          loginButton: {
            lineHeight: '0px'
          }
        };
        return _react2['default'].createElement(
          'a',
          { style: styles.loginButton, href: 'https://noobskins-2.herokuapp.com/api/auth/steam?returnUrl=http://localhost:3000' },
          _react2['default'].createElement(_materialUiLibRaisedButton2['default'], { label: 'Steam login', secondary: true, labelPosition: 'after' })
        );
      }
    }]);

    return LoginButton;
  })(_react.Component);

  exports['default'] = LoginButton;
  module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

  /* React components */
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _reactResponsive = __webpack_require__(33);

  var _reactResponsive2 = _interopRequireDefault(_reactResponsive);

  var _materialUiLibRaisedButton = __webpack_require__(4);

  var _materialUiLibRaisedButton2 = _interopRequireDefault(_materialUiLibRaisedButton);

  /* Css */

  /* Other files and images */

  var _reactMaterialIconsIconsNavigationMenu = __webpack_require__(32);

  var _reactMaterialIconsIconsNavigationMenu2 = _interopRequireDefault(_reactMaterialIconsIconsNavigationMenu);

  var Menu = (function (_Component) {
    _inherits(Menu, _Component);

    function Menu() {
      _classCallCheck(this, Menu);

      _get(Object.getPrototypeOf(Menu.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Menu, [{
      key: 'render',
      value: function render() {
        var styles = {
          navigationLink: {
            fontWeight: 'bold'
          },
          hamburger: {
            button: {
              lineHeight: '0px',
              width: '35px',
              minWidth: '35px',
              marginTop: '15px'
            },
            icon: {
              fill: 'white',
              height: '36px'
            }
          }
        };

        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            _reactResponsive2['default'],
            { maxWidth: 1224 },
            _react2['default'].createElement(
              'div',
              { className: 'right' },
              _react2['default'].createElement(
                'a',
                { href: '/about' },
                _react2['default'].createElement(
                  _materialUiLibRaisedButton2['default'],
                  { style: styles.hamburger.button, secondary: true },
                  _react2['default'].createElement(_reactMaterialIconsIconsNavigationMenu2['default'], { style: styles.hamburger.icon })
                )
              )
            )
          ),
          _react2['default'].createElement(
            _reactResponsive2['default'],
            { minWidth: 1224 },
            _react2['default'].createElement(
              'ul',
              { className: 'right' },
              _react2['default'].createElement(
                'li',
                null,
                _react2['default'].createElement(
                  'a',
                  { style: styles.navigationLink, href: '/' },
                  'Search'
                )
              ),
              _react2['default'].createElement(
                'li',
                null,
                _react2['default'].createElement(
                  'a',
                  { style: styles.navigationLink, href: '/' },
                  'Community'
                )
              ),
              _react2['default'].createElement(
                'li',
                null,
                _react2['default'].createElement(
                  'a',
                  { style: styles.navigationLink, href: '/' },
                  'Partners'
                )
              ),
              _react2['default'].createElement(
                'li',
                null,
                _react2['default'].createElement(
                  'a',
                  { style: styles.navigationLink, href: '/' },
                  'Contact Us'
                )
              )
            )
          )
        );
      }
    }]);

    return Menu;
  })(_react.Component);

  exports['default'] = Menu;
  module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

  /* React components */
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _materialUiLibAvatar = __webpack_require__(23);

  var _materialUiLibAvatar2 = _interopRequireDefault(_materialUiLibAvatar);

  var _materialUiLibSvgIconsFileFolder = __webpack_require__(28);

  var _materialUiLibSvgIconsFileFolder2 = _interopRequireDefault(_materialUiLibSvgIconsFileFolder);

  var _reactCookie = __webpack_require__(30);

  var _reactCookie2 = _interopRequireDefault(_reactCookie);

  /* Css */

  __webpack_require__(19);

  /* Other files and images */

  var _logoPng = __webpack_require__(20);

  var _logoPng2 = _interopRequireDefault(_logoPng);

  /* Children components */

  var _LoginButton = __webpack_require__(7);

  var _LoginButton2 = _interopRequireDefault(_LoginButton);

  var _MenuMenu = __webpack_require__(8);

  var _MenuMenu2 = _interopRequireDefault(_MenuMenu);

  var Navigation = (function (_Component) {
    _inherits(Navigation, _Component);

    function Navigation(props) {
      _classCallCheck(this, Navigation);

      _get(Object.getPrototypeOf(Navigation.prototype), 'constructor', this).call(this, props);
      this.state = {
        userInformationRequested: false,
        userInformationReceived: false
      };
    }

    _createClass(Navigation, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.getUser();
      }
    }, {
      key: 'getUser',
      value: function getUser() {
        var self = this;
        var apiToken = location.search.split('token=')[1];

        if (apiToken) {
          _reactCookie2['default'].save('apiToken', apiToken);
        }

        var apiCookie = _reactCookie2['default'].load('apiToken');

        if (apiCookie) {
          var _isLoggedPromise = fetch('http://localhost:8080/api/users/my', {
            'mode': 'cors',
            'headers': {
              'x-access-token': apiCookie
            }
          });

          _isLoggedPromise.then(function (response) {
            return response.json();
          }).then((function (json) {
            self.setState({
              userInformationRequested: true,
              userInformationReceived: true
            });
          }).bind(self))['catch']((function (err) {
            // TODO - Handle error.
          }).bind(self));
        } else {
          this.setState({
            userInformationRequested: true
          });
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _this = this;

        var styles = {
          avatar: {
            marginTop: '13px'
          }
        };

        return _react2['default'].createElement(
          'div',
          { className: 'navbar-fixed' },
          _react2['default'].createElement(
            'nav',
            null,
            _react2['default'].createElement(
              'div',
              { className: 'nav-wrapper' },
              _react2['default'].createElement(
                'div',
                { className: 'col s12' },
                _react2['default'].createElement(
                  'a',
                  { href: '/', className: 'brand-logo' },
                  _react2['default'].createElement('img', { src: _logoPng2['default'], alt: '' })
                ),
                _react2['default'].createElement(
                  'div',
                  { className: 'right-nav' },
                  (function () {
                    console.log(_this.state.userInformationRequested);
                    console.log(_this.state.userInformationReceived);
                    if (_this.state.userInformationRequested) {
                      if (_this.state.userInformationReceived) {
                        return _react2['default'].createElement(_materialUiLibAvatar2['default'], { style: styles.avatar, icon: _react2['default'].createElement(_materialUiLibSvgIconsFileFolder2['default'], null) });
                      } else {
                        console.log('fadsfsdsdfsfd');
                        return _react2['default'].createElement(_LoginButton2['default'], null);
                      }
                    }
                  })()
                ),
                _react2['default'].createElement(_MenuMenu2['default'], null)
              )
            )
          )
        );
      }
    }]);

    return Navigation;
  })(_react.Component);

  exports['default'] = Navigation;
  module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _fbjsLibExecutionEnvironment = __webpack_require__(3);

  var _historyLibCreateBrowserHistory = __webpack_require__(21);

  var _historyLibCreateBrowserHistory2 = _interopRequireDefault(_historyLibCreateBrowserHistory);

  var _historyLibUseQueries = __webpack_require__(22);

  var _historyLibUseQueries2 = _interopRequireDefault(_historyLibUseQueries);

  var location = _fbjsLibExecutionEnvironment.canUseDOM ? (0, _historyLibUseQueries2['default'])(_historyLibCreateBrowserHistory2['default'])() : {};

  exports['default'] = location;
  module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Not Found'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'The page you\'re looking for was not found.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Error'
          ),
          _react2['default'].createElement(
            'pre',
            null,
            this.props.error ? this.props.error.message + '\n\n' + this.props.error.stack : 'A critical error occurred.'
          )
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        error: _react.PropTypes.instanceOf(Error)
      },
      enumerable: true
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'About Us'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Coming soon.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Blog'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Coming soon.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Test Article 1'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Coming soon.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Test Article 2'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Coming soon.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Home Page'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Coming soon.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\r\n * React Static Boilerplate\r\n * https://github.com/koistya/react-static-boilerplate\r\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\r\n */\r\n\r\n/**\r\n * React Static Boilerplate\r\n * https://github.com/koistya/react-static-boilerplate\r\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\r\n */\r\n\r\n/*\r\n * Scaffolding\r\n * -------------------------------------------------------------------------- */\r\n\r\n/*\r\n * Typography\r\n * -------------------------------------------------------------------------- */\r\n\r\n/*\r\n * Media queries breakpoints\r\n * -------------------------------------------------------------------------- */\r\n\r\nhtml, body {\r\n  margin: 0;\r\n  padding: 0;\r\n  background-color: #f7f7f7;\r\n  color: #333;\r\n  font-family: 'Roboto','Helvetica',sans-serif;\r\n}\r\n\r\n.Layout {\r\n  margin: 0 auto;\r\n  width: 100%;\r\n}\r\n\r\n.fullBanner {\r\n    width: 100%;\r\n    height: 200px;\r\n    background-color: #303f9f;\r\n    margin-top: 3px;\r\n}\r\n", ""]);

  // exports


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\r\n * React Static Boilerplate\r\n * https://github.com/koistya/react-static-boilerplate\r\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\r\n */\r\n\r\n/**\r\n * React Static Boilerplate\r\n * https://github.com/koistya/react-static-boilerplate\r\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\r\n */\r\n\r\n/*\r\n * Scaffolding\r\n * -------------------------------------------------------------------------- */\r\n\r\n/*\r\n * Typography\r\n * -------------------------------------------------------------------------- */\r\n\r\n/*\r\n * Media queries breakpoints\r\n * -------------------------------------------------------------------------- */\r\n\r\n.Navigation {\r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n  -webkit-flex-direction: row;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  margin: 2em 0 5em 0;\r\n  list-style: none;\r\n  -webkit-box-pack: end;\r\n  -webkit-justify-content: flex-end;\r\n      -ms-flex-pack: end;\r\n          justify-content: flex-end;\r\n}\r\n\r\n.Navigation-item {\r\n  padding: 0 2em;\r\n}\r\n\r\n.Navigation-link {\r\n  padding: 0.5em 1em;\r\n  color: #21ce99;\r\n  text-decoration: none;\r\n  text-transform: uppercase;\r\n  cursor: pointer;\r\n}\r\n\r\n.Navigation-link:hover {\r\n  border-bottom: 3px solid #21ce99;\r\n  color: #333;\r\n}\r\n\r\nnav {\r\n    background-color: #fff;\r\n    font-weight: 300;\r\n    width: 100%;\r\n    z-index: 1001;\r\n}\r\n\r\nnav ul {\r\n    margin: 0;\r\n}\r\n\r\nnav ul li {\r\n    -webkit-transition: background-color .3s;\r\n    -o-transition: background-color .3s;\r\n    transition: background-color .3s;\r\n    float: left;\r\n    padding: 0;\r\n}\r\n\r\nnav a, nav ul a {\r\n    color: #212121;\r\n}\r\n\r\nnav ul a {\r\n    font-size: 1rem;\r\n    display: inline-block;\r\n    padding: 0 15px;\r\n    box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    -webkit-box-sizing: border-box;\r\n}\r\n\r\nnav ul a:hover {\r\n    border-bottom: 3px solid #ffd54f;\r\n}\r\n\r\nul li {\r\n    list-style-type: none;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n\r\n.navbar-fixed {\r\n    height: 64px;\r\n    position: relative;\r\n}\r\n\r\n.navbar-fixed nav {\r\n    position: fixed;\r\n    height: 64px;\r\n    line-height: 64px;\r\n}\r\n\r\n.nav-wrapper {\r\n    padding: 0 15px;\r\n    position: relative;\r\n    height: 100%;\r\n}\r\n\r\n.brand-logo {\r\n    position: absolute;\r\n    color: #fff;\r\n    display: inline-block;\r\n    font-size: 2.1rem;\r\n    padding: 0;\r\n}\r\n\r\n.right-nav {\r\n    float: right;\r\n    margin-left: 15px;\r\n}\r\n\r\n.right {\r\n    float: right !important;\r\n}\r\n\r\nnav .login {\r\n    margin-bottom: 0;\r\n}\r\n", ""]);

  // exports


/***/ },
/* 20 */
/***/ function(module, exports) {

  module.exports = "data:image/png;base64,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"

/***/ },
/* 21 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createBrowserHistory");

/***/ },
/* 22 */
/***/ function(module, exports) {

  module.exports = require("history/lib/useQueries");

/***/ },
/* 23 */
/***/ function(module, exports) {

  module.exports = require("material-ui/lib/avatar");

/***/ },
/* 24 */
/***/ function(module, exports) {

  module.exports = require("material-ui/lib/styles/colors");

/***/ },
/* 25 */
/***/ function(module, exports) {

  module.exports = require("material-ui/lib/styles/spacing");

/***/ },
/* 26 */
/***/ function(module, exports) {

  module.exports = require("material-ui/lib/styles/theme-manager");

/***/ },
/* 27 */
/***/ function(module, exports) {

  module.exports = require("material-ui/lib/styles/zIndex");

/***/ },
/* 28 */
/***/ function(module, exports) {

  module.exports = require("material-ui/lib/svg-icons/file/folder");

/***/ },
/* 29 */
/***/ function(module, exports) {

  module.exports = require("material-ui/lib/utils/color-manipulator");

/***/ },
/* 30 */
/***/ function(module, exports) {

  module.exports = require("react-cookie");

/***/ },
/* 31 */
/***/ function(module, exports) {

  module.exports = require("react-dom");

/***/ },
/* 32 */
/***/ function(module, exports) {

  module.exports = require("react-material-icons/icons/navigation/menu");

/***/ },
/* 33 */
/***/ function(module, exports) {

  module.exports = require("react-responsive");

/***/ }
/******/ ]);