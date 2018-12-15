import React, { Component } from 'react'

import { Row } from 'jdui'
import { Col } from 'jdui'
import { Title } from 'jdui'
import { DungeonMaster } from 'jdui'

export default class DungeonMasterDisplay extends Component  {
	render() {
		return (
			<Row>
				<Col s={12} m={10} l={8} offsetM={1} offsetL={2} gutters>
					<DungeonMaster />
				</Col>
			</Row>
		)
	}
}