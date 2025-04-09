
export function getDistance(lat1, lon1, lat2, lon2){
    const rad = (deg) => {
        return deg * Math.PI / 180;
    }
    const EarthRadius = 6371; // Radius of the Earth in kilometers

    const Lat = rad(lat2 - lat1); // Latitude difference in radians
    const Lon = rad(lon2 - lon1); // Longitude difference in radians

    const a = Math.sin(Lat / 2) ** 2 +
              Math.cos(rad(lat1)) * Math.cos(rad(lat2)) *
              Math.sin(Lon / 2) ** 2;

              const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
              return EarthRadius * c;
}