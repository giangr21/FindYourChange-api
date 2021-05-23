import createConnection from '@shared/infra/typeorm';
import app from './shared/infra/http/app';

createConnection();

const apiPort = process.env.PORT || 3000;

app.server.listen(apiPort, () => {
    // eslint-disable-next-line no-console
    console.log(`🚀 Server started on port ${apiPort}!`);
});
