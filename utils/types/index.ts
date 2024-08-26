import React from "react";
import { LucideProps } from "lucide-react";
export interface Product {
  product_id: number;
  product_group: string;
  product_category: string;
  product_type: string;
  product: string;
  product_description: string;
  unit_of_measure: string;
  current_wholesale_price: number;
  current_retail_price: string;
  tax_exempt_yn: string;
  promo_yn: string;
  new_product_yn: string;
  imgUrl: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
}

export interface Testimony {
  name: string;
  star: number;
  comment: string;
  imgUrl: string;
}

export interface LinkInterface {
  path: string;
  Icon: React.FC<LucideProps>;
  label: string;
  isActive: boolean;
}


export interface AboutInterface {
  title: string;
  description: string;
  imgUrl: string;
}
