import Home from '../../pages/Home'
import { connect } from 'react-redux'
import { handleGetAllUsers } from '../../Store/Actions'

/**
 * here we handle passing redux to our component and export
 */
const mapStateToProps = state => ({
  Users: state.Data.Users
})

const mapDispatchToProps = dispatch => ({
  handleGetAllUsers: ()=> dispatch(handleGetAllUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
