export const menus = [
  {
    'name': 'Dashboard',
    'icon': 'dashboard',
    'link': '/dashboard',
    'open': false,
    'chip': {'value': 1, 'color': 'accent'},
  },
  {
    'name': 'Academy',
    'icon': 'list',
    'link': false,
    'open': false,
    'chip': false,
    'sub': [
      {
        'name': 'All Cohorts',
        'icon': 'filter_list',
        'link': '/academy/cohorts/list',
        'chip': {'value': 2, 'color': 'accent'},
        'open': false,
      },
      {
        'name': 'All Apprentices',
        'icon': 'filter_list',
        'link': '/academy/apprentices/list',
        'chip': {'value': 2, 'color': 'accent'},
        'open': false,
      },
      {
        'name': 'Member',
        'icon': 'list',
        'link': '/library/user/members/list',
        'open': false,
        'chip': false,
      },
      {
        'name': 'Book',
        'icon': 'book',
        'link': '/library/book/list',
        'open': false,
        'chip': false,
      },
      {
        'name': 'Fine',
        'icon': 'money',
        'link': '/library/book/fine',
        'open': false,
        'chip': false,
      }
    ]
  },
];
