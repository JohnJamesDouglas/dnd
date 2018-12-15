import React, { Component } from 'react'

import { Row } from 'jdui'
import { Col } from 'jdui'
import { Title } from 'jdui'
import { Sheet } from 'jdui'
import { Spacer } from 'jdui'

export default class CharacterSheet extends Component  {
	render() {
		return (
			<Row>
				<Col s={12} m={10} l={8} offsetM={1} offsetL={2}>
					<Title type={3} align='center'>CHARACTER SHEET</Title>
					<Sheet />
					<Spacer height='5vh'/>
				</Col>
			</Row>
		)
	}
}
