const data = require('./data.json');
const results = data.results;

const totalCost = array => {
  let total = 0;
  array.forEach(bill => total += bill.value_inc_vat);
  return total;
} 

const billIndex = (date) => {
    for (let i =0; i < results.length; i += 1) {
      current = results[i].valid_from;

      if (current === `${date}T03:30:00Z` || current === `${date}T23:30:00Z`) {
        return i;
      }
    }
}

const findBill = date => results[billIndex(date)].value_inc_vat;
