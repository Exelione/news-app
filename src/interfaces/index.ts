export interface INews {
    author: string,
    category: Array<CategoryType>,
    description: string,
    id: string,
    image: string,
    language: string,
    published: string,
    title?: string,
    url: string
}
export interface IPaginationProps {
    totalPages: number,
    nextPage: () => void,
    previousPage: () => void,
    pageClick: (page: number) => void,
    currentPage: number,
}

export enum Status {
    Error = 'error',
    Ok = 'ok'
}
export interface NewApiResponse {
    news: Array<INews>,
    page: number,
    status: Status

}

export type SkeletonType = 'banner' | 'item'

export type DirectionType = 'row' | 'column'

export interface NewsApiResponse {
    news: INews[],
    page: number,
    status: string
}

export interface CategoriesApiResponse {
    categories: Array<CategoryType>,
    description: string,
    status: string
}

export interface IFilters {
    page_number: number,
    page_size: number,
    category: CategoryType | null,
    keywords: string,
}

export type ParamsType = Partial<IFilters>


export type CategoryType = string;