const express = require("express");

const OrganizationController = require('../controllers/organization');

const router = express.Router();


router.post("/add-organization",OrganizationController.createOrganization);


module.exports = router;

