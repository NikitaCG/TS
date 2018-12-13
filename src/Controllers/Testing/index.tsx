import * as React from "react";
import connect from 'react-redux/es/connect/connect';
import {Link} from 'react-router-dom';
import { Dispatch, Store} from 'redux';
import * as filmsActions from '../../actions/filmsActions';

// interface
import {ITestingProps, ITestingState} from './ITesting';

class Testing extends React.Component< ITestingProps, ITestingState> {

    public static getDerivedStateFromProps(nextProps, prevState) {


        if (nextProps.films && nextProps.films.data) {
            sessionStorage.films = JSON.stringify(nextProps.films.data);

            return {
                loadFilms: nextProps.films.data,
            };
        }

        return null;
    }


    constructor(props: Readonly<ITestingProps>) {
        super(props);

        this.state = {
            name: '',
            loadFilms: [],
            time: '',
        };
    }


    public componentDidMount() {

        const dataFilms = sessionStorage.films ? JSON.parse(sessionStorage.films) : '';
        if (sessionStorage.films) {
            this.setState({
                loadFilms: dataFilms,
            });
        }
    }

    public onChangeName = (e) => {
        this.setState({
            name: e.target.value,
        });
    }


    public render() {
        console.log('STATE', this.state);
        console.log('PROPS', this.props);
        return (
            <div className='col-md-8'>
                <input
                    type='text'
                    value={this.state.name}
                    onChange={this.onChangeName}
                />
                <button
                    onClick={this.props.loadComedy}
                >
                    load comedy
                </button>
                <button
                    onClick={this.props.loadCriminal}
                >
                    load criminal
                </button>
                <Link to='/'>
                    back
                </Link>
                {
                    this.state.loadFilms
                    && <div>
                        {this.state.loadFilms
                            .filter((item) => item.includes(this.state.name))
                            .map(
                                    (item, index) =>
                                        <div key={index}>
                                            {item}
                                        </div>,
                                 )
                        }
                    </div>
                }

            </div>
        );
    }
}

const mapStateToProps = (state: any, ownProps: any ) => ({
    films: state.filmsReducer,
    own: ownProps,
});

const mapDispatchProps = (dispatch: Dispatch) => ({
    loadComedy: () => filmsActions.loadComedy(dispatch),
    loadCriminal: () => filmsActions.loadCriminal(dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchProps,
)(Testing);
