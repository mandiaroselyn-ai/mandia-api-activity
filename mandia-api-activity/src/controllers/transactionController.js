const transaction = require('../models/transactionModel');

//1. Get all transactions
const getAllTransactions = async (req, res) => {
    try {
        const transactions = await transaction.find();
        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }   
};


//2. Create a new transaction
const createTransaction = async (req, res) => {
    try {           
        const newTransaction = new transaction(req.body);
        
        res.status(201).json(newTransaction);

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//3. GET ONE: Get a single transaction by ID
const getTransactionById = async (req, res) => {
    try {
        const transId = await transaction.findById(req.params.id);
        if (!transId) {
            return res.status(404).json({ message: 'Transaction not found' });
        }
        res.status(200).json(transId);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//4.UPDATE: Change a price or name 
const updateTransaction = async (req, res) => {
    try {
        const transaction = await transaction.findByIdAndUpdate(req.params.id, req.body, {
             new: true 
            });
            if (!transaction) {
                return res.status(404).json({ message: 'Transaction not found' });
            }
            res.status(200).json(transaction);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


//5.DELETE: Remove a transaction by ID
const deleteTransaction = async (req, res) => {
    try {     
        const transaction = await transaction.findByIdAndDelete(req.params.id);
        if (!transaction) {
            return res.status(404).json({ message: 'Transaction not found' });

            res.status(200).json({ message: 'Transaction deleted successfully' });

        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }   
};

module.exports = {
    getAllTransactions,
    createTransaction,  
    getTransactionById,
    updateTransaction,
    deleteTransaction,
};