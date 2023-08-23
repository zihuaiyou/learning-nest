import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";

@ValidatorConstraint()
export class IsConfirmed implements ValidatorConstraintInterface {
     async validate(value: any, args?: ValidationArguments) {
        // console.log(value);
        // console.log(args);
        
        // return false
        return value === args.object[args.property + "_confirmed"]

    }
    defaultMessage?(validationArguments?: ValidationArguments): string {
        return "比对失败"
    }
    
}