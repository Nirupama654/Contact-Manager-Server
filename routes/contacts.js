const express = require('express');
const router = express.Router(); //Middleware
// const fs = require('fs');
const auth = require('../middleware/auth');
const contactController = require('../controllers/contact.controller')
const multer = require('multer')
const upload = multer({ dest: 'uploads/' });

// Routes doesn't require Authentication
router.get('/', contactController.listContacts);

router.get("/getbyid/:id", contactController.getContactByID);

router.get("/getbyname/:name", contactController.getContactByName);

router.get("/getbytype/:type", contactController.getContactByType);

router.get("/getContactsByAuthor/:authorid", contactController.getContactsByAuthor);

// Routes do require authentication

router.post("/save", auth, contactController.createContact);

router.put("/update/:id", contactController.updateContact);

router.delete('/delete/:id', contactController.deleteContact);

router.get("/:phone", contactController.getContactByPhone);

router.post('/upload', upload.single('imageFile'), (req, res) => {
    res.status(200).json({
        details: req.file
    })
})

module.exports = router;