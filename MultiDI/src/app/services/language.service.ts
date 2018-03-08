import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Language } from '../general';

@Injectable() 
export class LanguageService {
    constructor(private http: Http) {
        console.log("language.service.ts");
    }
    
    getLang(): Promise<Language[]> {
        const url = "https://raw.githubusercontent.com/JethroPham/data-requested/master/language.json";
        return this.http
        .get(url)
        .toPromise()
        .then(response => response.json().data as Language[])
        .catch(this.handerError)
    }

    private handerError(error:any):Promise<any> {
        return Promise.reject(error.message || error);
    }
}