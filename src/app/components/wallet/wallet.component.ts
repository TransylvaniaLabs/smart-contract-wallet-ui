import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

  public otherValue = 1000;
  public winningsValue = 100;

  public chartEntries = [
    {
      'name': 1,
      'value': 45
    },
    {
      'name': 2,
      'value': 36
    },
    {
      'name': 3,
      'value': 120
    },
    {
      'name': 4,
      'value': 16
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }
}
