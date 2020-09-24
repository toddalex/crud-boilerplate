import express, { Request, Response, NextFunction} from 'express';
import { json } from 'body-parser';

import todoRoutes from './routes/api';

const app = express();

app.use(json());

app.use('/todos', todoRoutes);

// catches bad routes
app.use('*', (req: Request, res: Response) => {
  res.status(404).send('Not Found');
});

// global error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  // res.status(500).json({ message: err.message });
  res.status(500).send('Server Error');
});

app.listen(process.env.PORT || 8080, () => console.log(`🏄 Listening on port ${process.env.PORT || 8080}!`))