import React from 'react';
import {
  MainMenu,
  // SelectedItem,
  // Icon,
  // Arrow,
  LeftMenuBox,
} from './LeftMenu.style';
// import Popover from 'components/Popover/Popover';
// import {
//   MenuDown,
//   DressIcon,
// } from 'components/AllSvgIcon';
import NavLink from 'components/NavLink/NavLink';
import {
  MEN,
  WOMEN,
  KIDS
} from 'constants/navigation';
import { useRouter } from 'next/router';
// import { FormattedMessage } from 'react-intl';
import Logo from 'components/Logo/Logo';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { DrawerWrapper } from '../../Header.style';
const MENU_ITEMS = [
  {
    link: MEN,
    label: 'Men',
    // icon: <DressIcon />,
    intlId: 'navMenMenu',
  },
  {
    link: WOMEN,
    label: 'Women',
    // icon: <DressIcon />,
    intlId: 'navWomenMenu',
  },
  {
    link: KIDS,
    label: 'Kids',
    // icon: <DressIcon />,
    intlId: 'navKidsMenu',
  },
];

const CategoryMenuWrapper = styled.div`
  display: flex;
  .menu-item{
    color: black;
    background: #FFF;
    
    a {
      font-size: 15px;
      font-weight: 700;
      color: ${themeGet('colors.darkBold', '#0D1136')};
      line-height: 1.2em;
      display: block;
      padding: 15px 30px;
      border-radius: 6px;
      transition: 0.15s ease-in-out;
      display: flex;
      align-items: center;
      @media (max-width: 1400px) {
        margin-right: 10px;
        font-size: 15px;
      }

      @media only screen and (min-width: 991px) and (max-width: 1200px) {
        padding: 15px 30px;
      }

      &:hover {
        color: ${themeGet('colors.primary', '#009E7F')};
      }
      &.current-page {
        color: ${themeGet('colors.primary', '#009E7F')};
        background-color: #fff;
      }
    }
  }
`
const CategoryMenu = ({ onClick }) => {
  return (
    <CategoryMenuWrapper>
      {MENU_ITEMS.map((item) => (
        <NavLink
          key={item.link}
          onClick={() => onClick(item)}
          className='menu-item'
          href={item.link}
          label={item.label}
          // icon={item.icon}
          iconClass='menu-item-icon'
          intlId={item.intlId}
        />
      ))}
    </CategoryMenuWrapper>
  );
};

type Props = {
  logo: string;
};

export const LeftMenu: React.FC<Props> = ({ logo }) => {
  const { pathname } = useRouter();
  const initialMenu = MENU_ITEMS.find((item) => item.link === pathname);
  const [activeMenu, setActiveMenu] = React.useState(
    initialMenu ?? MENU_ITEMS[0]
  );

  return (
    <LeftMenuBox>
      <Logo
        imageUrl={logo}
        alt={'Shop Logo'}
        onClick={() => setActiveMenu(MENU_ITEMS[0])}
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
        <CategoryMenu onClick={()=>{}}/>
      </MainMenu>
    </LeftMenuBox>
  );
};
