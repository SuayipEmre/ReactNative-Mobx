import React from 'react';
import Svg, { G, Path, Defs, ClipPath, Rect } from 'react-native-svg';

const PostsIcon = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" >
    <Defs>
      <ClipPath id="clip0_3_998">
        <Rect width="24" height="24" fill="white"/>
      </ClipPath>
    </Defs>
    <G clipPath="url(#clip0_3_998)">
      <Path 
        d="M9 4V22M6 4H17C17.5304 4 18.0391 4.21071 18.4142 4.58579C18.7893 4.96086 19 5.46957 19 6V18C19 18.5304 18.7893 19.0391 18.4142 19.4142C18.0391 19.7893 17.5304 20 17 20H6C5.73478 20 5.48043 19.8946 5.29289 19.7071C5.10536 19.5196 5 19.2652 5 19V5C5 4.73478 5.10536 4.48043 5.29289 4.29289C5.48043 4.10536 5.73478 4 6 4Z" 
        stroke="#4F359B" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <Path 
        d="M13 8H15" 
        stroke="#4F359B" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <Path 
        d="M13 12H15" 
        stroke="#4F359B" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);

export default PostsIcon;
