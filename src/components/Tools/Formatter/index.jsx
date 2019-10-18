// import React from 'react'
// import NumberFormat from 'react-number-format'
// export const InputFormatter = (props) => {
//   return (
//     <div>
//       <NumberFormat displayType={'text'} thousandSeparator prefix={'₦'} {...props} />
//     </div>
//   )
// }

export const formatAmount = num => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
