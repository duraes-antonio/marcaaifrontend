export enum PasswordSecurityLevel {
    EMPTY,
    VERY_WEAK,
    WEAK,
    GOOD,
    GREAT,
}

export type ValidatePassword = (password: string) => boolean;

abstract class RulePasswordValidation {
    readonly validate: ValidatePassword;
    readonly messageFail: string;
    readonly levelCheck: PasswordSecurityLevel;

    constructor(
        fnValidator: ValidatePassword,
        message: string,
        level: PasswordSecurityLevel,
    ) {
        this.validate = fnValidator;
        this.messageFail = message;
        this.levelCheck = level;
    }

    validatePassword(password: string): boolean {
        return this.validate(password);
    }
}

class EmptyValidation extends RulePasswordValidation {
    constructor() {
        super(
            pass => !!pass,
            'Hum, parece que você ainda não digitou uma senha',
            PasswordSecurityLevel.EMPTY,
        );
    }
}

class MinLengthValidation extends RulePasswordValidation {
    constructor(minLength = 8, level: PasswordSecurityLevel) {
        super(
            pass => !!pass && pass.length >= minLength,
            'Sua senha deve conter pelo menos 8 caracteres',
            level,
        );
    }
}

class CaseLettersValidation extends RulePasswordValidation {
    constructor(level: PasswordSecurityLevel) {
        super(
            pass => !!pass && /(?=.*[a-z])(?=.*[A-Z])/.test(pass),
            'A senha deve conter letras maiúsculas e minúsculas',
            level,
        );
    }
}

class LeastNNumberValidation extends RulePasswordValidation {
    constructor(quantityNumbers = 2, level: PasswordSecurityLevel) {
        const regexNRequired = new Array(quantityNumbers - 1)
            .fill(0)
            .map(() => '.*[0-9]')
            .join();
        const digitTerm = `dígito${quantityNumbers === 1 ? '' : 's'}`;
        super(
            pass =>
                !!pass && new RegExp(`(?=.*[0-9]${regexNRequired})`).test(pass),
            `Sua senha pode ser mais forte se adicionar ${quantityNumbers} ${digitTerm}`,
            level,
        );
    }
}

export class PasswordStrengthPipeline {
    private static readonly validators: RulePasswordValidation[] = [
        new EmptyValidation(),
        new MinLengthValidation(8, PasswordSecurityLevel.VERY_WEAK),
        new CaseLettersValidation(PasswordSecurityLevel.WEAK),
        new LeastNNumberValidation(2, PasswordSecurityLevel.GOOD),
    ];

    static validate(password: string): {
        level: PasswordSecurityLevel;
        message: string;
    } {
        for (const validator of this.validators) {
            if (!validator.validatePassword(password)) {
                return {
                    level: validator.levelCheck,
                    message: validator.messageFail,
                };
            }
        }
        return {
            level: PasswordSecurityLevel.GREAT,
            message: 'Show! Sua senha agora é segura',
        };
    }
}
