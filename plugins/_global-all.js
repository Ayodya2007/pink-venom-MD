import spit from 'performance-now'

let handler = m => m
handler.all = async function (m) {
let times = spit();
let latensi = spit() - times

global.hing = latensi.toFixed(4) + ' ms'

global.fetching = '🍟 Fetching : ' + hing
}
export default handler