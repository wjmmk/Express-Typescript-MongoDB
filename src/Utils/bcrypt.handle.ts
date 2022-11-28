import { hash, compare } from 'bcryptjs'
 
const encrypt = async (passwordNormal: string) => {
    const passwordHash = await hash(passwordNormal, 8)
    return passwordHash;
}

const verified = async (passwordNormal: string, passwordEncrypted: string) => {
    const isCorrect = await compare(passwordNormal, passwordEncrypted)
    return isCorrect;
}

export { encrypt, verified }