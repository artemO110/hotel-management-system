import { INCREASE_COUNT, DECREASE_COUNT } from "../reducers/constants";


export const increase_count = () => ({
    type: INCREASE_COUNT,
});

export const decrease_count = () => ({
    type: DECREASE_COUNT,
});