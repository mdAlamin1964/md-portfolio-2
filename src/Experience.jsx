import React from "react";

export default function Experience({item_react}) {
    return (
        <>
            <div className="experience-page page container-fluid p-0">
                  {/* Moudle 5 */}
                  <div className="module-5 py-5 px-md-5 px-3 ">
                    <div className="row g-md-5">
                        <div className="col-md-6 left">
                            <h4 className="h4-title mb-3">MY PROJECTS</h4>
                            <h1 className="h1-title mb-5">React
                            </h1>
                        </div>
                        <div className="experience-items">
                            {item_react}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}