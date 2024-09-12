import { Component } from 'react'
import ReactApexChart from 'react-apexcharts'

class ApexChartPie extends Component {
  constructor(props) {
    super(props)

    this.state = {
      series: [44, 55, 1, 43, 22],
      options: {
        plotOptions: {
          pie: {
            dataLabels: {
              enabled: true,
              offsetx: -100,
              minAngleToShowLabel: 0
            }
          }
        },
        dataLabels: {
          background: {
            enabled: true,
            foreColor: '#000',
            padding: 4,
            borderRadius: 2,
            borderWidth: 1,
            borderColor: '#fff',
            opacity: 0.9,
            dropShadow: {
              enabled: false,
              top: 1,
              left: 1,
              blur: 1,
              color: '#000',
              opacity: 0.45
            }
          },
          dropShadow: {
            enabled: false,
            top: 1,
            left: 1,
            blur: 1,
            color: '#000',
            opacity: 0.45
          },

          formatter: (val, opts) => {
            return (
              opts.w.config.labels[opts.seriesIndex] +
              ' - ' +
              opts.w.config.series[opts.seriesIndex]
            )
          }
        },
        grid: {
          padding: {
            left: 10,
            top: 7,
            bottom: 10
          }
        },
        chart: {
          width: 480,
          type: 'pie'
        },
        labels: ['Max Plus - Orange', 'Candy', 'Potato Chip', 'Cocacola', 'Cheese Ball'],
        legend: {
          show: false,
          position: 'bottom',
          fontWeight: 600
        },
        responsive: [
          {
            breakpoint: 2000,
            options: {
              chart: {
                width: 480
              },
              grid: {
                padding: {
                  left: 70
                }
              }
            }
          },
          {
            breakpoint: 1800,
            options: {
              chart: {
                width: 385
              },
              grid: {
                padding: {
                  left: 0
                }
              }
            }
          },
          {
            breakpoint: 1500,
            options: {
              chart: {
                width: 370
              }
            }
          },
          {
            breakpoint: 1400,
            options: {
              chart: {
                width: 330
              },
              grid: {
                padding: {
                  left: -10
                }
              }
            }
          },
          {
            breakpoint: 1300,
            options: {
              chart: {
                width: 300
              },
              grid: {
                padding: {
                  left: -20
                }
              }
            }
          },
          {
            breakpoint: 1200,
            options: {
              chart: {
                width: 270
              },
              grid: {
                padding: {
                  left: 0
                }
              }
            }
          },
          {
            breakpoint: 1090,
            options: {
              chart: {
                width: 250
              },
              grid: {
                padding: {
                  left: -10
                }
              }
            }
          },
          {
            breakpoint: 950,
            options: {
              chart: {
                width: 250
              },
              grid: {
                padding: {
                  left: -10
                }
              }
            }
          }
        ]
      }
    }
  }

  render() {
    return (
      <div>
        <div id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="pie" />
        </div>
      </div>
    )
  }
}

export default ApexChartPie
