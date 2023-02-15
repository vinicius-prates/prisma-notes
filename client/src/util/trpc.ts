import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../../../server/src/index";
import superjson from "superjson";
// Notice the <AppRouter> generic here.
export const api = createTRPCProxyClient<AppRouter>({
  transformer: superjson,
  links: [
    httpBatchLink({
      url: "http://localhost:4000/trpc",

    }),
  ],
});
