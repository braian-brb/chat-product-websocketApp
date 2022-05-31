import { app, httpServer } from './app.js';

const PORT = app.get('PORT');

httpServer.listen(PORT, () => {
  console.log(`Server on http://localhost:${PORT}`);
});
