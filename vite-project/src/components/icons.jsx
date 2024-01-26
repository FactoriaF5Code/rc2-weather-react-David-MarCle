import ThunderstormIcon from "@mui/icons-material/CloudCircle"; // 
import DrizzleIcon from "@mui/icons-material/Grain"; 
import CloudIcon from '@mui/icons-material/Cloud';
import SearchIcon from '@mui/icons-material/Search';

import ClearIcon from '@mui/icons-material/Clear';



function Icons(weatherCondition) {
  let icon;

  switch (weatherCondition) {
    case "Thunderstorm":
      icon = <ThunderstormIcon />;
      break;
    case "Drizzle":
      icon = <DrizzleIcon />;
      break;
      case "Cloud":
      icon = <CloudIcon />;
      break;
      case "Snow":
        icon = <SnowIcon />;
        break;
        case "Clear":
        icon = <ClearIcon />;
        break;
       case "Search":
      icon = <SearchIcon />;
      break;
    default:
      icon = <img src="../../public/icons/clear-day.svg" alt="Clear Day" />;
      break;
  }

  return icon;
}

export default Icons;
