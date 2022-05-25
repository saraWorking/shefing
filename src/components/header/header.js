import React from 'react'
import './header.css'

const Header = React.memo((props)=> {

    const{ setSearchByEmail, setSearchByName } = props;

    return (
        <div className="header">
             <input className="form-control inputSearch" type="search" placeholder="Search by name" aria-label="Search"
            onChange={(e) => setSearchByName(e.target.value)} />
            <input className="form-control inputSearch" type="search" placeholder="Search by email" aria-label="Search"
            onChange={(e) => setSearchByEmail(e.target.value)} />
       </div>
    )
}
)
export default Header;