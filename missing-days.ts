import {tasks} from "./data"
import Moment from "moment"
import { extendMoment } from "moment-range"

// @ts-ignore
const moment = extendMoment(Moment)
const formatStyle = "DD-MM-YYYY"
const formattedDates = Object.keys(tasks[0].dates).map(date => moment(date, formatStyle))

const maxium_date = moment.max(formattedDates)
const begin_date = moment.min(formattedDates)
const range = moment.range(begin_date, maxium_date)

const all_available = Array.from(range.by("days")).every((date) => {
   return formattedDates.find(x => moment(x).format(formatStyle) === moment(date).format(formatStyle))
})

const range2 = moment.range(maxium_date, moment())
console.log(Array.from(range2.by("days")).map(x => moment(x).format(formatStyle)))
// console.log(diff.diff(, formattedDates))
