import Vue from 'vue'
import { CursorFx } from '@luxdamore/vue-cursor-fx'
import VueContext from 'vue-context'

Vue.use(CursorFx)
Vue.use(VueContext)
Vue.component('cursor-fx', CursorFx)
Vue.component('vue-context', VueContext)
