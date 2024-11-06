import React from 'react';
import Navigation from './navbar'
import FooterSection from "./footer";

const Layout =({children}) =>{
    return(
        <>
            <div>
                <Navigation/>
                <main>{children}</main>
                <FooterSection/>
            </div>
        </>
    )
}

export default Layout;