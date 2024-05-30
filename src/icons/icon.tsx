import React from 'react';
import Svg, { G, Path, Defs, ClipPath, Rect } from 'react-native-svg';

const CustomSvgComponent = () => (
  <Svg width="25" height="24" viewBox="0 0 25 24" fill="none">
    <G clipPath="url(#clip0_3_991)">
      <Path
        d="M9.5 5H7.5C6.96957 5 6.46086 5.21071 6.08579 5.58579C5.71071 5.96086 5.5 6.46957 5.5 7V19C5.5 19.5304 5.71071 20.0391 6.08579 20.4142C6.46086 20.7893 6.96957 21 7.5 21H17.5C18.0304 21 18.5391 20.7893 18.9142 20.4142C19.2893 20.0391 19.5 19.5304 19.5 19V7C19.5 6.46957 19.2893 5.96086 18.9142 5.58579C18.5391 5.21071 18.0304 5 17.5 5H15.5"
        stroke="#4F359B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.5 5C9.5 4.46957 9.71071 3.96086 10.0858 3.58579C10.4609 3.21071 10.9696 3 11.5 3H13.5C14.0304 3 14.5391 3.21071 14.9142 3.58579C15.2893 3.96086 15.5 4.46957 15.5 5C15.5 5.53043 15.2893 6.03914 14.9142 6.41421C14.5391 6.78929 14.0304 7 13.5 7H11.5C10.9696 7 10.4609 6.78929 10.0858 6.41421C9.71071 6.03914 9.5 5.53043 9.5 5Z"
        stroke="#4F359B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.5 14H9.51"
        stroke="#4F359B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.5 17H9.51"
        stroke="#4F359B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.5 16L13.5 17L16.5 14"
        stroke="#4F359B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_3_991">
        <Rect width="24" height="24" fill="white" transform="translate(0.5)" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default CustomSvgComponent;
