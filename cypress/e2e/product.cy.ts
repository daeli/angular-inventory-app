describe('Add Product', () => {
    it('Should add the product to the products table.', () => {
      cy.addProduct({});
      cy.contains('Utah Celery')
    })
  })
  