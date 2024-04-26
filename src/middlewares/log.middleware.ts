import { NextFunction, Request, Response } from "../helpers/express.helper";

const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // Obtener el valor de la variable de entorno
  const logLevel = process.env.LOG_LEVEL || "info"; // Por defecto, se utiliza 'info'(none para desactivar y debug para imprimir todas desde variable de entorno <3 ) si la variable de entorno no está definida

  // Loggear dinámicamente según el nivel especificado
  if (logLevel === "debug") {
    console.debug("🚀 ~ logMiddleware ~ url:", req.url);
    console.debug("🚀 ~ logMiddleware ~ headers:", req.headers);
    console.debug("🚀 ~ logMiddleware ~ body:", req.body);
  } else if (logLevel === "info") {
    console.info("Request Recibida Exitosamente en el endpoint:", req.url);
  }

  next();
};

export { logMiddleware };
