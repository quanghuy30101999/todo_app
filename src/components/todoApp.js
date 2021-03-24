export default function todoApp(props) {
  const onRemove = (id) => {
    props.removeTodo(id)
  }

  const onUpdate = (id) => {
    props.updateTodo(id)
  }
  return (
    <div>
      {props.data.map((value, index) => {
        let className = value.completed ? "completed" : null;
        return (
          <li className={className} key={index}>
            <div className="form-check">
              <label className="form-check-label">
                <input
                  className="checkbox"
                  type="checkbox"
                  defaultChecked={value.completed}
                  onChange={() => onUpdate(value.id)}
                />
                {value.content} <i className="input-helper" />
              </label>
            </div>
            <i className="remove mdi mdi-close-circle-outline" onClick={() => onRemove(value.id)} />
          </li>
        );
      })}
    </div>
  );
}
