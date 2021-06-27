import {RootState} from './types';

export const reduxSelectors = {
    appointments: (state: RootState) => state.appointments,
    auth: (state: RootState) => state.auth,
    salon: (state: RootState) => state.salon,
    user: (state: RootState) => state.user,
    likedProviders: (state: RootState) => state.user.providersFavorite,
    userInterface: (state: RootState) => state.userInterface,
};

export default reduxSelectors;
