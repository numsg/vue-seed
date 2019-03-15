"use strict";

import { isObject, isFn, isString, isEmptyObject } from './helper'
import parseClassExpression from './parse-class'

export default function c(_this: any): any {
  let args = Array.prototype.slice.call(arguments, 1);
  if (isFn(_this)) {
    return c.bind(_this, {
      functional: true,
      createElement: _this,
      styles: args[0],
      context: args[1]
    });
  };
  let functional = _this.functional === void 0 ? false : _this.functional;
  console.log(functional);
  let h = _this.createElement;
  let context = _this.context === void 0 ? {} : _this.context;
  let styles = _this.styles === void 0 ? context.$style || {} : _this.styles;
  if (isString(styles)) {
    styles = (functional ? (context.injections || {})[styles] : context[styles]) || {};
  }
  if(isEmptyObject(styles)){
    return h.apply(null, args);
  }
  context = functional ? context.props : {};
  const data: any = args[1];
  if (isObject(data)) {
    if (!data['staticClass']) {
      data['staticClass'] = '';
    }
    if (!data['class']) {
      data['class'] = '';
    }
    if (!data['attrs']) {
      data.attrs = {};
    }
    let staticClasss = data['staticClass'] || data.attrs['staticClass'] || '';
    let classs;
    if (isString(data['class']) || Array.isArray(data['class'])) {
      classs = Array.isArray(data['class']) ? data['class'] : [data['class']]
    } else {
      classs = [];
    }
    if (staticClasss.length || classs.length) {
      let classArray = Array.isArray(staticClasss) ? staticClasss : [staticClasss];
      classArray = classArray.concat(classs);
      data.staticClass = '';
      for (let i in classArray) {
        let classOne = classArray[i];
        if (classOne && typeof classOne === 'string') {
          let classExpressions = classOne.split(/\s+/g);
          for (let _i in classExpressions) {
            let classExpression = classExpressions[_i];
            let _parseClassExpression = parseClassExpression(classExpression);
            let className = _parseClassExpression.className;
            let binding = _parseClassExpression.binding;
            let bindingValue = _parseClassExpression.bindingValue;
            let role = _parseClassExpression.role;
            if (bindingValue) {
              className = context[binding];
              binding = undefined;
            }
            if ((binding ? context[binding] : true) && styles[className]) {
              data.staticClass += " " + styles[className];
              data.staticClass = data.staticClass.trim();
            }else{
              data.staticClass += " " + className;
            }
            if (role) {
              data.attrs["data-component-" + role] = '';
            }
          }
        }
      }
    }

  }
  return h.apply(null, args);
}
