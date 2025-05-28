import React, { useState } from 'react';

export default function DropDown({children}) {
    const [mobileToggle, setMobileToggle] = useState(false);
    const handelMobileToggle = () => {
        setMobileToggle(!mobileToggle)
    }
    return (
        <>
            <div className={mobileToggle?"dropdown-btn open":"dropdown-btn"} onClick={handelMobileToggle}><span className="icon-07"></span></div>{children}
        </>
    )
}