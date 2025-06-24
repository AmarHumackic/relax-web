import {
  FaWifi,
  FaParking,
  FaTree,
  FaTv,
  FaLock,
  FaChair,
} from "react-icons/fa";
import {
  MdLocalFlorist,
  MdAcUnit,
  MdDeck,
  MdWindow,
  MdKitchen,
  MdBalcony,
  MdBathroom,
  MdLandscape,
  MdSmokeFree,
  MdLogin,
  MdOutdoorGrill,
  MdAirportShuttle,
} from "react-icons/md";
import { GiWashingMachine } from "react-icons/gi";
import { PiVaultBold } from "react-icons/pi";
import { FiArrowDown } from "react-icons/fi";

export default function AmenityIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "wifi":
      return <FaWifi className="text-primary h-7 w-7" />;
    case "parking":
      return <FaParking className="text-primary h-7 w-7" />;
    case "courtyard":
      return <FaTree className="text-primary h-7 w-7" />;
    case "garden":
      return <MdLocalFlorist className="text-primary h-7 w-7" />;
    case "washingMachine":
      return <GiWashingMachine className="text-primary h-7 w-7" />;
    case "airConditioning":
      return <MdAcUnit className="text-primary h-7 w-7" />;
    case "tv":
      return <FaTv className="text-primary h-7 w-7" />;
    case "terrace":
      return <MdDeck className="text-primary h-7 w-7" />;
    case "mosquitoNets":
      return <MdWindow className="text-primary h-7 w-7" />;
    case "kitchen":
      return <MdKitchen className="text-primary h-7 w-7" />;
    case "balcony":
      return <MdBalcony className="text-primary h-7 w-7" />;
    case "privateBathroom":
      return <MdBathroom className="text-primary h-7 w-7" />;
    case "view":
      return <MdLandscape className="text-primary h-7 w-7" />;
    case "safeBox":
      return <PiVaultBold className="text-primary h-7 w-7" />;
    case "smokeAlarm":
      return <MdSmokeFree className="text-primary h-7 w-7" />;
    case "selfCheckIn":
      return <MdLogin className="text-primary h-7 w-7" />;
    case "lockBox":
      return <FaLock className="text-primary h-7 w-7" />;
    case "outdoorHangingSwing":
      return <FaChair className="text-primary h-7 w-7" />;
    case "outdoorDiningArea":
      return <MdOutdoorGrill className="text-primary h-7 w-7" />;
    case "shuttleService":
      return <MdAirportShuttle className="text-primary h-7 w-7" />;
    default:
      return null;
  }
}
