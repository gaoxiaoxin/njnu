const baseData = {
  categories: [
    {
      "name": "本人"
    },
    {
      "name": "亲族"
    },
    {
      "name": "师生"
    },
    {
      "name": "友人"
    }
  ],
  links: [
    {
      "source": "0",
      "target": "1"
    },
    {
      "source": "7",
      "target": "8",
      "label": {
        "show": true
      },
      "lineStyle": {
        "width": 3,
        "color": "gray"
      }
    },
    {
      "source": "7",
      "target": "10",
      "label": {
        "show": true
      },
      "lineStyle": {
        "width": 3,
        "color": "gray"
      }
    },
    {
      "source": "9",
      "target": "7",
      "label": {
        "show": true
      },
      "lineStyle": {
        "width": 3,
        "color": "#333"
      }
    },
    {
      "source": "9",
      "target": "7",
      "label": {
        "show": true,
        formatter: function () {
          return '老师'
        }
      },
      "lineStyle": {
        "width": 3,
        "color": "#333"
      }
    }
  ]
}

export default baseData