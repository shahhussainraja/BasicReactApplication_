import GenericServices from "./GenericServices"

class AuthServices extends GenericServices{
    constructor(){
        super();
    }

    login = (email ,password) => {
        return new Promise ((resolve,reject)=>{
            this.post("/login",{email, password}).then((token)=>{
                localStorage.setItem("token",token)
                resolve(token);
            }).catch((err)=>{
                reject(err);
            })
        })
    };

    register = (data) =>this.post("/signUp",data);

    logOut = ()=>{
        localStorage.clear();
        window.location.reload();
        window.location.href="/login";
    }
    
    isLogged = ()=>{
        return localStorage.getItem("token")? true : false ;
    }

}

let authServices = new AuthServices();
export default authServices;