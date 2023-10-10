Scenario 1: Add products to the shopping cart.
Given user navigates to shopping page'
And an empty shopping cart
And a product, 'Dove Soap', with a unit price of 39.99

When the user adds 5 'Dove Soaps' to the shopping cart

Then the shopping cart should contain 5 'Dove Soaps' each with a unit price of 39.99
And the shopping cart’s total price should equal 199.95
 
Scenario 2: Add additional products of the same type to the shopping cart.
Given user navigates to shopping page'
And an empty shopping cart
And a product, 'Dove Soap', with a unit price of 39.99

When the user adds 5 'Dove Soaps' to the shopping cart
And the user adds  3 'Dove Soaps' to the shopping cart

Then the shopping cart should contain 8 'Dove Soaps' each with a unit price of 39.99
And the shopping cart’s total price should equal 319.92
