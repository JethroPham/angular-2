import { Component, OnInit } from '@angular/core';

import { Language } from '../general';
import { LanguageService } from '../services/language.service';

@Component({
    selector: 'my-lang',
    templateUrl: './language.component.html',
    providers: [LanguageService]
})

export class LangComponent implements OnInit{
    title = "Languages";
    languages: Language[];

    constructor(private lang: LanguageService) {
        console.log("language.component.ts");
    }

    ngOnInit():void {
        this.getLang();
    }
   
    getLang(): void {
        this.lang.getLang()
        .then(languages => this.languages = languages);
    }

}