const path = require('path');  

module.exports = {

  entry: './js/app.js',  
  output: {              
    filename: '[name].[contenthash].js',                                                                
    path: path.resolve(__dirname, 'public'), 
  },
  devtool: 'source-map',
  module:{
      rules: [

      ]
  },
  plugins: [
  ]
};



const path = require('path');  //import path module

module.exports = {

  entry: './js/app.js',  // 'entry' : Where I write code
  output: {              // 'output' : Compilate my code
    filename: '[name].[chunkhash:8].js', // CASH BUSTING - result is main.84612564.js, reason why we do this is that browser handle 'main.js' in memory (cash).
                                        // Every time when I save my js code, roll over old main.js
                                       // Browser will not be download same main.js foler, so we oblige browser download a new main.js floder 

    path: path.resolve(__dirname, 'public'), //Find absolute path in to the public folder
  },
  devtool: 'source-map', // When my main.js is minified, all code is only 1 line. If I have fault in my code 'source-map' help me better find error
  module: {
      rules: [
      ]
  },
  plugins: [
  ]
};

