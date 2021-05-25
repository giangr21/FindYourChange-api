import { Router } from 'express';
import ProductController from '../controllers/ProductController';

const productRouter = Router();
const productController = new ProductController();

productRouter.get('/', productController.index);
productRouter.post('/', productController.create);
productRouter.put('/', productController.update);
productRouter.delete('/:id', productController.delete);

productRouter.get('/:id', productController.getById);
productRouter.post('/provider', productController.getProductsByProviderIdAndFilter);
productRouter.post('/provider/filter', productController.getProductsByFilter);
productRouter.post('/checkout/:product_id', productController.checkout);
productRouter.get('/marketplace/all', productController.getAllProducts);
productRouter.get('/category/:category', productController.getByCategory);

export default productRouter;
