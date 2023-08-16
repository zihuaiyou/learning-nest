// import { PrismaClient } from "@prisma/client"
import { Random } from 'mockjs';
import { create } from '../helper';

// const prisma = new PrismaClient()

export function category() {
    create(5, async (prisma) => {
        await prisma.category.create({
            data: {
                title: Random.ctitle()
            }
        })
    })
}