import {RootState} from './types';

export const reduxSelectors = {
    appointments: (state: RootState) => state.appointments,
    auth: (state: RootState) => state.auth,
    likedProviders: (state: RootState) => state.user.providersFavorite,
    providerSelected: (state: RootState) => state.temp.providerSelected,
    salon: (state: RootState) => state.salon,
    user: (state: RootState) => state.user,
    userInterface: (state: RootState) => state.userInterface,
};

export default reduxSelectors;
