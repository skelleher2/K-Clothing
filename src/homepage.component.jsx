import React from 'react';

import './homepage.styles.scss';

const HomePage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <div classname='title'>HATS</div>  
                    <span classname='subtitle'>SHOP NOW</span>   
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <div classname='title'>JACKETS</div>  
                    <span classname='subtitle'>SHOP NOW</span>   
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <div classname='title'>SNEAKERS</div>  
                    <span classname='subtitle'>SHOP NOW</span>   
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <div classname='title'>WOMENS</div>  
                    <span classname='subtitle'>SHOP NOW</span>   
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <div classname='title'>MENS</div>  
                    <span classname='subtitle'>SHOP NOW</span>   
                </div>
            </div>
        </div>
    </div>
);

export default HomePage;