import { createStore } from 'vuex'
import contactModule from '../modules/contact'

export default createStore({

  modules: {
    contacts: contactModule
  }
})
