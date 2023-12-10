class Share {
    private _ShareID : number;
    private _Symbol : string;
    private _Rate : number;
    private _LastUpdateDate : Date;

    constructor(ShareID: number, Symbol: string, Rate: number, LastUpdateDate: Date) {
        this._ShareID = ShareID;
        this._Symbol = Symbol;
        this._Rate = Rate;
        this._LastUpdateDate = LastUpdateDate;
    }

    
    public get ShareID() : number {
        return this._ShareID;
    }
    public set ShareID(value : number) {
        this._ShareID = value;
    }

    public get Symbol() : string {
        return this._Symbol;
    }
    public set Symbol(value : string) {
        this._Symbol = value;
    }

    public get Rate() : number {
        return this._Rate;
    }
    public set Rate(value : number) {
        this._Rate = value;
    }

    public get LastUpdateDate() : Date {
        return this._LastUpdateDate;
    }
    public set LastUpdateDate(value : Date) {
        this._LastUpdateDate = value;
    }

    
}