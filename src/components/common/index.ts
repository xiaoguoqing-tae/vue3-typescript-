import ConsCard from '../common/Card.vue'
import ConsItem from '../common/ConsItem.vue'
import Summary from '../common/Summary.vue'

interface MyPlugin{
  install:(Vue:any)=>void
}
const MyPlugin:MyPlugin = {
  install:()=>{}
}

MyPlugin.install = function (Vue:any) {
  Vue.component("ConsCard", ConsCard)
  Vue.component("ConsItem", ConsItem)
  Vue.component("Summary", Summary)
}

export default MyPlugin
