// import { db } from "@/database";
// import Product from "../models/Product";
// import { ISeedProduct } from "@/interfaces";

// export const getProductBySlug = async (
//   slug: string
// ): Promise<ISeedProduct | null> => {
//   await db.connect();

//   const product = await Product.findOne({ slug: slug });

//   await db.disconnect();

//   if (!product) {
//     return null;
//   }

//   return product;
// };

// interface ProductSlug {
//   slug: string;
// }

// export const getAllProductsSlugs = async (): Promise<ProductSlug[]> => {
//   await db.connect();

//   const slugs = await Product.find().select("slug -_id").lean();

//   await db.disconnect();

//   return slugs;
// };

// export const getProductsByTerm = async (
//   term: string
// ): Promise<ISeedProduct[]> => {
//   term = term.toString().toLowerCase();

//   await db.connect();
//   const products = await Product.find({
//     $or: [
//       { title: { $regex: term, $options: "i" } },
//       { description: { $regex: term, $options: "i" } },
//     ],
//   })
//     .select("title images price inStock slug -_id")
//     .lean();

//   await db.disconnect();

//   return products;
// };

// export const getAllProducts = async (): Promise<ISeedProduct[]> => {
//   await db.connect();

//   const products = await Product.find().select("-_id").lean();
//   await db.disconnect();

//   return products;
// };
