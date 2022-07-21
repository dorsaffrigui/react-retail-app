import { Injectable } from '@nestjs/common';
import { Transaction } from './transactions.module';


@Injectable()
export class TransactionsService {
    private transactions: Transaction[] = [];

    addTransaction(title: string, account_number: string, date: string, amount: number) {
        const newTransaction = new Transaction(title, account_number, date, amount);
        this.transactions.push(newTransaction);

        this.transactions = this.transactions.sort(
            (objA, objB) => objA.date.getTime() - objB.date.getTime()
          );
    
        return this.transactions;
    }

    getTransactions() {
        const groupedBy = this.transactions.reduce((group, transaction) => {
            const { date } = transaction;
            group[date] = group[date] ?? [];
            group[date].push(transaction);
            return group;
        }, {});

        return groupedBy;
    }

    filter() {
        
    }

} 


