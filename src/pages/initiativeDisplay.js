import React, { Component } from 'react'

import { Row } from 'jdui'
import { Col } from 'jdui'
import { Title } from 'jdui'
import { Initiative } from 'jdui'

export default class InitiativeDisplay extends Component {
	render() {
		return (
			<Row>
				<Col s={12} m={10} l={8} offsetM={1} offsetL={2}>
					<Title type={3} align='center'>INITIATIVE</Title>
					<Initiative />
				</Col>
			</Row>
		)
	}
}