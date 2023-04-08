function bonAppetit(bill, k, b) {
  // Calculate the total bill.
  const totalBill = bill.reduce((acc, curr) => acc + curr);

  // Calculate the amount that Anna and Brian should pay each
  const annaShare = (totalBill - bill[k]) / 2;

  // If Anna paid the correct amount, console.log - "Bon Appetit"
  if (annaShare === b) {
    console.log("Bon Appetit");
  } else {
    // Otherwise, console.log - the amount that Brian owes Anna
    console.log(b - annaShare);
  }
}

bonAppetit([2, 4, 6], 2, 6);
