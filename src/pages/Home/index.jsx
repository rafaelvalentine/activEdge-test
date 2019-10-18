import React, { Component } from 'react'
import { Wrapper } from '../../theme/style/styles';
import { CardHeader } from '../../theme/style/typeface'
import { DashboardTable } from '../../components/Table'

export default class index extends Component {
  state = {
    deadLine:'',
    from:null,
    to:null,
    showToDatePicker: false,
    firstPage: 1,
    currentPage: 1,
    usersPerPage: 5,
    pageLimit: 5,
    upperPageBound: 5,
    lowerPageBound: 0,
    data:[],
    info:'Fetching Data....'
  }

  scrollToTop =()=> window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })

  handleSelect = ()=> {
    let selected = !this.state.selected
    this.setState({selected})
  }
  handlePagnationUp = (e) => {
    e.target.blur()
    if (this.state.currentPage >= this.state.firstPage) {
       this.setState((prevState, props) => {
        return {currentPage: prevState.currentPage + 1};
      }, ()=> this.scrollToTop())
    }
    if (this.state.currentPage === this.state.upperPageBound) {
      let upperPageBound = this.state.upperPageBound + this.state.pageLimit
      let lowerPageBound = this.state.lowerPageBound + this.state.pageLimit
      this.setState((prevState, props) => {
       return { upperPageBound, lowerPageBound }
     })
   }
  }
 handlePagnationDown = (e) => {
    e.target.blur()
    if (this.state.currentPage === this.state.lowerPageBound + 1) {
      let upperPageBound = this.state.upperPageBound - this.state.pageLimit
      let lowerPageBound = this.state.lowerPageBound - this.state.pageLimit
      this.setState((prevState, props) => {
       return { upperPageBound, lowerPageBound }
     })
   }
   if (this.state.currentPage !== this.state.firstPage) { 
     this.setState((prevState, props) => {
      return {currentPage: prevState.currentPage - 1};
    }, ()=> this.scrollToTop())
  }
  }
    handleDataRange = e => {
    e.target.blur()
    const callback = () => {
      this.renderPageNumbers()
      this.scrollToTop()
    }
    let numberToShow = Number(e.target.value)
    return this.setState({ usersPerPage: numberToShow, currentPage: 1 }, ()=>setTimeout(() => {
      callback()}, 100))
  }

  renderPageNumbers = () =>{ 
    let pageList = []
    let length = Math.ceil( this.props.Users.length / this.state.usersPerPage)
    for(let index = 1; index <= length; index++) {
    const element = {
      id: index,
      page: index
    };
    pageList.push(element)
  }
 return pageList
}
selectedPage = page =>{
  this.scrollToTop()
  this.setState({currentPage: page})
}
  componentDidMount(){
    this.renderPageNumbers()
    // this.props.handlePageLoader(true)
setTimeout(() => {
  this.setState({info:'No Data found'})
}, 30000);
    this.props.handleGetAllUsers()
    // .then(res=>{
    //   this.props.handleGetJobs()
    // })
    // this.props.handleGetAllUsers()
    // .then(res =>{
    //   this.props.handlePageLoader(false)
    //   this.setState({info:'Fetching Data......'})
    // })
  }

  
  render () {
    const indexOfLastUser = this.state.currentPage * this.state.usersPerPage
    const indexOfFirstUser = indexOfLastUser - this.state.usersPerPage
    const currentUsers = this.props.Users.slice(indexOfFirstUser, indexOfLastUser)
    const allUsers = this.props.Users.length
    let newindexOfFirstUser = indexOfFirstUser + 1
    let pageUsers = currentUsers.length + indexOfFirstUser
    return (
      <Wrapper>
        { this.props.Users && this.props.Users.length > 0 ? 
        <DashboardTable
        title='All Artist' 
        data={currentUsers}
        pageInfo={this.state}
        allUsers={allUsers}
        newindexOfFirstUser={newindexOfFirstUser}
        pageUsers={pageUsers}
        pageNumbers={this.renderPageNumbers}
        selectedPage={this.selectedPage}
        handleDataRange={this.handleDataRange}
        handlePagnationUp={this.handlePagnationUp}
        handlePagnationDown={this.handlePagnationDown}
        setPagination={true}/> 
        :
        <CardHeader style={{margin:'160px auto',justifyContent:'center'}} fontSize='24px'>
          <p>{this.state.info}</p>
        </CardHeader>
        }
      </Wrapper>
    )
  }
}
