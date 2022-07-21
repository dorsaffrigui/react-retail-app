import { Controller, Post, Body, Get} from "@nestjs/common";
import { TransactionsService } from "./transactions.service";

@Controller('transactions')
export class TransactionsController {

    constructor(private readonly transactionsService: TransactionsService){

    }

    @Post()
    addTransaction(
        @Body('title') transTitle: string, 
        @Body('account_number') transAccountNumber: string, 
        @Body('amount') transAmount: number,
        @Body('date') transDate: string)
        {
        const generatedTransaction = this.transactionsService.addTransaction(
            transTitle, 
            transAccountNumber, 
            transDate,
            transAmount,);

        return { arr: generatedTransaction };

    }

    @Get()
    getTransactions(){
        return this.transactionsService.getTransactions();
    }



}
