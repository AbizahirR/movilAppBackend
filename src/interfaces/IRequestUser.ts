import { Request } from 'express'
import { JwtPayload } from 'jsonwebtoken'

export interface IRequestUser extends Request {
    user?: string | JwtPayload
}