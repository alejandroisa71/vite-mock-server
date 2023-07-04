import express from 'express';
import { _mock } from './_mocks';

const app = express();

app.get('/api/users/:index', (request, response) => {
const{index} = request.params

setTimeout(() => {
  response.status(200).json(_mock(index))
  
}, 2300);

  // console.log(_mock(3));
  // response.status(200).json({
  //   students: ['a', 'b', 'c'],
  // });
});

app.listen(3000);

export default app;
