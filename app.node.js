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

  var _reactDom = __webpack_require__(38);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _fbjsLibExecutionEnvironment = __webpack_require__(6);

  var _libLocation = __webpack_require__(12);

  var _libLocation2 = _interopRequireDefault(_libLocation);

  var _componentsLayout = __webpack_require__(8);

  var _componentsLayout2 = _interopRequireDefault(_componentsLayout);

  var routes = {
    '/404': function _() {
      return __webpack_require__(13);
    }, '/500': function _() {
      return __webpack_require__(14);
    }, '/about': function about() {
      return __webpack_require__(15);
    }, '/blog': function blog() {
      return __webpack_require__(16);
    }, '/blog/test-article-one': function blogTestArticleOne() {
      return __webpack_require__(17);
    }, '/blog/test-article-two': function blogTestArticleTwo() {
      return __webpack_require__(18);
    }, '/': function _() {
      return __webpack_require__(19);
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

  module.exports = require("material-ui/lib/raised-button");

/***/ },
/* 3 */
/***/ function(module, exports) {

  module.exports = require("react-cookie");

/***/ },
/* 4 */
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

  var _materialUiLibRaisedButton = __webpack_require__(2);

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
          { style: styles.loginButton, href:  false ? 'http://localhost:8080/api/auth/steam?returnUrl=http://localhost:3000' : 'https://noobskins-2.herokuapp.com/api/auth/steam?returnUrl=https://noobskins.github.io' },
          _react2['default'].createElement(_materialUiLibRaisedButton2['default'], { label: this.props.overrideText || "Steam login", primary: this.props.isPrimary, secondary: !this.props.isPrimary, labelPosition: 'after' })
        );
      }
    }]);

    return LoginButton;
  })(_react.Component);

  exports['default'] = LoginButton;
  module.exports = exports['default'];

