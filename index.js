function showCurrentTime() {
    let currentTimeElement = document.getElementById('currentTime');
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
  
    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;
  
    let formattedTime = hours + ':' + minutes + ':' + seconds;
    currentTimeElement.innerHTML = 'Current Time: ' + formattedTime;

    setTimeout(showCurrentTime, 1000);
  }
  