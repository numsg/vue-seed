import { includes, camelCase } from './helper'

let cache = Object.create(null);

export default function _default(expression: any) {
  if (cache[expression]) return cache[expression];
  let className;
  let binding;
  let bindingValue;
  let role;

  if (includes(expression, '=', 1)){
    let _expression$split = expression.split('=');

    className = _expression$split[0];
    binding = _expression$split[1];
  } else {
    let modifier = expression[0];

    if (modifier === '$') {
      binding = expression.substr(1);
      bindingValue = true;
    } else if (modifier === '@') {
      className = expression.substr(1);
      role = className;
    } else if (modifier === ':') {
      className = expression.substr(1);
      binding = camelCase(className)
    } else {
      className = expression;
    }
  }

  cache[expression] = {
    className: className,
    binding: binding,
    bindingValue: bindingValue,
    role: role
  };
  return cache[expression];
};
