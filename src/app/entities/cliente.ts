export interface Cliente {
    name: string
    lastname: string
    phoneNumber: string
    email: string
    password: string
    rol: string /* A: administrador, C: comprador */
    profilePic: string
}