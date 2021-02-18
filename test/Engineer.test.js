const Engineer = require("../lib/Engineer")
describe("Engineer class", () => {
    describe("initialization", () => {
    it ("Create an object with name id and email and Github", () =>{
        const testEngineer = new Engineer ("jarell" , 1 , "jarellb@yahoo.com", "jarellb.io" )
        expect ( testEngineer.name ).toEqual("jarell")
        expect ( testEngineer.id ).toEqual(1)
        expect ( testEngineer.email ).toEqual("jarellb@yahoo.com")
        expect ( testEngineer.github ).toEqual("jarellb.io")
    }) 
    it ( "throw an error for the three arguments if blank" , () => {
        const testEngineer = () => new Engineer ()
        expect ( testEngineer).toThrow (Error ("must provide an entry") )
       } )

    }

    )

}

) 