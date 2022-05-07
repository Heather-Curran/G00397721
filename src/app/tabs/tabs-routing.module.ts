import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
// routing modual modified for the new pages
const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../Pages/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../Pages/profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../Pages/search/search.module').then(m => m.SearchPageModule)
      },
      {
        path: 'tab4',
        loadChildren: () => import('../Pages/favourites/favourites.module').then(m => m.FavouritesPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
