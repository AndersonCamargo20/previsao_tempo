import React from 'react'
import {Badge} from 'reactstrap'

export default props => <div>
<Badge color={props.color}>{props.statusCode}</Badge>
</div>