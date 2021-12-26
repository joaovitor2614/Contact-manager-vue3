import axios from 'axios'

const filtersModule = {
    state: () => ({
        text: '',

    }),
    mutations: {
        filtersByText(state, payload) {
            state.text = payload
        }
    }


}

export default filtersModule