export abstract class CommonValidator {
    static validateEmail(email : string) : void {
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i;
        if(!emailRegex.test(email)) {
            throw new Error("Provided value is not a valid e-mail");
        };
    }

    static validatePassword(password: string) {
        const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*[^\w\d\s])(?!.* ).{8,}$/;
        if(!passwordRegex.test(password)) {
            throw new Error(`Provided value is not a valid password. In order to be valid it has to contain:
            at least 8 characters,
            1 uppercase letter,
            1 number,
            1 special character.`);
        };
    }

    static validateEmptyString(text: string) {
        if(text.trim().length === 0) {
            throw new Error("Provided text is empty or consists of white spaces");
        }
    }

    static validateStringProperties<T>(obj: T) {
        for(const value in obj) {
            if(typeof value === "string") {
                this.validateEmptyString(value);
            }
        }
    }
}