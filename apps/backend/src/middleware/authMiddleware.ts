import { NextFunction, Request, Response } from "express";
import { jwtDecrypt } from "jose";
import dotenv from 'dotenv';
dotenv.config();

export const AuthMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies["next-auth.session-token"];

  if (!token) {
    return res.status(401).json({
      message: "No token received"
    });
  }

  console.log("Token:", token);

  try {
    // Ensure the secret is set and valid.
    const secretStr = process.env.NEXTAUTH_SECRET || "myjwtsecretofabcbitfortestandjus";
    if (secretStr.length !== 32) {
      console.error("NEXTAUTH_SECRET must be 32 characters long. Received:", secretStr);
    }
    const secret = new TextEncoder().encode(secretStr);
    console.log("Using secret:", secretStr);
    
    // Decrypt the token using jose's jwtDecrypt
    const { payload } = await jwtDecrypt(token, secret);
    
    // Attach custom properties to req.user
    req.user = { userId: payload.sub as string, role: payload.role as string };
    console.log("Decrypted payload:", payload);
    
    next();
  } catch (error) {
    console.error("Token verification failed:", error);
    return res.status(401).json({ message: "Invalid token" });
  }
};
