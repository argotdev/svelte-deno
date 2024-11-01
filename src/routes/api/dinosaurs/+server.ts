import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import dinosaurs from "$lib/data/dinosaurs.json";

export const GET: RequestHandler = async () => {
  return json(dinosaurs);
};
