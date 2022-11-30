import chalk from 'chalk';

import { checkEnvironmentVariable, success, requiredEnvs } from './utils';
import app from './app';

checkEnvironmentVariable(requiredEnvs);

const port = process.env.PORT;

app.listen(port, () => {
  success(`${process.env.APP_NAME} is listening on port: ${chalk.green(port)}`);
});
