// 
//  Setters
// 
export function setUserId(userId) {
    localStorage.setItem('userId', userId);
}
// 
//  Getters
// 

export function getUserId() {
    return localStorage.getItem('userId');
}

// 
// Remove
// 
export function removeUserId() {
    localStorage.removeItem('userId');
}

