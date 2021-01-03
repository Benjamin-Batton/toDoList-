export const getShortDate = ()=>{
	const dateObj = new Date()
  const weekDay	= dateObj.toLocaleString("en", { weekday: "short" });
  const dayNum =  dateObj.getDay().toString();
  const month = dateObj.toLocaleString("eng", { month: "short" })
  return [weekDay,dayNum,month]
}