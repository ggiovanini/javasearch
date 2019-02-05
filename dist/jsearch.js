"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var jSearch =
/*#__PURE__*/
function () {
  function jSearch() {
    _classCallCheck(this, jSearch);
  }

  _createClass(jSearch, null, [{
    key: "filter",
    value: function filter(element) {
      var term = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      event.preventDefault();

      if (term === false) {
        term = event.target.value;
      }

      var nodeList = document.querySelectorAll(element);
      term = this.removeSpecialChar(term);

      for (var i = 0; i < nodeList.length; i++) {
        var elem = nodeList[i];
        var origin = this.removeSpecialChar(elem.textContent || elem.innerText || '');

        if (origin.indexOf(term) === -1) {
          if (!elem.dataset.display) {
            elem.dataset.display = elem.style.display;
          }

          elem.style.display = 'none';
        } else {
          elem.style.display = null;
        }
      }
    }
  }, {
    key: "removeSpecialChar",
    value: function removeSpecialChar(term) {
      term = term.toUpperCase();
      term = term.replace(new RegExp('[ÁÀÂÃ]', 'gi'), 'A');
      term = term.replace(new RegExp('[ÉÈÊ]', 'gi'), 'E');
      term = term.replace(new RegExp('[ÍÌÎ]', 'gi'), 'I');
      term = term.replace(new RegExp('[ÓÒÔÕ]', 'gi'), 'O');
      term = term.replace(new RegExp('[ÚÙÛ]', 'gi'), 'U');
      term = term.replace(new RegExp('[Ç]', 'gi'), 'C');
      term = term.replace(/[^\w\s]/gi, '');
      return term;
    }
  }]);

  return jSearch;
}();
//# sourceMappingURL=jsearch.js.map