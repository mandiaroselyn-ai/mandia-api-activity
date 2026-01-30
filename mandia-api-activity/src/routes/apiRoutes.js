const express = require('express');
const router = express.Router();
const data = require('../models/transactionModel');



router.get('/transactions', (req, res) => { 
    const { type, amount, date, description } = req.query;


let filteredTransaction = data
    .filter(
        (transaction) =>
        !type || transaction.type.toLowerCase() === type.toLowerCase(),
    )
    
    .filter(
        (transaction) =>
        !amount || transaction.amount <= parseFloat(amount),
    )
    .filter(
        (transaction) =>
        !date || transaction.date === date,
    )
    .filter(
        (transaction) =>
        !description || transaction.description.toLowerCase().includes(description.toLowerCase()),
    );

    
return filteredTransaction.length === 0
    ? res.status(404).json({
        status: 404, 
        message: 'No transactions found matching the criteria'
    }) 
    : res.status(200).json({ 
        status: 200,
        message: 'Transactions retrieved successfully', 
        data: filteredTransaction
    })
});


router.post('/transactions', (req, res) => {
    const {type, amount, date, description } = req.body || {};

    if (!type || !amount || !date || !description ) {
        return res.status(400).json({
            status: 400,
            message:
            'Type, amount, date, and description are required to create a transaction',
        });
}

const newTransaction = {id: data.length + 1, type, amount, date, description};
data.push(newTransaction);
res.status(201).json({
    status: 201,
    message: 'Transaction created successfully',
    data: newTransaction,  
});
});



router.put('/transactions/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = data.findIndex((d) => d.id === id);
    if (index === -1) {
        return res.status(404).json({
            status: 404,
            message: `Transaction with id ${id} not found.`,
        });
    }

    data [index] = { id, ...req.body };
    res.status(200).json({
        status: 200,
        message: 'Transaction Updated Successfully',
        data: data[index],
    });
});



router.delete('/transactions/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = data.findIndex((d) => d.id === id);

    if (index === -1) {
        return res.status(404).json({
            status: 404,
            message: `Transaction with id ${id} not found.`,
        });
    }

    data.splice(index, 1);
    res.status(203).json({
        status: 203,
        message: 'Transaction Deleted Successfully',
    });
});

module.exports = router;