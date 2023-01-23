/**
 * Q1: Price Check
 * @param {string[]} products
 * @param {number[]} productPrices
 * @param {string[]} productsSold
 * @param {number[]} soldPrice
 * @returns {number}
 */

function priceCheck(products, productPrices, productsSold, soldPrice) {
  const productToPriceMap = new Map();
  let errorCount = 0;
  for (let i = 0; i < products.length; i++) {
    productToPriceMap.set(products[i], productPrices[i]);
  }
  for (let i = 0; i < productsSold.length; i++) {
    let soldAt = soldPrice[i];
    let realPrice = productToPriceMap.get(productsSold[i]);
    if (soldAt !== realPrice) {
      errorCount++;
    }
  }
  return errorCount;
}
