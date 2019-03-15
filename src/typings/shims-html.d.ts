// import Vue  from 'vue'
declare module '*.html' {
  // interface WithRender {
  //   <V extends Vue>(options: Vue.ComponentOptions<V>): Vue.ComponentOptions<V>
  //   <V extends typeof Vue>(component: V): V
  // }
  // const withRender: WithRender
  const html: string;
  export default html;
}
