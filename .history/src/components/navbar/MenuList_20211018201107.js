import { Icon } from '@iconify/react';

export const MenuList = [
  {
    title: 'Add Item',
    icon: <Icon icon='ic:baseline-playlist-add' width='27' height='27' />,
    url: '/additem',
  },
  {
    title: 'Storage',
    icon: <Icon icon='bx:bxs-fridge' width='27' height='27' />,
    url: '/',
  },
  {
    title: 'ShoppingList',
    icon: <Icon icon='mdi:clipboard-text' width='27' height='27' />,
    url: '/shoppinglist',
  },
  {
    title: 'Account',
    icon: <Icon icon='ic:baseline-account-circle' width='27' height='27' />,
    url: '/account',
  },
];
