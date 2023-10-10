
Given('the url to the shopping page{string}',async function(url){
  page.locator.goto(url)
})

And(‘the shopping page shows the product dove',async function(url){
  expect(page.getByLabel(‘Dove’)).toHaveTitle(/.*prodcut page/);

})

Then('the product to shopping cart and verify in the cart of the same product dove NS ‘THE UNIT PRICE,async function(url){
	let  cartItems = page.getByLabel(‘get Cart item’).getbyList(‘items’)
	let  cartItemsPrice = page.getByLabel(‘get Cart item’).getByList(‘items’).getByLabel(‘Price’)

  expect(cartItems.find(item=>{item===Dove})).toBeTruthy()
  expect(cartItems.find(itemPrice=>{item===33.33})).toBeTruthy()
})

And(‘add another Dove product to the cart',async function(url){
Page.getByLabel(‘add to the cart’).click()


})

Then(‘verify the product in the cart and its unit price changes to the units added’,async function(url){

	let  cartItems = page.getByLabel(‘get Cart item’).getbyList(‘items’)
	let  cartItemsPrice = page.getByLabel(‘get Cart item’).getByList(‘items’).getByLabel(‘Price’)

  expect(cartItems.find(item=>{item===Dove})).toBeTruthy()
  expect(cartItems.find(itemPrice=>{item===66.66})).toBeTruthy()

})


Then(‘remove a product from the cart and verify the price',async function(url){
Page.getByLabel(‘remove to the cart’).click()

  let  cartItems = page.getByLabel(‘get Cart item’).getbyList(‘items’)
	let  cartItemsPrice = page.getByLabel(‘get Cart item’).getByList(‘items’).getByLabel(‘Price’)

  expect(cartItems.find(item=>{item===Dove})).toBeTruthy()
  expect(cartItems.find(itemPrice=>{item===33.33})).toBeTruthy()

})