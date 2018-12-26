import { Vue, install } from './install'
import { PluginConfig } from './models/plugin.model'

declare var window: any;

export default class NumsgPlugin {
  // static install: () => void
  static version: string
  static installed: boolean =false;

  constructor (options: PluginConfig) {
    // Auto install if it is not done yet and `window` has `Vue`.
    // To allow users to avoid auto-installation in some cases,
    // this code should be placed here. See #290
    /* istanbul ignore if */
    if (!Vue && typeof window !== 'undefined' && window.Vue) {
      install(window.Vue, options)
    }

  }
}

// NumsgPlugin.install = install
NumsgPlugin.version = '__VERSION__'
