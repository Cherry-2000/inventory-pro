export const ProfitChartOptions = {
  responsive: true,
  scales: {
    x: {
      ticks: {
        color: 'rgba(126, 153, 158)'
      },
      grid: {
        color: 'rgba(126, 153, 158, 0.3)'
      }
    },
    y: {
      ticks: {
        color: 'rgba(126, 153, 158)'
      },
      grid: {
        color: 'rgba(126, 153, 158, 0.2)'
      }
    }
  },

  layout: {
    padding: {
      left: 5,
      bottom: 30
    }
  },
  interaction: {
    intersect: false,
    mode: 'nearest',
    axis: 'xy'
  },
  elements: {
    line: {
      tension: 0.3
    }
  },
  maintainAspectRatio: false,

  plugins: {
    filler: {
      propagate: true
    },
    legend: {
      position: 'top'
    },
    title: {
      display: false,
      text: 'Sale'
    }
  }
}

export const InventoryChartOptions = {
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    x: {
      ticks: {
        autoSkip: false,
        maxRotation: 90,
        minRotation: 90,
        color: 'rgba(126, 153, 158)',
        font: {
          size: 9
        }
      },
      grid: {
        color: 'rgba(126, 153, 158, 0.2)'
      }
    },
    y: {
      ticks: {
        color: 'rgba(126, 153, 158)'
      },
      grid: {
        color: 'rgba(126, 153, 158, 0.1)'
      }
    }
  },
  layout: {
    padding: {
      left: 20,
      right: 20,
      bottom: 10,
      top: 10
    }
  },
  plugins: {
    legend: {
      
    },
    title: {
      display: false,
      text: 'Chart.js Bar Chart',
      color: 'rgba(126, 153, 158)'
    }
  }
}
