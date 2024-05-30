import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SeeMoreIcon = () => (
  <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" >
    <Path 
      d="M16 20L20 16M20 16L16 12M20 16H12" 
      stroke="#4F359B" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
    <Path 
      d="M16 7C23.2 7 25 8.8 25 16C25 23.2 23.2 25 16 25C8.8 25 7 23.2 7 16C7 8.8 8.8 7 16 7Z" 
      stroke="#4F359B" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
    <Path 
      d="M15.9999 10.6667L21.3333 16L15.9999 21.3333L15.0499 20.4L18.7833 16.6667H10.6666V15.3333H18.7833L15.0499 11.6L15.9999 10.6667Z" 
      fill="#4F359B" 
    />
  </Svg>
);

export default SeeMoreIcon;
