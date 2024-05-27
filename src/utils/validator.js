// validator.js

const validator = {
  validateUsername: (username) => {
    if (username.length < 3 || username.length > 20) {
      throw new Error('Username must be between 3 and 20 characters');
    }
  },

  validateEmail: (email) => {
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      throw new Error('Invalid email format');
    }
  },

  validatePassword: (password) => {
    if (password.length < 6) {
      throw new Error('Password must be at least 6 characters long');
    }
  },

  validateMessageContent: (content) => {
    if (content.length === 0) {
      throw new Error('Message content cannot be empty');
    }
  },

  validateRoleName: (roleName) => {
    if (roleName.length === 0) {
      throw new Error('Role name cannot be empty');
    }
  },

  validateRolePermissions: (permissions) => {
    if (!Array.isArray(permissions) || permissions.length === 0) {
      throw new Error('Role permissions must be a non-empty array');
    }
  }
};

module.exports = validator;