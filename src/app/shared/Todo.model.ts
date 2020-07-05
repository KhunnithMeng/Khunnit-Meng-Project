export class Todo {
    constructor(
        public id: number,
        public title: string,
        public description: string,
        public dueDate: {start: Date, finish: Date},
        public status: string,
        public priority: string
    ){}
}