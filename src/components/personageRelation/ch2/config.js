let emphasis = {
  label: {
    show: true,
    position: "left",
    formatter: function (params) {
      return params.value;
    },
    distance: -5,
    rotate: 0,
    fontWeight: "bold",
    fontSize: 13,
    borderColor: "orange",
    borderWidth: 1,
    padding: 5,
    borderRadius: 3,
    backgroundColor: "#fff",
    width: 30,
    height: 15,
  },
}


export default {
  data: [
    {
      name: "王颂蔚",
      symbolSize: 12,
      itemStyle: {
        normal: {
          color: "#fff",
        },
      },
    },
    {
      name: "刘师培",
      symbolSize: 12,
      itemStyle: {
        normal: {
          color: "#fff",
        },
      },
    },
    {
      name: "赵之谦",
      symbolSize: 12,
      itemStyle: {
        normal: {
          color: "#fff",
        },
      },
    },
    {
      name: "管礼耕",
      symbolSize: 12,
      itemStyle: {
        normal: {
          color: "#fff",
        },
      },
    },
    {
      name: "孙中山",
      symbolSize: 12,
      itemStyle: {
        normal: {
          color: "#fff",
        },
      },
    },
    {
      name: "梁启超",
      symbolSize: 12,
      itemStyle: {
        normal: {
          color: "#fff",
        },
      },
    },
    {
      name: "林则徐",
      symbolSize: 12,
      itemStyle: {
        normal: {
          color: "#fff",
        },
      },
    },
    {
      name: "倪节孝君",
      symbolSize: 12,
      itemStyle: {
        normal: {
          color: "#fff",
        },
      },
    },
    {
      name: "沈谨学",
      symbolSize: 12,
      itemStyle: {
        normal: {
          color: "#fff",
        },
      },
    },
    {
      name: "范烟桥",
      symbolSize: 12,
      itemStyle: {
        normal: {
          color: "#fff",
        },
      },
    },
    {
      name: "高旭",
      symbolSize: 40,
      itemStyle: {
        normal: {
          color: "#95683f",
        },
      },
    },
    {
      name: "金松岑",
      symbolSize: 12,
      itemStyle: {
        normal: {
          color: "#fff",
        },
      },
    },
    {
      name: "陆荣廷",
      symbolSize: 12,
      itemStyle: {
        normal: {
          color: "#fff",
        },
      },
    },
    {
      name: "张之洞",
      symbolSize: 12,
      itemStyle: {
        normal: {
          color: "#fff",
        },
      },
    },
    {
      name: "李根源",
      symbolSize: 40,
      itemStyle: {
        normal: {
          color: "#ad9d86",
        },
      },
    },
    {
      name: "陈去病",
      symbolSize: 40,
      itemStyle: {
        normal: {
          color: "#cf9b62",
        },
      },
    },
    {
      name: "贝青乔",
      symbolSize: 40,
      itemStyle: {
        normal: {
          color: "#773e37",
        },
      },
    },
    {
      name: "江湜",
      symbolSize: 40,
      itemStyle: {
        normal: {
          color: "#a28064",
        },
      },
    },
    {
      name: "翁同龢",
      symbolSize: 40,
      itemStyle: {
        normal: {
          color: "#c6bcb0",
        },
      },
    },
    {
      name: "曾朴",
      symbolSize: 40,
      itemStyle: {
        normal: {
          color: "#83642e",
        },
      },
    },
    {
      name: "叶昌炽",
      symbolSize: 40,
      itemStyle: {
        normal: {
          color: "#95683f",
        },
      },
    },
    {
      name: "潘祖荫",
      symbolSize: 40,
      itemStyle: {
        normal: {
          color: "#ad9d86",
        },
      },
    },
    {
      name: "潘遵祁",
      symbolSize: 40,
      itemStyle: {
        normal: {
          color: "#cf9b62",
        },
      },
    },
    {
      name: "冯桂芬",
      symbolSize: 40,
      itemStyle: {
        normal: {
          color: "#c6bcb0",
        },
      },
    },
    {
      name: "俞樾",
      symbolSize: 12,
      itemStyle: {
        normal: {
          color: "#fff",
        },
      },
    },
    {
      name: "许鹤巢",
      symbolSize: 12,
      itemStyle: {
        normal: {
          color: "#fff",
        },
      },
    },
    {
      name: "柳亚子",
      symbolSize: 12,
      itemStyle: {
        normal: {
          color: "#fff",
        },
      },
    },
    {
      name: "章太炎",
      symbolSize: 12,
      itemStyle: {
        normal: {
          color: "#fff",
        },
      },
    },
    {
      name: "李鸿章",
      symbolSize: 12,
      itemStyle: {
        normal: {
          color: "#fff",
        },
      },
    },
    {
      name: "苏曼殊",
      symbolSize: 12,
      itemStyle: {
        normal: {
          color: "#fff",
        },
      },
    },
    {
      name: "沈北山",
      symbolSize: 12,
      itemStyle: {
        normal: {
          color: "#fff",
        },
      },
    },
    {
      name: "潘世恩",
      symbolSize: 12,
      itemStyle: {
        normal: {
          color: "#fff",
        },
      },
    },
    {
      name: "潘曾莹",
      symbolSize: 12,
      itemStyle: {
        normal: {
          color: "#fff",
        },
      },
    },
    {
      name: "陆润庠",
      symbolSize: 12,
      itemStyle: {
        normal: {
          color: "#fff",
        },
      },
    },
    {
      name: "王鹏运",
      symbolSize: 12,
      itemStyle: {
        normal: {
          color: "#fff",
        },
      },
    },
  ],
  links: [
    {
      source: "叶昌炽",
      target: "潘祖荫",
      value: '友人',
      symbolSize: [5, 10],
      emphasis: emphasis,
      lineStyle: {
        normal: {
          width: 1.0,
          curveness: 0.2,
          color: "#f56e12",
        },
      },
    },
    {
      source: "潘遵祁",
      target: "叶昌炽",
      value: "门人",
      symbolSize: [5, 10],
      emphasis: emphasis,
      lineStyle: {
        normal: {
          width: 1.0,
          curveness: 0.2,
          color: "#f56e12",
        },
      },
    },
    {
      source: "陆润庠",
      target: "叶昌炽",
      value: "友人",
      symbolSize: [5, 10],
      emphasis: emphasis,
      lineStyle: {
        normal: {
          width: 1.0,
          curveness: 0.2,
          color: "#f56e12",
        },
      },
    },
    {
      source: "王颂蔚",
      target: "叶昌炽",
      value: "友人",
      symbolSize: [5, 10],
      emphasis: emphasis,
      lineStyle: {
        normal: {
          width: 1.0,
          curveness: 0.2,
          color: "#f6e",
        },
      },
    },
    {
      source: "潘遵祁",
      target: "许鹤巢",
      value: "友人",
      symbolSize: [5, 10],
      emphasis: emphasis,
      lineStyle: {
        normal: {
          width: 1.0,
          curveness: 0.2,
          color: "#f56e12",
        },
      },
    },
    {
      source: "冯桂芬",
      target: "许鹤巢",
      value: "友人",
      symbolSize: [5, 10],
      emphasis: emphasis,
      lineStyle: {
        normal: {
          width: 1.0,
          curveness: 0.2,
          color: "#f56e12",
        },
      },
    },
    {
      source: "陆润庠",
      target: "许鹤巢",
      value: "师长",
      symbolSize: [5, 10],
      emphasis: emphasis,
      lineStyle: {
        normal: {
          width: 1.0,
          curveness: 0.2,
          color: "#f5c312",
        },
      },
    },
    {
      source: "李根源",
      target: "章太炎",
      value: "友人",
      symbolSize: [5, 10],
      emphasis: emphasis,
      lineStyle: {
        normal: {
          width: 1.0,
          curveness: 0.2,
          color: "#f5c312",
        },
      },
    },
    {
      source: "高旭",
      target: "章太炎",
      value: "友人",
      symbolSize: [5, 10],
      emphasis: emphasis,
      lineStyle: {
        normal: {
          width: 1.0,
          curveness: 0.2,
          color: "#f5c312",
        },
      },
    },
    {
      source: "陈去病",
      target: "章太炎",
      value: "友人",
      symbolSize: [5, 10],
      emphasis: emphasis,
      lineStyle: {
        normal: {
          width: 1.0,
          curveness: 0.2,
          color: "#f5c312",
        },
      },
    },
    {
      source: "柳亚子",
      target: "章太炎",
      value: "师长",
      symbolSize: [5, 10],
      emphasis: emphasis,
      tooltip: {},
      lineStyle: {
        normal: {
          width: 1.0,
          curveness: 0.2,
          color: "#f5c312",
        },
      },
    },
    {
      source: "俞樾",
      target: "章太炎",
      value: "门生",
      symbolSize: [5, 10],
      emphasis: emphasis,
      lineStyle: {
        normal: {
          width: 1.0,
          curveness: 0.2,
          color: "#6ac439",
        },
      },
    },
    {
      source: "翁同龢",
      target: "俞樾",
      value: "友人",
      symbolSize: [5, 10],
      emphasis: emphasis,
      lineStyle: {
        normal: {
          width: 1.0,
          curveness: 0.2,
          color: "#6ac439",
        },
      },
    },
    {
      source: "潘祖荫",
      target: "俞樾",
      value: "友人",
      symbolSize: [5, 10],
      emphasis: emphasis,
      lineStyle: {
        normal: {
          width: 1.0,
          curveness: 0.2,
          color: "#6c70c0",
        },
      },
    },
    {
      source: "冯桂芬",
      target: "俞樾",
      value: "友人",
      symbolSize: [5, 10],
      emphasis: emphasis,
      lineStyle: {
        normal: {
          width: 1.0,
          curveness: 0.2,
          color: "#39c4bf",
        },
      },
    },
    {
      source: "陈去病",
      target: "李鸿章",
      value: "友人",
      symbolSize: [5, 10],
      emphasis: emphasis,
      lineStyle: {
        normal: {
          width: 1.0,
          curveness: 0.2,
          color: "#39c4bf",
        },
      },
    },
    {
      source: "冯桂芬",
      target: "李鸿章",
      value: "友人",
      symbolSize: [5, 10],
      emphasis: emphasis,
      lineStyle: {
        normal: {
          width: 1.0,
          curveness: 0.2,
          color: "#39c4bf",
        },
      },
    },
    {
      source: "曾朴",
      target: "翁同龢",
      value: "友人",
      symbolSize: [5, 10],
      emphasis: emphasis,
      lineStyle: {
        normal: {
          width: 1.0,
          curveness: 0.2,
          color: "#39c4bf",
        },
      },
    },
    {
      source: "许鹤巢",
      target: "翁同龢",
      value: "友人",
      symbolSize: [5, 10],
      emphasis: emphasis,
      lineStyle: {
        normal: {
          width: 1.0,
          curveness: 0.2,
          color: "#2a1469",
        },
      },
    },
    {
      source: "陈去病",
      target: "高旭",
      value: "友人",
      symbolSize: [5, 10],
      emphasis: emphasis,
      lineStyle: {
        normal: {
          width: 1.0,
          curveness: 0.2,
          color: "#2a1469",
        },
      },
    },
    {
      source: "柳亚子",
      target: "高旭",
      value: "友人",
      symbolSize: [5, 10],
      emphasis: emphasis,
      lineStyle: {
        normal: {
          width: 1.0,
          curveness: 0.2,
          color: "#2a1469",
        },
      },
    },
    {
      source: "高旭",
      target: "苏曼殊",
      value: "友人",
      symbolSize: [5, 10],
      emphasis: emphasis,
      lineStyle: {
        normal: {
          width: 1.0,
          curveness: 0.2,
          color: "#2a1469",
        },
      },
    },
    {
      source: "陈去病",
      target: "苏曼殊",
      value: "友人",
      symbolSize: [5, 10],
      emphasis: emphasis,
      lineStyle: {
        normal: {
          width: 1.0,
          curveness: 0.2,
          color: "#2a1469",
        },
      },
    },
    {
      source: "柳亚子",
      target: "陈去病",
      value: "友人",
      symbolSize: [5, 10],
      emphasis: emphasis,
      lineStyle: {
        normal: {
          width: 1.0,
          curveness: 0.2,
          color: "#2a1469",
        },
      },
    },
    {
      source: "高旭",
      target: "刘师培",
      value: "友人",
      symbolSize: [5, 10],
      emphasis: emphasis,
      lineStyle: {
        normal: {
          width: 1.0,
          curveness: 0.2,
          color: "#2a1469",
        },
      },
    },
    {
      source: "陈去病",
      target: "刘师培",
      value: "友人",
      symbolSize: [5, 10],
      emphasis: emphasis,
      lineStyle: {
        normal: {
          width: 1.0,
          curveness: 0.2,
          color: "#2a1469",
        },
      },
    },
    {
      source: "柳亚子",
      target: "刘师培",
      value: "友人",
      symbolSize: [5, 10],
      emphasis: emphasis,
      lineStyle: {
        normal: {
          width: 1.0,
          curveness: 0.2,
          color: "#2a1469",
        },
      },
    },
    {
      source: "江湜",
      target: "赵之谦",
      value: "友人",
      symbolSize: [5, 10],
      emphasis: emphasis,
      lineStyle: {
        normal: {
          width: 1.0,
          curveness: 0.2,
          color: "#2a1469",
        },
      },
    },
    {
      source: "潘祖荫",
      target: "赵之谦",
      value: "友人",
      symbolSize: [5, 10],
      emphasis: emphasis,
      lineStyle: {
        normal: {
          width: 1.0,
          curveness: 0.2,
          color: "#2a1469",
        },
      },
    },
    {
      source: "许鹤巢",
      target: "赵之谦",
      value: "友人",
      symbolSize: [5, 10],
      emphasis: emphasis,
      lineStyle: {
        normal: {
          width: 1.0,
          curveness: 0.2,
          color: "#2a1469",
        },
      },
    },
    {
      source: "叶昌炽",
      target: "管礼耕",
      value: "友人",
      symbolSize: [5, 10],
      emphasis: emphasis,
      lineStyle: {
        normal: {
          width: 1.0,
          curveness: 0.2,
          color: "#2a1469",
        },
      },
    },
    {
      source: "冯桂芬",
      target: "管礼耕",
      value: "师长",
      symbolSize: [5, 10],
      emphasis: emphasis,
      lineStyle: {
        normal: {
          width: 1.0,
          curveness: 0.2,
          color: "#2a1469",
        },
      },
    },
    {
      source: "王颂蔚",
      target: "管礼耕",
      value: "友人",
      symbolSize: [5, 10],
      emphasis: emphasis,
      lineStyle: {
        normal: {
          width: 1.0,
          curveness: 0.2,
          color: "#2a1469",
        },
      },
    },
    {
      source: "冯桂芬",
      target: "王颂蔚",
      value: "门人",
      symbolSize: [5, 10],
      emphasis: emphasis,
      lineStyle: {
        normal: {
          width: 1.0,
          curveness: 0.2,
          color: "#2a1469",
        },
      },
    },
    {
      source: "许鹤巢",
      target: "潘祖荫",
      value: "友人",
      symbolSize: [5, 10],
      emphasis: emphasis,
      lineStyle: {
        normal: {
          width: 1.0,
          curveness: 0.2,
          color: "#2a1469",
        },
      },
    },
    // 潘遵祁
    {
      source: "潘遵祁",
      target: "潘祖荫",
      value: "表叔",
      symbolSize: [5, 10],
      emphasis: emphasis,
      lineStyle: {
        normal: {
          width: 1.0,
          curveness: 0.2,
          color: "#2a1469",
        },
      },
    },
    {
      source: "潘遵祁",
      target: "陆润庠",
      value: "友人",
      symbolSize: [5, 10],
      emphasis: emphasis,
      lineStyle: {
        normal: {
          width: 1.0,
          curveness: 0.2,
          color: "#2a1469",
        },
      },
    },
    // 孙中山
    {
      source: "陈去病",
      target: "孙中山",
      value: "友人",
      symbolSize: [5, 10],
      emphasis: emphasis,
      lineStyle: {
        normal: {
          width: 1.0,
          curveness: 0.2,
          color: "#2a1469",
        },
      },
    },
    // 金松岑
    {
      source: "李根源",
      target: "金松岑",
      value: "友人",
      symbolSize: [5, 10],
      emphasis: emphasis,
      lineStyle: {
        normal: {
          width: 1.0,
          curveness: 0.2,
          color: "#2a1469",
        },
      },
    },
    {
      source: "陈去病",
      target: "金松岑",
      value: "友人",
      symbolSize: [5, 10],
      emphasis: emphasis,
      lineStyle: {
        normal: {
          width: 1.0,
          curveness: 0.2,
          color: "#2a1469",
        },
      },
    },
    // 范烟桥
    {
      source: "李根源",
      target: "范烟桥",
      value: "友人",
      symbolSize: [5, 10],
      emphasis: emphasis,
      lineStyle: {
        normal: {
          width: 1.0,
          curveness: 0.2,
          color: "#2a1469",
        },
      },
    },
    {
      source: "陈去病",
      target: "范烟桥",
      value: "友人",
      symbolSize: [5, 10],
      emphasis: emphasis,
      lineStyle: {
        normal: {
          width: 1.0,
          curveness: 0.2,
          color: "#2a1469",
        },
      },
    },
    // 梁启超
    {
      source: "李根源",
      target: "梁启超",
      value: "友人",
      symbolSize: [5, 10],
      emphasis: emphasis,
      lineStyle: {
        normal: {
          width: 1.0,
          curveness: 0.2,
          color: "#2a1469",
        },
      },
    },
    {
      source: "翁同龢",
      target: "梁启超",
      value: "友人",
      symbolSize: [5, 10],
      emphasis: emphasis,
      lineStyle: {
        normal: {
          width: 1.0,
          curveness: 0.2,
          color: "#2a1469",
        },
      },
    },
    // 陆荣廷
    {
      source: "李根源",
      target: "陆荣廷",
      value: "友人",
      symbolSize: [5, 10],
      emphasis: emphasis,
      lineStyle: {
        normal: {
          width: 1.0,
          curveness: 0.2,
          color: "#2a1469",
        },
      },
    },
    {
      source: "陈去病",
      target: "陆荣廷",
      value: "友人",
      symbolSize: [5, 10],
      emphasis: emphasis,
      lineStyle: {
        normal: {
          width: 1.0,
          curveness: 0.2,
          color: "#2a1469",
        },
      },
    },
    // 倪节孝君
    {
      source: "陈去病",
      target: "倪节孝君",
      value: "母亲(师长)",
      symbolSize: [5, 10],
      emphasis: emphasis,
      lineStyle: {
        normal: {
          width: 1.0,
          curveness: 0.2,
          color: "#2a1469",
        },
      },
    },
    // 林则徐
    {
      source: "贝青乔",
      target: "林则徐",
      value: "师生",
      symbolSize: [5, 10],
      emphasis: emphasis,
      lineStyle: {
        normal: {
          width: 1.0,
          curveness: 0.2,
          color: "#2a1469",
        },
      },
    },
    {
      source: "冯桂芬",
      target: "林则徐",
      value: "门人",
      symbolSize: [5, 10],
      emphasis: emphasis,
      lineStyle: {
        normal: {
          width: 1.0,
          curveness: 0.2,
          color: "#2a1469",
        },
      },
    },
    // 沈谨学
    {
      source: "贝青乔",
      target: "沈谨学",
      value: "友人",
      symbolSize: [5, 10],
      emphasis: emphasis,
      lineStyle: {
        normal: {
          width: 1.0,
          curveness: 0.2,
          color: "#2a1469",
        },
      },
    },
    {
      source: "江湜",
      target: "沈谨学",
      value: "友人",
      symbolSize: [5, 10],
      emphasis: emphasis,
      lineStyle: {
        normal: {
          width: 1.0,
          curveness: 0.2,
          color: "#2a1469",
        },
      },
    },
    // 沈北山
    {
      source: "翁同龢",
      target: "沈北山",
      value: "门人",
      symbolSize: [5, 10],
      emphasis: emphasis,
      lineStyle: {
        normal: {
          width: 1.0,
          curveness: 0.2,
          color: "#2a1469",
        },
      },
    },
    {
      source: "曾朴",
      target: "沈北山",
      value: "友人",
      symbolSize: [5, 10],
      emphasis: emphasis,
      lineStyle: {
        normal: {
          width: 1.0,
          curveness: 0.2,
          color: "#2a1469",
        },
      },
    },
    // 张之洞
    {
      source: "翁同龢",
      target: "张之洞",
      value: "友人",
      symbolSize: [5, 10],
      emphasis: emphasis,
      lineStyle: {
        normal: {
          width: 1.0,
          curveness: 0.2,
          color: "#2a1469",
        },
      },
    },
    {
      source: "潘祖荫",
      target: "张之洞",
      value: "友人",
      symbolSize: [5, 10],
      emphasis: emphasis,
      lineStyle: {
        normal: {
          width: 1.0,
          curveness: 0.2,
          color: "#2a1469",
        },
      },
    },
    // 潘世恩
    {
      source: "潘祖荫",
      target: "潘世恩",
      value: "祖父",
      symbolSize: [5, 10],
      emphasis: emphasis,
      lineStyle: {
        normal: {
          width: 1.0,
          curveness: 0.2,
          color: "#2a1469",
        },
      },
    },
    {
      source: "冯桂芬",
      target: "潘世恩",
      value: "友人",
      symbolSize: [5, 10],
      emphasis: emphasis,
      lineStyle: {
        normal: {
          width: 1.0,
          curveness: 0.2,
          color: "#2a1469",
        },
      },
    },
    // 潘曾莹
    {
      source: "潘祖荫",
      target: "潘曾莹",
      value: "二伯",
      symbolSize: [5, 10],
      emphasis: emphasis,
      lineStyle: {
        normal: {
          width: 1.0,
          curveness: 0.2,
          color: "#2a1469",
        },
      },
    },
    {
      source: "陆润庠",
      target: "潘曾莹",
      value: "友人",
      symbolSize: [5, 10],
      emphasis: emphasis,
      lineStyle: {
        normal: {
          width: 1.0,
          curveness: 0.2,
          color: "#2a1469",
        },
      },
    },
    // 王鹏运
    {
      source: "许鹤巢",
      target: "王鹏运",
      value: "友人",
      symbolSize: [5, 10],
      emphasis: emphasis,
      lineStyle: {
        normal: {
          width: 1.0,
          curveness: 0.2,
          color: "#2a1469",
        },
      },
    },
  ],
}