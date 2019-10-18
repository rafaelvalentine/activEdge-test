import React from 'react'
import { Link, Route } from 'react-router-dom'
import dashboardOrange from '../../assets/images/dashboard-orange.svg'
import dashboard from '../../assets/images/dashboard.svg'
import userOrange from '../../assets/images/manageusers-orange.svg'
import user from '../../assets/images/manageusers.svg'
import transOrange from '../../assets/images/transactions-orange.svg'
import trans from '../../assets/images/transactions.svg'
import jobsOrange from '../../assets/images/managejobs-orange.svg'
import jobs from '../../assets/images/managejobs.svg'
import chatOrange from '../../assets/images/livechat-orange.svg'
import chat from '../../assets/images/livechat.svg'
import * as Page from './styles'

const NavLinks = ({ img, img2, address, link, activeOnlyWhenExact }) => {
  let _link = `/${link}`
  // let newAddress = address.split(' ')[0].trim()
  // let link = `/${newAddress}`
  return (
    <Route
      path={_link}
      exact={activeOnlyWhenExact}
      children={({ match }) => (
        <li className={match ? `active` : ''}>
          <Link to={_link}>
            <img src={match ? img : img2} alt={address} />
            <span>
              {address}
            </span>
          </Link>
        </li>
      )}
    />
  )
}
export const Links = props => {
  const navlink = props.links.map((link) => {
    return <NavLinks key={link.id} {...link} />
  })
  return (
    <Page.SideNav>
      <ul>
        {navlink}
      </ul>
    </Page.SideNav>
  )
}
/**
   * used defaultProps to pass an array of links for links components
   */
Links.defaultProps = {
  links: [
    {
      id: '1',
      img: dashboardOrange,
      img2: dashboard,
      address: 'dashboard',
      link: 'dashboard'
    },
    {
      id: '2',
      img: userOrange,
      img2: user,
      address: 'manage users',
      link: 'manage-users'
    },
    {
      id: '3',
      img: jobsOrange,
      img2: jobs,
      address: 'manage jobs',
      link: 'manage-jobs'
    },
    {
      id: '4',
      img: transOrange,
      img2: trans,
      address: 'Payments Made',
      link: 'transactions'
    },
    {
      id: '5',
      img: chatOrange,
      img2: chat,
      address: 'live chat',
      link: 'chat'
    }
  ]
}
export default Links
