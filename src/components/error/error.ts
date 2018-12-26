import { Vue, Component } from 'vue-property-decorator';
import './error.scss'

@Component({
    template: require('./error.html'),
    components: {
    }
  })
export class ErrorComponent extends Vue {

}
