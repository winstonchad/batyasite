import React, {useEffect} from "react";

function AboutUs() {
    useEffect(() => {
        document.body.classList.add('aboutus-page');
        return () => {
            document.body.classList.remove('aboutus-page');
        };
    }, []);

    return(
        <div className={"aboutus-container"}>
            <div className={"aboutus-text"}>
                <h2>Кто мы такие</h2>
                <p>
                    From space planning to bespoke furniture commissions, we cover all
                    elements of the design process. We like to be involved at the
                    inception of a project, but we can provide expertise and design
                    starting at any stage in the process.
                </p>
                <a href="/services">View Services</a>
            </div>
            <div className={"services-image"}>
                <img alt={"Service"}/>
            </div>
        </div>
    );
}

export default AboutUs;