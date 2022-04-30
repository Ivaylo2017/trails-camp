import { CAMPSITES } from '../../app/shared/campsites';

export const selectAllCampsites = () => {
    return CAMPSITES;
};

// export const selectRandomCampsite = () => {
//     return CAMPSITES[Math.floor(Math.random() * CAMPSITES.length)];
// }

export const selectCampsiteById = (id) => {
    return CAMPSITES.find((campsite) => campsite.id === parseInt(id));
}

export const selectFeatureCampsite = () => {
    return CAMPSITES.find((campsite) => campsite.featured);
}