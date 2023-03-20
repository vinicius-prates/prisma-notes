import { initTRPC, TRPCError } from "@trpc/server";
import superjson from "superjson"
import { z } from "zod"
import { prisma } from "../src/utils/prisma";
const t = initTRPC.create({
    transformer: superjson,
    errorFormatter({ shape }){
        return shape;
    }
})
export const noteRouter = t.router({
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

    singleNote: t.procedure.input(z.object({
        id: z.string(),
    })).query(async ({input}) => {
        try {
            const note = await prisma.note.findFirst(
                {
                where: {
                    id: input.id 
                }    
                }
            )
            return note
        } catch (error) {
            throw new TRPCError({
                code: "INTERNAL_SERVER_ERROR",
                cause: error, 
                message: "Could not get the note."
            })
        }
    })
    ,
    createNote: t.procedure.input(z.object({
        title: z.string(),
        note: z.string().max(500),
    }))
    .mutation(async ({ input }) => {
        try {
            
            const newNote = await prisma.note.create({
                data: {
                    title: input.title,
                    note: input.note
                }
            })
            return { newNote };
        } catch (error) {
            throw new TRPCError({
                code: "BAD_REQUEST",
                cause: error,
                message: "Couldn't create new note."
            })
        }
    })
})