import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: 'Dashboard',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/chart-pie.svg',
          label: 'Dashboard',
          route: '/employee-management/dashboard',
        },
      ],
    },
    {
      group: 'Employees',
      separator: true,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/users.svg',
          label: 'List',
          route: '/employee-management/employees/list',
        },
      ],
    },
    {
      group: 'Profile',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/folder.svg',
          label: 'Profile',
          route: '/profile',
          children: [
            { label: 'Activity', route: '/profile/current-files' },
            { label: 'Downloads', route: '/profile/download' },
            { label: 'Trash', route: '/profile/trash' },
          ],
        },
      ],
    },
  ];
}
