// Import commands.js using ES2015 syntax:
import './commands'

Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes("Cannot read properties of undefined (reading 'password')")) 
    {return false}
    if (err.message.includes("")) 
    {return false}
})