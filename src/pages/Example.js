import React from 'react'
import Breadcrumb from "../elements/Breadcrumb"

const Example = () => {
    const breadcrumb = [
        {pageTitle: "Home", pageHref: ""},
        {pageTitle: "House Details", pageHref: ""}
    ]
    return (
        <div className="container">
                <div className="row align-items-center justify-content-center" style={{height: "100vh"}}>
                    <div className="col-auto">
                    {/* <InputDate
                        max={30}
                        onChange={this.handleChange}
                        name="value"
                        value={this.state.value}
                    /> */}
                    <Breadcrumb data={breadcrumb} />
                    </div>
                </div>
            </div>
    )
}
export default Example