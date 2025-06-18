import { FaWifi, FaParking, FaTree, FaTv } from "react-icons/fa";
import { MdLocalFlorist, MdAcUnit, MdDeck } from "react-icons/md";
import { GiWashingMachine } from "react-icons/gi";

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
    default:
      return null;
  }
}
