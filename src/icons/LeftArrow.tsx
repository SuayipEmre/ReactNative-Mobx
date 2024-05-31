import React from 'react';
import Svg, { Path, G, ClipPath, Defs, Rect } from 'react-native-svg';

const LeftArrowIcon = () => (
  <Svg width="48" height="48" viewBox="0 0 48 48" fill="none" >
    <Defs>
      <ClipPath id="clip0_101_42">
        <Rect x="4" y="4" width="40" height="40" rx="20" fill="white" />
      </ClipPath>
    </Defs>
    <G clipPath="url(#clip0_101_42)">
      <Path d="M17 24H31M17 24L23 30M17 24L23 18" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </G>
  </Svg>
);

export default LeftArrowIcon;
