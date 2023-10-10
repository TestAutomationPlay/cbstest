
Scenario : 'Add products to the shopping cart.'

Given('the url to the shopping page{string}',async function(url){
  page.locator.goto(url)
  expect(page.getByLabel(‘Dove’)).toHaveTitle(/.*prodcut page/);
})

And('the shopping cart is empty',async function(){
  page.getByRole('listitem')).toHaveCount(0)
})

And('And a product, Dove Soap, with a unit price of {float}',async function(unitPrice){
  // Here i assert that the page has Dove Soap as an item and itis unit price that i passed from feature file
  //  as $39.99
  expect(page.getByRole('listitem')).toHaveText(['Dove Soap'])
  expect(page.getByLabel('Dove Soap')).getByList('price').toHaveText(unitPrice)
})

When('the user adds {int} {string} to the shopping cart',async function(itemCount,itemName){
  // Here i call a reusable method to add an item and no of times that i passed from the 
  // feature file itemName is - Dove Soaps and itemCount 5 and assert that the operation is successfull byreceiving true
  expect(addMultipleItem(itemName,itemCount)).toBeTruthy()

})


Then('the shopping cart should contain {int} {String} each with a unit price of {float}',async function(itemCount,itemName,unitPrice){

  // the step dfinition will receive item name, count and the unit prices from the feature file

  // Assert to have item count in the cart as 5
  expect(page.getByRole('listitem'))).toHaveCount(itemCount)

	let  cartItemsPrice = page.getByLabel(‘get Cart item’).getByList(‘items’).getByLabel(‘Prices’)

  // Assertt he item name in the cart to be Dove Soap from the array of items
  expect(cartItemsPrice.find(item=>{item===itemName})).toBeTruthy()

  // Assertt he item unitprice in the cart to be $39.99 from the array of items unit prices
  expect(cartItems.find(itemPrice=>{item===unitPrice})).toBeTruthy()
})

And('the shopping cart’s total price should equal {string}',async function(totalprice){
// this step definition to find the total items prices to  be 199.95

//  Here the variable 'cartItemsPrice ' from the previous step definition could be reused
// Assertt he item name in the cart to be Dove Soap from the array of items
expect(cartItemsPrice.forEach(itemPrice=>{totalItemPrice += itemPrice })).toBeHave(totalprice)

})

// scenatio 2  willl reuse the above step definition by passing differnt value to asssert the cart prices
Scenario 2: 'Add additional products of the same type to the shopping cart.'