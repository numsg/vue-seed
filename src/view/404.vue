<template>
<div>
    <p class="page-container">404 page not foundaaaaaaaaaaaaaaa</p>
      <div class="button-green">111
        <err-con></err-con>
      </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import ErrorChildComponent from './error/error.vue'

@Component({
    components: {
      'err-con': ErrorChildComponent
    }
})
export default class extends Vue {
}
</script>
<style lang="scss" scoped>
  .page-container {
      font-size: 20px;
      text-align: center;
      color: rgb(192, 204, 218);
  }
    
  .button-green /deep/ .error—biz {  
    background-color: red;  
  }

  .button-green /deep/ .error—biz /deep/ .error—child{
    background-color: green;  
  }
</style>