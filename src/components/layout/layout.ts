import { Vue, Component } from 'vue-property-decorator';
import { NavbarComponent } from './navbar/navbar'
import { AppContentComponent } from './app-content/app.content'
import { AppHeaderComponent } from './app-header/app.header'

import layoutStyle from './layout.module.scss'

@Component({
    template: require('./layout.html'),
    style: layoutStyle,
    components: {
      'app-header': AppHeaderComponent,
      'navbar':NavbarComponent,
      'app-content':AppContentComponent
    }
  })
export class LayoutComponent extends Vue {

}
