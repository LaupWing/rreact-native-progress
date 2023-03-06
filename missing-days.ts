import {tasks} from "./data"
import Moment from "moment"
import { extendMoment } from "moment-range"

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

if(!all_available){
   const not_available = Array.from(range.by("days")).filter((date) => {
      return !formattedDates.find(x => moment(x).format(formatStyle) === moment(date).format(formatStyle))
   }).map(x => moment(x).format(formatStyle))
   console.log(not_available)
}

const range2 = moment.range(latest_date, moment())
const from_max_to_now =  Array.from(range2.by("days")).map(x => moment(x).format(formatStyle))

// console.log(diff.diff(, formattedDates))
