export class Transaction {

    constructor(
        public title: string, 
        public account_number: string, 
        public date: string,
        public amount: number) {
    };
}