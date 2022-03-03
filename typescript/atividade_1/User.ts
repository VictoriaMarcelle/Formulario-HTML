class User implements UserProps {
    firstName: string;
    lastName: string;
    username: string;
    email: string; 
    password: string; 
    cpf: number; 
    contact: number;
    isAdmin: boolean;


    getFirstName (){
        return this.firstName;
    }
    setFirstName (newFirstName: string){
        this.firstName = newFirstName;
    }


    getLastName (){
        return this.lastName;
    }
    setLastName (newLastName: string){
        this.lastName = newLastName;
    }


    getUsername (){
        return this.username;
    }
    setUsername (newUsername: string){
        this.username = newUsername;
    }


    getEmail (){
        return this.email;
    }
    setEmail (newEmail: string){
        this.email = newEmail;
    }


    getPassword (){
        return this.password;
    }
    setPassword (newPassword: string){
        this.password = newPassword;
    }


    getCpf (){
        return this.cpf;
    }
    setCpf (newCpf: number){
        this.cpf = newCpf;
    }


    getContact (){
        return this.contact;
    }
    setContact (newContact: number){
        this.contact = newContact;
    }

    
    getIsAdmin (){
        return this.isAdmin;
    }
    setIsAdmin (newIsAdmin: boolean){
        this.isAdmin = newIsAdmin;
    }
} 