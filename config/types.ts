import { Router } from "https://deno.land/x/oak/mod.ts";

export interface Item {
  id: string;
  name: string;
  description: string;
  price: number;
}
