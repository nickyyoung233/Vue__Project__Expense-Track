export function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "CNY",
  }).format(value);
}

//Intl

//Intl.NumberFormat
