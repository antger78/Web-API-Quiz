function startCountdown(seconds) {
    let counter = seconds;
      
    const interval = setInterval(() => {
      console.log(counter);
      counter--;
        
      if (counter < 0 ) {
        clearInterval(interval);
        console.log('Ding!');
      }
    }, 1000);
  };