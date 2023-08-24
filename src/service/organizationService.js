const Organization = require('../domain/organization');
const mongoose = require('mongoose');

  async function createOrUpdateOrganization(organizationData) {
    try {
      const { OrganizationId } = organizationData;
  
      if (OrganizationId !== null) {
        const existingOrganization = await Organization.findOne({ _id: OrganizationId });
        if (existingOrganization) {
          const updatedOrganization = await Organization.findOneAndUpdate(
            { _id: OrganizationId },
            organizationData,
            { new: true } 
          );
          return updatedOrganization.OrganizationId;
        }
        else{
          throw new Error('Invalid OrganizaitionId');
        }
      }
       else {
        const organization = new Organization(organizationData);
        organization.OrganizationId = new mongoose.Types.ObjectId();
        const createdOrganization = await organization.save();
        return createdOrganization.OrganizationId;
      }
    } catch (error) {
      throw error;
    }
  }
  
  module.exports = {
    createOrUpdateOrganization
  };