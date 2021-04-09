/*
 * Reducer actions related with navigation
 */
import NavigationService from '../navigation/NavigationService';

export const navigateToHome = params => {
   NavigationService.navigate('Home', params);
};
