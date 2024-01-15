import { Auth } from "../Interfaces/auth.interface"
import { User } from "../Interfaces/user.interface"
import UserModel from "../Models/User.model"
import { encrypt, verified } from "../Utils/bcrypt.handle"
import { generateToken } from "../Utils/jwt.handle"


const registerNewUser = async ({email, password, name, age, ocupacion, phone, rol, description}: User) => {

    const checkIs = await UserModel.findOne({ email })
    if(checkIs) return 'USER_EXISTS'

    const passwordHash = await encrypt(password)
    const registerNewUser = await UserModel.create({ 
        email, 
        password: passwordHash,
        name,
        age,
        ocupacion,
        phone,
        rol, 
        description
     })

    return registerNewUser;
}

const loginUser = async ({ email, password }: Auth) => {
    const checkIs = await UserModel.findOne({ email })
    if (!checkIs) return 'INVALID_INFORMATION'

    // Obtenemos el password Encriptado
    const passwordHash = checkIs.password;

    const isCorrect = await verified(password, passwordHash)
    if (!isCorrect) return 'PASSWORD_INCORRECT'

    const token = await generateToken(checkIs.email);
    const data = { token, user: checkIs }

    return data;
}

export { registerNewUser, loginUser }