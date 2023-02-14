import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../../../server/src/index";
import superjson from "superjson";
// Notice the <AppRouter> generic here.
export const api = createTRPCProxyClient<AppRouter>({
  transformer: superjson,
  links: [
    httpBatchLink({
      url: "https://4000-viniciusprates-prtnotes-1n95l0yv2su.ws-us86.gitpod.io/trpc",
      fetch(url, options) {
        return fetch(url, {
          ...options,
          credentials: "include",
        });
      },
    }),
  ],
});
