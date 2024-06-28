// ***********************************************
// This example namespace declaration will help
// with Intellisense and code completion in your
// IDE or Text Editor.
// ***********************************************
// declare namespace Cypress {
//   interface Chainable<Subject = any> {
//     customCommand(param: any): typeof customCommand;
//   }
// }
declare namespace Cypress {
  interface Chainable<Subject = any> {
    addProduct(param: any): typeof addProduct;
  }
}

function addProduct(param: any): void {
    cy.visit('/')
    cy.get('[formControlName="name"]').type('Utah Celery')
    cy.get('[formControlName="description"]').type('Utah celery is an heirloom stem variety that is a favorite for its tall and juicy stalks. Planting by Zones. Zones 9-10. ')
    cy.get('[formControlName="category"]').type('SEEDS')
    cy.get('[formControlName="quantity"]').clear().type('100')
    cy.get('button').click()
}

Cypress.Commands.add('addProduct', addProduct);
//
// function customCommand(param: any): void {
//   console.warn(param);
// }
//
// NOTE: You can use it like so:
// Cypress.Commands.add('customCommand', customCommand);
//
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//



//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
