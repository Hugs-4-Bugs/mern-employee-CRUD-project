// const jwt = require('jsonwebtoken');
// const User = require('../models/User'); // Adjust the path if needed

// const auth = async (req, res, next) => {
//   try {
//     // Ensure the Authorization header is present
//     const token = req.header('Authorization')?.replace('Bearer ', '');
    
//     if (!token) {
//       return res.status(401).send({ error: 'No token provided' });
//     }

//     // Verify the token
//     const decoded = jwt.verify(token, 'a40cy8Ymc2dNtT5whytl6K7iljt1RxmpMVAwuwpatdA='); // Replace 'your_jwt_secret' with your actual secret
//     const user = await User.findById(decoded.id);
    
//     if (!user) {
//       return res.status(401).send({ error: 'Invalid token' });
//     }

//     // Attach user to request object
//     req.user = user;
//     next();
//   } catch (error) {
//     res.status(401).send({ error: 'Authentication failed' });
//   }
// };

// module.exports = auth;






const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Adjust the path if needed

const auth = async (req, res, next) => {
  try {
    // Ensure the Authorization header is present
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Use environment variable for JWT secret
    const user = await User.findById(decoded.id);
    
    if (!user) {
      return res.status(401).json({ error: 'Invalid token' });
    }

    // Attach user to request object
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Authentication failed' });
  }
};

module.exports = auth;
