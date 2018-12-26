declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

import Component from "vue";

export interface RouteConfig {
  path: string;
  name?: string;
  component?: Component;
  alias?: string | string[];
  children?: RouteConfig[];
  meta?: any;
  // props?: boolean | Object | RoutePropsFunction;
  caseSensitive?: boolean;
  // pathToRegexpOptions?: PathToRegexpOptions;
}
