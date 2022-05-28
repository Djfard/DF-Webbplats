window.onscroll = function() {myFunction()};

    const counters = document.querySelectorAll(".count");
    const speed = 100;

    counters.forEach((counter) => {
    const updateCount = () => {
    const target = parseInt(+counter.getAttribute("data-target"));
    const count = parseInt(+counter.innerText);
    const increment = Math.trunc((target / speed)) + 1;
    console.log(increment);

    if (count < target) {
      counter.innerText = count + increment;
      setTimeout(updateCount, 1);
    } else {
      count.innerText = target;
    }
  };
  updateCount();
    });

$('[data-spy="scroll"]').on('activate.bs.scrollspy', function () {
    

$('body').scrollspy({ target: '#navbar-example' })})