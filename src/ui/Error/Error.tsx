import { FC } from 'react';

import { ELinkPath } from '@enums/enums';

import Link from '@ui/Link';

import style from './Error.module.css';

type ErrorProps = {
  statusCode?: number;
  errorText: string;
  goHome?: boolean;
};

const Error: FC<ErrorProps> = ({ statusCode, errorText, goHome }) => (
  <div className={style.errorContainer}>
    {errorText && (
      <h1 className={style.errorTitle}>
        {errorText}
      </h1>
    )}

    { statusCode && <h2 className={style.statusCodeText}>
      {statusCode && `Ошибка ${statusCode}`}
    </h2>
    }

    {
      goHome ? <Link path={ELinkPath.home} className={style.link}>Вернуться на главную?</Link> : <></>
    }
  </div>
);

export default Error;
