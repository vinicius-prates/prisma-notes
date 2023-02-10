import express from "express"
import superjson from "superjson"
import { initTRPC } from "@trpc/server"
import cors from "cors"
export const app = express();

app.use(cors({
    origin: [
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ],
    credentials: true
  }));
  app.use(express.json());
  

const t = initTRPC.create({
    transformer: superjson,
    errorFormatter({ shape }){
        return shape;
    }
})

export const router = t.router;
export const publicProcedure = t.procedure;

const appRouter = router({

})

export type AppRouter = typeof appRouter;
app.listen(4000, () => {
    console.log(`Listening on port 4000`);
})