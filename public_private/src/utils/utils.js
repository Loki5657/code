import * as Constants from '../Shared/constant';

export function isEmailValid(email) {
    let emailRegex = Constants.EMAIL_REGEX;
    if (!email || !emailRegex.test(email)) {
        return false;
    }
    return true;
}