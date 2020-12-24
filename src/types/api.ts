export interface IPub {
    _id: string;
    name: string;
    averageRating: number;
    comments: any[];
    description: string;
    img: string;
    latlng: {
        lat: number;
        lng: number;
    }
}

export interface IBarathon {
    _id: string;
    name: string;
    author: string;
    comments: any[];
    checkpoints: string[];
}