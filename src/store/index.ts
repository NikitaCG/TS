import {applyMiddleware, createStore} from 'redux';
import { Middleware, Store } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
// загржаем редьюсеры

import AppReducer from '../reducers/index';

const AppStore = (middleware: Middleware): Store =>  {
    // создаем хранище
    const store = createStore(
        AppReducer,
        composeWithDevTools(applyMiddleware(thunk, middleware, createLogger())),
    );

    // если сборщик поддерживает hot-reload то пробуем подгрузить нужные redusers
    if ((module as any).hot) {
        (module as any).hot.accept('../reducers/index', () => {
            const nextAppReducer = require('../reducers/index').default;
            store.replaceReducer(nextAppReducer);
        });
    }

    return store;
};

export default AppStore;
