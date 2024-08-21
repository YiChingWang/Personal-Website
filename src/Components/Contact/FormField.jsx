function FormField({
  type,
  name,
  value,
  placeholder,
  onChange,
  error,
  label,
  children,
}) {
  return (
    <div className={`form__field form__field__${name}`}>
      <label htmlFor={name} className="form__label">
        {label}
      </label>
      {type !== "select" && type !== "textarea" ? (
        <input
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className={`form__input ${error ? "input__error" : ""}`}
          placeholder={placeholder}
        />
      ) : type === "select" ? (
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={`form__select ${error ? "input__error" : ""}`}
        >
          {children}
        </select>
      ) : (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={`form__textarea ${error ? "input__error" : ""}`}
          placeholder={placeholder}
        />
      )}
      {error && <div className="form__error">{error}</div>}
    </div>
  );
}
export default FormField;
