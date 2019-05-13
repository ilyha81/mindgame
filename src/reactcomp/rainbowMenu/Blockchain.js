import React from 'react';

const Blockchain = ()=>{
    return(
        <li className="rainbow-menu__li" >
            <div className = "blockchain-text">
                <span>Status: Local Demo mode</span>
            </div>
            <div className="rainbow-menu__textmin" style={{pointerEvents: 'none'}}>
               {/* install <a href="#">Metamask</a> or <a href="#">Mist</a> to play on blockchain*/}
            </div>
        </li>
    )
};

export default Blockchain;