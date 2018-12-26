import { Vue, Component } from 'vue-property-decorator';
import './navbar.scss'

@Component({
    template: require('./navbar.html'),
    components: {
    }
  })
export class NavbarComponent extends Vue {

  collapsed: boolean =  false;

  public handleopen() {
    //console.log('handleopen');
  }

  public handleselect() {
    //console.log('handleopen');
  }

  public onSubmit() {
    //console.log('handleopen');
  }

  public handleclose() {
    //console.log('handleopen');
  }

  public showMenu(i: any,status: any){
    const ele: any= this.$refs.menuCollapsed;
    ele.getElementsByClassName('submenu-hook-'+i)[0].style.display=status?'block':'none';
  }
}
