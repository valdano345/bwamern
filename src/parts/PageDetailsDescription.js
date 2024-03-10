import React from 'react'
import ReactHtmlParser from 'react-html-parser'

const PageDetailsDescription = ({data}) => {
    return (
        <main>
            <h4>About the place</h4>
            {ReactHtmlParser(data.description)}
            <div className="row" style={{marginTop : 30}}>
                {data.features.map((feauture, index) => {
                    return(
                        <div className="col-3" key={`feauture-${index}`} style={{marginBottom : 20}}>
                            <img width="38" src={feauture.imageUrl} alt={feauture.name} className="d-block mb-2" />{" "}
                            <span>{feauture.qty}</span>{" "}
                            <span className="text-gray-300 font-weight-light">
                                {feauture.name}
                            </span>
                        </div>
                    )
                })}
            </div>
        </main>
    )
}

export default PageDetailsDescription