import * as React from "react";

import IAppState from './IApp';


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
            <div>
                {this.state.age}
            </div>
        );
    }
}

export default App;
