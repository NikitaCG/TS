import { Action } from 'redux';
import * as filmsConstant from '../constants/filmsConstant';


interface IFilm extends Action {
    data: IDataAction;
}

interface IDataAction {
    status: string;
    data: string[];
}

export default function films(state = {}, action: IFilm) {
    switch (action.type) {
        case filmsConstant.LOAD_COMEDY:
            return action.data;

        case filmsConstant.LOAD_CRIMINAL:
            return action.data;

        default: return state;
    }
}