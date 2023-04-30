import { Brand } from "@/assets/Brand";
import {
  AuthWrapper,
  Component,
  MenuItem,
  MenusWrapper,
  Signup,
} from "./style";
import { MainMenu } from "@/types/MainMenu";
import { I18n } from "@/types";
import { MenuArrow } from "@/assets/MenuArrow";

type Props = {
  menu: MainMenu[];
  $t: I18n;
};

export const Header: React.FC<Props> = ({ menu, $t }) => {
  return (
    <Component>
      <Brand />

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
    </Component>
  );
};
