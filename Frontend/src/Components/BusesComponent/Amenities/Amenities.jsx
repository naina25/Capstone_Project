import React from "react";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import WbIncandescentIcon from "@mui/icons-material/WbIncandescent";
import PowerIcon from "@mui/icons-material/Power";
import SosIcon from "@mui/icons-material/Sos";
import WifiIcon from "@mui/icons-material/Wifi";
import ShareLocationIcon from "@mui/icons-material/ShareLocation";
import Amenity from "./Amenity";
import "./Amenities.css";

const Amenities = () => {
    return (
        <div className="amenities-div">
            <Amenity icon={LocalBarIcon} amenity="Water Bottles" />
            <Amenity icon={VideoCameraFrontIcon} amenity="CCTV Camera" />
            <Amenity
                icon={ConfirmationNumberIcon}
                amenity="M-ticket supported"
            />
            <Amenity icon={WbIncandescentIcon} amenity="Reading Lamp" />
            <Amenity icon={PowerIcon} amenity="Charging Point" />
            <Amenity icon={SosIcon} amenity="Emergency Contact Number" />
            <Amenity icon={WifiIcon} amenity="Wifi" />
            <Amenity icon={ShareLocationIcon} amenity="Track my Bus" />
        </div>
    );
};

export default Amenities;
