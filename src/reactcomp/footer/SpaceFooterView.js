import React from 'react';

class SpaceFooterView extends React.Component {

    render(){

        return(
            <div className='space-wrapper' style={{padding: '5px', marginTop: '10px'}}>
                <div className='' style={{width: '80%', margin: 'auto'}}>
                    <div style={{width: 'auto%', padding: '10px',border: 'solid #003', backgroundColor: 'rgba(30,50,90,0.5)', boxShadow: 'inset 0 0 50px rgba(0,0,30,0.3)',
                        borderWidth: '1px 2px 1px 2px', fontSize: '16px', color: '#DDF'}}>
                        Реализован функционал переключения между 2мя экранами - магазина и инвентаря (в хэдере), с возможностью покупки предметов в магазине и удаления из инвентаря (клик на предмет) с подтверждением дейсвтия в ПопАпе.
                        Предмет можно отметить (клик на соответствующее поле). В сайдбаре доступны сортировки списков. При клике на поле с именем (левое поле хэдера) - в ПопАпе можно изменить Имя.
                    </div>
                </div>
            </div>
        )
    }
}

export default SpaceFooterView