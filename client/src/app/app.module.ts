import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from '@components/homepage/homepage.component';
import { LoginComponent } from '@components/login/login.component';
import { PipelineComponent } from '@components/pipeline/pipeline.component';
import { SellerListComponent } from '@components/seller-list/seller-list.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AvatarModule } from 'ngx-avatar';
import { OwlModule } from 'ngx-owl-carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Import module material
import { MaterialModule } from './import-materiel';


const appRoutes: Routes = [
    {
        path: '',
        component: HomepageComponent
    },
    {
        path: 'seller-list',
        component: SellerListComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'pipeline',
        component: PipelineComponent
    }
];

@NgModule({
    declarations: [
        AppComponent,
        HomepageComponent,
        SellerListComponent,
        LoginComponent,
        PipelineComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MaterialModule,
        BrowserAnimationsModule,
        OwlModule,
        AvatarModule,
        HttpClientModule,
        AngularFontAwesomeModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
