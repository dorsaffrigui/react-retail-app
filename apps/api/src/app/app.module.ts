import { Module } from '@nestjs/common';
import { TransactionsModule } from './transactions/transactions.model';


@Module({
  imports: [TransactionsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
