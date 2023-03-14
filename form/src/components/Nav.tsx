import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InputIcon from "@mui/icons-material/Input";
import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { NavStyled } from "./styles/Nav.style";

export default function Nav(): ReactElement {
  return (
    <NavStyled>
      <MenuIcon />

      <Link to={"/"}>
        <HomeIcon />
      </Link>

      <Link to={"/form"}>
        <InputIcon />
      </Link>
    </NavStyled>
  );
}
