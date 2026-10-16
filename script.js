 function startTime() {
      const today = new Date();
      let h = today.getHours();
      let m = today.getMinutes();
      let s = today.getSeconds();
      m = checkTime(m);
      s = checkTime(s);
      document.getElementById('txt').textContent = `${h}:${m}:${s}`;
      setTimeout(startTime, 500);
    }

    function checkTime(i) {
      return i < 10 ? "0" + i : i;
    }