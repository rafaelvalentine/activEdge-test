// import toastr from 'toastr';
import validator from 'validator';
import swal from 'sweetalert';

/**
 * @function notEmpty
 * @param {*} value
 * @return {*} boolean
 */
export const notEmpty = value => {
  const toString = typeof value !== 'string' ? value.toString() : value;
  return toString.trim() !== '';
}

/**
 * @function isEmail
 * @param {*} value
 * @return {*} boolean
 */
export const isEmail = value => {
  const regex = /([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/ /* eslint-disable-line */
  return regex.test(value)
}

/**
 * @function valuesMatch
 * @param {*} value
 * @return {*} boolean
 */
// export const valuesMatch = (FirstValue, SecondValue) => {
//   return FirstValue === SecondValue
// }

// export const Alert = {
//   error: message => {
//     toastr.options.closeButton = true
//     toastr.options.timeOut = 7200
//     toastr.options.preventDuplicates = true;
//     toastr.options.progressBar = true;
//     // toastr.options.rtl = true;
//     toastr.error(message)
//   },
//   success: message => {
//     toastr.options.closeButton = true
//     toastr.options.timeOut = 5200
//     toastr.options.preventDuplicates = true;
//     // toastr.options.rtl = true;
//     toastr.success(message)
//   },
//   info: message => {
//     toastr.options.closeButton = true
//     toastr.options.timeOut = 6200
//     toastr.options.preventDuplicates = true;
//     toastr.options.progressBar = true;
//     // toastr.options.rtl = true;
//     toastr.info(message)
//   }
// }


// export const emptyFieldValidator = object => {
//   let emptyFields =  "";
//   const response = {}
//   for (const input in object) {
//     const inputField = object[input];
//     if (inputField.trim() === '') {
//       emptyFields = input;
//       response.error = true;
//       response.message = `Please specify ${emptyFields}`;
//     }
//   }
//   return response;
// }

export const handleError = error => {
  if (error.response) {
    if (error.response.data.data && error.response.data.data.email[0]) {
      return swal(error.response.data.data.email[0], "", 'error')
    }
    if (error.response.data.data && error.response.data.data.message) {
      return swal(error.response.data.data.message, "", 'error')
    }
    if (error.response.data.data && error.response.data.data.status) {
      return swal(error.response.data.data.status, "", 'error')
    }
    if (error.response.data && error.response.data.error) {
      return swal(error.response.data.error, "", 'error')
    }
    if (error.response.data && error.response.data.status) {
      return swal(error.response.data.status, "", 'error')
    }
    if (error.response.data && error.response.data.message) {
      return swal(error.response.data.message, "", 'error')
    }
    if (error.response.data.data && error.response.data.data.error) {
      return swal(error.response.data.data.error, "", 'error')
    }
    // return swal(error.response.data.error, "", 'error')
  }
  return swal(error.message, "", 'error')
}

// export const validateContainerInputs = (booking, haulage) => {
//   let operationStopped = false;
//   if (validator.isEmpty(booking.billOfLadingNumber)) { 
//     Alert.error('Bill of laden is required');
//     operationStopped = true
//     return operationStopped;
//   }
//   if (validator.isEmpty(booking.consigneeName)) { 
//     Alert.error('Consignee name is required');
//     operationStopped = true
//     return operationStopped;
//   };
//   if (validator.isEmpty(booking.vesselName)) { 
//     Alert.error('Vessel name is required');
//     operationStopped = true
//     return operationStopped;
//   };
//   if (validator.isEmpty(booking.consigneeAddress)) { 
//     Alert.error('Consignee address is required');
//     operationStopped = true
//     return operationStopped;
//   };
//   if (validator.isEmpty(booking.shippingLine)) { 
//     Alert.error('Shipping line is required');
//     operationStopped = true
//     return operationStopped;
//   };
//   if (booking.containers.length < 1) { 
//     Alert.error('Please enter at least one container');
//     operationStopped = true
//     return operationStopped;
//   };
//   if (!haulage.preferedHaulage.email) { 
//     Alert.error('Please select an haulage company');
//     operationStopped = true
//     return operationStopped;
//   };
//   if (!haulage.state) { 
//     Alert.error('Select delivery state');
//     operationStopped = true
//     return operationStopped;
//   };
//   if (!haulage.city) { 
//     Alert.error('Enter delivery city');
//     operationStopped = true
//     return operationStopped;
//   };
//   if (!haulage.deliveryAddress) { 
//     Alert.error('Enter delivery address');
//     operationStopped = true
//     return operationStopped;
//   };
//   if (!haulage.container) { 
//     Alert.error('Have you container arrived at APMT?');
//     operationStopped = true
//     return operationStopped;
//   };
// }