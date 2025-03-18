import "./input.scss";

const NAME_SPACE = "input";

export const Input = ({
  placeholder,
  type,
  id,
  onChange,
  name,
  leftIcon,
  rightIcon,
  value,
  error,
  message,
}) => {
  return (
    <div className={`${NAME_SPACE} ${error ? `${NAME_SPACE}__error` : ""}`}>
      <div className={`${NAME_SPACE}__content`}>
        {leftIcon && (
          <img className={`${NAME_SPACE}__left-icon`} src={leftIcon} />
        )}
        <input
          className={leftIcon && `${NAME_SPACE}__input-left-icon`}
          onChange={onChange}
          type={type}
          name={name}
          id={id}
          placeholder=""
          value={value}
        />
        <label
          className={leftIcon && `${NAME_SPACE}__label-left-icon`}
          htmlFor={id}
        >
          {placeholder}
        </label>
        {rightIcon && (
          <img className={`${NAME_SPACE}__right-icon`} src={rightIcon} />
        )}
      </div>
      {error && <p className={`${NAME_SPACE}__message-error`}>{message}</p>}
    </div>
  );
};
