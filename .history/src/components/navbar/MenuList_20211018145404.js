import { Icon } from '@iconify/react';

export const MenuList = [
  {
    title: 'Storage',
    icon: <Icon icon='ic:baseline-playlist-add' width='30' height='30' />,
    url: '/',
  },
  {
    title: 'AddItem',
    icon: <Icon icon='bx:bxs-fridge' width='30' height='30' />,
    url: '/additem',
  },
  {
    title: 'ShopingList',
    icon: <Icon icon='mdi:clipboard-text' width='30' height='30' />,
    url: '/shopinglist',
  },
  {
    title: 'Account',
    icon: <Icon icon='ic:baseline-account-circle' width='45' height='34' />,
    url: '/account',
  },
];
