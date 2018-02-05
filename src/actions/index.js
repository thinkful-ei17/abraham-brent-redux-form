import { SubmissionError } from 'redux-form';

export const submission = values => dispatch =>{
  return fetch('https://us-central1-delivery-form-api.cloudfunctions.net/api/report', 
    {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => {
      // check for ok response
      if(!res.ok){
        if(
          res.headers.has('content-type') && 
            res.headers
              .get('content-type')
              .startsWith('application/json')
        ){
          return res.json().then(err => Promise.reject(err));
        }

        return Promise.reject({
          code: res.status,
          message: res.statusText
        });
      }
      return;
    })
    .then(() => console.log('Here is what we got: ', values))
    .catch(err => {
      const {reason, message, location} = err;
      if (reason === 'ValidationError') {
        // Convert ValidationErrors into SubmissionErrors for Redux Form
        return Promise.reject(
          new SubmissionError({
            [location]: message
          })
        );
      }
      return Promise.reject(
        new SubmissionError({
          _error: 'Error submitting issue: Invalid tracking number'
        })
      );
    });
};

