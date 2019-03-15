<template>
<div>
  <div class="error—biz">
    2222
    <child-con></child-con>
  </div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ChildComponent from './child/child.vue'

@Component({
    components: {
      'child-con': ChildComponent
    }
})
export default class  extends Vue {

}
</script>

<style lang="scss" scoped>
  
</style>