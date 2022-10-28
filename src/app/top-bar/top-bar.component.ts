import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {

  languages: string[] = ["de", "en"]
  selectedValue = "de"
  translateService?: TranslateService

  constructor(translate: TranslateService) {
    this.translateService = translate
  }

  switchLanguage(lang: string) {
    this.translateService?.use(lang)
  }
}
