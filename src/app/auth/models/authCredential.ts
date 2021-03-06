export class AuthCredential {
   constructor(private username: String, private password: String){}
   
   public setUsername(username: String) : void{
        this.username = username;
   }

   public getUsername() : String{
       return this.username;
   }

   public setPassword(password : String) : void{
       this.password = password;
   }

   public getPassword() : String{
       return this.password;
   }
//    public toJson() : JSON{
//        return ;
//    }
}
