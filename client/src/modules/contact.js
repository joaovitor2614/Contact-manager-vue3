import axios from 'axios'
import { useToast } from "vue-toastification";
const contactModule = {
    state: () => ({
        contacts: [],
        isLoading: false
    }),
    mutations: {
        populateContacts(state, payload) {
            state.contacts = [...payload]
        },
        setLoading(state)  {
            state.isLoading = true
        },
        setLoadingOff(state)  {
            state.isLoading = false
        },

        addContact(state, payload) {

            state.contacts.push(payload);
            const toast = useToast();
            state.isLoading = false;
            toast.success("Contato criado com sucesso", {
                timeout: 3000
              })
        },
        editContact(state, payload) {
                 state.contacts.map(contact => contact._id == payload._id
                  ? {...payload} : contact)

        },
        deleteContact(state, payload) {
            console.log('state c', state.contacts)
            state.contacts = state.contacts.filter(contact => contact._id !== payload)

   }
    },

    actions: {
        async getContacts(context) {

             const contacts = await axios.get('http://localhost:5000/api/contact')
             const { data } = contacts;


             context.commit('populateContacts', data);

        },
        async createContact(context, contactData) {
            context.commit('setLoading');
            const newContact = await axios.post('http://localhost:5000/api/contact', contactData)
            const { data } = newContact;
            context.commit('setLoadingOff');

            context.commit('addContact', data);
       },
       async editContact(context, contactData) {
        context.commit('setLoading');
        const editedContact = await axios.put(`http://localhost:5000/api/contact/${contactData._id}`,
        contactData)
        const { data } = editedContact;
        context.commit('setLoadingOff');

        context.commit('editContact', data);
   },
    async removeContact(context, id) {
        console.log('asasd')
        context.commit('setLoading');
        context.commit('deleteContact', id);
        await axios.delete(`http://localhost:5000/api/contact/${id}`)
        context.commit('setLoadingOff');


}
    }
}

export default contactModule