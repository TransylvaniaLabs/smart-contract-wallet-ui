import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

  public otherValue = 1000;
  public winningsValue = 570;

  public chartEntries = [
    {
      'name': 'Earnings - Missions',
      'value': 570
    },
    {
      'name': 'Earnings - Other',
      'value': 1000
    },
    {
      'name': 'Spendings - Missions',
      'value': 120
    },
    {
      'name': 'Spendings - Other',
      'value': 16
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }
}
