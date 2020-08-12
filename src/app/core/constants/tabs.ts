export const tabRoutes: TabRoute[] = [
    {
        title: 'Teams',
        route: 'teams'
    },
    {
        title: 'Players',
        route: 'players'
    },
    {
      title: 'Stadiums',
      route: 'stadiums'
    },
    {
        title: 'Cities',
        route: 'cities'
    },
    {
        title: 'Matches',
        route: 'matches'
    },
    {
        title: 'Results',
        route: 'results'
    }
];

export interface TabRoute {
    title: string;
    route: string;
}
