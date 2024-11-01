import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import dinosaurs from "$lib/data/dinosaurs.json";

export const GET = (({ params }) => {
  const dinosaurData = dinosaurs.find(
    (item) => item.name.toLowerCase() === params.dinosaur.toLowerCase()
  );

  if (!dinosaurData) {
    return new Response("No dinosaur found.", { status: 404 });
  }

  return json(dinosaurData);
}) satisfies RequestHandler;
