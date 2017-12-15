import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import {DashboardService} from '../dashboard.service'

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
    { data: [], label: 'Vendas' }

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

  constructor(private service:DashboardService) {
      
  }

  ngOnInit() {
    this.service.listaVendaMensal().subscribe(itens => {
      console.log(itens)
    }, err => {
      console.log(err);
    });

     this.service.listaVendaPorCategoria().subscribe(itens => {
      console.log(itens)
    }, err => {
      console.log(err);
    });

     this.service.listaVendaProduto().subscribe(itens => {
      console.log(itens)
    }, err => {
      console.log(err);
    });
  }

  // events 
  chartClicked(e: any): void {
    console.log(e);
  }

  chartHovered(e: any): void {
    console.log(e);
  }
}
