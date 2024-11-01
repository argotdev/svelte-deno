import type { PageServerLoad } from "./$types";
import dinosaurs from "$lib/data/dinosaurs.json";

export const load = (() => {
  return {
    dinosaurs,
  };
}) satisfies PageServerLoad;
