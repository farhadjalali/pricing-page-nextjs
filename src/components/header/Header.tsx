import { BrandIcon } from "./BrandIcon";
import {
  AuthWrapper,
  BrandLink,
  Component,
  MenuItem,
  MenusWrapper,
  MobileMenu,
  Signup,
} from "./style";
import { MainMenu } from "@/types/MainMenu";
import { I18n } from "@/types";
import { MenuArrow } from "./MenuArrow";
import { MobileMenuIcon } from "./MobileMenuIcon";
import { MobileAuthIcon } from "./MobileAuthIcon";

type Props = {
  menu: MainMenu[];
  $t: I18n;
};

export const Header: React.FC<Props> = ({ menu, $t }) => {
  return (
    <Component>
      <MobileMenu>
        <MobileMenuIcon />
      </MobileMenu>

      <BrandLink href="/">
        <BrandIcon />
      </BrandLink>

      <MenusWrapper>
        {menu.map((item) => (
          <MenuItem key={item.index}>
            {item.title}
            {item.sub && <MenuArrow />}
          </MenuItem>
        ))}
      </MenusWrapper>

      <AuthWrapper>
        <div>{$t["login"]}</div>
        <Signup>{$t["signup"]}</Signup>
      </AuthWrapper>

      <MobileMenu>
        <MobileAuthIcon />
      </MobileMenu>
    </Component>
  );
};
