import { initTRPC, TRPCError } from "@trpc/server";
import { router } from "../src/index";
import superjson from "superjson"
import { z } from "zod"
import { prisma } from "../src/utils/prisma";
const t = initTRPC.create({
    transformer: superjson,
    errorFormatter({ shape }){
        return shape;
    }
})
export const noteRouter = router({
    allNotes: t.procedure.query(async () => {
        try {
            const allNotes = await prisma.note.findMany();
            return { allNotes };
        } catch (error) {
            throw new TRPCError({
                code:"INTERNAL_SERVER_ERROR",
                cause: error,
                message: "Couldn't get all notes."
            })
        }
    }),

    createNote: t.procedure.input(z.object({
        title: z.string(),
        note: z.string().max(500),
    }))
    .mutation(async ({ input }) => {
        await prisma.note.create({
            data: {
                title: input.title,
                note: input.note
            }
        })
    })
})