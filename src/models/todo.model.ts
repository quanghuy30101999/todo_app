export class Todo {
  id!: number;
  content!: string;
  completed!: boolean;

  public cssClasscompleted(): string {
    return this.completed ? 'completed' : '';
  }
}
