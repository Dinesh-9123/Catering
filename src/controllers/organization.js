const OrganizationService = require('../service/organizationService');

async function createOrganization(req, res) {
    try {
      const organizationData = req.body; 
      const createdOrganization = await OrganizationService.createOrUpdateOrganization(organizationData);
      return res.status(201).json(createdOrganization);
    } 
    catch (error) {
      console.error("Error creating organization:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
  
  module.exports = {
    createOrganization
  };