import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { Color } from '../general';
import { ColorService } from '../services/color.service';

@Component({
    selector: 'color-id',
    templateUrl: './color.component.html',
    providers: [ColorService]
})

export class ColorComponent implements OnInit{
    constructor(private router: ActivatedRoute,
    private colorSvc: ColorService){}

    ngOnInit():void {
        this.router.params
        .switchMap(
            (params: Params) => this.colorSvc.getColor(+params['id']))
        .subscribe(color => this.color = color);
    }
}