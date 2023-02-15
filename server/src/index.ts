import express from "express";
import { noteRouter } from "../routers/note";
import { router, createContext } from './utils/trpc'
import * as trpcExpress from "@trpc/server/adapters/express";
import cors from "cors";
export const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
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
