// File: src/controllers/roleController.js

const Role = require('../models/Role');

// Function to create a new role
const createRole = async (req, res) => {
  try {
    const { name, permissions } = req.body;
    const role = new Role({ name, permissions });
    await role.save();
    res.status(201).json({ message: 'Role created successfully', role });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Function to get all roles
const getAllRoles = async (req, res) => {
  try {
    const roles = await Role.find();
    res.status(200).json(roles);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Function to get role by ID
const getRoleById = async (req, res) => {
  try {
    const role = await Role.findById(req.params.id);
    if (role) {
      res.status(200).json(role);
    } else {
      res.status(404).json({ message: 'Role not found' });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Function to update role by ID
const updateRole = async (req, res) => {
  try {
    const { name, permissions } = req.body;
    const role = await Role.findById(req.params.id);
    if (role) {
      role.name = name;
      role.permissions = permissions;
      await role.save();
      res.status(200).json({ message: 'Role updated successfully', role });
    } else {
      res.status(404).json({ message: 'Role not found' });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Function to delete role by ID
const deleteRole = async (req, res) => {
  try {
    const role = await Role.findByIdAndDelete(req.params.id);
    if (role) {
      res.status(200).json({ message: 'Role deleted successfully', role });
    } else {
      res.status(404).json({ message: 'Role not found' });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { createRole, getAllRoles, getRoleById, updateRole, deleteRole };