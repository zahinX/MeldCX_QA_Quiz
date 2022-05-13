/// <reference types="Cypress" />

describe('Login & User Info', ()=>{
    before(()=>{
        cy.visit('http://localhost:8080')
    })

    it('valid login- 1', ()=> {
        cy.fixture('data').then((data) => {
            cy.login(data.loginUsername1, data.pass1)
            cy.is_visible('.kalrMh') //user_info
            cy.is_visible('.fqCnAP') //logout btn
        })
    })

    it('user info- 1', ()=>{
        cy.user_info_check()
    })

    it('logout- 1', ()=>{
        cy.logout()
    })

    it('valid login- 2', ()=> {
        cy.fixture('data').then((data) => {
            cy.login(data.loginUsername2, data.pass2)
            cy.is_visible('.kalrMh') //user_info
            cy.is_visible('.fqCnAP') //logout btn
        })
    })

    it('user info- 2', ()=>{
        cy.user_info_check()
    })

    it('logout- 2', ()=>{
        cy.logout()
    })

    it('invalid login- 1', ()=> {
        cy.fixture('data').then((data) => {
            cy.login(data.randUsername, data.pass2)
            cy.is_hidden('.fqCnAP') //logout btn
            cy.uncaught_exception()
            cy.clear_fields()
        })
    })

    it('invalid login- 2', ()=> {
        cy.fixture('data').then((data) => {
            cy.login(data.loginUsername2, data.randPass)
            cy.is_hidden('.fqCnAP') //logout btn
            cy.uncaught_exception()
            cy.clear_fields()
        })
    })

    it('invalid login- 3', ()=> {
        cy.fixture('data').then((data) => {
            cy.login(data.randUsername, data.randPass)
            cy.is_hidden('.fqCnAP') //logout btn
            cy.uncaught_exception()
            cy.clear_fields()
        })
    })

    it('invalid login- 4', ()=> {
        cy.fixture('data').then((data) => {
            cy.clickLogin()
            cy.is_hidden('.fqCnAP') //logout btn
            cy.uncaught_exception()
        })
    })

    it('invalid login- 5', ()=> {
        cy.fixture('data').then((data) => {
            cy.type_in_field('input[placeholder*="Enter Username"]', data.loginUsername1)
            cy.clickLogin()
            cy.is_hidden('.fqCnAP') //logout btn
            cy.uncaught_exception()
            cy.clear_fields()
        })
    })

    it('invalid login- 6', ()=> {
        cy.fixture('data').then((data) => {
            cy.type_in_field('input[placeholder*="password"]', data.pass1)
            cy.clickLogin()
            cy.is_hidden('.fqCnAP') //logout btn
            cy.uncaught_exception()
        })
    })
})