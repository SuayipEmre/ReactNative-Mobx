import React from 'react';
import Svg, { Path, G, ClipPath, Defs, Rect } from 'react-native-svg';

const CompanyIcon = () => (
  <Svg width="24" height="24" viewBox="0 0 24 25" fill="none">
    <Defs>
      <ClipPath id="clip0_304_179">
        <Rect width="24" height="24" fill="white" transform="translate(0 0.5)" />
      </ClipPath>
    </Defs>
    <G clipPath="url(#clip0_304_179)">
      <Path d="M3 21.5H21" stroke="#26303E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <Path d="M5 21.5V7.5L13 3.5V21.5" stroke="#26303E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <Path d="M19 21.5V11.5L13 7.5" stroke="#26303E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <Path d="M9 9.5V9.51" stroke="#26303E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <Path d="M9 12.5V12.51" stroke="#26303E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <Path d="M9 15.5V15.51" stroke="#26303E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <Path d="M9 18.5V18.51" stroke="#26303E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </G>
  </Svg>
);

export default CompanyIcon;
