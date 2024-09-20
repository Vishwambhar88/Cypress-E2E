import { registerpage } from "../../Pages/Registerpage"
import Registerdata from '../../fixtures/Registerdata.json'
const registerobj =new registerpage()
describe('Test Automation', () => {

    it('registerflow',() => {
       registerobj.OpenURL()
       registerobj.Enterfirstname(Registerdata.Firstname)
       registerobj.EnterLirstname(Registerdata.Lastname)
       registerobj.EnterEmail(Registerdata.MailID)
       registerobj.EnterTelephone(Registerdata.telephone)
       registerobj.Enterpassword(Registerdata.password)
       registerobj.SelectCheckbox()
       registerobj.ckickoncontinue()
    })

})