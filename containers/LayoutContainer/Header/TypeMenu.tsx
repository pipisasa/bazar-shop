import React from 'react';
import NavLink from 'components/NavLink/NavLink';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';


import {
  DrawerMenuItem,
  DrawerTypeMenu,
  DrawerMenuHeading,
} from './Header.style';
import Router from 'next/router';

const MENU_ITEMS = [
    {
      id:1,
      link: '/?type=men',
      label: 'Men',
      // icon: <DressIcon />,
      intlId: 'navMenMenu',
    },
    {
      id:2,
      link: '/?type=women',
      label: 'Women',
      // icon: <DressIcon />,
      intlId: 'navWomenMenu',
    },
    {
      id:3,
      link: '/?type=kids',
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

export const TypeMenu = ({ onClick }) => {
  return (
    <DrawerTypeMenu>
      <DrawerMenuHeading className="drawer-menu-heading">
        Type
      </DrawerMenuHeading>
      <DrawerMenuItem key="DrawerMenu01">
        <NavLink 
          onClick={()=>{Router.push('/')}}
          label="All"
          href="/"
          intlId="intlAll"
          className='drawer_menu_item'
        />
      </DrawerMenuItem>
      {MENU_ITEMS.map((item) => (
        <DrawerMenuItem key={item.id + "-type-menu"}>
          <NavLink
            onClick={onClick}
            href={item.link}
            label={item.label}
            intlId={item.intlId}
            className='drawer_menu_item'
            />
        </DrawerMenuItem>
      ))}
    </DrawerTypeMenu>
  );
};