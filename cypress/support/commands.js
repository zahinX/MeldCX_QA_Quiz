Cypress.Commands.add('is_visible', selector => {
    cy.get(selector).should('be.visible')
})

Cypress.Commands.add('is_hidden', selector => {
    cy.get(selector).should('not.exist')
})

Cypress.Commands.add('type_in_field', (selector, str) => {
    cy.get(selector).type(str)
})

Cypress.Commands.add('clear_field', (selector) => {
    cy.get(selector).clear()
})

Cypress.Commands.add('clear_fields', (selector) => {
    cy.clear_field('input[placeholder*="Enter Username"]')
    cy.clear_field('input[placeholder*="password"]')}
)

Cypress.Commands.add('clickLogin', (username, pass)=>{
    cy.get('.cGmBje').click()
})

Cypress.Commands.add('login', (username, pass)=>{
    cy.is_visible('.hiveTJ') //login form
    cy.is_visible('.cGmBje') //login button
    cy.type_in_field('input[placeholder*="Enter Username"]', username)
    cy.type_in_field('input[placeholder*="password"]', pass)
    cy.clickLogin()
})

Cypress.Commands.add('logout', ()=>{
    cy.get('.fqCnAP').click()
    cy.is_visible('.hiveTJ') //login form
    cy.is_hidden('.fqCnAP') //logout btn
})

Cypress.Commands.add('user_info_check', ()=>{
    cy.is_visible('.cCkHTg')
    cy.is_visible('.sc-bwzfXH > :nth-child(4) > :nth-child(1)')
    cy.is_visible('.sc-bwzfXH > :nth-child(4) > :nth-child(2)')
    cy.is_visible('.sc-bwzfXH > :nth-child(3) > :nth-child(1)')
    cy.is_visible('.sc-bwzfXH > :nth-child(3) > :nth-child(2)')
    cy.is_visible('.sc-bwzfXH > :nth-child(2) > :nth-child(1)')
    cy.is_visible('.sc-bwzfXH > :nth-child(2) > :nth-child(2)')
    cy.is_visible('.sc-bwzfXH > :nth-child(1) > :nth-child(1)')
    cy.is_visible('.sc-bwzfXH > :nth-child(1) > :nth-child(2)')
})