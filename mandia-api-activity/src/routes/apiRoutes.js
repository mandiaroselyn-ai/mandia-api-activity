const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');
const userController = require('../controllers/userController');
const { protect, authorize } = require('../middleware/authMiddleware');
const authRoutes = require("./authRoutes");

const {
    getAllTransactions,
    createTransaction,
    getTransactionById,
    updateTransaction,
    deleteTransaction

} = transactionController;

router.get('/transactions', getAllTransactions);
router.post('/transactions', createTransaction);
router.get('/transactions/:id', getTransactionById);
router.put('/transactions/:id', updateTransaction);
router.delete('/transactions/:id', deleteTransaction); 
router.post('/users', userController.createUser); 
router.post('/transactions', transactionController.createTransaction);
router.put('/transactions/:id', transactionController.updateTransaction);
router.use("/auth", authRoutes);

 router.post('/', protect, authorize('admin', 'manager'), createTransaction); 

module.exports = router;