function param (p) {
  const index = process.argv.indexOf(p)
  return process.argv[index + 1]
}
// Consultar con el tutor, con node src/index.js --port=xxxx Funciona
// Pero con npm run dev no funciona a menos que le ponga la flag en el script packpage.json
// De igual manera con el npm start
export const PORT = Number(param('--port')) || 8080
console.log(`PORT FROM PARAMS = ${PORT}`)
