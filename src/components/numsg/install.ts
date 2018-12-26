export let Vue: any
import { warn } from './util'
import NumsgPlugin from './index'
import { PluginConfig } from './models/plugin.model'

export function install (_Vue: any, _options: PluginConfig) {

  if (process.env.NODE_ENV !== 'production' && NumsgPlugin.installed && _Vue === Vue) {
    warn('already installed.', null);
    return;
  }
  NumsgPlugin.installed = true
  const version = (Vue.version && Number(Vue.version.split('.')[0])) || -1
  /* istanbul ignore if */
  if (process.env.NODE_ENV !== 'production' && version < 2) {
    warn(`vue-i18n (${NumsgPlugin.version}) need to use Vue 2.0 or later (Vue: ${Vue.version}).`,null)
    return
  }
  Vue.mixin({
      beforeCreate (): void {
        const options: any = _options;

      }
    }
  );

}
