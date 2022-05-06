// 
//  Setters
// 

export function setUserId(userId) {
    localStorage.setItem('userId', userId);
}

export function setUserFirstname(firstname) {
    localStorage.setItem('firstname', firstname);
}

export function setUserLastname(lastname) {
    localStorage.setItem('lastname', lastname);
}

export function setUserEmail(email) {
    localStorage.setItem('email', email);
}

export function setUserBirthday(birthday) {
    localStorage.setItem('birthday', birthday);
}

export function setProfile(profile) {
    localStorage.setItem('profile', profile);
}

export function setUserJobTitle(jobTitle) {
    localStorage.setItem('jobTitle', jobTitle);
}



// 
//  Getters
// 

export function getUserId() {
    return localStorage.getItem('userId');
}

export function getUserFirstName() {
    return localStorage.getItem('firstname');
}

export function getUserLastName() {
    return localStorage.getItem('lastname');
}

export function getUserEmail() {
    return localStorage.getItem('email');
}

export function getUserBirthday() {
    return localStorage.getItem('birthday');
}

export function getProfile() {
    return localStorage.getItem('profile');
}

export function getUserJobTitle() {
    return localStorage.getItem('jobTitle');
}

