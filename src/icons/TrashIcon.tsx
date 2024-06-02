import React from 'react';
import Svg, { Path } from 'react-native-svg';

const TrashIcon = () => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <Path
      d="M3 6h18"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8 6V4c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v2M19 6v14c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V6h14z"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10 11v6M14 11v6"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default TrashIcon;
