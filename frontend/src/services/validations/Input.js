const nameRegx = /^[a-zA-Z-]{2,50}$/;
const birthdayRegx = /^\d{4}([./-])\d{2}\1\d{2}$/;
const emailRegx = /^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const passwordRegx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,20}/i;

/*
    * EXPLICATION REGEX 
    * [+a-zA-Z0-9._-]   # chaîne de caractère dont les caractères spéciaux sont autorisés
    * +@                # le prochain caractère doit être @
    * (?=.*\d)          #   doit contenir un digit entre 0-9
    * (?=.*[a-z])       #   doit contenir une lettre minuscule
    * (?=.*[\W])        #   doit contenir un caractère spécial à la fin
    * {8,20}            #   doit contenir entre 8 et 20 caractères
    * \S                #   doit contenir un caractère non-blanc
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

function valideTitle(title) {
    return title.trim().length > 0;
}

function valideText(text) {
    return text.trim().length > 0;
}

function valideComment(comment) {
    return comment.trim().length > 0;
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
        case 'title':
            return valideTitle(data);
        case 'text':
            return valideText(data)
        case 'image':
            return true;
        case 'comment':
            return valideComment(data);
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
        case 'title':
            return 'Ce n\'est pas un titre valide';
        case 'text':
            return 'Ce n\'est pas un text valide';
        case 'image':
            return '';
        case 'comment':
            return 'Un commentaire ne doit pas être vide';
        default:
            return 'Cette clé n\'existe pas !';
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

