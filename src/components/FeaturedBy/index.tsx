import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeaturedByItem = {
  title: string;
  imgName: string;
  url: string;
};

const FeaturedByList: FeaturedByItem[] = [
  {
    title: 'Europäischer Sozialfonds für Deutschland',
    imgName: 'img/by0.jpg',
    url: 'https://www.esf.de/portal/DE/Startseite/inhalt.html',
  },
  {
    title: 'ESF Berlin',
    imgName: 'img/by1.jpg',
    url: 'https://www.berlin.de/sen/wirtschaft/gruenden-und-foerdern/europaeische-strukturfonds/esf/',
  },
  {
    title: 'Stadt Berlin',
    imgName: 'img/by2.jpg',
    url: 'https://www.berlin.de/sen/web/',
  },
  {
    title: 'SIBB Deep Tech Accelerator',
    imgName: 'img/by3.png',
    url: 'https://www.sibb.de/scholarship',
  },
];

function FeaturedBy({ title, imgName, url }: FeaturedByItem) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <a href={url}>
          <img className={styles.featureSvg} src={imgName} alt={title} />
        </a>
      </div>
    </div>
  );
}

export default function HomepageFeaturedBy(): JSX.Element {
  return (
    <section className={styles.featuredBy}>
      <h1 className="text--center">Supported by</h1>
      <div className={styles.features}>
        <div className="container">
          <div className="row">
            {FeaturedByList.map((props, idx) => (
              <FeaturedBy key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
