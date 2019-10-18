import React from 'react'
import { TableBody, Text, DuoText, DuoTextAlt, ProfileAndText, Status, EditText, DeleteText, MileStoneList } from './TableParts'

export const TransactionRow = ({ ...props }) => {
  return (
    <TableBody>
      <td>
        <Text
          text={`${props.id}.` || 'unknown'}
        />
      </td>
      <td>
        <Text
          text={props.name || 'unknown'}
        />
      </td>
      <td>
        <Text
          text={props.email || 'unknown'}
        />
      </td>
      <td>
        <Text
          text={props.phone || 'unknown'}
        />
      </td>
      <td>
        <Text
          text={props.website || 'unknown'}
        />
      </td>
      <td>
        <ProfileAndText
          text={props.company.name || 'unknown'}
          subtext={props.company.catchPhrase || 'unknown'}
          img={require('../../assets/images/primework_purple.png')}
        />
      </td>
    </TableBody>
  )
}
