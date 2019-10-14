import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'Home',
    component: TabsPage,
    children: [
      {
        path: 'SiginUp',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../singnUp/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: 'Login',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../login/tab2.module').then(m => m.Tab2PageModule)
          }
        ]
      },
      {
        path: 'Profile',
        children: [ 
          {
            path: '',
            loadChildren: () =>
              import('../Profile/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/Home/SiginUp',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/Home/SiginUp',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
