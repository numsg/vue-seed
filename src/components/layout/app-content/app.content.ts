import { Vue, Component } from 'vue-property-decorator';
import './app.content.scss'

@Component({
    template: require('./app.content.html'),
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
