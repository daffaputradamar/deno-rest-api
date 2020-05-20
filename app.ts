import { Application } from "https://deno.land/x/oak/mod.ts";
import itemRoutes from "./api/item/itemRoutes.ts";

const port = 5000;

const app = new Application();

app.use(itemRoutes.routes());
app.use(itemRoutes.allowedMethods());

console.log(`Server running on port ${port}`);
await app.listen({ port });
