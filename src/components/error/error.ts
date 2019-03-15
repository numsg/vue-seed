import { Vue, Component } from 'vue-property-decorator';
import { ErrorChildComponent } from './error-component/error.biz'

import Styles from './error.module.scss';
import ErrorHtml from './error.html';

@Component({
    template: ErrorHtml,
    style: Styles,
    components: {
      'err-con': ErrorChildComponent
    }
  })
export class ErrorComponent extends Vue {

}
