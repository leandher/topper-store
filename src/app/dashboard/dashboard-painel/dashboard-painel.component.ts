import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-dashboard-painel',
  templateUrl: './dashboard-painel.component.html',
  styleUrls: ['./dashboard-painel.component.css']
})
export class DashboardPainelComponent implements OnInit {
  barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  barChartLabels: string[] = [];
  barChartType: string = 'bar';
  barChartLegend: boolean = true;

  barChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 47, 80, 81, 56, 55, 47], label: 'Vendas' }

  ];

  barChartColors: Array<any> = [
    {
      backgroundColor: 'rgba(14, 15, 17, 0.5)',
      borderColor: 'rgba(14, 15, 17, 1)',
      pointBackgroundColor: 'rgba(14, 15, 17, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(14, 15, 17, 1)'
    }
  ]

  constructor() {
    for (let index = 0; index < 12; index++) {
      let date = moment().subtract('months', 11);
      date.add('month', index);
      this.barChartLabels.push(date.format('MM/YY'))
    }
  }

  ngOnInit() {
  }

  // events 
  chartClicked(e: any): void {
    console.log(e);
  }

  chartHovered(e: any): void {
    console.log(e);
  }
}
