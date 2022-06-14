import React from 'react'

const menuitem = ({ title, icon }) => {
    return (<><a>
        <i className={icon} />
        <span>{title}</span>
    </a>
    </>
    )
}
export default menuitem;