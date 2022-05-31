import { app } from './app.js';

const PORT = app.get('PORT');

app.listen(PORT, () => {
  console.log(`Server on http://localhost:${PORT}`);
});
