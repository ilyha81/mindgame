import React from 'react';

class SpaceInventoryView extends React.Component {

    drawList = (itemList)=>{
        let itemListToDisplay = itemList.filter((item)=> (item.type === this.props.displayReducer.typeSelector) || (this.props.displayReducer.typeSelector === 'AllTypes'));
        if(this.props.displayReducer.toggleSelector === '+Toggled'){
            itemListToDisplay = itemListToDisplay.filter((item)=> item.state === true);
        }
        else if(this.props.displayReducer.toggleSelector === '-Toggled'){
            itemListToDisplay = itemListToDisplay.filter((item)=> item.state === false);
        }

        return(
            itemListToDisplay.map((inventoryItem)=>{
                return (
                    <li key={inventoryItem.id}
                        className='workspace-list'
                        style={{ color: inventoryItem.state ? 'red' : '#DDF'}}
                        onClick={()=>{
                            this.props.dispatch(this.props.actionSell(inventoryItem));
                            document.getElementById('onClickSound').play()}}
                    >
                        <div className='workspace-list__item' style={{paddingLeft: '20px'}}>
                            {inventoryItem.name}
                        </div>
                        <div  className='workspace-list__item' style={{textAlign: 'center'}}>
                            Тип {inventoryItem.type}
                        </div>
                        <div  className='workspace-list__item' style={{textAlign: 'center'}}>
                            {inventoryItem.price / 2}
                        </div>
                        <div  className='workspace-list__item' style={{textAlign: 'center', cursor: 'pointer'}}
                              onClick={(event)=>{
                                  event.stopPropagation();this.props.dispatch(this.props.toggleItem(inventoryItem));
                                  document.getElementById('onClickSound').play()}}
                        >
                            {inventoryItem.state  ? '+' : '-'}
                        </div>
                    </li>
                )
            })
        )
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
                        {this.drawList(this.props.spaceReducer.userStats.itemList)}
                    </ul>
                </div>
            </div>
        )
    }
}

export default SpaceInventoryView