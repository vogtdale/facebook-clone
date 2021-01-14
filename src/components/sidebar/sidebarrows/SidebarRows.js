import React from 'react'
import "./SidebarRows.css"
import {Avatar} from '@material-ui/core'

const SidebarRows = ({src, Icon, title}) => {
    return (
        <div className="sidebarRows">
            {src && <Avatar src={src} />}
            {Icon && <Icon />}
            <h4>{title}</h4>
        </div>
    )
}

export default SidebarRows
