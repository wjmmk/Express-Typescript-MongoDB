import { hash, compare } from 'bcryptjs'
 
const encrypt = async (passwordNormal: string) => {
    try {
        const passwordHash = await hash(passwordNormal, 8)
        return passwordHash;
    } catch (error) {
        console.error(error)
    }
}

const verified = async (passwordNormal: string, passwordEncrypted: string) => {
   try {
       const isCorrect = await compare(passwordNormal, passwordEncrypted)
       return isCorrect;
   } catch (error) {
        console.error(error)
   }
}

export { encrypt, verified }