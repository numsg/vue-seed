"use strict";

import { isObject, isFunction, isString } from './utils'
import parseClassExpression from './parse-class-expression'

export default function createElement(_: any):any {
  var args = [].slice.call(arguments, 1);
  if (isFunction(_)) {
    return createElement.bind(_, {
      functional: true,
      createElement: _,
      styles: args[0],
      context: args[1]
    });
  }

  let _$functional = _.functional,
      functional = _$functional === void 0 ? false : _$functional,
      h = _.createElement,
      _$context = _.context,
      context = _$context === void 0 ? {} : _$context,
      _$styles = _.styles,
      styles = _$styles === void 0 ? context.$style || {} : _$styles;

  if (isString(styles)) {
    styles = (functional ? (context.injections || {})[styles] : context[styles]) || {};
  }

  if (functional) {
    context = context.props || {};
  }

  const data: any = args[1];
  if (isObject(data)) {
    // console.log(data);
    if (!data['staticClass']) {
      data['staticClass'] = '';
    }
    if (!data['class']) {
      data['class'] = '';
    }
    if (!data['attrs']) {
      data.attrs = {};
    }
    let modules =  data['staticClass']|| data.attrs['staticClass'] || ''//data[_config.INJECT_ATTR] || data.attrs[_config.INJECT_ATTR] || '';
    // add by numsg
    let cssModules ;
    if(isString(data['class'])||Array.isArray(data['class'])){
      cssModules = Array.isArray(data['class']) ? data['class'] : [data['class']]
    }else{
      cssModules = [];
    }
    if (modules.length || cssModules.length) {
      let _modules = Array.isArray(modules) ? modules : [modules];
      _modules = _modules.concat(cssModules);
      // add by numsg
      for (let i in _modules) {
        let module = _modules[i];

        if (module && typeof module === 'string') {
          let classExpressions = module.split(/\s+/g);

          for (let _i in classExpressions) {
            let classExpression = classExpressions[_i];
            let _parseClassExpression = parseClassExpression(classExpression),
                className = _parseClassExpression.className,
                binding = _parseClassExpression.binding,
                bindingValue = _parseClassExpression.bindingValue,
                role = _parseClassExpression.role;

            if (bindingValue) {
              className = context[binding];
              binding = undefined;
            }

            if ((binding ? context[binding] : true) && styles[className]) {
              data.staticClass += " " + styles[className];
              data.staticClass = data.staticClass.trim();
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
