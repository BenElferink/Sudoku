export function timeToString(timeState) {
  let minutes = timeState.minutes;
  let seconds = timeState.seconds;
  minutes < 10 ? (minutes = `0${minutes}`) : (minutes = `${minutes}`);
  seconds < 10 ? (seconds = `0${seconds}`) : (seconds = `${seconds}`);
  return `${minutes}:${seconds}`;
}
