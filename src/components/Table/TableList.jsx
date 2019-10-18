import React from 'react'
import { TransactionRow} from './TableRow'

export const TransactionList = ({ data }) => data.map(info => {

  return <TransactionRow key={Math.random()} {...info} />
})


