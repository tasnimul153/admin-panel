import React, { useState } from "react";
import { MdFlight } from "react-icons/md";
import { FaSuitcaseRolling } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { GiWeight } from "react-icons/gi";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import { MdFlightClass } from "react-icons/md";
import { MdEventSeat } from "react-icons/md";

const CustomizedTicket = () => {
    const [isExpended, setIsExpended] = useState(false);

    const handleFlightDetailSelect = () => {
        //setIsExpended(!isExpended);
    };

    const handleFlightSelectButton = () => {
        console.log("Flight selected");
    };

    const flight = {
        itineraries: [
            {
                segments: [
                    {
                        id: 'seg-001',
                        carrierCode: 'DL',
                        aircraft: { code: '738' },
                        departure: { at: '2024-05-01T07:00:00', iataCode: 'JFK', terminal: '4' },
                        arrival: { at: '2024-05-01T10:30:00', iataCode: 'ATL', terminal: 'S' },
                        duration: 'PT3H30M'
                    },
                    {
                        id: 'seg-002',
                        carrierCode: 'DL',
                        aircraft: { code: '738' },
                        departure: { at: '2024-05-01T12:00:00', iataCode: 'ATL', terminal: 'S' },
                        arrival: { at: '2024-05-01T14:25:00', iataCode: 'MCO', terminal: '1' },
                        duration: 'PT2H25M'
                    }
                ],
                duration: 'PT5H55M'
            }
        ],
        price: { grandTotal: 350 },
        travelerPricings: [
            {
                fareDetailsBySegment: [
                    {
                        includedCheckedBags: { quantity: 1, weight: 23, weightUnit: 'KG' },
                        cabin: 'Economy',
                        class: 'M',
                        fareBasis: 'YB'
                    }, 
                    {
                        includedCheckedBags: { quantity: 1, weight: 23, weightUnit: 'KG' },
                        cabin: 'Economy',
                        class: 'M',
                        fareBasis: 'YB'
                    }
                ]
            }
        ]
    };
    const dictionaries = {
        carriers: { 'DL': 'Delta Airlines' },
        aircraft: { '738': 'Boeing 737-800' }
    };
    const currencySymbol = '$';

    return (
        <div className="flight">
            <div className="carrier-info">
                <div className="carriers">
                    {
                        flight.itineraries[0].segments.map((segment, index) => {
                            // put flight carrierCode and id in hash map
                            const carrierCode = segment.carrierCode;
                            const carrierName = dictionaries.carriers[carrierCode];

                            return (
                                <div key={segment.id} className="each-carrier">
                                    <div className="carrier-company">
                                        <div className="carrier-logo">
                                            <img src={`https://images.kiwi.com/airlines/64/${carrierCode}.png`} alt="AF" />
                                        </div>
                                        <div className="carrier-name">{carrierName}</div>
                                    </div>
                                    <p className="carrier-model">{dictionaries.aircraft[segment.aircraft.code]}</p>
                                </div>
                            );
                        })
                    }
                </div>

                <div className="pricing">
                    <span className="price-currency">{currencySymbol}</span>
                    <span className="price">{Math.floor(flight.price.grandTotal)}</span>
                </div>
            </div>

            {/** Flight facilites information*/}
            <div className="facilities-info">
                <div className="left-facilities">
                    <div className="checked-bags">
                        <FaSuitcaseRolling className="icon" />CHECKED {
                            flight.travelerPricings[0].fareDetailsBySegment[0].includedCheckedBags.quantity
                        } {
                            flight.travelerPricings[0].fareDetailsBySegment[0].includedCheckedBags.weight &&
                            `(${flight.travelerPricings[0].fareDetailsBySegment[0].includedCheckedBags.weight}
                                            ${flight.travelerPricings[0].fareDetailsBySegment[0].includedCheckedBags.weightUnit})`
                        }
                    </div>
                    <div className="dot-gray"></div>
                    {
                        flight.itineraries[0].segments.length - 1 > 0 ?
                            <div className="layover-count">
                                {`${flight.itineraries[0].segments.length - 1} Layover`}
                            </div> : <div className="layover-count">DIRECT</div>
                    }
                </div>
                <div className="right-facilities">
                    {flight.travelerPricings[0].fareDetailsBySegment[0].cabin}
                </div>
            </div>
            {
                flight.itineraries.map((itinerary, index) => {
                    return (
                        <div className="itineraries-data" key={index}>
                            <div className="left-iti">
                                <span className="departure-airport">{itinerary.segments[0].departure.iataCode}</span>
                                <span className="departure-date">
                                    {`
                        ${new Date(itinerary.segments[0].departure.at).getDate()}
                        ${new Date(itinerary.segments[0].departure.at).toLocaleString('default', { month: 'short' })}, 
                        ${new Date(itinerary.segments[0].departure.at).getFullYear()}
                        `
                                    }
                                </span>
                                <span className="departure-time">
                                    {
                                        new Date(itinerary.segments[0].departure.at).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
                                    }
                                </span>
                            </div>
                            <div className="middle-iti">
                                <div className="visual-flight-meta-data">
                                    <div className="line">
                                        <MdFlight className="icon" />
                                    </div>
                                </div>
                                <div className="total-flight-duration">
                                    {
                                        itinerary.duration.split('T')[1].split('H')[0] + ` H` + ' ' + itinerary.duration.split('T')[1].split('H')[1].split('M')[0] + ` M`
                                    }
                                </div>
                            </div>
                            <div className="right-iti">
                                <span className="departure-airport">{itinerary.segments[itinerary.segments.length - 1].arrival.iataCode}</span>
                                <span className="departure-date">
                                    {
                                        `
                                               ${new Date(itinerary.segments[itinerary.segments.length - 1].arrival.at).getDate()}
                                               ${new Date(itinerary.segments[itinerary.segments.length - 1].arrival.at).toLocaleString('default', { month: 'short' })}, 
                                               ${new Date(itinerary.segments[itinerary.segments.length - 1].arrival.at).getFullYear()}
                                            `
                                    }
                                </span>
                                <span className="departure-time">
                                    {
                                        new Date(itinerary.segments[itinerary.segments.length - 1].arrival.at).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
                                    }
                                </span>
                            </div>
                        </div>
                    );
                })
            }
            {
                isExpended &&
                <div className="details">
                    {
                        flight.itineraries.map((itinerary, index) => {
                            return (
                                itinerary.segments.map((segment, index) => {
                                    const carrierCode = segment.carrierCode;
                                    const carrierName = dictionaries.carriers[carrierCode];
                                    return (
                                        <div key={index} style={{ border: "none", padding: 0, margin: 0 }}>
                                            <div className="carrier-detail">
                                                <div className="each-carrier">
                                                    <div className="company">
                                                        <div className="logo">
                                                            <img src={`https://images.kiwi.com/airlines/64/${carrierCode}.png`} alt="AF" />
                                                        </div>
                                                        <div className="name">{carrierName}</div>
                                                    </div>
                                                    <p className="model">{dictionaries.aircraft[segment.aircraft.code]}</p>
                                                </div>
                                                <div className="travel-date">
                                                    {`${new Date(segment.departure.at).toLocaleString('default', { weekday: 'long' }).toUpperCase()}`}
                                                    <FaAngleRight className="icon" />
                                                    {`${new Date(segment.departure.at).getDate()}
                                                    ${new Date(segment.departure.at).toLocaleString('default', { month: 'short' }).toUpperCase()},
                                                    ${new Date(segment.departure.at).getFullYear()}`}
                                                </div>
                                            </div>
                                            <div className="travel-detail">
                                                <div className="departure demographic">
                                                    <span className="airport-code">{segment.departure.iataCode}</span>
                                                    <span className="terminal">Terminal {segment.departure.terminal}</span>
                                                    <span className="departure-date">
                                                        {
                                                            `
                                                        ${new Date(segment.departure.at).getDate()}
                                                        ${new Date(segment.departure.at).toLocaleString('default', { month: 'short' })}, 
                                                        ${new Date(segment.departure.at).getFullYear()}
                                                        `
                                                        }
                                                    </span>
                                                    <span className="departure-time">
                                                        {
                                                            new Date(segment.departure.at).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
                                                        }
                                                    </span>
                                                </div>
                                                <div className="visual">
                                                    <div className="visualContainer">
                                                        <MdFlight className="icon" />
                                                        <div className="lineJourney"></div>
                                                        <div className="travel-time">{
                                                            segment.duration.split('T')[1].split('H')[0] + ` H` + ' ' + segment.duration.split('T')[1].split('H')[1].split('M')[0] + ` M`

                                                        }</div>
                                                    </div>
                                                </div>
                                                <div className="arrival demographic">
                                                    <span className="airport-code">{segment.arrival.iataCode}</span>
                                                    <span className="terminal">Terminal {segment.arrival.terminal}</span>
                                                    <span className="departure-date">
                                                        {
                                                            `
                                                        ${new Date(segment.arrival.at).getDate()}
                                                        ${new Date(segment.arrival.at).toLocaleString('default', { month: 'short' })}, 
                                                        ${new Date(segment.arrival.at).getFullYear()}
                                                        `
                                                        }
                                                    </span>
                                                    <span className="departure-time">
                                                        {
                                                            new Date(segment.arrival.at).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
                                                        }
                                                    </span>
                                                </div>
                                                <div className="fareDetailsBySegment">
                                                    <div className="item">
                                                        <div style={{ display: "flex", flexDirection: "row" }}>
                                                            <FaSuitcaseRolling className="icon" />
                                                            <p style={{ marginLeft: "5px" }}>CHECK BAGS</p>
                                                        </div>
                                                        <p className="quantity"> {flight.travelerPricings[0].fareDetailsBySegment[index].includedCheckedBags.quantity}</p>
                                                    </div>
                                                    <div className="item">
                                                        <div style={{ display: "flex", flexDirection: "row" }}>
                                                            <GiWeight className="icon" />
                                                            <p style={{ marginLeft: "5px" }}>CHECK BAG WEIGHT</p>
                                                        </div>
                                                        <p className="quantity"> {flight.travelerPricings[0].fareDetailsBySegment[index].includedCheckedBags.weight ? flight.travelerPricings[0].fareDetailsBySegment[index].includedCheckedBags.weight + ' ' + flight.travelerPricings[0].fareDetailsBySegment[index].includedCheckedBags.weightUnit : '-'}</p>
                                                    </div>
                                                    <div className="item">
                                                        <div style={{ display: "flex", flexDirection: "row" }}>
                                                            <MdOutlineAirlineSeatReclineExtra />
                                                            <p style={{ marginLeft: "5px" }}>CABIN</p>
                                                        </div>
                                                        <p className="quantity"> {flight.travelerPricings[0].fareDetailsBySegment[index].cabin}</p>
                                                    </div>
                                                    <div className="item">
                                                        <div style={{ display: "flex", flexDirection: "row" }}>
                                                            <MdFlightClass />
                                                            <p style={{ marginLeft: "5px" }}>CLASS</p>
                                                        </div>
                                                        <p className="quantity"> {flight.travelerPricings[0].fareDetailsBySegment[index].class}</p>
                                                    </div>
                                                    <div className="item">
                                                        <div style={{ display: "flex", flexDirection: "row" }}>
                                                            <MdEventSeat />
                                                            <p style={{ marginLeft: "5px" }}>FARE BASIS</p>
                                                        </div>
                                                        <p className="quantity"> {flight.travelerPricings[0].fareDetailsBySegment[index].fareBasis}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="layover-details">
                                                {
                                                    index !== itinerary.segments.length - 1 &&
                                                    <div className="layover">
                                                        <div className="layover-title">LAYOVER
                                                            <span className="layover-duration">
                                                                {
                                                                    index !== itinerary.segments.length - 1 && (() => {
                                                                        const layoverDuration = new Date(itinerary.segments[index + 1].departure.at).getTime() - new Date(segment.arrival.at).getTime();
                                                                        if (layoverDuration > 0) {
                                                                            const hours = Math.floor(layoverDuration / (1000 * 60 * 60));
                                                                            const minutes = Math.floor((layoverDuration % (1000 * 60 * 60)) / (1000 * 60));
                                                                            const formattedDuration = `${hours}H ${minutes}M`;
                                                                            return formattedDuration;
                                                                        }
                                                                        return null;
                                                                    })()
                                                                }
                                                            </span>
                                                        </div>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    );
                                })
                            );
                        })
                    }
                </div>
            }

            <div className="operation-buttons">
                <div className="flight-detail-button operation-button" onClick={handleFlightDetailSelect}>
                    <span>Flight Details</span>
                </div>
                <div className="select-button" onClick={handleFlightSelectButton}>
                    SELECT
                </div>
            </div>
        </div>
    );
};

export default CustomizedTicket;
