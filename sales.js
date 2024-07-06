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

  salesData.forEach(datum => {
    const totalSales = calculateTotal(datum.sales);
    const totalTaxes = totalSales * taxRates[datum.province]

    if (!salesDataObj[datum.name]) {
      salesDataObj[datum.name] = {
        totalSales,
        totalTaxes
      }
    } else {
      salesDataObj[datum.name].totalSales += totalSales;
      salesDataObj[datum.name].totalTaxes += totalTaxes;
    }
    
  });

  console.log(salesDataObj)
  return salesDataObj
};

const calculateTotal = function(salesArray) {
  return salesArray.reduce((total, sale) => total + sale, 0)
}

calculateSalesTax(companySalesData, salesTaxRates)
