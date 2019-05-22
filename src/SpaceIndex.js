import React from 'react';
import { Route } from "react-router-dom";
import { connect, Provider } from "react-redux";
import {mapStateToProps, mainStore} from './reducers/MapStateToProps';


import SpaceHeaderContainer from './reactcomp/header/SpaceHeaderContainer';
import SpaceAuctionContainer from './reactcomp/main/SpaceAuctionContainer';
import SpaceInventoryContainer from './reactcomp/main/SpaceInventoryContainer';
import SpaceSidebarContainer from './reactcomp/sidebar/SpaceSidebarContainer';
import SpaceFooterView from './reactcomp/footer/SpaceFooterView';

import {FETCH_AUCTION_DATA} from "./reactcomp/Actions";
import auctionList from "./database/auctionListDefault";


const WrappedComponentHeader = connect(mapStateToProps)(SpaceHeaderContainer);
const WrappedComponentAuction = connect(mapStateToProps)(SpaceAuctionContainer);
const WrappedComponentInventory = connect(mapStateToProps)(SpaceInventoryContainer);
const WrappedComponentSidebar = connect(mapStateToProps)(SpaceSidebarContainer);
const WrappedComponentFooter = connect(mapStateToProps)(SpaceFooterView)

class SpaceIndex extends React.Component {

    fetchResult = (auctionList)=>{
        return {
            type: FETCH_AUCTION_DATA,
            payload: auctionList
        };
    };

    fetchAuctionData = (time)=>{
        return new Promise((resolve) => {
            setTimeout(()=>{
                resolve(auctionList)
            }, time);
        })
    };


    render() {

        return(
            <Provider store={mainStore}>
                <div className='space-grid' style={{maxWidth: '1600px', margin: 'auto'}}>
                    <div className='space-grid_header'>
                        <Route path='/Space' component={WrappedComponentHeader} />
                    </div>
                    <div className='space-grid_sidebar'>
                        <Route path='/Space' component={WrappedComponentSidebar} />
                    </div>
                    <div className='space-grid_workspace'>
                        <Route exact path='/Space' component={WrappedComponentAuction} />
                        <Route exact path='/Space/Inventory' component={WrappedComponentInventory} />
                    </div>
                    <div className='space-grid_footer'>
                        <Route path='/Space' component={WrappedComponentFooter} />
                    </div>
                </div>
            </Provider>
        )
    }

    componentDidMount() {
        this.fetchAuctionData(2000)
            .then((action) => {
                this.props.dispatch(this.fetchResult(action));
            });
    }

}

export default connect(mapStateToProps)(SpaceIndex)