
export type Review = {
    testimonial: string,
    reader: string,
    age: number
}

export interface IBook {
    _id: number,
    thumbnail: string,
    title: string,
    author: string,
    rating: number,
    description: string,
    reviews: Review[],
    downloads: number,
    viewed: boolean
}
