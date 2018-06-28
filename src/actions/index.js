export const USER_SELECTED = 'USER_SELECTED';
export function selectUser(user) {
    console.log('selectUser', user);
    return {
        type : USER_SELECTED,
        payload : user
    }
}