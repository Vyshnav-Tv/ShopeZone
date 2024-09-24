import axios from "axios";

const Base_api = "http://fakestoreapi.com";

export const getProduct = async () => {
  try {
    const response = await axios.get(`/api/products`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export async function getProductId(id) {
  const response = await axios.get(`${Base_api}/products/${id}`);
  return response.data;
}

export async function getProductImage(id) {
  const response = await axios.get(`${Base_api}/products/${id}/image`);
  return response.data;
}
