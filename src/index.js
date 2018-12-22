import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import store from './store/index'
import { addArticle } from './actions/index'

window.store = store
window.addArticle = addArticle

//store.getState()
store.subscribe(() => console.log('Look ma, Redux!!'))
store.dispatch(addArticle({ name: 'React Redux Tutorial for Beginners', id: 1 }))
store.getState()
console.log(store.getState())

import { AppWrapper } from 'jdui'
import { Title } from 'jdui'
import { Paragraph } from 'jdui'
import { Navbar, NavbarShelf, NavbarItem, Fader } from 'jdui'
import { Footer } from 'jdui'
import { Col, Row } from 'jdui'
import { Spacer } from 'jdui'
import { Section } from 'jdui'
import { Panel, PanelHeader, PanelBody } from 'jdui'
import { Modal } from 'jdui'
import { Snowflakes } from 'jdui'

import { Login } from 'jdui'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCog } from '@fortawesome/free-solid-svg-icons'
library.add(faUser, faCog)

import dungeon1 from './media/dungeon1.png'
import dungeon2 from './media/dungeon2.png'

// Pages
import CharacterSheet from '../src/pages/characterSheet'
import Roll from '../src/pages/roll'
import InitiativeDisplay from '../src/pages/initiativeDisplay'
import DungeonMasterDisplay from './pages/dungeonMasterDisplay'

import './index.scss'

export default class Index extends Component {
	constructor(props) {
		super(props)
		this.state = { shelfOpen: false, loginModalOpen: false, month: new Date().getMonth() }
	}
	shelfToggle = () => {
		this.setState((state) => ({ shelfOpen: !state.shelfOpen, loginModalOpen: false }))
	}
	loginModalToggle = () => {
		this.setState((state) => ({ loginModalOpen: !state.loginModalOpen }))
	}
	backdropClickHandler = () => {
		this.setState({ shelfOpen: false })
	}
	render() {
		const {
			state: {
				shelfOpen,
				loginModalOpen,
				month
			},
			shelfToggle,
			backdropClickHandler,
			loginModalToggle
		} = this
		return (
			<BrowserRouter>
				<AppWrapper onRouteChange={backdropClickHandler}>
						<Navbar shelfClickHandler={shelfToggle} show={shelfOpen} title={<Link to='/'>DUNGEONS AND DRAGONS</Link>}>
							<NavbarItem condensed><Link to='/' onClick={loginModalToggle}>LOGIN</Link></NavbarItem>
							<NavbarItem condensed><Link to='/'>SETTINGS</Link></NavbarItem>
						</Navbar>
						<NavbarShelf show={shelfOpen}>
							{/* <NavbarItem condensed><Link to='/' onClick={loginModal}>LOGIN</Link></NavbarItem> */}
							<NavbarItem condensed><Link to='/' onClick={loginModalToggle}>LOGIN</Link></NavbarItem>
							<NavbarItem condensed><Link to='/'>SETTINGS</Link></NavbarItem>
							<NavbarItem condensed={false}><Link to='/sheet'>SHEET</Link></NavbarItem>
							<NavbarItem condensed={false}><Link to='/roll'>ROLL</Link></NavbarItem>
							<NavbarItem condensed={false}><Link to='/initiative'>INITIATIVE</Link></NavbarItem>
							<NavbarItem condensed={false}><Link to='/dm'>DUNGEON MASTER</Link></NavbarItem>
						</NavbarShelf>
						<Modal open={loginModalOpen} fade opacity={0.3} callback={() => loginModalToggle()}> 
							<Login />
						</Modal>
						{ shelfOpen ? <Fader click={backdropClickHandler} opacity={0.3}/> : <div/> }
						{ month === 11 ? <Snowflakes /> : <div/> }
						<Switch>
							{/* <Route exact path='/' component={Home} /> */}
							<Route exact path='/' component={CharacterSheet} />
							<Route path='/sheet' component={CharacterSheet} />
							<Route path='/roll' component={Roll} />
							<Route path='/initiative' component={InitiativeDisplay} />
							<Route path='/dm' component={DungeonMasterDisplay} />
						</Switch>
						<Footer height='7.5vh' />
				</AppWrapper>
			</BrowserRouter>
		)
	}
}

