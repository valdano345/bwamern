import React, { useEffect } from 'react'
import Header from '../parts/Header';
import PageDetailTitle from '../parts/PageDetailTitle';
import ItemDetails from '../json/itemDetails.json'

const DetailsPage = (props) => {
    useEffect(() => {
        document.title = "Details Page"
        window.scrollTo(0, 0);
    }, []);
    
    const breadcrumb  = [
        {pageTitle: "Home", pageHref: ""},
        {pageTitle: "House Details", pageHref: ""}
    ]
    

    return (
        <>
            <Header {...props}></Header>
            <PageDetailTitle breadcrumb={breadcrumb} data={ItemDetails} />
        </>
    )
}
export default DetailsPage