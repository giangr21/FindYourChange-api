import { Router } from 'express';
import ProviderRecommendationController from '../controllers/ProviderRecommendationController';

const providerRecommendation = Router();
const providerRecommendationController = new ProviderRecommendationController();

providerRecommendation.post('/', providerRecommendationController.create);

providerRecommendation.delete('/:id', providerRecommendationController.delete);

export default providerRecommendation;
