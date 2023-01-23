import React, { useState } from "react";

const Tabs = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index)
    };

    return (
        <div className="Tabs">
            <div className="block-tabs">
                <button className={toggleState === 1 ? "tabs active tabs" : "tabs"}
                        onClick={() => toggleTab(1)}
                >
                About
                </button>
                <button className={toggleState === 2 ? "tabs active tabs" : "tabs"}
                        onClick={() => toggleTab(2)}
                >
                How to Play
                </button>
                <button className={toggleState === 3 ? "tabs active tabs" : "tabs"}
                        onClick={() => toggleTab(3)}
                >
                Entry + Prizes
                </button>
            </div>
        </div>
    )
}

export default Tabs;