import { Component, FeatureRow } from "./style";

type Props = {
  compareFeatures: {
    title: string;
    comment: string;
    features: {
      title: string;
      pioneer: string;
      explorer: string;
      adventurer: string;
      hero: string;
    }[];
  }[];
};

export const FeaturesTable: React.FC<Props> = ({
  compareFeatures: featureGroups,
}) => {
  return (
    <Component>
      <h1>CompareFeaturesTable</h1>
      {featureGroups.map((featureGroup) => (
        <div key={featureGroup.title}>
          <h2>{featureGroup.title}</h2>
          <p>{featureGroup.comment}</p>
          <div>
            {featureGroup.features.map((feature) => (
              <FeatureRow key={feature.title}>
                <div>{feature.title}</div>
                <div>
                  <div>{feature.pioneer}</div>
                  <div>{feature.explorer}</div>
                  <div>{feature.adventurer}</div>
                  <div>{feature.hero}</div>
                </div>
              </FeatureRow>
            ))}
          </div>
        </div>
      ))}
    </Component>
  );
};
