/*
* @Author: Administrator
* @Date:   2018-01-02 18:33:26
* @Last Modified by:   Administrator
* @Last Modified time: 2018-01-02 18:35:07
*/
 import _ from 'lodash';
 import printMe from './print.js';

  function component() {
    var element = document.createElement('div');
   var btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

   btn.innerHTML = 'Click me and check the console!';
   btn.onclick = printMe;

   element.appendChild(btn);

    return element;
  }

  document.body.appendChild(component());
