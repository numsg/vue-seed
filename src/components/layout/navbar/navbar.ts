import { Vue, Component } from 'vue-property-decorator';
import navbarStyle from './navbar.module.scss'
import { Getter } from 'vuex-class';

@Component({
    template: require('./navbar.html'),
    style: navbarStyle,
    components: {
    },
    computed:{
      name:function(){
          return this.$store.state.name
      },
      age:function(){
          return this.$store.getters.menuStatus
      }
  }
  })
export class NavbarComponent extends Vue {

  // collapsed: boolean =  false;

  @Getter('menuStatus') menuStatus: any;

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
