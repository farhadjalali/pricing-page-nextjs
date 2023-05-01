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
import Image from "next/image";
import { isMobile } from "react-device-detect";

type Props = {
  menu: MainMenu[];
  $t: I18n;
};

export const Header: React.FC<Props> = ({ menu, $t }) => {
  return (
    <Component>
      <MobileMenu href="#">
        <Image
          src="/images/mobile-menu.svg"
          alt="Mobile Menu"
          width={48}
          height={48}
        />
      </MobileMenu>

      <BrandLink href="/">
        <Image
          src="/images/brand.svg"
          alt="Brand"
          width={isMobile ? 170 : 205}
          height={16}
        />
      </BrandLink>

      <MenusWrapper>
        {menu.map((item) => (
          <MenuItem key={item.index}>
            {item.title}
            {item.sub && (
              <Image
                src="/images/menu-arrow.svg"
                alt="Menu arrow"
                width={7}
                height={6}
              />
            )}
          </MenuItem>
        ))}
      </MenusWrapper>

      <AuthWrapper>
        <div>{$t["login"]}</div>
        <Signup>{$t["signup"]}</Signup>
      </AuthWrapper>

      <MobileMenu href="#">
        <Image
          src="/images/mobile-auth.svg"
          alt="Signin / Sign-out"
          width={38}
          height={38}
        />
      </MobileMenu>
    </Component>
  );
};
