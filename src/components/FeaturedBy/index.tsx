import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeaturedByItem = {
  title: string;
  imgName: string;
};

const FeaturedByList: FeaturedByItem[] = [
  {
    title: 'ESF Berlin',
    imgName: 'img/by1.jpg',
  },
  {
    title: 'Stadt Berlin',
    imgName: 'img/by2.jpg',
  },
  {
    title: 'SIBB Deep Tech Accelerator',
    imgName: 'img/by3.png',
  },
];

function FeaturedBy({ title, imgName }: FeaturedByItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} src={imgName} alt={title} />
      </div>
    </div>
  );
}

export default function HomepageFeaturedBy(): JSX.Element {
  return (
    <section className={styles.featuredBy}>
      <h2 className="text--center">Supported by</h2>
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
