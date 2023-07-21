import { Component } from '@angular/core';

@Component({
  selector: 'app-product-template',
  templateUrl: './product-template.component.html',
  styleUrls: ['./product-template.component.css']
})
export class ProductTemplateComponent {
  public textList: any =
    [
      {
        name: 'Extra Latte',
        img: 'assets/Cup.png',
        spinnerImg: 'assets/Stamp.svg',
        discount: 8.99,

        radioName: 'Late-ML',
        radioId1: 'Late-option1',
        radioId2: 'Late-option2',

        checkBoxName: 'Late-ML-myCheckbox'
      },
      {
        name: 'Cappuccino',
        img: 'assets/Cup2.svg',
        discount: 9.99,

        radioName: 'Cappuccino-ML',
        radioId1: 'Cappuccino-option1',
        radioId2: 'Cappuccino-option2',

        checkBoxName: 'Cappuccino-ML-myCheckbox'
      },
      {
        name: 'Moccachino',
        img: 'assets/Cup3.svg',
        discount: 7.29,

        radioName: 'EX-Late-ML',
        radioId1: 'EX-Late-option1',
        radioId2: 'EX-Late-option2',

        checkBoxName: 'EX-Late-ML-myCheckbox'
      }
    ];

  public showMessage(event: any) {
    alert("Вы выбрали " + event + " Чашку кофя");
  }
}
