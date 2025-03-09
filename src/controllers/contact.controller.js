const contactServices = require('../services/contact.service');

const addContactDetail = async (req, res, next) => {
    try {
        const contactData = req.body;

        const data = await contactServices.addContactData(contactData);

        res.status(200).json({ message: "Data Added Successfully..." });
    } catch (error) {
        res.status(500).json({
            message: "Internal Server..",
            error: error
        })
    }
}

module.exports = { addContactDetail }