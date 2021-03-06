/*istanbul ignore next*/"use strict";

exports.__esModule = true;

exports.default = function () {
  return {
		name: 'transform-remove-console-rncompat',
    visitor: { /*istanbul ignore next*/
      CallExpression: function CallExpression(path) {
        var c = path.get("callee");
        if (c.matchesPattern("console", true)) {
          var prop = c.node.property;
          if (prop && (prop.name === 'log' || prop.name === 'warn' || prop.name === 'error')) {        
            path.remove();
          }
        }
      }
    }
  };
};

/*istanbul ignore next*/module.exports = exports["default"];