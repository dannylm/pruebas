import { state } from "@angular/animations";
import { createReducer, on } from "@ngrx/store";
import * as states from './contador.actions';

export const initial = 0

const _counterReducer = createReducer(
    initial,
    on(states.increment, state => state +1),
    on(states.decrement, state => state -1),
    on(states.random, state => Math.floor(Math.random()*100)),
    on(states.jump, (state, { num }) => num),
)

export function counterReducer(state:any,action:any) {
    return _counterReducer(state,action)
}