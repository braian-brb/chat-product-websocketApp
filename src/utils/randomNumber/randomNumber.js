console.log(`Diferent Process ID every REQ, PID: ${process.pid}`)

process.on('message', cant => {
  const output = randomNumber(cant)
  process.send(output)
})

export function randomNumber (cant) {
  const output = {}
  const min = 1
  const max = 1000
  for (let i = 0; i < (cant); i++) {
    const num = Math.floor(Math.random() * (max - min) + min)

    if (output[num]) {
      output[num]++
    } else {
      output[num] = 1
    }
  }
  return output
}
