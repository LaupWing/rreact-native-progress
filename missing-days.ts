import {tasks} from "./data"
import Moment from "moment"
import { extendMoment } from "moment-range"
import diff from "fast-array-diff"

// @ts-ignore
const moment = extendMoment(Moment)

const formattedDates = Object.keys(tasks[0].dates).map(date => moment(date, "DD-MM-YYYY"))

const maxium_date = moment.max(formattedDates)
const begin_date = moment.min(formattedDates)
const range = moment.range(begin_date, maxium_date)

console.log(diff.diff(Array.from(range.by("days")), formattedDates))
