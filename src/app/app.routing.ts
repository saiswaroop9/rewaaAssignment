import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './product';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_helpers';
import { ProductDetailsComponent } from './product-details/product-details.component';


const routes: Routes = [
    { path: '', component: ProductComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'product/:id', component: ProductDetailsComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);