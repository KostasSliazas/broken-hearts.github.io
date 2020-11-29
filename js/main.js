'use strict';
(function () {
  const c = document.createDocumentFragment() /* sukurti dokumento fragmeta */
  const dos = document.getElementsByClassName('stuf')[0] /* pasiekti pagrindini zaidimo langa */
  const num = 10 /* sardeliu skaicius */
  let counts = 0 /* skaiciavimams  */
  const len = document.getElementsByClassName('hart')
  let levelis = 5
  let levelCount = 1
  let numberClicks = 100
  let playstate = false
  const pergale = document.getElementById('pergale')
  /* patikrinam ar matosi function */
  function isHidden (el) {
    return el.offsetParent === null
  }
  /* random skaicius generavimui */
  function randInt (max) {
    return Math.floor(Math.random() * Math.floor(max) + 1)
  }

  function getEl () {
    for (let i = 0; i < num; i++) {
      const hart = document.getElementsByClassName('hart')[i]
      if (!isHidden(hart)) {
        return false
      }
    }
    return true
  }
  /* sukurti sardeles */
  function lod () {
    const e = document.createElement('div')
    e.className = 'hart'
    e.style.display = 'none'
    c.appendChild(e)
    dos.appendChild(c)
    e.style.top = randInt(10) + '%'
    e.style.left = randInt(50) + '%'
    e.onclick = destroy
  };

  function destroy () {
    counts++
    document.getElementById('count').innerText = counts
    this.style.display = 'none'
    if (getEl()) {
      levelCount++
      levelis += levelis
      console.log(levelis)
      if (levelis === 80) {
        pergale.style.display = 'block'
        pergale.innerHTML = 'WINER!'
        levelCount = 1
        levelis = 10
      };
      document.getElementById('play').style.display = 'block'
    };
    texts()
    document.getElementById('omg').className = 'show'
    const setT = setTimeout(function () {
      document.getElementById('omg').classList.remove('show')
      clearTimeout(setT)
    }, 2000)
  };

  function texts () {
    const tex = document.getElementById('omg')
    let sw = 0
    if (getEl()) {
      sw = 6
    } else {
      sw = randInt(5)
    }
    switch (sw) {
      case 1:
        tex.innerText = 'Nice!'
        break
      case 2:
        tex.innerText = 'COOL!'
        break
      case 3:
        tex.innerText = 'Perfect'
        break
      case 4:
        tex.innerText = 'Super!'
        break
      case 5:
        tex.innerText = 'yeah!'
        break
      case 6:
        tex.innerText = 'Level:' + levelCount
        break
      default:
        tex.innerText = 'Omg!!!'
    };
  };
  document.getElementsByClassName('stuf')[0].addEventListener('click', function (e) {
    if (e.target.id !== 'play' && playstate) {
      document.getElementById('numbershots').innerHTML = --numberClicks
    }
  })
  document.getElementById('play').addEventListener('click', function () {
    playstate = true
    document.getElementById('levelcount').innerHTML = levelCount
    const inter = setInterval(function () {
      for (let i = 0; i < num; i++) {
        len[i].style.display = 'block'
        len[i].style.animationDuration =
                                        (50 - levelis) + 's'
      }
      document.getElementById('play').style
        .display = 'none'
      document.getElementById('pergale').style
        .display = 'none'
      clearInterval(inter)
    }, 500)
  })

  for (let i = 0; i < num; i++) {
    lod()
  }
})()
