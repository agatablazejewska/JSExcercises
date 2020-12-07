import moment from 'moment';
import { CommonValidator } from "../../Common/CommonValidator";
import { DateOfBirth } from "../Utilities";

export abstract class UserPropertiesValidator {
    static validateNameSurname(name: string, surname: string): void {
        try {
            CommonValidator.validateEmptyString(name); 
            CommonValidator.validateEmptyString(surname);
        }
        catch {
            console.error("Name and surname must have a value and can not consist of white spaces");
        }
    }

    static validateEmail(email: string): void {
        CommonValidator.validateEmptyString(email);
        CommonValidator.validateEmail(email);
    }

    static validatePassword(password: string): void {
        CommonValidator.validatePassword(password);
    }

    static validateAndFormatDateOfBirth(date: DateOfBirth, dateCurrentFormat: string, dateExpectedFormat: string): string {
        if(typeof date === "string") {
            CommonValidator.validateEmptyString(date);
        }   
        CommonValidator.validateEmptyString(dateCurrentFormat);

        const momentDate = moment(date, dateCurrentFormat, true);
        if(UserPropertiesValidator._isDateInvalid(momentDate)) {
            throw new Error("Provided date is not valid");
        }

        let formattedDate = momentDate.format(dateExpectedFormat);

        return formattedDate;
    }

    private static _isDateInvalid(momentDate: moment.Moment) {
        return !momentDate.isValid() || momentDate.year() <= 1900 || momentDate.year() > moment().year();
    }
}