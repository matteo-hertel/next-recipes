import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Documentation First',
    description: (
      <>
        Get production ready recipes, step-by-step tutorials and see the pull requests that make a feature happen.
      </>
    ),
  },
  {
    title: 'Production Ready',
    description: (
      <>
        Each recipe is designed to teach you something and you'll see how is implemented in a real project.
      </>
    ),
  },
  {
    title: 'Open Source',
    description: (
      <>
        Open source and powered by the community, if you solved a problem in the past that wasn't well documented, please create a new recipe in this repository and give back to the community
      </>
    ),
  },
];

function Feature({ title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
