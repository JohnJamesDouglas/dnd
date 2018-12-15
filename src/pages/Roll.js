import React, { Component } from 'react'

import { Row } from 'jdui'
import { Col } from 'jdui'
import { Title } from 'jdui'
import { Roller } from 'jdui'

export default class Roll extends Component  {
	render() {
		return (
			<Row>
				<Col s={12} m={10} l={8} offsetM={1} offsetL={2} gutters>
					<Title type={3} align='center'>Roller</Title>
					<Roller numDice={6} historyLimit={1000} reroll delay={2000}/>
				</Col>
			</Row>
		)
	}
}