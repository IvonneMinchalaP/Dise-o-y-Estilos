import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClientesComponent } from "./components/clientes/clientes.component";
import { LoginComponent } from "./components/login/login.component";
import { ProductsComponent } from "./components/products/products.component";
import { ErrorPageComponent } from './error-page/error-page.component';
//route
const routes: Routes = [
    { path: '', component: ProductsComponent },
    { path: 'pageInicial', component: ProductsComponent },
    { path: 'cliente', component: ClientesComponent },
    { path: 'sesion', component: LoginComponent },
    { path: 'error', component: ErrorPageComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})

export class AppRouterModule { }