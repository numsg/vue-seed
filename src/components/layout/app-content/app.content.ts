import { Vue, Component } from 'vue-property-decorator';
import contentStyle from './app.content.module.scss'

@Component({
    template: require('./app.content.html'),
    style: contentStyle,
    components: {
    }
  })
export class AppContentComponent extends Vue {
  sysName: any = 'ADMIN';
  collapsed: boolean =  false;
  sysUserName: any = '';

  public collapse(){
    this.collapsed=!this.collapsed;
  }
}
