import { Todos } from '../../types/Todos';

type TodoInfoProps = {
  userTodo: Todos[];
};

export const TodoInfo = ({ userTodo }: TodoInfoProps) => {
  return (
    <>
      {userTodo.map(todo => (
        <article
          key={todo.id}
          data-id={todo.id}
          className="TodoInfo TodoInfo--completed"
        >
          <h2 className="TodoInfo__title">{todo.title}</h2>

          <a className="UserInfo" href={`mailto:${todo.user.email}`}>
            {todo.user.name}
          </a>

          {/* <br />
          <span>{todo.id}</span>
          <br />
          <span>{todo.title}</span>
          <br />
          {todo.completed ? <span>true</span> : <span>false</span>}
          <br />
          <span>{todo.userId}</span>
          <br />
          <span>{todo.user.id}</span>
          <br />
          <span>{todo.user.name}</span>
          <br />
          <span>{todo.user.username}</span>
          <br />
          <span>{todo.user.email}</span>
          <br /> */}
        </article>
      ))}
    </>
  );
};
