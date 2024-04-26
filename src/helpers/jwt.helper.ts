import { sign, verify, decode } from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || "token.0123456789";

const generateToken = (id: string) => {
  const jwt = sign({ id }, JWT_SECRET, {
    expiresIn: process.env.EXPIRES_IN,
  });
  return jwt;
};

const verifyToken = (jwt: string) => {
  const isOk = verify(jwt, JWT_SECRET);
  return isOk;
};

const decodeToken = (jwt: string) => {
  return decode(jwt, JWT_SECRET);
};

export { generateToken, verifyToken, decodeToken };
