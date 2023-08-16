import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export function create(count: number = 1, callback: (prisma: PrismaClient) => void) {
    for (let index = 0; index < count; index++) {
        callback(prisma)
    }
}