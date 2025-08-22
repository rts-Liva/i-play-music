function CalculateDuration(duration) {
    // Converts duration from ms into minutes.
    const durationInMinutes = duration / 1000 / 60;
    // Grabs only the full minute (ignores decimals)
    const minutes = Math.trunc(durationInMinutes);
    // Converts the leftover decimals back into seconds.
    const seconds = Math.round((durationInMinutes - minutes) * 60);

    // padStart makes sure there will always be 2 digits (m:06 rather than m:6)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

export default CalculateDuration;