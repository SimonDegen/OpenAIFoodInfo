import { writable, type Writable } from 'svelte/store';
import type { FoodInfo } from './types/foodInfo';

export const foodInfo: Writable<FoodInfo | undefined> = writable(undefined);
export const errorMessage: Writable<string | undefined> = writable(undefined);
