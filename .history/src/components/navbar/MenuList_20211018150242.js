import { Icon } from '@iconify/react';

export const MenuList = [
  {
    title: 'Add Item',
    icon: <Icon icon='ic:baseline-playlist-add' width='30' height='30' />,
    url: '/additem',
  },
  {
    title: 'Storage',
    icon: <Icon icon='bx:bxs-fridge' width='30' height='30' />,
    url: '/',
  },
  {
    title: 'ShopingList',
    icon: <Icon icon='mdi:clipboard-text' width='30' height='30' />,
    url: '/shopinglist',
  },
  {
    title: 'Account',
    icon: <Icon icon='ic:baseline-account-circle' width='30' height='30' />,
    url: '/account',
  },
];
