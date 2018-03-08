import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppRouterModule} from './app.router.module';

import { AppComponent } from './app.component';
import {ColorsComponent} from './colors-component/colors.component';
import {LangComponent} from './language-component/language.component';
import {ColorComponent} from './colors-component/color.component';

@NgModule({
    imports: [FormsModule, BrowserModule,HttpModule, AppRouterModule],
    declarations: [AppComponent, ColorsComponent, LangComponent, ColorComponent],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {}