import React from "react";
import { VectorMap } from "react-jvectormap";
import { countries } from "countries-list"

let mapData = {};

// Add transaction amount to country label
const onTipShow = (e, el, countryCode) => {
    el.html(el.html()+' (Total Transactions - '+mapData[countryCode]+')');
};

function Map(props) {

    const transactions = props.transactions;
    if (transactions.length > 0) {
        for (let i = 0; i < transactions.length; i++) {
            mapData[transactions[i].country_code] = transactions[i].total;
        }
        for (const country in countries) {
            if (!mapData.hasOwnProperty(country)) {
                mapData[country] = 0;
            }
        }
    }

    return (
        <div>
            <VectorMap
                map={"world_mill"}
                backgroundColor="transparent" //change it to ocean blue: #0077be
                zoomOnScroll={false}
                containerStyle={{
                    width: "100%",
                    height: "520px"
                }}
                containerClassName="map"
                regionStyle={{
                    initial: {
                        fill: "#e4e4e4",
                        "fill-opacity": 0.9,
                        stroke: "none",
                        "stroke-width": 0,
                        "stroke-opacity": 0
                    },
                    hover: {
                        "fill-opacity": 0.8,
                        cursor: "pointer"
                    },
                    selected: {
                        fill: "#2938bc" //color for the clicked country
                    },
                    selectedHover: {}
                }}
                regionLabelStyle={{
                    initial: {
                        fill: 'black'
                    },
                    hover: {
                        fill: 'black'
                    }
                }}
                onRegionTipShow={onTipShow}
                // labels={{
                //     regions: {
                //         render: function (code) {
                //             return mapData[code];
                //         },
                //     }
                // }}
                regionsSelectable={true}
                series={{
                    regions: [
                        {
                            values: mapData, //this is your data
                            scale: ['#C8EEFF', '#0071A4'], //your color game's here
                            normalizeFunction: "polynomial"
                        }
                    ]
                }}
            />
        </div>
    );
};
export default Map;