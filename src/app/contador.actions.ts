import { createAction, props } from "@ngrx/store";

export const increment = createAction('incremento');
export const decrement = createAction('decremento');
export const random = createAction('random');
export const jump = createAction('jump',
    props<{ num: number}>()
);


