import {tasks} from "./data"
import moment from "moment"


const formattedDates = Object.keys(tasks[0].dates).map(date => moment(date, "DD-MM-YYYY"))

console.log(moment.max(formattedDates))
