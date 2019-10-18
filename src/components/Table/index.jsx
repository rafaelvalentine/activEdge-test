import React from 'react'
import { Table } from 'react-bootstrap'
import * as PageTable from './styles'
import { TableHead } from './TableParts'
import { TransactionList } from './TableList'
import { CardHeader as Header } from '../../theme/style/typeface'
import Pagination from '../Tools/Pagination'

export const DashboardTable = ({
  title,
  data,
  pageInfo,
  setPagination,
  allUsers,
  pageUsers,
  newindexOfFirstUser,
  handlePagnationUp,
  handlePagnationDown,
  handleDataRange,
  pageNumbers,
  selectedPage
}) => {
  let header
  if (title) {
    header = (
      <Header>
        <p>{title}</p>
      </Header>
    )
  }
  // const newData = data.slice(0, 10)
  return (
    <PageTable.Wrapper>
      <PageTable.Container>
        {header}
        <Table id='myTable'>
          <TableHead>
            <th>No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone number</th>
            <th>website</th>
            <th>Company</th>
          </TableHead>
          <tbody>
            <TransactionList data={data} />
          </tbody>

        </Table>
        { setPagination ? <Pagination
          data={pageInfo}
          allUsers={allUsers}
          pageUsers={pageUsers}
          newindexOfFirstUser={newindexOfFirstUser}
          handlePagnationUp={handlePagnationUp}
          handlePagnationDown={handlePagnationDown}
          handleDataRange={handleDataRange}
          pageNumbers={pageNumbers}
          selectedPage={selectedPage}
          pageLimit={pageInfo.pageLimit}
          upperPageBound={pageInfo.upperPageBound}
          lowerPageBound={pageInfo.lowerPageBound}
        /> : null }
      </PageTable.Container>
    </PageTable.Wrapper>
  )
}

export default DashboardTable
