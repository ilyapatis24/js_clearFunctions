"use strict";
export default function health(features) {
  if ( features['health'] >= 0 ) {
      if ( features['health'] > 50 ) {
          return "healthy";
      } else if ( features['health'] < 15 ) {
          return "critical";
      } else {return "wounded";}
  } else {return "";}
}
