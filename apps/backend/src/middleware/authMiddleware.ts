import { NextFunction, Request, Response } from "express";
import { jwtVerify } from "jose";
import { encode, decode } from "next-auth/jwt";
import dotenv from 'dotenv';
dotenv.config();

export const AuthMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.cookies["__Secure-next-auth.session-token"] || req.cookies["next-auth.session-token"];
    if (!token) {
      return res.status(401).json({ message: "No token received" });
    }

    const secret = process.env.NEXTAUTH_SECRET;
    if (!secret) throw new Error("NEXTAUTH_SECRET is missing");

    // Decode the token using next-auth's decode function
    const decodedToken = await decode({
      token,
      secret,
    });

    if (!decodedToken) {
      return res.status(401).json({ message: "Invalid token" });
    }
    
    req.user = {
      userId: decodedToken.dbUserId as string,
      role: decodedToken.role as string,
    };
    console.log(req.user)

    next();
  } catch (error) {
    console.error("Token verification failed:", error);
    return res.status(401).json({ message: "Invalid token" });
  }
};
