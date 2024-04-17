import axios from "axios";

export default async function barcodelookup(barcode) {
  const apiKey = "jrm7vklzqzqwepr3ui7w2ysf8oqsw0";
  const url = `https://api.barcodelookup.com/v3/products?barcode=${barcode}&key=${apiKey}`;

  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json(); // Parse JSON data from the response
      } else {
        throw new Error("Failed to fetch data"); // Handle HTTP errors
      }
    })
    .then((data) => {
      console.log("Product Data:", data.products[0]); // Display or process the product data
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
