import {currentDayOfYear, dayOfYear, parseDate} from "https://deno.land/std/datetime/mod.ts";

console.log(parseDate("03-03-2021", "dd-mm-yyyy"));

console.log(dayOfYear(new Date("2021-03-03T05:52:00")));
console.log(currentDayOfYear());
