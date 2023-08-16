// import { PrismaClient } from "@prisma/client"
import { Random } from 'mockjs';
import { create } from '../helper';

// const prisma = new PrismaClient()

export function user() {
    create(20, async (prisma) => {
        await prisma.user.create({
            data: {
                email: Random.email(),
                password: Random.string(),
                avatar: Random.image("300x300"),
                github: Random.url(),
            }
        })
    })
}



