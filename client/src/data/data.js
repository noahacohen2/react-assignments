const allItems = [
  {
    name: "hamburger",
    price: "80 dollar",
    firstImg:
      "https://www.landwercafe.co.il/wp-content/uploads/2020/01/%D7%94%D7%9E%D7%91%D7%95%D7%A8%D7%92%D7%A8-scaled.jpg",
    secondImg:
      "data:image/jpeg;base64,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",
    description: "A delicious burger",
    shopName: "mcdonalds",
  },
  {
    name: "chips",
    price: "30",
    firstImg:
      "https://www.swan-brand.co.uk/wp-content/uploads/2022/11/c34c7af8698abe2cabd2500f302cbd7c-895x775-c-default.jpg",
    secondImg:
      "data:image/jpeg;base64,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",
    description: "A delicious chips",
    shopName: "mcdonalds",
  },
  {
    name: "salad",
    price: "65",
    firstImg:
      "https://www.acouplecooks.com/wp-content/uploads/2019/05/Chopped-Salad-001_1.jpg",
    secondImg:
      "data:image/jpeg;base64,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",
    description: "very tasty salad",
    shopName: "cafe cafe",
  },
  {
    name: "zero",
    price: "10",
    firstImg:
      "https://meat-night.co.il/wp-content/uploads/FIL_6234680_636939470088175194.jpg",
    secondImg:
      "https://alcohol123.co.il/wp-content/uploads/2020/04/%D7%A7%D7%95%D7%A7%D7%94-%D7%A7%D7%95%D7%9C%D7%94-%D7%96%D7%99%D7%A8%D7%95-%D7%91%D7%A7%D7%91%D7%95%D7%A7.jpg",
    description: "good zero coke",
    shopName: "mcdonalds",
  },
  {
    name: "hamburger",
    price: "80 dollar",
    firstImg:
      "https://www.landwercafe.co.il/wp-content/uploads/2020/01/%D7%94%D7%9E%D7%91%D7%95%D7%A8%D7%92%D7%A8-scaled.jpg",
    secondImg:
      "data:image/jpeg;base64,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",
    description: "A delicious burger",
    shopName: "mcdonalds",
  },
  {
    name: "zero",
    price: "10",
    firstImg:
      "https://meat-night.co.il/wp-content/uploads/FIL_6234680_636939470088175194.jpg",
    secondImg:
      "https://alcohol123.co.il/wp-content/uploads/2020/04/%D7%A7%D7%95%D7%A7%D7%94-%D7%A7%D7%95%D7%9C%D7%94-%D7%96%D7%99%D7%A8%D7%95-%D7%91%D7%A7%D7%91%D7%95%D7%A7.jpg",
    description: "good zero coke",
    shopName: "mcdonalds",
  },
];

module.exports = { allItems };