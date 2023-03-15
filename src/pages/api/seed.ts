// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { db, seedDatabase } from "@/database";
import { Fly } from "@/components/models";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (process.env.NODE_ENV === "production") {
    res.status(404).json({ name: "No tiene acceso a esta API" });
  }

  await db.connect();

  await Fly.deleteMany();

  // Falla al insertar los datos
  await Fly.insertMany(seedDatabase.flyBondiTravels);

  await db.disconnect();

  res.status(200).json({ name: "Todo Salio bien" });
}
