import axios from 'axios'
import { useToast } from "vue-toastification";
const contactModule = {
    state: () => ({
        contacts: []
    }),
    mutations: {
        populateContacts(state, payload) {
            state.contacts = [...payload]
        },
        addContact(state, payload) {
            state.contacts.push(payload);
            const toast = useToast();
            toast.success("Contato criado com sucesso", {
                timeout: 2000
              });
        }
    },
    actions: {
        async getContacts(context) {

             const contacts = await axios.get('http://localhost:5000/api/contact')
             const { data } = contacts;

             context.commit('populateContacts', data);
        },
        async createContact(context, contactData) {

            const newContact = await axios.post('http://localhost:5000/api/contact', contactData)
            const { data } = newContact;
            context.commit('addContact', data);
       }
    }
}

export default contactModule