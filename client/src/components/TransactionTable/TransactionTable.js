import React from "react";
import styles from "./TransactionTable.module.sass"

const transactions = [
    {
        id: 1,
        isIncome: true,
        sum: "500"
    },
    {
        id: 2,
        isIncome: false,
        sum: "- 350"
    },
    {
        id: 3,
        isIncome: true,
        sum: "1700"
    },
    {
        id: 4,
        isIncome: true,
        sum: "2000"
    },
    {
        id: 5,
        isIncome: false,
        sum: "- 750"
    },
    {
        id: 6,
        isIncome: false,
        sum: "- 700"
    },
    {
        id: 7,
        isIncome: true,
        sum: "1500"
    },
];

const TransactionTable = () => {

    const renderTransaction = transactions => {
        return transactions.map(({id, isIncome, sum}) => (
            <tr>
                <th>{id}</th>
                <th>{isIncome ? "Income" : "Expanse"}</th>
                <th>{sum}</th>
            </tr>
        ))
    };

    return(
        <table className={styles.table}>
            <tr className={styles.tableHeader}>
                <th>ID</th>
                <th>INCOME/EXPANSE</th>
                <th>SUM</th>
            </tr>
            {
                renderTransaction(transactions)
            }
        </table>
    )
};

export default TransactionTable;