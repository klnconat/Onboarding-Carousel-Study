import {Image} from './Image';

export type Category = {
    id: number,
    name: string,
    createdAt: string,
    publishedAt: string,
    title: string,
    rank: number,
    image: Image
}