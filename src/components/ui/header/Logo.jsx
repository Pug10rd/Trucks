import { Link } from "react-router-dom";
import Icon from "../Icon";

const Logo = () => {
  return (
    <Link to="/">
      <Icon name={"logo"} width={136} height={16} />
    </Link>
  );
};

export default Logo;
