export default function local8601(date?: Date): string {
  const d = date || new Date();
  const value = d.valueOf();
  const offset = -d.getTimezoneOffset();

  let localstr = new Date(value + offset * 60 * 1000)
    .toISOString().slice(0, -5);
  localstr += offset > 0 ? "+" : "-";

  let hours = Math.floor(offset / 60).toString();
  hours = hours.length === 2 ? hours : "0" + hours;

  let minutes = (offset % 60).toString();
  minutes = minutes.length === 2 ? minutes : "0" + minutes;

  localstr += (hours + ":" + minutes);

  return localstr;
}
