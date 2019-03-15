import { Vue, Component } from 'vue-property-decorator';
import errorBizStyle from './error.biz.module.scss';
import { ErrorBizChildComponent } from './child/error.child'

@Component({
  template: require('./error.biz.html'),
  style: errorBizStyle,
  components: {
    'child-biz': ErrorBizChildComponent
  }
})
export class ErrorChildComponent extends Vue {

}
