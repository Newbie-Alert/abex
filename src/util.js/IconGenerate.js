import * as icon from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const findIcon = (iconName, size = '1x', color = 'white') => {
  return <FontAwesomeIcon style={{ color }} icon={icon[iconName]} size={size} color="white" />;
};
