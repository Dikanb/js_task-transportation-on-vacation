/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const cost = 40;
  const discount = 20;
  const bigDiscount = 50;

  if (days < 3) {
    return days * cost;
  } else if (days < 7) {
    return days * cost - discount;
  } else {
    return days * cost - bigDiscount;
  }
}

module.exports = calculateRentalCost;
