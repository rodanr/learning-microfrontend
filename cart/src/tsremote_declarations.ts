declare module "home/Header";
declare module "home/Footer";

declare module "home/products" {
  export function getProductById(id: number): Promise<any>;

  export const currency: Intl.NumberFormat;
}
