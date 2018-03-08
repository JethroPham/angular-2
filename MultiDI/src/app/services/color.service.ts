import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Color } from '../general';

@Injectable()
export class ColorService {
    constructor( private http:Http,){console.log("coloer.service.ts"); }

    getColors(): Promise<Color[]> {
        const url = "https://raw.githubusercontent.com/JethroPham/data-requested/master/colors.json";
        return this.http.get(url)
        .toPromise()
        .then(response => response.json().data as Color[])
        .catch(this.handerError)
    }

    getColor(id: number): Promise<Color> {
        const url = "https://raw.githubusercontent.com/JethroPham/data-requested/master/colors.json";
        return this.getColors()
        .then(
            response => response.find(hero => hero.id === id))
    }

    private handerError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }

}


