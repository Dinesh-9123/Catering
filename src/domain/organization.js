const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const organizationSchema = mongoose.Schema({
        _id: {
          type: String,
          alias: 'OrganizationId', // Use OrganizationId as an alias for _id
          required: false
        },
        Name: {
          type: String,
          required: true
        },
        CountryCode:{
          type: String,
          required: true
        },
        Phone: {
          type: String,
          required: true
        },
        Country: {
          type: String,
          required: true
        },
        State: {
          type: String,
          required: true
        },
        District: {
          type: String,
          required: true
        },
        City: {
          type: String,
          required: true
        },
        Street: {
          type: String,
          required: true
        },
        Status: {
          type: String,
          enum: ['None', 'Active', 'Inactive', 'Deleted'],
          required: true
        }
  });
  
  organizationSchema.plugin(uniqueValidator);
  
  module.exports = mongoose.model("Organization", organizationSchema);