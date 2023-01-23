import React, { useState } from "react";

const Tabs = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index)
    };
    
    return (
        <div className="Tabs">
            
        </div>
    )
}

export default Tabs;