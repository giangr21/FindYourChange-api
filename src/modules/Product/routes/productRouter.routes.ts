import { Router } from 'express';
import ProductController from '../controllers/ProductController';

const productRouter = Router();
const productController = new ProductController();

productRouter.get('/', productController.index);
productRouter.post('/provider', productController.getProductsByProviderIdAndFilter);
productRouter.get('/:id', productController.getById);
productRouter.get('/category/:category', productController.getByCategory);
productRouter.post('/', productController.create);
productRouter.put('/', productController.update);
productRouter.delete('/:id', productController.delete);

export default productRouter;
