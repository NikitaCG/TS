export interface ITestingState {
    name: string;
    loadFilms: any;
    time: string;
}

interface IPropsFilms {
    status: string;
    data: string[];
}

export interface ITestingProps {
    films: IPropsFilms;
    own: any;
    loadComedy: () => void;
    loadCriminal: () => void;
}

