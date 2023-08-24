import { PrismaClient } from '@prisma/client';
import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export function IsNotExistRule(table: string, validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: 'IsNotExistRule',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [table],
            options: validationOptions,
            validator: {
                async validate(value: any, args: ValidationArguments) {
                    // console.log(value,args,propertyName);
                    const prisma = new PrismaClient()
                   const res =  await prisma.user.findFirst({
                        where: {
                            [propertyName]: args.value
                        }
                    })
                    return !Boolean(res)
                },
            },
        });
    };
}