class studentRegistrationForm{
    elements ={
        firstNameInput: ()=> cy.get("#firstName"),
        lastNameInput: ()=>cy.get("#lastName"),
        emailInput: ()=>cy.get("#userEmail"),
        phoneNumberInput: ()=>cy.get('#userNumber'),
        dobInput: ()=> cy.get('#dateOfBirthInput'),
        subjectInput: ()=>cy.get('#subjectsInput'),
        choosePicture: ()=>cy.get('input[type=file]'),
        addressInput: ()=>cy.get('#currentAddress'),
        stateInput: ()=>cy.get('#react-select-3-input'),
        cityInput: ()=>cy.get('#react-select-4-input'),
    }
    typefirstName(fm){
        this.elements.firstNameInput().type(fm)
    }
    typelastName(lm){
        this.elements.lastNameInput().type(lm)
    }
    typeEmail(email){
        this.elements.emailInput().type(email)
    }
    typePhoneNumber(num){
        this.elements.phoneNumberInput().type(num)
    }
    typeAddress(add){
        this.elements.addressInput().type(add)
    }
    typeSubject(subject){
        // this.elements.subjectInput.type(subject);
        // this.elements.subjectInput.type('{downarrow}').click();
        cy.get('#subjectsInput').type(subject)
        cy.get('#subjectsInput').type('{downarrow}')
        cy.get('#subjectsInput').type('{enter}')
    }
    typeState(state){
        // this.elements.stateInput.type(state);
        // this.elements.stateInput.type('{downarrow}')
        // this.elements.stateInput.type('{downarrow}');
        cy.get('#react-select-3-input').type(state,{force: true})
        cy.get('#react-select-3-input').type('{downarrow}',{force: true})
        cy.get('#react-select-3-input').type('{enter}',{force: true})
    }
    typeCity(city){
        // this.elements.cityInput.type(city);
        // this.elements.cityInput.type('{downarrow}').click();
        cy.get('#react-select-4-input').type(city,{force: true})
        cy.get('#react-select-4-input').type('{downarrow}',{force: true})
        cy.get('#react-select-4-input').type('{enter}',{force: true})
    }
    checkHobby(val){
        cy.get('[type="checkbox"]').check(val, { force: true }).should('have.value',val)
    }
    checkGender(gender){
        cy.get('[type="radio"]').check(gender, { force: true }).should('have.value',gender)
    }
    uploadFile(filepath){
        // this.elements.choosePicture.selectFile(filepath)
        cy.get('input[type=file]').selectFile(filepath)
    }
    clickSubmit(){
        cy.get('#submit').click({force: true})
    }
    chooseDate(day,month,year){
        
        cy.get('#dateOfBirth-wrapper').click()
        cy.get('.react-datepicker__year-select').select(year)
        cy.get('.react-datepicker__month-select').select((month-1).toString())
        cy.get(`.react-datepicker__day--0${day}`).click()
    }
    checkmodelTitle(){
        cy.get('#example-modal-sizes-title-lg').should('have.text','Thanks for submitting the form')
    }
    checkNameValue(val){
        cy.get('tr:nth-child(1) > td:nth-child(2)').should('have.text',val)
    }
    checkEmailValue(val){
        cy.get('tr:nth-child(2) > td:nth-child(2)').should('have.text',val)
    }
    checkGenderValue(val){
        cy.get('tr:nth-child(3) > td:nth-child(2)').should('have.text',val)
    }
    checkMobileValue(val){
        cy.get('tr:nth-child(4) > td:nth-child(2)').should('have.text',val)
    }
    checkDoBValue(val){
        cy.get('tr:nth-child(5) > td:nth-child(2)').should('include.text',val)
    }
    checkSubjectValue(val){
        cy.get('tr:nth-child(6) > td:nth-child(2)').should('include.text',val)
    }
    checkHobbyValue(val){
        cy.get('tr:nth-child(7) > td:nth-child(2)').should('have.text',val)
    }
    checkPictureValue(val){
        cy.get('tr:nth-child(8) > td:nth-child(2)').should('have.text',val)
    }
    checkAddressValue(val){
        cy.get('tr:nth-child(9) > td:nth-child(2)').should('have.text',val)
    }
    checkStateCityValue(val1,val2){
        cy.get('tr:nth-child(10) > td:nth-child(2)').should('include.text',val1).and('include.text',val2)
    }
}

export default studentRegistrationForm