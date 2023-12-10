import User from "./User";

class Transaction {
    
    private _TransactionID : number;
    private _TradeType : string;
    private _ShareID : number;
    private _UserID : number;
    private _OperationDate : Date;
    

    constructor(TransactionID: number, TradeType: string, ShareID: number, UserID: number, OperationDate : Date) {
        this._TransactionID = TransactionID;
        this._TradeType = TradeType;
        this._ShareID = ShareID;
        this._UserID = UserID;
        this._OperationDate = OperationDate;
    }


    public get TransactionID() : number {
        return this._TransactionID;
    }
    public set TransactionID(value : number) {
        this._TransactionID = value;
    }
    
    public get TradeType() : string {
        return this._TradeType;
    }
    public set TradeType(value : string) {
        this._TradeType = value;
    }

    public get ShareID() : number {
        return this._ShareID;
    }
    public set ShareID(value : number) {
        this._ShareID = value;
    }
    
    public get UserID() : number {
        return this._UserID;
    }
    public set UserID(value : number) {
        this._UserID = value;
    }

    public get OperationDate() : Date {
        return this._OperationDate;
    }
    public set OperationDate(value : Date) {
        this._OperationDate = value;
    }
   
}

export default Transaction;