import { PROMOTIONS } from '../../app/shared/promotions';

export const selectFeaturedPromotion = () => {
    return PROMOTIONS.find((promotion) => promotion.featured);
}
