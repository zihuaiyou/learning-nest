import { Random } from 'mockjs';
import { create } from '../helper';


export function article() {
    create(10, async (prisma) => {
      await prisma.article.create({
            data: {
                content: Random.cparagraph(10, 50),
                title: Random.ctitle(),
                categoryId: 5,
                thumb: Random.image("500x500"),
            }
        })
    })
}