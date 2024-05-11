import {
  FC, ReactNode,
} from 'react';

import clsx from 'clsx';

import CloseSVG from '@assets/svg/close';

import style from './Modal.module.css';

type ModalProps = {
  title?: string;
  showCloseButton?: boolean;
  children: ReactNode;
  className?: string;
  setOpen: (isOpen: boolean) => void;
  isOpen: boolean;
  noBody?: boolean;
};

const Modal: FC<ModalProps> = ({
  title,
  showCloseButton,
  children,
  className,
  setOpen,
  isOpen,
  noBody,
}) => {
  const onClose = () => setOpen(false);

  return (
    <div className={clsx(
      style.modal,
      {
        [style.modalActive]: isOpen,
      },
      className,
    )}
    onClick={onClose}
    >
      <div
        className={clsx(
          style.modalContent,
          {
            [style.modalTransparent]: noBody,
          },
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {
          !noBody && <div>
            <div className={style.modalContentHead}>
              {
                title && <span className={style.modalTitle}>{title}</span>
              }

              {
                showCloseButton && <span className={style.modalCloseIcon} onClick={onClose}><CloseSVG /></span>
              }
            </div>
          </div>
        }
        {children}
      </div>
    </div>
  );
};

export default Modal;
