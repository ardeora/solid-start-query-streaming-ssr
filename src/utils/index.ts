export const API_URL =
  "https://streaming-data-server-production.up.railway.app";

// export const API_URL = "http://localhost:3006";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: {
    discount: number;
    value: number;
    expires_at: Date;
  };
  sizes: Array<string>;
  rating: number;
  recommended: Array<number>;
  images: Array<string>;
}

export interface RecommendedPick {
  price: {
    discount: number;
    value: number;
    expires_at: Date;
  };
  _id: string;
  id: number;
  name: string;
  rating: number;
  images: Array<string>;
  __v: number;
  delivery_date: Date;
}
