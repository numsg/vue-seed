import { Vue, Component } from 'vue-property-decorator';
import errorBizStyle from './error.child.module.scss';

@Component({
    template: require('./error.child.html'),
    style: errorBizStyle,
    components: {
    }
  })
export class ErrorBizChildComponent extends Vue {

}
