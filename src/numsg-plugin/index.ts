import _createElement from './c-elem'
import { styleToChild } from './helper'

let NumsgPluin: any = function NumsgPluin() {
  return {
    beforeCreate: function beforeCreate() {
      let _this: any = this;
      styleToChild(_this.$parent, _this, _this.$options.style);
      let styles = _this.$options.style;
      _this.original$createElement = _this.original$createElement || _this.$createElement;
      _this.original_c = _this.original_c || _this._c;
      _this.$createElement = _createElement.bind(_this, {
        createElement: _this.original$createElement,
        context: _this,
        styles: styles
      });
      _this._c = _createElement.bind(_this, {
        createElement: _this.original_c,
        context: _this,
        styles: styles
      });
    }
  };
};

NumsgPluin.install = function (_Vue: any) {
  _Vue.mixin(NumsgPluin());
};

export default NumsgPluin;
