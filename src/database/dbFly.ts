import { db } from "@/database";
import { FlyBondyTravels, Travels } from "@/components/interface";
import Fly from "../components/models/Fly";

export const getFlyByOriginDestiny = async (): Promise<
  FlyBondyTravels[] | null
> => {
  await db.connect();

  const Flies = await Fly.find()
    .select("data origin destination price availability -_id")
    .lean();

  await db.disconnect();

  if (!Flies) {
    return null;
  }

  return Flies;
};
