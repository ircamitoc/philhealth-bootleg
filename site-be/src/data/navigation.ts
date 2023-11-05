interface NavigationItem {
  text: string;
  route?: string;
  subitems?: NavigationItem[];
}

export const navigationData: NavigationItem[] = [
  {
    text: 'About Us',
    route: '/about-us',
  },
  {
    text: 'Members',
    route: '/members',
  },
  {
    text: 'Our Partners',
    route: '/partners',
  },
  {
    text: 'Online Services',
    route: '/online-services',
  },
  {
    text: 'Downloads',
    route: '/downloads',
  },
  {
    text: 'Updates',
    subitems: [
      {
        text: 'Circulars',
        route: '/updates/circulars',
      },
      {
        text: 'Advisories',
        route: '/updates/advisories',
      },
      {
        text: 'News',
        route: '/updates/news',
      },
      {
        text: 'Official Statements',
        route: '/updates/official-statements',
      },
      {
        text: 'ITB',
        route: '/updates/itb',
      },
      {
        text: 'Job Vacancies',
        route: '/updates/job-vacancies',
      },
      {
        text: 'Joint Issuances',
        route: '/updates/joint-issuances',
      },
    ],
  },
];
