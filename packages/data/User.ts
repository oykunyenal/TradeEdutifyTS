class User{
    private UserID: number;
    private Username: string;

    constructor(userID: number, username : string){
        this.UserID = userID;
        this.Username = username;
    }

    get userID() : number {
        return this.UserID;
    }

    set userID(value: number){
        this.UserID = value;
    }

    get username() : string {
        return this.username;
    }

    set username(value: string){
        this.username = value;
    }
}


export default User;