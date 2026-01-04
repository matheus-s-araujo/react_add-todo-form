import { Todos } from '../../types/Todos';
import { TodoInfo } from '../TodoInfo';

type TodoListProps = {
  userTodo: Todos[];
};

export const TodoList = ({ userTodo }: TodoListProps) => {
  return (
    <section className="TodoList">
      <TodoInfo userTodo={userTodo} />
    </section>
  );
};
