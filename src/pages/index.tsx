import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import HomepageFeaturedBy from '../components/FeaturedBy';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const SoonSvg = require('@site/static/img/soon.svg').default;
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <SoonSvg className={styles.heroSoon} />
      <div className={clsx('container', styles.heroContainer)}>
        <div className={styles.logoAndTitle}>
          <div className={styles.logo}></div>
          <div>
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
          </div>
        </div>
        <div className={styles.buttons}>
          <div className={styles.heroCABContainer}>
            <Link className="button button--secondary button--lg" to="/join">
              Join waiting list 🚘
            </Link>
            <p>... and be the first to profit</p>
          </div>
        </div>
      </div>
      <p className={styles.heroExplainer}>
        <em>
          "A platform where anyone can send goods and transport people via independent delivery
          partners, at the best conditions, even to the most inconvenient places."
        </em>
      </p>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="A platform where anyone can send goods and transport people via independent delivery
      partners, at the best conditions, even to the most inconvenient places."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />

        <section className={styles.story}>
          <div className="container padding--md padding-top--lg">
            <h1 className="text--center">How it works</h1>
            <div className="row">
              <div className="col col--7 text--center">
                <div className="">
                  <img
                    className={styles.storyImg}
                    src="img/story/Search_Ride.png"
                    alt="Search Ride"
                  />
                </div>
              </div>
              <div className="col col--5">
                <div className={styles.storyDescription}>
                  <p>
                    As someone who wants to book a trip or send a package, you can search trips
                    according to your criteria.
                  </p>

                  <p>
                    You can enter the starting and ending point of your trip, as well as the desired
                    period in which the trip should take place.
                  </p>
                  <p>
                    For the search results, not only 100% hits are displayed, but also trips with
                    waypoints in the nearby area.
                  </p>
                  <p>
                    Via a dialog-oriented procedure, you can get in touch with the driver of this
                    trip. Via a bidding process, the driver can accept or reject your request.
                  </p>
                  <p>
                    Your request is automatically saved and is available for searches by the
                    drivers.
                  </p>
                </div>
              </div>
            </div>

            <div className={clsx('row', styles.reverse)}>
              <div className="col col--5">
                <div className={styles.storyDescription}>
                  <p>
                    At UfoCourier any driver can offer a ride, for passengers, packages and both at
                    the same time.
                  </p>

                  <p>
                    Whether by car, bike, truck, van, plane or ship, anything that moves may be
                    offered, professionally or casually.
                  </p>
                  <p>
                    A comprehensive route can be created for a trip, with a large number of
                    waypoints, all of which will be consulted when a potential customer is looking
                    for trips.
                  </p>
                  <p>
                    Riders are supported throughout the entire process: From the creation, to the
                    acceptance of requests, to the ride realization.
                  </p>
                  <Link className="button button--primary button--lg" to="/join">
                    Become a Courier (for free) 🚘
                  </Link>
                </div>
              </div>
              <div className="col col--7 text--center">
                <div className="">
                  <img
                    className={styles.storyImg}
                    src="img/story/Create_Ride_Step_2_Route.png"
                    alt="Create Ride"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <HomepageFeaturedBy />
      </main>
    </Layout>
  );
}
