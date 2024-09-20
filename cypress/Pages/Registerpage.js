const cypress = require("cypress")

export class registerpage{

    weblocators={
 firstname:'#input-firstname',
 Lastname:'#input-lastname',
 Email:'#input-email',
 Telephone:'#input-telephone',
 password:'#input-password',
 passwordConfirm:'#input-confirm',
 policycheckbox:"input[value='1'][name='agree']",
 continuebutton:"input[value='Continue']"

    }
    OpenURL(){
        cy.visit(cypress.env('URL'))
    }

    Enterfirstname(Fname){
        cy.get('this.weblocators.firstname').type(Fname)
    }
    EnterLirstname(Lname){
        cy.get('this.weblocators.Lastname').type(Lname)
    }
    EnterEmail(Mail){
        cy.get('this.weblocators.Email').type(Mail)
    }
    EnterTelephone(tele){
        cy.get('this.weblocators.Telephone').type(tele)
    }
    Enterpassword(pass){
        cy.get('this.weblocators.password').type(pass)
        cy.get('this.weblocators.passwordConfirm').type(pass)

    }
    SelectCheckbox(check){
        cy.get('this.weblocators.policycheckbox').type(check)
    }
    ckickoncontinue(check){
        cy.get('this.weblocators.policycheckbox').type(check)
    }

}