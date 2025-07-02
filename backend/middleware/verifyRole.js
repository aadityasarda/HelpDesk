const jwt = require('jsonwebtoken');
const User = require('../models/user'); 

const verifyRole = (allowedRoles = []) => {
  return async (req, res, next) => {
    try {
      const token = req.header('Authorization')?.replace('Bearer ', '');
      if (!token) return res.status(401).json({ message: 'Access denied. No token provided.' });

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.userId);

      if (!user || !allowedRoles.includes(user.role)) {
        return res.status(403).json({ message: 'Access denied. Insufficient role permissions.' });
      }

      req.user = user; 
      next();
    } catch (error) {
      res.status(400).json({ message: 'Invalid token or authorization error.', error });
    }
  };
};

module.exports = verifyRole;