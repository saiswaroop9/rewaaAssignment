import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// used to create fake backend

import { appRoutingModule } from './app.routing';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
import { ProductComponent } from './product';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AlertComponent } from './_components';
import { ProductNamePipe } from './pipes/productName.pipe';
import { ProductCategoryPipe } from './pipes/productCategory.pipe';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        appRoutingModule,
        NgbModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        ProductComponent,
        LoginComponent,
        RegisterComponent,
        AlertComponent,
        ProductCategoryPipe,
        ProductNamePipe,
        ProductDetailsComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };