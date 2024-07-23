import { App } from 'vue'
import Kofi from './components/Kofi.vue'

export { Kofi }

export default {
  install: (app: App): void => {
    app.component('Kofi', Kofi)
  }
}