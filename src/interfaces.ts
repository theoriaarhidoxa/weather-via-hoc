export interface ICities {
    city: string;
    temperature: number;
}

export interface ComponentProps {
    data: ICities[];
}

export interface IFetchingUrl {
    [key: string]: string;
}

export interface IObserved {
    [key: string]: number[];
}
