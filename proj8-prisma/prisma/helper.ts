import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function create(count: number = 1, callback: (prisma: PrismaClient) => Promise<void>) {
    for (let index = 0; index < count; index++) {
        await callback(prisma)
    }
}