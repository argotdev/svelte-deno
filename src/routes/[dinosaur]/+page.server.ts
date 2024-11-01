import type { PageServerLoad } from "./$types";
import dinosaurs from "$lib/data/dinosaurs.json";
import { error } from "@sveltejs/kit";

export const load = (({ params }) => {
  const dinosaur = dinosaurs.find(
    (dino) => dino.name.toLowerCase() === params.dinosaur.toLowerCase()
  );

  if (!dinosaur) {
    throw error(404, {
      message: "Dinosaur not found",
    });
  }

  return {
    dinosaur,
  };
}) satisfies PageServerLoad;
