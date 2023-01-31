export const getVerificationCode = () => {
   return Math.floor(100000 + Math.random() * 900000);
};

export const getLatLngDelat = (maxLng, minLng, maxLat, minLat) => {
   return {
      lngDelta: maxLng - minLng,
      latDelta: maxLat - minLat,
   };
};
