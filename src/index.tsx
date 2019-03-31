// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
//чтобы подключить bootstrap через webpack нужно в css-loader убрать hash в local name
import {History} from 'history';
import { createBrowserHistory } from 'history';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { Middleware, Store } from 'redux';
import Routing from './routes/index';
// import './styles/main.scss';
import AppStore from './store/index';

const history: History = createBrowserHistory();

const middleware: Middleware = routerMiddleware(history);

const store: Store = AppStore(middleware);


interface IProv {
    store: Store;
    content: React.ReactNode;
}

class Prov extends React.Component<IProv, any> {
    public render(){
        return(
            <Provider store={this.props.store}>
                <ConnectedRouter history={history}>
                    <div>
                        {this.props.content}
                    </div>
                </ConnectedRouter>
            </Provider>
        );
    }
}

ReactDOM.render(
    <Prov    store={store} content={<Routing/>} />,
    document.getElementById('app'),
);

if ((module as any).hot ){
    (module as any).hot.accept('./routes/index', () => {


        const NextRouting = require('./routes/index').default;


        ReactDOM.render(
            <Prov   store={store} content={<NextRouting />}/>
            , document.getElementById('app'),
        );
    });
}
