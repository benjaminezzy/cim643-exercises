let allDots = document.getElementsByClassName('dot');
const dots = Array.from(allDots);

for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener('click', makeActive2);
}

function makeActive() {
  console.log(this.id);
  if (this.id == 'dot2') {
    const dot1 = document.getElementById('dot1');
    dot1.classList.remove('dot_active');
    this.classList.add('dot_active');
  } else {
    console.log('hi');
  }
}

function makeActive2() {
  const aClassList = Array.from(this.classList);
  console.log(aClassList, aClassList.includes('dot_active'));

  if (aClassList.includes('dot_active')) {
    console.log('hi again');
  } else {
    let previouslyActive = document.getElementsByClassName('dot_active');
    previouslyActive[0].classList.remove('dot_active');
    this.classList.add('dot_active');


    let hidden = document.getElementsByClassName('hidden');
    console.log(hidden);
    hidden[0].classList.remove('hidden');

    if (this.id == 'dot2') {
      let toHide = document.getElementById('content1');
      toHide.classList.add('hidden');
    } else if (this.id == 'dot1') {
      let toHide = document.getElementById('content2');
      toHide.classList.add('hidden');
    }
  }
}
