export class User {
    public firstName: String;
    public lastName: String;
    public email: String;
    public password: String;
    public street: String;
    public apt: String;
    public city: String;
    public state: String;
    public lucky: String;

    constructor(){
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.password = "";
        this.street = "";
        this.apt = "";
        this.city = "";
        this.state = "Alaska";
        this.lucky = "true";
    }
}
