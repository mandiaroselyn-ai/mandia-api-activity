const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');




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


module.exports = router;