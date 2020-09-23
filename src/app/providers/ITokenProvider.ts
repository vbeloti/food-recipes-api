export default interface ITokenProvider {
    generateToken(payload: object, secret: string, expiresIn: object): Promise<string>;
    verifyToken(token: string, secret: string): Promise<string | object>;
}