/***/ },
/* 5 */
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
/* 6 */
/***/ function(module, exports) {

  module.exports = require("fbjs/lib/ExecutionEnvironment");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _materialUiLibStylesColors = __webpack_require__(32);

  var _materialUiLibStylesColors2 = _interopRequireDefault(_materialUiLibStylesColors);

  var _materialUiLibUtilsColorManipulator = __webpack_require__(37);

  var _materialUiLibUtilsColorManipulator2 = _interopRequireDefault(_materialUiLibUtilsColorManipulator);

  var _materialUiLibStylesSpacing = __webpack_require__(33);

  var _materialUiLibStylesSpacing2 = _interopRequireDefault(_materialUiLibStylesSpacing);

  var _materialUiLibStylesZIndex = __webpack_require__(35);

  var _materialUiLibStylesZIndex2 = _interopRequireDefault(_materialUiLibStylesZIndex);

  exports['default'] = {
    spacing: _materialUiLibStylesSpacing2['default'],
    zIndex: _materialUiLibStylesZIndex2['default'],
    fontFamily: 'Roboto, sans-serif',
    palette: {
      primary1Color: _materialUiLibStylesColors2['default'].indigo900,
      primary2Color: _materialUiLibStylesColors2['default'].purple700,
      primary3Color: _materialUiLibStylesColors2['default'].lightBlack,
      accent1Color: _materialUiLibStylesColors2['default'].deepOrange400,
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
/* 8 */
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

  var _materialUiLibStylesThemeManager = __webpack_require__(34);

  var _materialUiLibStylesThemeManager2 = _interopRequireDefault(_materialUiLibStylesThemeManager);

  var _reactCookie = __webpack_require__(3);

  var _reactCookie2 = _interopRequireDefault(_reactCookie);

  /* Css */

  __webpack_require__(20);

  /* Other files and images */

  var _CustomTheme = __webpack_require__(7);

  var _CustomTheme2 = _interopRequireDefault(_CustomTheme);

  // Custom theme applied to the whole application.

  /* Children components */

  var _Navigation = __webpack_require__(11);

  var _Navigation2 = _interopRequireDefault(_Navigation);

  var _NavigationLoginButton = __webpack_require__(4);

  var _NavigationLoginButton2 = _interopRequireDefault(_NavigationLoginButton);

  var Layout = (function (_Component) {
    _inherits(Layout, _Component);

    function Layout(props) {
      _classCallCheck(this, Layout);

      _get(Object.getPrototypeOf(Layout.prototype), 'constructor', this).call(this, props);
      this.state = {
        userInformationRequested: false,
        userInformationReceived: false
      };
    }

    _createClass(Layout, [{
      key: 'getChildContext',
      value: function getChildContext() {
        return {
          muiTheme: _materialUiLibStylesThemeManager2['default'].getMuiTheme(_CustomTheme2['default'])
        };
      }
    }, {
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
          $.ajax({
            url:  false ? 'http://localhost:8080/api/users/my' : 'https://noobskins-2.herokuapp.com/api/users/my',
            type: 'GET',
            headers: {
              'x-access-token': apiCookie
            }, success: (function (data) {
              self.setState({
                userInformationRequested: true
              });
              if (data.success) {
                self.setState({
                  userInformationReceived: true,
                  credits: data.response.user.currency,
                  avatar: data.response.steamInfo.avatar,
                  name: data.response.steamInfo.name
                });
              }
            }).bind(this)

          });
        } else {
          self.setState({
            userInformationRequested: true
          });
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _this = this;

        var styles = {
          loginButtonContainer: {
            marginTop: '10px'
          }
        };

        return _react2['default'].createElement(
          'div',
          { className: 'Layout' },
          _react2['default'].createElement('script', { src: 'https://code.jquery.com/jquery-2.1.4.min.js', type: 'text/javascript' }),
          (function () {
            return _react2['default'].createElement(
              'div',
              null,
              _react2['default'].createElement(_Navigation2['default'], {
                avatar: _this.state.avatar,
                credits: _this.state.credits,
                name: _this.state.name,
                userInformationRequested: _this.state.userInformationRequested,
                userInformationReceived: _this.state.userInformationReceived }),
              _react2['default'].createElement(
                'div',
                { className: 'fullBanner' },
                _react2['default'].createElement(
                  'h1',
                  { align: 'center' },
                  'The easy way to purchase and sell CS:GO skins'
                ),
                _react2['default'].createElement(
                  'div',
                  { style: styles.loginButtonContainer },
                  (function () {
                    if (_this.state.userInformationRequested) {
                      if (_this.state.userInformationReceived) {
                        return _react2['default'].createElement(
                          'div',
                          null,
                          _react2['default'].createElement(
                            'span',
                            { style: { marginRight: '10px' } },
                            _react2['default'].createElement(_NavigationLoginButton2['default'], { isPrimary: true, overrideText: 'Purchase an item' })
                          ),
                          _react2['default'].createElement(
                            'span',
                            null,
                            _react2['default'].createElement(_NavigationLoginButton2['default'], { isPrimary: true, overrideText: 'Sell an item' })
                          )
                        );
                      } else {
                        return _react2['default'].createElement(_NavigationLoginButton2['default'], { isPrimary: true, overrideText: 'Log in now with steam' });
                      }
                    }
                  })()
                )
              )
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

  var _reactResponsive = __webpack_require__(40);

  var _reactResponsive2 = _interopRequireDefault(_reactResponsive);

  var _materialUiLibRaisedButton = __webpack_require__(2);

  var _materialUiLibRaisedButton2 = _interopRequireDefault(_materialUiLibRaisedButton);

  /* Css */

  /* Other files and images */

  var _reactMaterialIconsIconsNavigationMenu = __webpack_require__(39);

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
/* 10 */
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

  var _materialUiLibPopoverPopover = __webpack_require__(31);

  var _materialUiLibPopoverPopover2 = _interopRequireDefault(_materialUiLibPopoverPopover);

  var _materialUiLibAvatar = __webpack_require__(26);

  var _materialUiLibAvatar2 = _interopRequireDefault(_materialUiLibAvatar);

  var _materialUiLibDivider = __webpack_require__(27);

  var _materialUiLibDivider2 = _interopRequireDefault(_materialUiLibDivider);

  var _materialUiLibRaisedButton = __webpack_require__(2);

  var _materialUiLibRaisedButton2 = _interopRequireDefault(_materialUiLibRaisedButton);

  var _materialUiLibFlatButton = __webpack_require__(28);

  var _materialUiLibFlatButton2 = _interopRequireDefault(_materialUiLibFlatButton);

  var _reactCookie = __webpack_require__(3);

  var _reactCookie2 = _interopRequireDefault(_reactCookie);

  /* Css */

  /* Other files and images */

  var _materialUiLibSvgIconsFileFolder = __webpack_require__(36);

  var _materialUiLibSvgIconsFileFolder2 = _interopRequireDefault(_materialUiLibSvgIconsFileFolder);

  var PopoverMenu = (function (_Component) {
    _inherits(PopoverMenu, _Component);

    function PopoverMenu(props) {
      _classCallCheck(this, PopoverMenu);

      _get(Object.getPrototypeOf(PopoverMenu.prototype), 'constructor', this).call(this, props);
      this.state = {};
    }

    // avatarClick(a) {
    //   this.setState({
    //     menuOpen: !this.state.menuOpen,
    //   });
    // }

    _createClass(PopoverMenu, [{
      key: 'show',
      value: function show(key, e) {
        this.setState({
          activePopover: key,
          anchorEl: e.currentTarget
        });
      }
    }, {
      key: 'closePopover',
      value: function closePopover(key) {
        if (this.state.activePopover !== key) return;
        this.setState({
          activePopover: 'none'
        });
      }
    }, {
      key: 'setAnchor',
      value: function setAnchor(positionElement, position, e) {
        var anchorOrigin = this.state.anchorOrigin;

        anchorOrigin[positionElement] = position;

        this.setState({
          anchorOrigin: anchorOrigin
        });
      }
    }, {
      key: 'setTarget',
      value: function setTarget(positionElement, position, e) {
        var targetOrigin = this.state.targetOrigin;

        targetOrigin[positionElement] = position;

        this.setState({
          targetOrigin: targetOrigin
        });
      }
    }, {
      key: 'logout',
      value: function logout() {
        _reactCookie2['default'].remove('apiToken');
      }
    }, {
      key: 'render',
      value: function render() {

        var logoutClick = this.logout.bind(this);

        var styles = {
          avatar: {
            marginTop: '13px'
          },
          bigAvatar: {
            height: '80px',
            width: '80px',
            marginBottom: '10px',
            marginRight: '10px'
          },
          userInformation: {
            display: 'inline-block',
            verticalAlign: 'top'
          },
          userName: {
            fontWeight: 'bold',
            margin: '0px'
          },
          credits: {
            fontWeight: 'bold',
            margin: '0px',
            fontSize: '13px',
            color: 'grey'
          },
          myAccountButton: {
            color: 'white',
            marginTop: '5px'
          },
          dunnoButton: {
            marginTop: '5px'
          },
          logoutButton: {
            float: 'right',
            marginTop: '5px'
          }
        };

        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            _materialUiLibPopoverPopover2['default'],
            { open: this.state.activePopover === 'pop',
              anchorEl: this.state.anchorEl,
              anchorOrigin: this.state.anchorOrigin,
              targetOrigin: this.state.targetOrigin,
              onRequestClose: this.closePopover.bind(this, 'pop') },
            _react2['default'].createElement(
              'div',
              { style: { padding: 20 } },
              _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(_materialUiLibAvatar2['default'], { style: styles.bigAvatar, src: this.props.avatar }),
                _react2['default'].createElement(
                  'div',
                  { style: styles.userInformation },
                  _react2['default'].createElement(
                    'p',
                    { style: styles.userName },
                    this.props.name
                  ),
                  _react2['default'].createElement(
                    'p',
                    { style: styles.credits },
                    '$ ',
                    this.props.credits
                  ),
                  _react2['default'].createElement(_materialUiLibRaisedButton2['default'], { style: styles.myAccountButton, label: 'My Account', primary: true })
                )
              ),
              _react2['default'].createElement(_materialUiLibDivider2['default'], null),
              _react2['default'].createElement(_materialUiLibFlatButton2['default'], { style: styles.dunnoButton, label: 'Something', secondary: true }),
              _react2['default'].createElement(
                'a',
                { href: '/' },
                _react2['default'].createElement(_materialUiLibFlatButton2['default'], { style: styles.logoutButton, onClick: logoutClick, label: 'Logout', secondary: true })
              )
            )
          ),
          _react2['default'].createElement(_materialUiLibAvatar2['default'], { onClick: this.show.bind(this, "pop"), style: styles.avatar, src: this.props.avatar })
        );
      }
    }]);

    return PopoverMenu;
  })(_react.Component);

  exports['default'] = PopoverMenu;
  module.exports = exports['default'];

/***/ },
/* 11 */
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

  var _reactCookie = __webpack_require__(3);

  var _reactCookie2 = _interopRequireDefault(_reactCookie);

  var _materialUiLibMenusMenu = __webpack_require__(29);

  var _materialUiLibMenusMenu2 = _interopRequireDefault(_materialUiLibMenusMenu);

  var _materialUiLibMenusMenuItem = __webpack_require__(30);

  var _materialUiLibMenusMenuItem2 = _interopRequireDefault(_materialUiLibMenusMenuItem);

  /* Css */

  __webpack_require__(21);

  /* Other files and images */

  var _logoPng = __webpack_require__(23);

  var _logoPng2 = _interopRequireDefault(_logoPng);

  /* Children components */

  var _LoginButton = __webpack_require__(4);

  var _LoginButton2 = _interopRequireDefault(_LoginButton);

  var _MenuMenu = __webpack_require__(9);

  var _MenuMenu2 = _interopRequireDefault(_MenuMenu);

  var _MenuPopoverMenu = __webpack_require__(10);

  var _MenuPopoverMenu2 = _interopRequireDefault(_MenuPopoverMenu);

  var Navigation = (function (_Component) {
    _inherits(Navigation, _Component);

    function Navigation() {
      _classCallCheck(this, Navigation);

      _get(Object.getPrototypeOf(Navigation.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Navigation, [{
      key: 'render',
      value: function render() {
        var _this = this;

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
                    if (_this.props.userInformationRequested) {
                      if (_this.props.userInformationReceived) {
                        return _react2['default'].createElement(_MenuPopoverMenu2['default'], {
                          avatar: _this.props.avatar,
                          credits: _this.props.credits,
                          name: _this.props.name });
                      } else {
                        return _react2['default'].createElement(_LoginButton2['default'], { isPrimary: false });
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

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _fbjsLibExecutionEnvironment = __webpack_require__(6);

  var _historyLibCreateBrowserHistory = __webpack_require__(24);

  var _historyLibCreateBrowserHistory2 = _interopRequireDefault(_historyLibCreateBrowserHistory);

  var _historyLibUseQueries = __webpack_require__(25);

  var _historyLibUseQueries2 = _interopRequireDefault(_historyLibUseQueries);

  var location = _fbjsLibExecutionEnvironment.canUseDOM ? (0, _historyLibUseQueries2['default'])(_historyLibCreateBrowserHistory2['default'])() : {};

  exports['default'] = location;
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
/* 18 */
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
/* 19 */
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
/* 20 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(5)();
  // imports


  // module
  exports.push([module.id, "/**\r\n * React Static Boilerplate\r\n * https://github.com/koistya/react-static-boilerplate\r\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\r\n */\r\n\r\n/**\r\n * React Static Boilerplate\r\n * https://github.com/koistya/react-static-boilerplate\r\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\r\n */\r\n\r\n/*\r\n * Scaffolding\r\n * -------------------------------------------------------------------------- */\r\n/* $primary: #303f9f; */\r\n\r\n\r\n/*\r\n * Typography\r\n * -------------------------------------------------------------------------- */\r\n\r\n/*\r\n * Media queries breakpoints\r\n * -------------------------------------------------------------------------- */\r\n\r\nhtml, body {\r\n  margin: 0;\r\n  padding: 0;\r\n  background-color: #f7f7f7;\r\n  color: #333;\r\n  font-family: 'Roboto','Helvetica',sans-serif;\r\n}\r\n\r\n.Layout {\r\n  margin: 0 auto;\r\n  width: 100%;\r\n}\r\n\r\n.fullBanner {\r\n    width: 100%;\r\n    background-color: #1a237e;\r\n    margin-top: 3px;\r\n    padding: 50px 0px 50px 0px;\r\n    text-align: center;\r\n    background-image: url(" + __webpack_require__(22) + ");\r\n}\r\n\r\n.fullBanner h1 {\r\n  color: white;\r\n  margin: 0;\r\n  font-size: 50px;\r\n  font-weight: normal;\r\n}\r\n", ""]);

  // exports


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(5)();
  // imports


  // module
  exports.push([module.id, "/**\r\n * React Static Boilerplate\r\n * https://github.com/koistya/react-static-boilerplate\r\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\r\n */\r\n\r\n/**\r\n * React Static Boilerplate\r\n * https://github.com/koistya/react-static-boilerplate\r\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\r\n */\r\n\r\n/*\r\n * Scaffolding\r\n * -------------------------------------------------------------------------- */\r\n/* $primary: #303f9f; */\r\n\r\n\r\n/*\r\n * Typography\r\n * -------------------------------------------------------------------------- */\r\n\r\n/*\r\n * Media queries breakpoints\r\n * -------------------------------------------------------------------------- */\r\n\r\n.Navigation {\r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n  -webkit-flex-direction: row;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  margin: 2em 0 5em 0;\r\n  list-style: none;\r\n  -webkit-box-pack: end;\r\n  -webkit-justify-content: flex-end;\r\n      -ms-flex-pack: end;\r\n          justify-content: flex-end;\r\n}\r\n\r\n.Navigation-item {\r\n  padding: 0 2em;\r\n}\r\n\r\n.Navigation-link {\r\n  padding: 0.5em 1em;\r\n  color: #21ce99;\r\n  text-decoration: none;\r\n  text-transform: uppercase;\r\n  cursor: pointer;\r\n}\r\n\r\n.Navigation-link:hover {\r\n  border-bottom: 3px solid #21ce99;\r\n  color: #333;\r\n}\r\n\r\nnav {\r\n    background-color: #fff;\r\n    font-weight: 300;\r\n    width: 100%;\r\n    z-index: 1001;\r\n}\r\n\r\nnav ul {\r\n    margin: 0;\r\n}\r\n\r\nnav ul li {\r\n    -webkit-transition: background-color .3s;\r\n    -o-transition: background-color .3s;\r\n    transition: background-color .3s;\r\n    float: left;\r\n    padding: 0;\r\n}\r\n\r\nnav a, nav ul a {\r\n    color: #212121;\r\n}\r\n\r\nnav ul a {\r\n    font-size: 1rem;\r\n    display: inline-block;\r\n    padding: 0 15px;\r\n    box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    -webkit-box-sizing: border-box;\r\n}\r\n\r\nnav ul a:hover {\r\n    border-bottom: 3px solid #ff7043;\r\n}\r\n\r\nul li {\r\n    list-style-type: none;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n\r\n.navbar-fixed {\r\n    height: 64px;\r\n    position: relative;\r\n}\r\n\r\n.navbar-fixed nav {\r\n    position: fixed;\r\n    height: 64px;\r\n    line-height: 64px;\r\n}\r\n\r\n.nav-wrapper {\r\n    padding: 0 15px;\r\n    position: relative;\r\n    height: 100%;\r\n}\r\n\r\n.brand-logo {\r\n    position: absolute;\r\n    color: #fff;\r\n    display: inline-block;\r\n    font-size: 2.1rem;\r\n    padding: 0;\r\n}\r\n\r\n.right-nav {\r\n    float: right;\r\n    margin-left: 15px;\r\n}\r\n\r\n.right {\r\n    float: right !important;\r\n}\r\n\r\nnav .login {\r\n    margin-bottom: 0;\r\n}\r\n", ""]);

  // exports


/***/ },
/* 22 */
/***/ function(module, exports) {

  module.exports = "data:image/png;base64,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"

/***/ },
/* 23 */
/***/ function(module, exports) {

  module.exports = "data:image/png;base64,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"

/***/ },
/* 24 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createBrowserHistory");

/***/ },
/* 25 */
/***/ function(module, exports) {

  module.exports = require("history/lib/useQueries");

/***/ },
/* 26 */
/***/ function(module, exports) {

  module.exports = require("material-ui/lib/avatar");

/***/ },
/* 27 */
/***/ function(module, exports) {

  module.exports = require("material-ui/lib/divider");

/***/ },
/* 28 */
/***/ function(module, exports) {

  module.exports = require("material-ui/lib/flat-button");

/***/ },
/* 29 */
/***/ function(module, exports) {

  module.exports = require("material-ui/lib/menus/menu");

/***/ },
/* 30 */
/***/ function(module, exports) {

  module.exports = require("material-ui/lib/menus/menu-item");

/***/ },
/* 31 */
/***/ function(module, exports) {

  module.exports = require("material-ui/lib/popover/popover");

/***/ },
/* 32 */
/***/ function(module, exports) {

  module.exports = require("material-ui/lib/styles/colors");

/***/ },
/* 33 */
/***/ function(module, exports) {

  module.exports = require("material-ui/lib/styles/spacing");

/***/ },
/* 34 */
/***/ function(module, exports) {

  module.exports = require("material-ui/lib/styles/theme-manager");

/***/ },
/* 35 */
/***/ function(module, exports) {

  module.exports = require("material-ui/lib/styles/zIndex");

/***/ },
/* 36 */
/***/ function(module, exports) {

  module.exports = require("material-ui/lib/svg-icons/file/folder");

/***/ },
/* 37 */
/***/ function(module, exports) {

  module.exports = require("material-ui/lib/utils/color-manipulator");

/***/ },
/* 38 */
/***/ function(module, exports) {

  module.exports = require("react-dom");

/***/ },
/* 39 */
/***/ function(module, exports) {

  module.exports = require("react-material-icons/icons/navigation/menu");

/***/ },
/* 40 */
/***/ function(module, exports) {

  module.exports = require("react-responsive");

/***/ }
/******/ ]);