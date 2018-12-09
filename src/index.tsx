import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
// import createHistory from 'history/createBrowserHistory';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'jquery/dist/jquery.min';
// import './styles/main.scss';
// import AppStore from './store/index';
// import Routing from './routes';

import App from './Controllers/App/index';


ReactDOM.render(
    <App />,
    document.getElementById('app')
);

// const history = createHistory();
//
// const middleware = routerMiddleware(history);
//
// const store = AppStore(middleware);
//
// ReactDOM.render(
//     <Provider store={store}>
//         <ConnectedRouter history={history}>
//             <div>
//                 <Routing />
//             </div>
//         </ConnectedRouter>
//     </Provider>,
//     document.getElementById('app'),
// );
//
// if (module.hot) {
//     module.hot.accept('./routes', () => {
//         ReactDOM.render(
//             <Provider store={store}>
//                 <ConnectedRouter history={history}>
//                     <div>
//                         <Routing />
//                     </div>
//                 </ConnectedRouter>
//             </Provider>, document.getElementById('app'),
//         );
//     });
// }
