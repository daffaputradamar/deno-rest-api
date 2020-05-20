import { v4 } from "https://deno.land/std/uuid/mod.ts";

export const createId = () => v4.generate();
