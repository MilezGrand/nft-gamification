import jwtDecode from "jwt-decode"

export function parseAccess(access) {
    var result = jwtDecode(access);

    var user = {
        login: result.Login,
        firstname: result.Firstname,
        lastname: result.Lastname,        
        publicKey: result.PublicKey,
        privateKey: result.PrivateKey,
        role: result.Role,
    };

    return user
}