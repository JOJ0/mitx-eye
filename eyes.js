    var eyes = document.getElementsByClassName("eyes");
    console.log("eyes", eyes);
    for (let i = 0; i < 2; i++) {
      let eye = document.createElement('div');
      eye.id = 'eye' + i
      eye.classList.add('eye');
      eye.style.border = 'solid;'
      eyes[0].appendChild(eye);

      let ball = document.createElement('div');
      ball.id = 'ball' + i
      ball.classList.add('ball');
      ball.style.border = 'solid;'
      eye.appendChild(ball);
    }

    var balls = document.getElementsByClassName("ball");
    document.onmousemove = () => {
      var x = (event.clientX * 100) / window.innerWidth + "%";
      var y = (event.clientY * 100) / window.innerHeight + "%";

      for (let i = 0; i < 2; i++) {
        balls[i].style.left = x;
        balls[i].style.top = y;
        balls[i].transfoorm = "translate(-" + x + ",-" + y + ")";
      }
    };
