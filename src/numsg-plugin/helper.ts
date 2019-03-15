export function isObject (obj: any): boolean {
  return obj !== null && typeof obj === 'object'
}

export function isFn(fn: any) {
  return typeof fn === "function";
}

export function isString(str: any) {
  return typeof str === 'string';
}

export function isEmptyObject(obj: any){
  return Object.keys(obj).length === 0;
}

export function handleStyles(styles: any): any {
  let objStyles: any = [];
  if (typeof styles === 'object') {
    for (let p in styles) {
      if (p.match(/c____+\d+____/)) {
        let pMatch : any = p.match(/c____+\d+____/);
        let s = pMatch[0];
        let c = s.match(/\d/)[0];
        let cInt = parseInt(c);
        let childStyleName;
        let lastChildStyleName;
        if(cInt>0){
          let lastName = p.substr(10,p.length - 10);
          childStyleName = 'c____'+ (cInt-1) + '____'+ lastName;
          lastChildStyleName = lastName;
        }else{
          childStyleName = null;
          lastChildStyleName = null;
        }s
        objStyles.push({
          c: c,
          p: p,
          styleName: styles[p],
          childStyleName: childStyleName,
          lastChildStyleName: lastChildStyleName
        });
      }
    }
  }
  return objStyles;
}

export function styleToChild(parent: any, _this: any,styles: any) {
  if (parent) {
    if (isObject(parent.$options.style)) {
      let parentStyle = parent.$options.style;
      if(parentStyle){
        let pStyleObject: any = handleStyles(parentStyle);
        if(styles === undefined){
          _this.$options.style ={};
          styles = _this.$options.style;
        }
        pStyleObject.forEach((element: any) => {
          if(parseInt(element.c) > 0){
            styles[element.childStyleName] = element.styleName;
            styles[element.lastChildStyleName] = element.styleName;
          }
        });
      }
    }
  }
}


export function includes(arrayLike: any, element: any, fromIndex: any) {
  if (fromIndex === void 0) {
    fromIndex = 0;
  }
  for (let i = fromIndex, len = arrayLike.length; i < len; i++) {
    if (arrayLike[i] === element) {
      return true;
    }
  }
  return false;
}

let camelCaseCache = Object.create(null);

export function camelCase(value: any) {
  if (camelCaseCache[value]) return camelCaseCache[value];
  let result = '';
  let shouldUpperCase = false;

  for (let i = 0, len = value.length; i < len; i++) {
    let char = value[i];

    if (char === '-') {
      shouldUpperCase = true;
    } else {
      result += result && shouldUpperCase ? char.toUpperCase() : char;
      shouldUpperCase = false;
    }
  }

  camelCaseCache[value] = result;
  return result;
}

let dashCaseCache = Object.create(null);

export function dashCase(value: any) {
  if (dashCaseCache[value]) return dashCaseCache[value];
  let result = '';
  let shouldAddDash = false;

  for (let i = value.length - 1; i >= 0; i--) {
    let char = value[i];
    let charCode = char.charCodeAt(0);

    if (charCode >= 65 && charCode <= 90) {
      shouldAddDash = true;
      result = char.toLowerCase() + result;
    } else {
      result = char + (shouldAddDash ? '-' : '') + result;
      shouldAddDash = false;
    }
  }

  dashCaseCache[value] = result;
  return result;
}
