/*
File: question7.js
Difficulty: Medium
Focus: Chaining array methods, data analysis

Analyze transaction data using chained array methods.

const transactions = [
    { id: 1, type: "income", amount: 5000, category: "salary", date: "2024-01-15" },
    { id: 2, type: "expense", amount: 200, category: "groceries", date: "2024-01-16" },
    { id: 3, type: "expense", amount: 1500, category: "rent", date: "2024-01-17" },
    { id: 4, type: "income", amount: 500, category: "freelance", date: "2024-01-18" },
    { id: 5, type: "expense", amount: 50, category: "transportation", date: "2024-01-19" },
    { id: 6, type: "expense", amount: 100, category: "groceries", date: "2024-01-20" },
    { id: 7, type: "income", amount: 1000, category: "bonus", date: "2024-01-21" }
];
Create analyzeTransactions(transactions) that returns:

{
  totalIncome: 6500,
  totalExpenses: 1850,
  netBalance: 4650,
  highestExpense: { id: 3, type: "expense", amount: 1500, category: "rent", date: "2024-01-17" },
  expenseCategories: ["groceries", "rent", "transportation"],
  transactionsAbove500: [/* filtered array *]
}
Requirements:

Use filter(), map(), reduce(), find() where appropriate
Chain methods for cleaner code
Use arrow functions throughout
Bonus: Add getExpensesByCategory() to group expenses by category 
*/

function analyzeTransactions(transaction){
    let totalIncome = transaction.filter(trans=>trans.type == "income").reduce((acc,n)=>acc+n.amount, 0);
    let totalExpense = transaction.filter(trans=>trans.type == "expense").reduce((acc,n)=>acc+n.amount, 0);
    let netBalance = totalIncome-totalExpense;
    let highestExpense = transaction.filter(trans=>trans.type == "expense").reduce((acc, n)=>acc.amount<n.amount?n:acc)
    let expensecategories = transaction.reduce((acc,n)=>{
        if(n.type === "expense" && !acc.find(trans=>trans === n.category)){
            acc.push(n.category);
        }
        return acc
    }, [])
    let transactionabove500 = transaction.filter(trans=>trans.amount>500);

    return {
        "totalIncome": totalIncome,
        "totalExpenses": totalExpense,
        "netBalance": netBalance,
        "highestExpense": highestExpense,
        "expenseCategories": expensecategories,
        "transactionsAbove500": transactionabove500
    }   
}

const transactions = [
    { id: 1, type: "income", amount: 5000, category: "salary", date: "2024-01-15" },
    { id: 2, type: "expense", amount: 200, category: "groceries", date: "2024-01-16" },
    { id: 3, type: "expense", amount: 1500, category: "rent", date: "2024-01-17" },
    { id: 4, type: "income", amount: 500, category: "freelance", date: "2024-01-18" },
    { id: 5, type: "expense", amount: 50, category: "transportation", date: "2024-01-19" },
    { id: 6, type: "expense", amount: 100, category: "groceries", date: "2024-01-20" },
    { id: 7, type: "income", amount: 1000, category: "bonus", date: "2024-01-21" }
];

console.log(analyzeTransactions(transactions));


