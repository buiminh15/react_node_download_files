import { LoadingType } from './actionType';

export const setLoading = () => ({ type: LoadingType.SET_IS_LOADING });

export const resetLoading = () => ({ type: LoadingType.RESET_IS_LOADING });
