import express from "express";
import superjson from "superjson";
import { noteRouter } from "../routers/note";
import { router, createContext } from './utils/trpc'
import * as trpcExpress from "@trpc/server/adapters/express";
import cors from "cors";
export const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173",'https://5173-viniciusprates-prtnotes-1n95l0yv2su.ws-us86.gitpod.io/'],
    credentials: true,
  })
);

const appRouter = router({
  note: noteRouter
});

export type AppRouter = typeof appRouter;

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext
  })
);
app.listen(4000, () => {
  console.log(`Listening on port 4000`);
});
