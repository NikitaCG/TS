import * as React from "react";
import { Link } from 'react-router-dom';
import * as style from '../../styles/main.css';

//interface
import IAppState from './IApp';


class App extends React.Component<{}, IAppState>{
    constructor(props){
        super(props);
        this.state = {
            age: 23,
        };
    }

    public render(){

        return(
            <>
                <div className={`${style.grid__container} container col-8`}>
                    <Link  to='/testing' >
                        go to test
                    </Link>
                    {this.state.age}
                    <Link  to='/hooks' >
                        go to hooks
                    </Link>
                </div>
            </>
        );
    }
}

export default App;
