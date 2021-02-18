// const employee = require("process")
const Employee = require("../lib/Employee")
describe("Employee class", () => {
    describe("initialization", () => {
    it ("Create an object with name id and email", () =>{
        const testEmployee = new Employee ("jarell" , 1 , "jarellb@yahoo.com" )
        expect ( testEmployee.name ).toEqual("jarell")
        expect ( testEmployee.id ).toEqual(1)
        expect ( testEmployee.email ).toEqual("jarellb@yahoo.com")
    }) 
    it ( "throw an error for the three arguments if blank" , () => {
        const testEmployee = () => new Employee ()
        expect ( testEmployee).toThrow (Error ("must provide an entry") )
       } )

    }

    )

}

) 
