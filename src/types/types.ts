import { Response, Request, NextFunction } from "express";




export type CatchAsyncController = (
    req: Request,
    res: Response,
    next: NextFunction
) => Promise<void | Response<any, Record<string, any>>>;





export type JWTPayload = {
    userData: {
        _id: string,
        email: string,
    }
}



