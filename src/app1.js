import './app1.css'
import $ from 'jquery'

const $number = $('#number')
const $add = $('#add')
const $minus = $('#minus')
const $multi2 = $('#multi2')
const $divide2 = $('#divide2')

const n = localStorage.getItem('n')

$add.on('click', () => {
    let n = parseInt($number.text())
    n += 1
    localStorage.getItem('n', n)
    $number.text(n)
})
$minus.on('click', () => {
    let n = parseInt($number.text())
    n -= 1
    localStorage.getItem('n', n)
    $number.text(n)
})
$multi2.on('click', () => {
    let n = parseInt($number.text())
    n *= 2
    localStorage.getItem('n', n)
    $number.text(n)
})
$divide2.on('click', () => {
    let n = parseInt($number.text())
    n /= 2
    localStorage.getItem('n', n)
    $number.text(n)
})