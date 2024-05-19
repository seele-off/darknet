import React, {
  FC, useCallback, useState,
} from 'react';

import clsx from 'clsx';

import { AppChanges } from '@interfaces/common';

import { EScrollId } from '@enums/enums';

import { APP_VERSIONS } from '@constants/app';
import {
  SEO_DESCRIPTION, SEO_KEYWORD, SEO_TITLE,
} from '@constants/seo';

import HorizontalScroll from '@ui/HorizontalScroll';
import Link from '@ui/Link';
import Modal from '@ui/modal';
import TabBar from '@ui/Tabbar';
import TabBarItem from '@ui/Tabbar/tabbarItem';
import Ticker from '@ui/Ticker';

import SeoHead from '@components/SeoHead';

import ContentLayout from '@layouts/ContentLayout';

import InfoSVG from '@assets/svg/info';
import LogoSVG from '@assets/svg/logo';

import scrollToElement from '@utils/scrollToElement';

import style from '@styles/pages/homePage.module.css';

const fillArray = Array(3).fill(0).map((_, index) => index + 1);

type TableRowType = AppChanges & {
  appName: string;
};

type Changes = {
  appName: string;
  version: string;
  supportAndroidVersion: string;
  changes: string[];
};

const Main: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>(APP_VERSIONS[0].appName);
  const [isOpenPreviewImageModal, setPreviewImageModal] = useState<boolean>(false);
  const [changelogItems, setChangelogItems] = useState<Changes | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const setTest = (t: string) => setActiveTab(t);

  const onOpen = (isOpened: boolean) => {
    setIsOpen(isOpened);
    setChangelogItems(null);
    setPreviewImage(null);
  };

  const onOpenPreviewImage = (isOpened: boolean) => {
    setPreviewImageModal(isOpened);
    setPreviewImage(null);
  };

  const onSetChangelogItems = (logs: Changes) => {
    setChangelogItems(logs);
    setIsOpen(true);
  };

  const setPrewImage = (image: string) => {
    setPreviewImage(image);
    setPreviewImageModal(true);
  };

  const getImages = (images: string[]) => images.map((img, i) => <img
    key={i}
    onClick={() => setPrewImage(img)}
    className={style.imagePreview}
    style={{ marginRight: i + 1 === images.length ? 0 : 45 }}
    src={img} alt="Изображение приложения"
  />);

  const getTableRow = ({
    appName, version, download, isCurrentVersion, date, changes, supportAndroidVersion,
  }: TableRowType) => (<tr>
    <th>
      <Link className={style.downloadApplink} path={download} target="_blank">{`${appName} ${version}`}</Link>
    </th>

    <th>
      <span className={clsx(style.status, { [style.statusActive]: isCurrentVersion })}>
        {isCurrentVersion ? 'Активный' : 'Устаревший'}
      </span>
    </th>

    <th>
      {date}
    </th>

    <th>
      <button className={style.appInfoButton} onClick={() => onSetChangelogItems({
        changes, appName, version, supportAndroidVersion,
      })}>
        <div className={style.appInfoButtonIconWrapper}>
          <InfoSVG />
          <span className={style.appInfoButtonText}>Подробнее</span>
        </div>
      </button>
    </th>
  </tr>);

  const getTable = useCallback(() => (
    <TabBar activeTab={activeTab} setActiveTab={setTest}>
      {
        APP_VERSIONS.map(({
          appName, descrition, images, changelogs,
        }) => (<TabBarItem key={appName} label={appName}>
          <div className={style.imagesWrapper}>
            <HorizontalScroll>
              {
                getImages(images)
              }
            </HorizontalScroll>
          </div>

          <div className={style.appVersionDescriptionWrapper}>
            <p className={style.appVersionDescription}>{descrition}</p>
          </div>

          <div className={style.changelogsList}>
            <table className={style.table}>
              <thead>
                <tr>
                  <th>Версия</th>
                  <th>Статус</th>
                  <th>Дата</th>
                  <th>Информация</th>
                </tr>
              </thead>

              {
                changelogs.map((change) => (
                  <tbody key={change.version}>
                    {getTableRow({ appName, ...change })}
                  </tbody>
                ))
              }
            </table>
          </div>
        </TabBarItem>))
      }
    </TabBar>
  ), [activeTab]);

  return (
    <ContentLayout>
      <SeoHead
        title={SEO_TITLE}
        tabTitle={SEO_TITLE}
        keywords={SEO_KEYWORD}
        description={SEO_DESCRIPTION}
      />

      <Modal
        title="Изменения"
        showCloseButton
        isOpen={isOpen}
        setOpen={onOpen}
      >
        <div className={style.changesListWrapper}>
          <ul className={style.changesList}>
            {changelogItems && changelogItems.changes.length > 0 && changelogItems.changes.map((change) => <li
              key={change}
              className={style.changesListItem}
            >
              {change}
            </li>)}
          </ul>

          <div className={style.changesListBottomInfo}>
            <span className={style.changesListBottomInfoName}>
              {`${changelogItems?.appName} ${changelogItems?.version}`}
            </span>

            <span className={style.changesListBottomInfoSupport}>
              {`Android ${changelogItems?.supportAndroidVersion}`}
            </span>
          </div>
        </div>

      </Modal>

      <Modal
        noBody={true}
        isOpen={isOpenPreviewImageModal}
        setOpen={onOpenPreviewImage}
      >
        <img
          src={previewImage || ''}
          className={style.appImage}
          alt="Изображение приложения"
        />
      </Modal>

      <section className={style.sectionWrapper}>
        <div className={style.sectionContent}>
          <LogoSVG />

          <h1 className={style.appTitle}>ANIXART / MODE</h1>

          <button
            className={style.btn}
            onClick={(e) => {
              e.preventDefault();
              scrollToElement('download');
            }}
          >
            <Ticker>
              {
                fillArray.map((item) => (
                  <p key={item} className={style.tickerItem}>Cкачать</p>
                ))
              }
            </Ticker>
          </button>
        </div>
      </section>

      <section className={style.sectionWrapper} id={EScrollId.download}>
        <h2 className={style.sectionTitle}>Версии приложения</h2>

        <div className={style.downloadContent}>
          {getTable()}
        </div>
      </section>
    </ContentLayout>
  );
};

export default Main;
