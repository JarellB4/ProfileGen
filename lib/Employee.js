class Employee {
    constructor(name, id, email,) {
        this.name = name, this.id = id, this.email = email
        if (this.name === undefined || this.email === undefined || this.id === undefined) {
            throw new Error  ("must provide an entry")
        }
    }
    getName() {
     return this.name   
    }

    getId() {
       return this.id 
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return "employee"
    }




}

module.exports = Employee