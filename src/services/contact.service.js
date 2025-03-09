const Contact = require('../models/contact.model');

const addContactData = async (contactData) => {
    const newData = new Contact(contactData);

    await newData.validate();

    const collectionData = await newData.save();

    return collectionData;
}

module.exports = { addContactData }