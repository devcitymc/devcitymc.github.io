let formula = (safety, efficency, style, distance, peril, ranges, prices) => {
        return ((ranges[safety] + ranges[efficency] + ranges[style]) / 3) * distance * peril;
    },
    inRange = (n, min, max) => {
        return x >= min && x <= max;
    },
    ranges = {
        A: 100,
        B: 89,
        C: 79,
        D: 69,
        F: 59
    },
    prices = {
        A: 10,
        B: 25,
        C: 50,
        D: 75,
        F: 100
    }

document.forms['options'].onsubmit = event => {
    let safety = document.getElementById('safety'),
        efficiency = document.getElementById('efficiency'),
        style = document.getElementById('style'),
        distance = document.getElementById('distance'),
        peril = document.querySelectorAll('#peril option:checked');

    let perilValue = Array.from(peril).map(el => el.value).length * 0.25;

    console.log(safety.value, efficiency.value, style.value, distance.value, perilValue);
    console.log()
    event.preventDefault();
}