import { ValidationError, ValidationPipe } from "@nestjs/common";

export class Validator extends ValidationPipe {
    protected mapChildrenToValidationErrors(
        error: ValidationError,
        parentPath?: string
    ): ValidationError[] {
        const errors = super.mapChildrenToValidationErrors(error, parentPath)
        errors.map(obj => {
            for (const key in obj.constraints) {
                obj.constraints[key] = obj.property + '-' + obj.constraints[key]
            }
        })
        console.log(errors);
        return errors
    };
}
