import { Component, OnInit } from '@angular/core';

import { Color } from '../general';
import { ColorService } from '../services/color.service';
import { Router } from '@angular/router';

@Component({
    selector: 'my-color',
    templateUrl: './caolors.component.html',
    providers: [ColorService]
})

export class ColorsComponent implements OnInit{
    title = "Colors";
    colors: Color[];

    constructor(private colorSvc: ColorService,
        private router: Router) { console.log("colors.component.ts");}

    ngOnInit():void {
        this.getColors();
    }
   
    getColors(): void {
        this.colorSvc.getColors()
        .then(colors => this.colors = colors);
    }
    
    detailColor(id: number): void {
        this.router.navigate(['/color', id]);
    }
}