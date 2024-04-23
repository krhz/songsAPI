import { decodeToken } from "../helpers/jwt.helper"

export const authorize = async (req, res, nextFunction) => {
   try {
        const token = req.headers['x-access-token']
        if (!token) return res.status(403).json({message:"No token provided"})
        const { id, exp } = decodeToken(token);
        req.body.id = id;
        const expired = (Date.now() >= exp * 1000)
        if(expired) return res.status(403).json({message:"Token expired"})        
        console.log(req.body)
        nextFunction()
   } catch (error) {
        return res.status(401).json({ message:"Unauthorized" })    
   }
}