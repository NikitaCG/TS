import * as React from "react";

import IAppState from './IApp';

import * as mainStyles from '../../styles/main.scss';


class App extends React.Component<{}, IAppState>{
    public state: IAppState ;
    constructor(props){
        super(props);
        this.state = {
            age: 23,
        };
    }

    public render(){
        return(
            <div className={`${mainStyles.grid__container} container col-8`}>
                {this.state.age}f
            </div>
        );
    }
}

export default App;
