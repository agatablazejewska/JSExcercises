import { CommonValidator } from "../../Common/CommonValidator";

export abstract class UserPropertiesValidator {
    static validateNameSurname(name: string, surname: string) {
        try {
            CommonValidator.validateEmptyString(name); 
            CommonValidator.validateEmptyString(surname);
        }
        catch {
            console.error("Name and surname must have a value and can not constist of white spaces");
        }
    }

    static validateEmail(email: string) {
        CommonValidator.validateEmail(email);
    }
}