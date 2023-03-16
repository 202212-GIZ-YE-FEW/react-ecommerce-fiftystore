export default function fillingStars(rate) {
    return  `${(Math.round((rate / 5) * 100 / 10) * 10)}%`;
    // return Math.round(rate);
}