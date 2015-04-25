
import $ from 'jquery'

function GameKeyboardPlugin(game) {
  let kbm = game.players[0].options.input.keyboard
  let data = { }
  $(window)
  .keydown(e => data[e.which] = 1)
  .keyup(e => data[e.which] = 0)
  return {
    get() {
      return {
        'p1_1':  data[kbm['1'] || 83],
        'p1_2':  data[kbm['2'] || 68],
        'p1_3':  data[kbm['3'] || 70],
        'p1_4':  data[kbm['4'] || 32],
        'p1_5':  data[kbm['5'] || 74],
        'p1_6':  data[kbm['6'] || 75],
        'p1_7':  data[kbm['7'] || 76],
        'p1_SC': data[kbm['SC'] || 65],
        'p1_speedup': data[38],
        'p1_speeddown': data[40],
        'start': data[13],
        'select': data[18],
      }
    }
  }
}

export default GameKeyboardPlugin