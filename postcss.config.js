module.exports = {
    plugins: {
      'postcss-pxtorem': {
        rootValue: 75,  //设置根元素字体大小，根据设计图尺寸比如750就写成75
        propList: ['*'],  //可以从px更改到rem的属性。
        exclude: /node_modules/i,  //排除node_modules目录
        selectorBlackList: ['vant-', '.my-'], //过滤掉vant-开头的元素选择器、  .my-开头的类选择器
      },
    },
  };