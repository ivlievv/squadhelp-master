import React from "react";
import style from "./TransactionPage.module.sass"
import Header from "../../components/Header/Header";
import TransactionTable from "../../components/TransactionTable/TransactionTable";

const TransactionPage = () => {
    return(
        <div>
            <Header/>
            <div className={style.table}>
                <TransactionTable/>
            </div>
        </div>
    )
};

export default TransactionPage;