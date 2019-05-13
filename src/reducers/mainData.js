

/* Пока его тут зафигачим */
const objArrMain = {
    mainData: [
    {id:'0', href: "/Mindgame/Games", text:"ИГРЫ", textMin:"Наши игры"},
    {id:'1', href: "#", text:"НОВОСТИ", textMin:"Отсутствуют"},
/*    {id:'2', href: "/", text:"КОМПАНИЯ", textMin:"Информация о компании"},*/
    {id:'3', href: "#", text:"ФОРУМ", textMin:"Отсутствует"}
    ]
};

export default function mainData (mainArr = objArrMain) {
    return mainArr
}