class Home extends Component {
	render() {
		return (
			<React.Fragment>
				<Row>
					<Col s={12} m={12} l={12}>
						<Title type={1} align='center'>DUNGEON AND DRAGONS</Title>
						<Title type={2} align='center'>CO-ORDINATION HELPER</Title>
						<Paragraph align='center' label>Ever played Dungeons and Dragons with a group of friends?</Paragraph>
						<Paragraph align='center' label>It can get quite hectic to co-ordinate all the players as the DUNGEON MASTER.</Paragraph>
						<Title type={4} align='center'>IN COMES D&D HELPER TO THE RESCUE</Title>
						<Paragraph align='center' label>An unopinionated Dungeons & Dragons app for game management</Paragraph>
						<Spacer height='10vh' />
						<Title type={2} align='center'>FEATURES</Title>
					</Col>
				</Row>
				<Section>
					<Row>
						<Col s={4} m={4} l={4} offsetS={1} offsetM={1} offsetL={1}>
							<Panel side='top'>
								<PanelHeader><Paragraph align='center'>Roller</Paragraph></PanelHeader>
								<PanelBody></PanelBody>
							</Panel>
						</Col>
						<Col s={4} m={4} l={4} offsetS={2} offsetM={2} offsetL={2}>
							<Panel side='top'>
								<PanelHeader><Paragraph align='center'>Character Sheet</Paragraph></PanelHeader>
								<PanelBody></PanelBody>
							</Panel>
						</Col>
					</Row>
					<Spacer height='10vh' />
					<Row>
						<Col s={4} m={4} l={4} offsetS={1} offsetM={1} offsetL={1}>
							<Panel side='top'>
								<PanelHeader><Paragraph align='center'>Initiative</Paragraph></PanelHeader>
								<PanelBody></PanelBody>
							</Panel>
						</Col>
						<Col s={4} m={4} l={4} offsetS={2} offsetM={2} offsetL={2}>
							<Panel side='top'>
								<PanelHeader><Paragraph align='center'>Maps (Coming Soon)</Paragraph></PanelHeader>
								<PanelBody></PanelBody>
							</Panel>
						</Col>
					</Row>
				</Section>
				<Row>
					<Spacer height='10vh' />
					<Col s={12} m={6} l={6} offsetM={1} offsetL={1} gutters>
						<Panel side='top'>
							<PanelHeader><Paragraph align='center'>Roller</Paragraph></PanelHeader>
							<PanelBody></PanelBody>
						</Panel>
						<Spacer height='2vh' />
					</Col>
					<Spacer height='10vh' />
					<Col s={12} m={6} l={6} offsetM={5} offsetL={5} gutters>
						<Panel side='top'>
							<PanelHeader><Paragraph align='center'>Character Sheet</Paragraph></PanelHeader>
							<PanelBody></PanelBody>
						</Panel>
						<Spacer height='2vh' />
					</Col>
					<Spacer height='10vh' />
					<Col s={12} m={6} l={6} offsetM={1} offsetL={1} gutters>
						<Panel side='top'>
							<PanelHeader><Paragraph align='center'>Initiative</Paragraph></PanelHeader>
							<PanelBody></PanelBody>
						</Panel>
						<Spacer height='2vh' />
					</Col>
					<Spacer height='10vh' />
					<Col s={12} m={6} l={6} offsetM={5} offsetL={5} gutters>
						<Panel side='top'>
							<PanelHeader><Paragraph align='center'>Maps (Coming Soon)</Paragraph></PanelHeader>
							<PanelBody></PanelBody>
						</Panel>
						<Spacer height='2vh' />
					</Col>
					<Spacer height='10vh' />
				</Row>
			</React.Fragment>
		)
	}
}

const wrapper = document.getElementById('root')
wrapper ? ReactDOM.render(<Index />, wrapper) : false