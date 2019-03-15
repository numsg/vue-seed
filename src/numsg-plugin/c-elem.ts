import { isObject, isString, isEmptyObject } from './helper'

/**
 * 劫持 VUE createElement 方法，注入样式绑定逻辑
 *
 * @export
 * @param {*} _this
 * @returns {*}
 */
export default function c(_this: any): any {
  let args = Array.prototype.slice.call(arguments, 1);
  let fn = _this.createElement;
  let context = _this.context === void 0 ? {} : _this.context;
  let styles = _this.styles === void 0 ? context.$style || {} : _this.styles;
  if (isString(styles)) {
    styles = context[styles] || {};
  }
  if (isEmptyObject(styles)) {
    return fn.apply(null, args);
  }
  const classData: any = args[1];
  if (!isObject(classData)) {
    return fn.apply(null, args);
  }
  classData['staticClass'] = classData['staticClass'] ? classData['staticClass'] : '';
  classData['class'] = classData['class'] ? classData['class'] : '';
  classData['attrs'] = classData['attrs'] ? classData['attrs'] : '';
  let staticClasss = classData['staticClass'] || classData.attrs['staticClass'] || '';
  let classs;
  if (isString(classData['class']) || Array.isArray(classData['class'])) {
    classs = Array.isArray(classData['class']) ? classData['class'] : [classData['class']]
  } else {
    classs = [];
  }
  if (staticClasss.length || classs.length) {
    let classArray = Array.isArray(staticClasss) ? staticClasss : [staticClasss];
    classArray = classArray.concat(classs);
    classData.staticClass = '';
    for (let i in classArray) {
      let className = classArray[i].trim();
      if (styles[className]) {
        classData.staticClass += " " + styles[className];
        classData.staticClass = classData.staticClass.trim();
      } else {
        classData.staticClass += " " + className;
      }
    }
  }
  return fn.apply(null, args);
}
