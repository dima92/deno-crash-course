import {dayOfYear, parse} from "https://deno.land/std/datetime/mod.ts";

console.log(parse("03-03-2021", "dd-mm-yyyy"));
console.log(dayOfYear(new Date("2021-03-03T05:52:00")));
