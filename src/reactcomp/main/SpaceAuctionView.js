import React from 'react';

class SpaceAuctionView extends React.Component {

    filterList = (auctionList) =>{
        /* Фильтр на тип */
        let itemListToDisplay = auctionList.filter((item)=> (item.item.type === this.props.displayReducer.typeSelector) || (this.props.displayReducer.typeSelector === 'AllTypes'));

        /* Фильтр на отмеченные */
        if(this.props.displayReducer.toggleSelector === '+Toggled'){
            itemListToDisplay = itemListToDisplay.filter((item)=> item.item.state === true);
        }
        else if(this.props.displayReducer.toggleSelector === '-Toggled'){
            itemListToDisplay = itemListToDisplay.filter((item)=> item.item.state === false);
        }

        /* Фильтр на цену */
        itemListToDisplay = itemListToDisplay.filter((item)=> (item.item.price >= this.props.displayReducer.priceRange.minValue)&&(item.item.price <= this.props.displayReducer.priceRange.maxValue));
        return itemListToDisplay;
    };

    drawList = (auctionList)=>{
        if(auctionList.length === 0) return <p style={{width: '100%', textAlign: 'center', color: 'white'}}>Initializing.....</p>
        else {
            let itemListToDisplay = this.filterList(auctionList);

             return(

                itemListToDisplay.map((auctionItem)=>{
                    return <li key={auctionItem.item.id}
                               className='workspace-list'
                               style={{ color: auctionItem.item.state ? 'red' : '#DDF'}}
                               onClick={()=>{
                                   this.props.dispatch(this.props.action(auctionItem));
                                   document.getElementById('onClickSound').play()
                               }}>
                        <div className='workspace-list__item' style={{paddingLeft: '20px'}}>
                            {auctionItem.item.name}
                        </div>
                        <div  className='workspace-list__item' style={{textAlign: 'center'}}>
                            Тип {auctionItem.item.type}
                        </div>
                        <div  className='workspace-list__item' style={{textAlign: 'center'}}>
                            {auctionItem.startPrice}
                        </div>
                        <div  className='workspace-list__item' style={{textAlign: 'center', cursor: 'pointer'}}
                              onClick={(event)=>{
                                  event.stopPropagation();this.props.dispatch(this.props.toggleItem(auctionItem.item));
                                  document.getElementById('onClickSound').play()
                              }}
                        >
                            {auctionItem.item.state ? '+' : '-'}
                        </div>

                    </li>
                })
            )
        }
    };

    render(){


        return(
            <div className='space-wrapper' style={{width: 'auto', height: 'calc(100% - 20px)', marginTop: '10px'}}>
                <div className='space-style_outer' style={{width: 'auto', display: 'grid', gridTemplateColumns: 'minmax(200px, 3fr) minmax(80px, 1fr) minmax(80px, 1fr) minmax(80px, 1fr)'}}>
                    <div className='space-style_inner'>
                        Названия
                    </div>
                    <div className='space-style_inner'>
                        Тип
                    </div>
                    <div className='space-style_inner'>
                        Цена
                    </div>
                    <div className='space-style_inner'>
                        Отметить
                    </div>
                </div>
                <div className='grid-1-outer'>
                    <ul className='grid-1-inner columnback-design' style={{display: 'grid', gridTemplateColumns: 'minmax(200px, 3fr) minmax(80px, 1fr) minmax(80px, 1fr) minmax(80px, 1fr)', width: '100%', height: '100%'}}>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <ul className='grid-1-inner' style={{paddingLeft: '0px'}}>
                        {this.drawList(this.props.spaceReducer.auctionList)}
                    </ul>
                </div>
            </div>
        )
    }

}

export default SpaceAuctionView