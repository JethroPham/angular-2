import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { ColorComponent } from './colors-component/color.component';
import { AppComponent } from './app.component';

const router: Routes = [
    {path: 'color/:id', component: ColorComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(router)],
    exports: [RouterModule]
})

export class AppRouterModule {}