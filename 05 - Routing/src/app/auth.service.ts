export class AuthService {
    private loggedIn = false;
    
    // tslint:disable-next-line: typedef
    isAuthenticated() {
        const promise = new Promise(
        (resolve, reject) => {
            setTimeout(() => {
            resolve(this.loggedIn);
            }, 800);
        }
        );
        return promise;
    }
    
    // tslint:disable-next-line: typedef
    login() {
        this.loggedIn = true;
    }
    
    // tslint:disable-next-line: typedef
    logout() {
        this.loggedIn = false;
    }
}