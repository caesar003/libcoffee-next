import { atom } from "jotai";

interface ProductInterface {
  id: number;
  name: string;
  price: number;
  isInStock: boolean;
}

interface UserInterface {
  email: string;
  name: string;
  id: number;
  location: number;
}

const userDetail: UserInterface | {} = {};
const products: ProductInterface[] = [];

export const globalState = atom({ userDetail, products });
