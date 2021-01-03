let arrayOfMonth = ['Января','Февраля','Марта','Апреля',
                    'Мая','Июня','Июля','Августа',
                    'Сентября','Октября','Ноября','Декабря',];

export let dateFormatter = (day,month)=>(
    day === new Date().getDate()? 'Сегодня' : `Дата: ${day} ${arrayOfMonth[month-1]}`
)