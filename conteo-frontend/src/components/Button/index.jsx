import "./button.scss";
import loadingIcon from "../../assets/icons/loadingIcon.svg";
const NAME_SPACE = "buttonAccount";

export const Button = ({
  text,
  className,
  onClick,
  iconLeft,
  disabled,
  loading,
}) => {
  return (
    <button
      disabled={loading || disabled}
      onClick={onClick}
      className={`${NAME_SPACE} ${className}`}
    >
      <div className={`${NAME_SPACE}__content`}>
        {loading ? (
          <img src={loadingIcon} className={`${NAME_SPACE}__loading`} />
        ) : (
          <span>{text}</span>
        )}
      </div>
    </button>
  );
};
