import { NextFunction,Request,Response } from "express";
import { decodeToken, verifyToken } from "../helpers/jwt.helper"

export const authorize = async (req:Request, res:Response, nextFunction:NextFunction) => {
   try {
         const token = req.headers.authorization

         console.log("🚀 ~ authorize ~ token:", token)
         if (!token) return res.status(403).json({message:"No token provided"})
      //TODO
         const { exp } = decodeToken(token);
         console.log("🚀 ~ authorize ~ exp:", exp)
         const expired = (Date.now() >= exp * 1000)
         // if(expired) return res.status(403).json({message:"Token expired"})              
         //  req.body.id = id;
          nextFunction()
         // dedsarrollar logica si token expiro y autorizar siguiente funcion
   } catch (error) {
        console.log("🚀 ~ authorize ~ error:", error)
        res.status(401);
        res.json({ message:"Unauthorized" })    
   }
}