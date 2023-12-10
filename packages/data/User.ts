class User{
    private _UserID: number;
    private _Username: string;

    constructor(UserID: number, Username : string){
        this._UserID = UserID;
        this._Username = Username;
    }

    get UserID() : number {
        return this._UserID;
    }

    set UserID(value: number){
        this._UserID = value;
    }

    get Username() : string {
        return this._Username;
    }

    set Username(value: string){
        this._Username = value;
    }
}


export default User;