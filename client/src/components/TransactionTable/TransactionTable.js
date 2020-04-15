import React from "react";
import styles from "./TransactionTable.module.sass"

const transactions = [
    {
        id: 1,
        operationType: "INCOME",
        sum: 500
    },
    {
        id: 2,
        operationType: "EXPANSE",
        sum: -350
    },
    {
        id: 3,
        operationType: "INCOME",
        sum: 1700
    },
    {
        id: 4,
        operationType: "INCOME",
        sum: 2000
    },
    {
        id: 5,
        operationType: "EXPANSE",
        sum: -750
    },
    {
        id: 6,
        operationType: "EXPANSE",
        sum: -700
    },
    {
        id: 7,
        operationType: "INCOME",
        sum: 1500
    },
];

const TransactionTable = () => {

    const renderTransaction = transactions => {
        return transactions.map(({id, operationType, sum}) => (
            <tr>
                <th>{id}</th>
                <th>{operationType}</th>
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