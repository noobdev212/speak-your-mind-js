
export default function Form({
  inputType,
  onChange,
  children
}) {

  return (
    <div>
      <div>
        {inputType.map((types, index) => (
          <div key={index}>
            <input type={types} onChange={e => {
              e.preventDefault();
              onChange(e.target.value, index);
            }}/>
          </div>
        ))}
      </div>
      <div>
        { children }
      </div>
    </div>
  );
}
