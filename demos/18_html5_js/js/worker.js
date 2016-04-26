self.addEventListener('message', function(e) {
  switch (e.data.cmd) {
    case 'start':
      self.postMessage({msg: "[POST FROM WORKER] Okay, I'm starting"});
      // simple PI calculation algorithm
  		var pi = 0;
  		var n = 1;
  		for (i = 0; i <= e.data.cycles; i++) {
  			pi = pi + (4 / n) - (4 / (n + 2))
  			n = n + 4
        if (n % 40 == 1) self.postMessage({result: pi});
  		}
      self.postMessage({msg: "[POST FROM WORKER] Finished"});
      break;
    case 'die':
      self.postMessage({msg: "[POST FROM WORKER] Aargh!! (worker died; buttons won't work anymore)"});
      self.close();
      break;
    default:
      self.postMessage('Unknown command');
  };
}, false);


