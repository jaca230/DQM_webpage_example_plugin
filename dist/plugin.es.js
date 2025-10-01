function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: false
  }), e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
function _get() {
  return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) {
    var p = _superPropBase(e, t);
    if (p) {
      var n = Object.getOwnPropertyDescriptor(p, t);
      return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value;
    }
  }, _get.apply(null, arguments);
}
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}
function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: true,
      configurable: true
    }
  }), Object.defineProperty(t, "prototype", {
    writable: false
  }), e && _setPrototypeOf(t, e);
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function () {
    return !!t;
  })();
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _possibleConstructorReturn(t, e) {
  if (e && ("object" == typeof e || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t);
}
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}
function _superPropBase(t, o) {
  for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t)););
  return t;
}
function _superPropGet(t, o, e, r) {
  var p = _get(_getPrototypeOf(t), o, e);
  return p;
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}

function makeMyPlot(_ref) {
  var _MyPlot;
  var Plot = _ref.Plot,
    SettingTypes = _ref.SettingTypes;
  return _MyPlot = /*#__PURE__*/function (_Plot) {
    function MyPlot() {
      _classCallCheck(this, MyPlot);
      return _callSuper(this, MyPlot, arguments);
    }
    _inherits(MyPlot, _Plot);
    return _createClass(MyPlot, [{
      key: "initPlot",
      value: function initPlot(json) {
        return {
          data: [{
            x: json.time || [],
            y: json.value || [],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {
              color: 'blue'
            }
          }],
          layout: {
            title: 'My Example Plot'
          }
        };
      }
    }, {
      key: "updatePlot",
      value: function updatePlot(json) {
        return {
          data: [{
            x: json.time || [],
            y: json.value || [],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {
              color: 'blue'
            }
          }],
          layout: undefined // keep layout unchanged
        };
      }
    }], [{
      key: "settingSchema",
      get: function get() {
        return _objectSpread2(_objectSpread2({}, _superPropGet(MyPlot, "settingSchema", this)), {}, {
          dataUrl: {
            type: SettingTypes.STRING,
            "default": 'http://localhost/api/my_data',
            label: 'Data URL',
            onChange: 'onUpdateTick'
          }
        });
      }
    }]);
  }(Plot), _defineProperty(_MyPlot, "displayName", 'My Example Plot'), _defineProperty(_MyPlot, "name", 'MyPlot'), _MyPlot;
}

function makeMyTable(_ref) {
  var _MyTable;
  var Table = _ref.Table,
    SettingTypes = _ref.SettingTypes;
  return _MyTable = /*#__PURE__*/function (_Table) {
    function MyTable() {
      _classCallCheck(this, MyTable);
      return _callSuper(this, MyTable, arguments);
    }
    _inherits(MyTable, _Table);
    return _createClass(MyTable, [{
      key: "render",
      value: function render() {
        var rows = [['Header 1', 'Header 2'], [1, 'A'], [2, 'B']];
        return /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("tbody", null, rows.map(function (row, i) {
          return /*#__PURE__*/React.createElement("tr", {
            key: i
          }, row.map(function (cell, j) {
            return /*#__PURE__*/React.createElement("td", {
              key: j
            }, cell);
          }));
        })));
      }
    }], [{
      key: "settingSchema",
      get: function get() {
        return _objectSpread2(_objectSpread2({}, _superPropGet(MyTable, "settingSchema", this)), {}, {
          dataUrl: {
            type: SettingTypes.STRING,
            "default": 'http://localhost/api/my_table_data',
            label: 'Data URL',
            onChange: 'onUpdateTick'
          }
        });
      }
    }]);
  }(Table), _defineProperty(_MyTable, "displayName", 'My Example Table'), _defineProperty(_MyTable, "name", 'MyTable'), _MyTable;
}

function makeMyLabel(_ref) {
  var _MyLabel;
  var BaseFigure = _ref.BaseFigure,
    SettingTypes = _ref.SettingTypes;
  return _MyLabel = /*#__PURE__*/function (_BaseFigure) {
    function MyLabel() {
      _classCallCheck(this, MyLabel);
      return _callSuper(this, MyLabel, arguments);
    }
    _inherits(MyLabel, _BaseFigure);
    return _createClass(MyLabel, [{
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement("div", null, this.settings.text);
      }
    }], [{
      key: "settingSchema",
      get: function get() {
        return {
          text: {
            type: SettingTypes.STRING,
            "default": 'Hello, world!',
            label: 'Label Text'
          }
        };
      }
    }]);
  }(BaseFigure), _defineProperty(_MyLabel, "displayName", 'My Example Label'), _defineProperty(_MyLabel, "name", 'MyLabel'), _MyLabel;
}

function registerFigures(_ref) {
  var registry = _ref.registry,
    baseClasses = _ref.baseClasses;
  var Plot = baseClasses.Plot,
    Table = baseClasses.Table,
    BaseFigure = baseClasses.BaseFigure,
    SettingTypes = baseClasses.SettingTypes;
  registry.register('MyPlot', makeMyPlot({
    Plot: Plot,
    SettingTypes: SettingTypes
  }));
  registry.register('MyTable', makeMyTable({
    Table: Table,
    SettingTypes: SettingTypes
  }));
  registry.register('MyLabel', makeMyLabel({
    BaseFigure: BaseFigure,
    SettingTypes: SettingTypes
  }));
}

// Expose globally for eval/script loading
if (typeof window !== 'undefined') {
  window.PluginRegister = registerFigures;
}

export { registerFigures as default };
