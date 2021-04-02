export class Todo {
  private _id: number;
  private _content: string;
  private _completed: boolean;

  constructor(todo: Todo){
    this._id = todo.id;
    this._content = todo.content;
    this._completed = todo.completed;
  }

  get id() : number {
    return this._id;
  }

  get content(): string {
    return this._content;
  }

  get completed(): boolean {
    return this._completed;
  }

  public getClassName(): string {
    return this.completed ? 'completed' : ''
  }
}
