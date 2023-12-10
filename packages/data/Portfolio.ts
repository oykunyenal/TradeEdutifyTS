class Portfolio {
    
    private _PortfolioID : number;
    public get PortfolioID() : number {
        return this._PortfolioID;
    }
    public set PortfolioID(v : number) {
        this._PortfolioID = v;
    }

    
    private _OperationDate : Date;
    public get OperationDate() : Date {
        return this._OperationDate;
    }
    public set OperationDate(v : Date) {
        this._OperationDate = v;
    }

    
    private _UserID : number;
    public get UserID() : number {
        return this._UserID;
    }
    public set UserID(v : number) {
        this._UserID = v;
    }

    
    private _ShareID : number;
    public get ShareID() : number {
        return this._ShareID;
    }
    public set ShareID(v : number) {
        this._ShareID = v;
    }
        
    constructor(PortfolioID:number, OperationDate : Date, UserID: number, ShareID: number ) {
        this._PortfolioID = PortfolioID;
        this._OperationDate = OperationDate;
        this._ShareID = ShareID;
        this._UserID = UserID;
    }

}