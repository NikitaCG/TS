import {Dispatch} from 'redux';
import * as filmsConstant from '../constants/filmsConstant';


async function getData(link: string): Promise<any> {
    return await fetch(link)
        .then((response) => response.json())
        .catch(alert);
}


export function loadComedy(dispatch: Dispatch)  {
    return getData('http://www.mocky.io/v2/5c122523330000b41a998d3e').then((dataF) => dispatch(
        {
            type: filmsConstant.LOAD_COMEDY,
            data: dataF,
        },
    ));
}

export function loadCriminal(dispatch: Dispatch) {
    return getData('http://www.mocky.io/v2/5c12253c330000d70b998d47').then((dataF) => dispatch(
        {
            type: filmsConstant.LOAD_CRIMINAL,
            data: dataF,
        },
    ));
}
