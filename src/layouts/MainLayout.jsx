import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

function MainLayout() {
    return (
        <div>
            {/* Nav Bar */}
            <div className='h-16'>
                <Navbar />
            </div>
            {/* Outlet Packet */}
            <div className='min-h-[calc(100vh-132px)]'>
                <Outlet />
            </div>
            {/* Footer */}
            <Footer />
        </div>
    )
}

export default MainLayout