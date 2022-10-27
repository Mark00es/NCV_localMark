//Es necesario para las pruebas e2e instanciar esta variable debido que si no lo hacen se redirige a la vista por defecto que es el login
sessionStorage.setItem('Access',"ComplitAcces")

describe('Show fixed assets categories end to end tests', () => {
  it('Shows the list of fixed assets', () => {
    cy.intercept('GET', 'https://ncv-api.herokuapp.com/api/fixedAssets',{
      fixture: 'fixedAssets/listOfAssets.json'
    }).as('listOfAssets',);

    cy.visit('/activos-fijos');

    cy.get('.ListElement')
    .and('contain', 'Herramientas')
    .and('contain', 'Muebles y Enseres')
    .and('contain', 'Maquinaria y Equipos')
    .and('contain', 'Vehículos')
    .should('have.length', 4)
  });
  it('Verifies the fields from a fixed asset category form the list', () => {
    cy.intercept('GET', 'https://ncv-api.herokuapp.com/api/fixedAssets',{
      fixture: 'fixedAssets/listOfAssets.json'
    }).as('listOfAssets',);

    cy.visit('/activos-fijos');

    //cy.get('p')
    //.and('contain', 'Programa')  
    //.and('contain', 'SDE')
    cy.get('.ListElement')
    .and('contain', 'Herramientas')  
    .and('contain', 'Muebles y Enseres')
  });
});
