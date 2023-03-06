import {tasks} from "./data"
import moment from "moment"

console.log(Object.keys(tasks[0].dates).map(date => moment(date)))
// console.log(moment.max(Object.keys(tasks[0].dates).map(date => moment(date))))
