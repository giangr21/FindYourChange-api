import { Router } from 'express';
import ProviderRecommendationController from '../controllers/ProviderRecommendationController';

const providerRecommendation = Router();
const providerRecommendationController = new ProviderRecommendationController();

providerRecommendation.get('/provider/:id', providerRecommendationController.findByProviderId);
providerRecommendation.get('/user/:id', providerRecommendationController.findByUserId);
providerRecommendation.get('/populars', providerRecommendationController.getPopularRecommendations);

providerRecommendation.post('/', providerRecommendationController.create);

providerRecommendation.delete('/:id', providerRecommendationController.delete);

export default providerRecommendation;
