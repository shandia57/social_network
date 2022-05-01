const nameRegx = /^[a-zA-Z-]{2,50}$/;
const birthdayRegx = /^\d{4}([./-])\d{2}\1\d{2}$/;
const emailRegx = /^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const passwordRegx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,20}/i;

/*
    * EXPLICATION REGEX PASSWORD
    * [+a-zA-Z0-9._-]   # chaîne de caractère dont les caractères spéciaux sont autorisés
    * +@                # le prochain caractère doit être @
    * (?=.*\d)          #   must contains one digit from 0-9
    * (?=.*[a-z])       #   must contains one lowercase characters
    * (?=.*[\W])        #   must contains at least one special character
    * {8,20}            #   length at least 8 characters and maximum of 20
*/


function validateName(name) {
    // console.log("name : ", nameRegx.test(name))
    return nameRegx.test(name);
}

function validateBirthday(birthday) {
    // console.log("birthday : ", birthday)
    return birthdayRegx.test(birthday);
}

function validateEmail(email) {
    // console.log("email : ", emailRegx.test(email))
    return emailRegx.test(email);
}

function validatePassword(password) {
    // console.log("password : ", passwordRegx.test(password))
    return passwordRegx.test(password);
}

function validatePasswordConfirm(password, passwordConfirm) {
    // console.log("confirm : ", password === passwordConfirm)
    // console.log("password : ", password)
    // console.log("passwordConfirm : ", passwordConfirm)
    return password === passwordConfirm;
}

export function valideKey(key, data, password) {
    switch (key) {
        case 'email':
            return validateEmail(data);
        case 'firstname':
            return validateName(data);
        case 'lastname':
            return validateName(data);
        case 'birthday':
            return validateBirthday(data);
        case 'password':
            return validatePassword(data);
        case 'passwordConfirm':
            return validatePasswordConfirm(data, password);
        default:
            return false;
    }
}

export function getMessage(key) {
    switch (key) {
        case 'email':
            return `Ce n'est pas un email valide`;
        case 'firstname':
            return `Ce n'est pas un nom valide`;
        case 'lastname':
            return `Ce n'est pas un prénom valide`;
        case 'birthday':
            return `Ce n'est pas une date valide`;
        case 'password':
            return `Ceci n'est pas un mot de passe valide`;
        case 'passwordConfirm':
            return `Vos mots de passe ne correspondent pas`;
        default:
            return '';
    }
}

export function isValideForm(form) {
    const data = new FormData(form);

    for (var pair of data.entries()) {
        const valide = valideKey(pair[0], pair[1], data.get('password'));
        if (!valide) return false;
    }

    return true;
}
