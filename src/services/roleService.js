// File: src/services/roleService.js (JavaScript)

const Role = require('../models/Role');

const roleService = {
  getAllRoles: async () => {
    try {
      const roles = await Role.find();
      return roles;
    } catch (error) {
      console.error(`Error in getAllRoles: ${error}`);
      throw new Error('An error occurred while fetching roles');
    }
  },

  getRoleById: async (roleId) => {
    try {
      const role = await Role.findById(roleId);
      return role;
    } catch (error) {
      console.error(`Error in getRoleById: ${error}`);
      throw new Error('An error occurred while fetching the role');
    }
  },

  createRole: async (roleData) => {
    try {
      const newRole = new Role(roleData);
      await newRole.save();
      return newRole;
    } catch (error) {
      console.error(`Error in createRole: ${error}`);
      throw new Error('An error occurred while creating the role');
    }
  },

  updateRole: async (roleId, roleData) => {
    try {
      const updatedRole = await Role.findByIdAndUpdate(roleId, roleData, { new: true });
      return updatedRole;
    } catch (error) {
      console.error(`Error in updateRole: ${error}`);
      throw new Error('An error occurred while updating the role');
    }
  },

  deleteRole: async (roleId) => {
    try {
      await Role.findByIdAndDelete(roleId);
    } catch (error) {
      console.error(`Error in deleteRole: ${error}`);
      throw new Error('An error occurred while deleting the role');
    }
  }
};

module.exports = roleService;