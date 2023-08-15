import { PrismaClient } from "@prisma/client"
import {Random} from 'mockjs';

const prisam = new PrismaClient()

async function run() {
    await prisam.user.create({
        data: {
            email: Random.email(),
            password: Random.string(),
            avatar:Random.image("300x300"),
            github:Random.url(),
        }
    })
}
run()
