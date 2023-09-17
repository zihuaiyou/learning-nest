import { PrismaClient } from '@prisma/client';
import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from 'class-validator';

export function IsConfirmedRule(
  table: string,
  validationOptions?: ValidationOptions,
) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'IsExistRule',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [table],
      options: validationOptions,
      validator: {
        async validate(value: any, args: ValidationArguments) {
          // console.log(value,args);
          // const prisma = new PrismaClient();
          // const res = await prisma.user.findFirst({
          //   where: {
          //     [propertyName]: args.value,
          //   },
          // });
          // return !Boolean(res);
          return Boolean(value === args.object[`${args.property}_confirmed`])
        },
      },
    });
  };
}
