import actionModel from '../models/actionModel';

export default function courseReducer(state = new Array, action:actionModel){
    switch (action.type){
        case 'CREATE_TODO':
            return [...state, (<any>Object).assign({}, action.payload)];
        default:
            return state;
    }
}