describe('Todo List Test', () => {
    
  beforeEach(() => {
    // Visitar a página de exemplo
    cy.visit('https://example.cypress.io/todo');
      
  })

  it('Deve selecionar todos os iténs como feito e limpar a lista', () => {
         
    cy.get('.todo-list li').find('.toggle').check();
    cy.contains('Completed').click();
    cy.contains('Clear completed').click();

  });

});