import Image from "next/image";
import "./bottomSheet.scss";
import close from "@/assets/icons/close.svg";

const NAME_SPACE = "bottomSheetAccount";

export const BottomSheet = ({
  children,
  openModal,
  showClose = true,
  title,
  closeModal,
}) => {
  return (
    openModal && (
      <div className={`${NAME_SPACE}`} onClick={closeModal}>
        <div
          className={`${NAME_SPACE}__content`}
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <div className={`${NAME_SPACE}__icon-close`}>
            <h1>{title}</h1>
            <div>
              {showClose && (
                <Image src={close} onClick={closeModal} alt="close" />
              )}
            </div>
          </div>
          <div className={`${NAME_SPACE}__content-children`}>{children}</div>
        </div>
      </div>
    )
  );
};
