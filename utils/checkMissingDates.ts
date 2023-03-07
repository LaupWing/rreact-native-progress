import Moment from "moment"
import { extendMoment } from "moment-range"
import { tasks } from "../data"

export default () => {
   // @ts-ignore
   const moment = extendMoment(Moment)
   const formatStyle = "DD-MM-YYYY"
   const formattedDates = Object.keys(tasks[0].dates).map(date => moment(date, formatStyle))

   const latest_date = moment.max(formattedDates)
   const begin_date = moment.min(formattedDates)
   const range = moment.range(begin_date, latest_date)

   const all_available = Array.from(range.by("days")).every((date) => {
      return formattedDates.find(x => moment(x).format(formatStyle) === moment(date).format(formatStyle))
   })

   return all_available
}