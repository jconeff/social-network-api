const router = require('express').Router();

const userRoutes = require ('./user-routes');
const thoughtRoutes = require('./thoughts-routes');

router.use('/api/users', userRoutes);
router.use('/api/thougts', thoughtRoutes);

module.exports = router;