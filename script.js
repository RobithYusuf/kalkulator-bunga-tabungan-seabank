function calculateInterest() {
  const amountInput = document.getElementById("amount").value;
  const amount = parseFloat(amountInput.replace(/\D/g, ""));
  const interestRate = 0.0375; // 3.75% per tahun

  const dailyInterest = (amount * interestRate) / 365;
  const monthlyInterest = dailyInterest * 30;
  const quarterlyInterest = monthlyInterest * 3;
  const annualInterest = dailyInterest * 365;

  let dailyTax = 0;
  let monthlyTax = 0;
  let quarterlyTax = 0;
  let annualTax = 0;

  if (amount > 7500000) {
    dailyTax = dailyInterest * 0.2;
    monthlyTax = monthlyInterest * 0.2;
    quarterlyTax = quarterlyInterest * 0.2;
    annualTax = annualInterest * 0.2;
  }

  const dailyNetInterest = Math.floor(dailyInterest - dailyTax);
  const monthlyNetInterest = Math.floor(monthlyInterest - monthlyTax);
  const quarterlyNetInterest = Math.floor(quarterlyInterest - quarterlyTax);
  const annualNetInterest = Math.floor(annualInterest - annualTax);

  document.getElementById("dailyInterest").innerHTML = `Rp. ${formatNumber(dailyInterest)}`;
  document.getElementById("monthlyInterest").innerHTML = `Rp. ${formatNumber(monthlyInterest)}`;
  document.getElementById("dailyTax").innerHTML = `Rp. ${formatNumber(dailyTax)}`;
  document.getElementById("monthlyTax").innerHTML = `Rp. ${formatNumber(monthlyTax)}`;
  document.getElementById("dailyNetInterest").innerHTML = `Rp. ${formatNumber(dailyNetInterest)}`;
  document.getElementById("monthlyNetInterest").innerHTML = `Rp. ${formatNumber(monthlyNetInterest)}`;
  document.getElementById("quarterlyInterest").innerHTML = `Rp. ${formatNumber(quarterlyInterest)}`;
  document.getElementById("quarterlyTax").innerHTML = `Rp. ${formatNumber(quarterlyTax)}`;
  document.getElementById("quarterlyNetInterest").innerHTML = `Rp. ${formatNumber(quarterlyNetInterest)}`;
  document.getElementById("annualInterest").innerHTML = `Rp. ${formatNumber(annualInterest)}`;
  document.getElementById("annualTax").innerHTML = `Rp. ${formatNumber(annualTax)}`;
  document.getElementById("annualNetInterest").innerHTML = `Rp. ${formatNumber(annualNetInterest)}`;

  const conclusion = `Jika menabung Rp ${formatNumber(amount)}, di SeaBank, akan mendapatkan keuntungan bersih per harinya Rp ${formatNumber(dailyNetInterest)}`;
  document.getElementById('conclusion').innerHTML = `<p>${conclusion}</p>`;
}

function formatNumber(number) {
  return number.toFixed(0).replace(/\d(?=(\d{3})+$)/g, "$&,");
}

function formatIDR(input) {
  let value = input.value.replace(/\D/g, "");
  let formattedValue = formatNumber(parseFloat(value));
  input.value = formattedValue;
}
