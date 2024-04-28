export interface ITask {
    _id: string,
    msg: string,
    date: Date,
    isFinished: Boolean,
    tags: tagType[],
    createdAt: Date,
}


export type tagType = {
    msg: string,
    _id: string,
} 