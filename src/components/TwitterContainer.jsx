import React from "react";
import { useEffect } from "react";

const TwitterContainer = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        document.getElementsByClassName("twitter-embed")[0].appendChild(script);
    }, []);

    return (
        <section className="twitterContainer">
            <div className="twitter-embed">
                <a
                className="twitter-timeline"
                data-theme="dark"
                data-lang="en"
                data-height="500"
                href="https://twitter.com/Biffle_Ball?ref_src=twsrc%5Etfw"
                >
                    BiffleBall Twitter
                </a>
            </div>
        </section>
    )
};

export default TwitterContainer;