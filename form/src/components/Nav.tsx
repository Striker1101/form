import { Menu } from "@material-ui/icons";
import { Home } from "@material-ui/icons";
import { Input } from "@material-ui/icons";
import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { NavStyled } from "./styles/Nav.style";

export default function Nav(): ReactElement {
  return (
    <NavStyled>
      <Menu />

      <Link to={"/"}>
        <Home />
      </Link>

      <Link to={"/form"}>
        <Input />
      </Link>
    </NavStyled>
  );
}
