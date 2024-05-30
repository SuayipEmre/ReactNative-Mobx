import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SortIcon = () => (
  <Svg width="25" height="24" viewBox="0 0 25 24" fill="none">
    <Path 
      d="M3.75 9L7.75 5M7.75 5L11.75 9M7.75 5V19M21.75 15L17.75 19M17.75 19L13.75 15M17.75 19V5" 
      stroke="#6B7280" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
  </Svg>
);

export default SortIcon;
