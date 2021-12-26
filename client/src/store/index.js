import { createStore } from 'vuex'
import contactModule from '../modules/contact'
import filtersModule from '../modules/filters'
export default createStore({

  modules: {
    contacts: contactModule,
    filters: filtersModule
  }
})
