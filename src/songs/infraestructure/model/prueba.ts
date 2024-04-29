import { Document, Model, Schema, model } from "mongoose";
import mongoosePagination from "mongoose-paginate-v2";

// Define la interfaz para el documento del producto
interface IProduct extends Document {
  name: string;
  description?: string;
  price: number;
}

interface PaginationResult<T> {
  docs: T[];
  total: number;
  limit: number;
  page?: number;
  pages?: number;
  offset?: number;
}


// Define la interfaz para el modelo del producto extendiendo la interfaz Model de Mongoose
interface IProductModel extends Model<IProduct> {
  paginate(query?: any, options?: any): Promise<PaginationResult<IProduct>>;
}

// Define manualmente la interfaz PaginationResult


const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

// Aplica el plugin de paginación a tu esquema
productSchema.plugin(mongoosePagination);

// Define el modelo del producto utilizando las interfaces definidas anteriormente
const Product: IProductModel = model<IProduct, IProductModel>("Product", productSchema);

export default Product;
