import React from 'react';
import {
  MainMenu,
  LeftMenuBox,
} from './LeftMenu.style';
import Logo from 'components/Logo/Logo';
type Props = {
  logo: string;
};

export const LeftMenu: React.FC<Props> = ({ logo }) => {

  return (
    <LeftMenuBox>
      <Logo
        imageUrl={logo}
        alt={'Shop Logo'}
        // onClick={() => setActiveMenu(MENU_ITEMS[0])} 
      />

      <MainMenu>
        {/* <Popover
          className='right'
          handler={
            <SelectedItem>
              <span>
                <Icon>{activeMenu?.icon}</Icon>
                <span>
                  <FormattedMessage
                    id={activeMenu?.intlId}
                    defaultMessage={activeMenu?.label}
                  />
                </span>
              </span>
              <Arrow>
                <MenuDown />
              </Arrow>
            </SelectedItem>
          }
          content={<CategoryMenu onClick={setActiveMenu} />}
        /> */}
        {/* <CategoryMenu onClick={()=>{}}/> */}
      </MainMenu>
    </LeftMenuBox>
  );
};
