import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const MapContainer = () => {
    const [ selected, setSelected ] = useState({});

    const onSelect = item => {
        setSelected(item);
    }

    // const [activeMarker, setActiveMarker] = useState(null);

//   const handleActiveMarker = (marker) => {
//     if (marker === activeMarker) {
//       return;
//     }
//     setActiveMarker(marker);
//   };

//   const handleOnLoad = (map) => {
//     const bounds = new window.google.maps.LatLngBounds();
//     markers.forEach(({ location }) => bounds.extend());
//     map.fitBounds(bounds);
//   };

    const mapStyles = {
        height: "75vh",
        width: "75vh",
        border: "5px solid black"
        };

    const defaultCenter = {
        lat: 46.392410, lng: -94.636230
    }

    const markers = [
        {
            id: 1,
            name: "Lake Minnetonka",
            location: { lat: 44.9149628, lng: -93.6413485 }
          },
          {
            id: 2,
            name: "Lake Vermilion",
            location: { lat: 47.854741581, lng: -92.2930988276 }
          },
          {
            id: 3,
            name: "Lake Superior",
            location: { lat: 47.123087, lng: -90.999900 }
          },
          {
            id: 4,
            name: "Lake Bemidji",
            location: { lat: 47.47356, lng: -94.88028 } 
        }
    ]

    return (
        <LoadScript
        googleMapsApiKey="AIzaSyAoGlAtYj-gG0Nx7EA3EPiRY0tmyOJNpZ4">
            <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={7}
            center={defaultCenter}>
                {
                    markers.map(item => {
                        return (
                            <Marker 
                            key={item.name} 
                            position={item.location}
                            onClick={ () => onSelect(item)}
                            />
                        )
                    })
                }
                {
                    selected.location && (
                        <InfoWindow 
                        postion={selected.location}
                        clickable={true}
                        onCloseClick={ () => setSelected({})}
                        >
                            <p>{selected.name}</p>
                        </InfoWindow>
                    )
                }
                </GoogleMap>
        </LoadScript>
    )
}

export default MapContainer;