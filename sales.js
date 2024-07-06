const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.1,
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [100, 200, 400],
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [80, 20, 10, 100, 90, 500],
  },
  {
    name: "Telus",
    province: "SK",
    sales: [500, 100],
  },
];

const calculateSalesTax = function (salesData, taxRates) {
  const salesDataObj = {}
  // loop through salesData
  for (const datum of salesData) {
    // if the company doesn't aleady exist in our new salesDataObj, add it
    if (!salesDataObj[datum.name]) {
      salesDataObj[datum.name] = {
        totalSales: calculateSales(datum.sales),
        totalTaxes: calculateTax(datum.sales, taxRates[datum.province])
      }
    } else {
      // if the company already exists in our object, add to the existing sales and taxes
      salesDataObj[datum.name].totalSales += calculateSales(datum.sales)
      salesDataObj[datum.name].totalTaxes += calculateTax(datum.sales, taxRates[datum.province])
    }
  }
  console.log(salesDataObj)
};

const calculateTax = function (sales, taxRate) {
  let totalSale = 0;
  for (const sale of sales) {
    totalSale += sale;
  }
  return totalSale * taxRate
}

const calculateSales = function(salesArray) {
  let totalSales = 0
    for (const sale of salesArray) {
      totalSales += sale
    }
  return totalSales
}

calculateSalesTax(companySalesData, salesTaxRates)
