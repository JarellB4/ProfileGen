const Manager = require("../lib/Manager")
describe("Manager class", () => {
    describe("initialization", () => {
    it ("Create an object with name id and email and office number", () =>{
        const testManager = new Manager ("jarell" , 1 , "jarellb@yahoo.com",7 )
        expect ( testManager.name ).toEqual("jarell")
        expect ( testManager.id ).toEqual(1)
        expect ( testManager.email ).toEqual("jarellb@yahoo.com")
        expect ( testManager.officeNumber ).toEqual(7)
    }) 
    it ( "throw an error for the three arguments if blank" , () => {
        const testManager = () => new Manager ()
        expect ( testManager).toThrow (Error ("must provide an entry") )
       } )

    }

    )

}

) 