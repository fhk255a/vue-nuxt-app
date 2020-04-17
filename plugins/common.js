import Vue from 'vue';
const config = {
  timer(timer, fmStr="yyyy-mm-dd hh:MM:ss"){
    let time = new Date(timer);
    const weekCN = '一二三四五六日';
    const weekEN = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
    let year = time.getFullYear();
    let month = time.getMonth() + 1;
    let day = time.getDate();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let milliSeconds = time.getMilliseconds();
    let week = time.getDay();
  
    month = month >= 10 ? month : ('0' + month);
    day = day >= 10 ? day : ('0' + day);
    hours = hours >= 10 ? hours : ('0' + hours);
    minutes = minutes >= 10 ? minutes : ('0' + minutes);
    seconds = seconds >= 10 ? seconds : ('0' + seconds);
  
    if (fmStr.indexOf('yyyy') !== -1) {
      fmStr = fmStr.replace('yyyy', year);
    } else {
      fmStr = fmStr.replace('yy', (year + '').slice(2));
    }
    fmStr = fmStr.replace('mm', month);
    fmStr = fmStr.replace('dd', day);
    fmStr = fmStr.replace('hh', hours);
    fmStr = fmStr.replace('MM', minutes);
    fmStr = fmStr.replace('ss', seconds);
    fmStr = fmStr.replace('SSS', milliSeconds);
    fmStr = fmStr.replace('W', weekCN[week - 1]);
    fmStr = fmStr.replace('ww', weekEN[week - 1]);
    fmStr = fmStr.replace('w', week);
  
    return fmStr;
  }
}

Vue.prototype.config = config;