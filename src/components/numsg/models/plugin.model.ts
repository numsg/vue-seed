export interface PluginConfig {
  pluginName: string;
  path: string;
  routeDisplayName: string;
  location: string;
  moduleName: string;
  rootComponent?: string;
  description: string;
  installed?: boolean;
}
