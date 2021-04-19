

function makeActive() {
  console.log(this.id);
  if (this.id == 'switch') {
    const dot1 = document.getElementById('switch');
    dot1.classList.remove('switch_active');
    this.classList.add('switch_active');
  } else {
    console.log('hi');
  }
}

function makeActive2() {
  const aClassList = Array.from(this.classList);
  console.log(aClassList, aClassList.includes('switch_active'));

  if (aClassList.includes('switch_active')) {
    console.log('hi again');
  } else {
    let previouslyActive = document.getElementsByClassName('switch_active');
    previouslyActive[0].classList.remove('switch_active');
    this.classList.add('switch_active');


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
