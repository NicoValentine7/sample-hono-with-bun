import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => c.text("Hello from Hono on Cloudflare Workers with Bun!"));

export default app;
