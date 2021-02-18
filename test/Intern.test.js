const Intern = require("../lib/Intern")
describe("Intern class", () => {
    describe("initialization", () => {
    it ("Create an object with name id and email and school", () =>{
        const testIntern = new Intern ("jarell" , 1 , "jarellb@yahoo.com", "MSU" )
        expect ( testIntern.name ).toEqual("jarell")
        expect ( testIntern.id ).toEqual(1)
        expect ( testIntern.email ).toEqual("jarellb@yahoo.com")
        expect ( testIntern.school).toEqual("MSU")
    }) 
    it ( "throw an error for the three arguments if blank" , () => {
        const testIntern = () => new Intern ()
        expect ( testIntern).toThrow (Error ("must provide an entry") )
       } )

    }

    )

}

) 