import { Component, OnDestroy, OnInit } from '@angular/core';

/**
 * Demonstrate the usage of {@link C3JSChartComponent}
 * Examples adapted from http://c3js.org/examples.html
 */
@Component({
  templateUrl: './c3-js-demo.component.html',
  styleUrls: ['./c3-js-demo.component.scss'],
})
export class C3JSDemoComponent implements OnInit, OnDestroy {
  charts = [
    {
      columns: [
        ['data1', 30, 200, 100, 400, 150, 250],
        ['data2', 50, 20, 10, 40, 15, 25],
      ],
      header: 'Line chart',
    },
    {
      columns: [
        ['data1', -30, 200, 200, 400, -150, 250],
        ['data2', 130, 100, -100, 200, -150, 50],
        ['data3', -230, 200, 200, -300, 250, 250],
      ],
      type: 'bar',
      group: true,
      header: 'Stacked bar chart',
    },
    {
      columns: [
        ['data1', 30, 200, 100, 400, 150, 250],
        ['data2', 130, 100, 140, 200, 150, 50],
      ],
      type: 'bar',
      header: 'Bar chart',
    },
    {
      x: 'time',
      columns: [
        ['time', '2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04',
          '2013-01-05', '2013-01-06'],
        ['data1', 30, 200, 100, 400, 150, 250],
        ['data2', 130, 340, 200, 500, 250, 350],
      ],
      type: 'timeseries',
      header: 'Time series chart',
    },
    {
      columns: [
        ['data1', 30, 200, 100, 400, 150, 250],
        ['data2', 130, 100, 140, 200, 150, 50],
      ],
      type: 'spline',
      header: 'Spline chart',
    },
    {
      columns: [
        ['data1', 300, 350, 300, 0, 0, 100],
        ['data2', 130, 100, 140, 200, 150, 50],
      ],
      type: 'step',
      header: 'Step chart',
    },
    {
      columns: [
        ['data1', 300, 350, 300, 0, 0, 0],
        ['data2', 130, 100, 140, 200, 150, 50],
      ],
      type: 'area',
      header: 'Area chart',
    },
    {
      // iris data from R
      columns: [
        [
          'setosa',
          0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1,
          0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2,
          0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2,
          0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2,
        ],
        [
          'versicolor',
          1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0,
          1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4,
          1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3,
          1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3,
        ],
        [
          'virginica',
          2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1,
          2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8,
          1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8,
          2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8,
        ],
      ],
      type: 'pie',
      header: 'Pie chart',
    },
    {
      x: {
        setosa: 'setosa_x',
        versicolor: 'versicolor_x',
      },
      // iris data from R
      columns: [
        [
          'setosa_x',
          3.5, 3.0, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1, 3.7, 3.4, 3.0,
          3.0, 4.0, 4.4, 3.9, 3.5, 3.8, 3.8, 3.4, 3.7, 3.6, 3.3, 3.4, 3.0,
          3.4, 3.5, 3.4, 3.2, 3.1, 3.4, 4.1, 4.2, 3.1, 3.2, 3.5, 3.6, 3.0,
          3.4, 3.5, 2.3, 3.2, 3.5, 3.8, 3.0, 3.8, 3.2, 3.7, 3.3,
        ],
        [
          'versicolor_x',
          3.2, 3.2, 3.1, 2.3, 2.8, 2.8, 3.3, 2.4, 2.9, 2.7, 2.0, 3.0, 2.2,
          2.9, 2.9, 3.1, 3.0, 2.7, 2.2, 2.5, 3.2, 2.8, 2.5, 2.8, 2.9, 3.0,
          2.8, 3.0, 2.9, 2.6, 2.4, 2.4, 2.7, 2.7, 3.0, 3.4, 3.1, 2.3, 3.0,
          2.5, 2.6, 3.0, 2.6, 2.3, 2.7, 3.0, 2.9, 2.9, 2.5, 2.8,
        ],
        [
          'setosa',
          0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1,
          0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2,
          0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2,
          0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2,
        ],
        [
          'versicolor',
          1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0,
          1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4,
          1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3,
          1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3,
        ],
      ],
      type: 'scatter',
      header: 'Scatter chart',
    },
  ];

  gauge = 10;
  private interval: any;

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.gauge = this.nextGauge();
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  private nextGauge(): number {
    switch (this.gauge) {
      case 10:
        return 50;
      case 50:
        return 70;
      case 70:
        return 0;
      case 0:
        return 100;
      case 100:
      default:
        return 10;
    }
  }
}
