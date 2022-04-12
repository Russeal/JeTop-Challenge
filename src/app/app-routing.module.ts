import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './layout/contact/contact.component';
import { LayoutComponent } from './layout/layout.component';
import { MainComponent } from './layout/main/main.component';

const routes: Routes = [
  {
    path: '', children: [
      {
        path: '', component: LayoutComponent, children: [
          { path: '', component: MainComponent },
          { path: 'contact', component: ContactComponent },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
