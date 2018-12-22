import React, { Component } from 'react'

import { Row } from 'jdui'
import { Col } from 'jdui'
import { Title } from 'jdui'
import { DungeonMaster } from 'jdui'

export default class DungeonMasterDisplay extends Component  {
	render() {
		return (
			<Row>
				<Col s={12} m={12} l={12} gutters>
					<Title type={3} align='center'>DUNGEON MASTER</Title>
					<DungeonMaster />
				</Col>
			</Row>
		)
	}
}