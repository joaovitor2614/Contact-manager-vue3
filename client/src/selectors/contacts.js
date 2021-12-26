

export default (contacts, { text }) => {
    return contacts.filter((contact) => {

        let contactName = `${contact.firstName} ${contact.lastName}`
        const textMatch = contactName.toLowerCase().includes(text.toLocaleLowerCase())
        return textMatch

    })
}