import { PrismaClient } from '@prisma/client';
import { hash } from 'argon2';
import { Random } from 'mockjs';

const prisma = new PrismaClient();
async function run() {
  await prisma.user.create({
    data: {
      name: 'zihyou1996',
      password: await hash('19960808'),
    },
  });

  for (let index = 0; index < 50; index++) {
    await prisma.article.create({
      data: {
        title: Random.ctitle(5, 10),
        content: Random.cparagraph(30, 50),
      },
    });
  }
}

run();
