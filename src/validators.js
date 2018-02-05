export const required = value => value !== undefined ? undefined : 'This field is required';

export const notEmpty = value => value.trim() !== '' ? undefined : 'This field cannot be empty';

export const trackingNumberLength = value =>  value.length === 5 ? undefined : 'This field\'s length must be 5 characters long';

export const validateTrackingNumber = value => !isNaN(value) ? undefined : 'The tracking number must be numeric values only';