import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'For Passengers and Sender',
    Svg: require('@site/static/img/passengers.svg').default,
    description: (
      <>
        Whether you want to travel to the remote place or send a package, even if the place seems to
        be unconnected. Here you can find the right courier or ride.
      </>
    ),
  },
  {
    title: 'Everyone is a Courier',
    Svg: require('@site/static/img/courier.svg').default,
    description: (
      <>
        Whether you are an occasional driver or have a professional transport company: no matter
        how, here you will find people who are happy to use your service.
      </>
    ),
  },
  {
    title: 'Even to the most remote places',
    Svg: require('@site/static/img/village.svg').default,
    description: (
      <>
        Whether the place is remote, undeveloped, or disrupted by war and natural disasters, if
        anyone goes there, he or she is listed here. It is worth it.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
