import { Vue, Component } from 'vue-property-decorator';

import './app.header.scss'

@Component({
    template: require('./app.header.html'),
    components: {
    }
  })
export class AppHeaderComponent extends Vue {
  sysName: any = 'VUE-SEED';
  collapsed: boolean =  false;
  sysUserName: any = 'numsg';

  sysUserAvatar: any = require('@/assets/img/useravatar.png');

  public collapse(){
    this.collapsed=!this.collapsed;
  }

  public logout() {
    var _this = this;
    this.$confirm('确认退出吗?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      //type: 'warning'
    }).then(() => {
      sessionStorage.removeItem('Admin-Token');
      _this.$router.push('/login');
    }).catch(() => {
    });
  }
}
