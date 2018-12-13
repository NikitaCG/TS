// список роутов

import * as React from 'react';
import {Suspense} from 'react';
import {Route} from 'react-router-dom';

import App from '../Controllers/App/index';
// import NewPage from './Containers/NewPage/index';
// import Grid from './Containers/GridExample/index';

const Testing = React.lazy(() => import('../Controllers/Testing/index'));

class Router extends React.Component {
    public render() {
        return (
            <div>
                <Route exact path="/" component={App}/>
                {/*<Route path="/new" component={NewPage}/>*/}
                <Route
                    path="/testing"
                    render={() => (
                        <Suspense
                            fallback={<div>Loading...</div>}
                        >
                            <Testing/>
                        </Suspense>
                    )}
                />
            </div>
        );
    }
}

export default Router;
