import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrinhoComponent } from './components/cardapio/produtos/carrinho/carrinho.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },

  {
    path: 'cardapio',
    loadChildren: () =>
      import('./components/cardapio/cardapio.module').then(
        (m) => m.CardapioModule
      ),
  },
  {
    path: 'carrinho',
    component: CarrinhoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
