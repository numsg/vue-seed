import { Vue, Component } from 'vue-property-decorator';
import loginHtml from './login.html'
import loginStyle from './login.module.scss'

@Component({
    template: loginHtml,//require('./login.html'),
    style: loginStyle,
    components: {
    }
  })
export class LoginComponent extends Vue {
  form: {} = {
    username: 'numsg@gsafety.com',
    password: '123456'
  };
  rules: {} =  {
    username: [{required: true, message: '请输入用户名！', trigger: 'blur'}],
    password: [{required: true, message: '请输入用户密码！', trigger: 'blur'}]
  };
  //请求时的loading效果
  load_data: boolean = false;

  public handleLogin(){
    const lForm: any = this.$refs.loginForm;
    lForm.validate((valid: any) => {
      if (valid) {
        this.load_data = true;
        this.$store
          .dispatch('Login', this.form)
          .then(() => {
            this.load_data = false;
            this.$router.push({ path: '/' });
          })
          .catch(() => {
            this.load_data = false;
          });
      } else {
        console.log('error submit!!');
        return false;
      }
    });
  }
}
