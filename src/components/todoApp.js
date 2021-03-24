import data from "../mock_data";

export default function todoApp() {
  return (
    <div>
      {data.map((value, index) => {
        let className = value.completed ? "completed" : null;
        return (
          <li className={className} key={index}>
            <div className="form-check">
              <label className="form-check-label">
                <input
                  className="checkbox"
                  type="checkbox"
                  defaultChecked={value.completed}
                />
                {value.content} <i className="input-helper" />
              </label>
            </div>
            <i className="remove mdi mdi-close-circle-outline" />
          </li>
        );
      })}
    </div>
  );
}
