import {ViewabilityConfig} from 'react-native';

export const viewConfig: ViewabilityConfig = {
  waitForInteraction: false,
  viewAreaCoveragePercentThreshold: 60,
  minimumViewTime: 250, // default, decreasing affects performance
};
