---
title: Тэгш өнцөгт гурвалжины пэриметр өгөгдсөн бол хэдэн төрлийн тэгш өнцөгтүүд байж болох вэ ?
date: 2025-08-22
---

euclidean дүрэм гэж байдаг юм байна .

Given any two positive integers m and n where m > n, the sides of a Pythagorean triple can be generated as follows:
a = m² - n²
b = 2mn
c = m² + n²

To guarantee that the triple {a, b, c} you generate is primitive, the integers m and n must satisfy three conditions:
m > n > 0.
m and n are coprime (their greatest common divisor is 1).
One of m and n is even, and the other is odd (they have opposite parity).

Хэрвээ a,b,c гурван тооны хамгийн их ерөнхий хуваагч `1` бол primitive triple гэнэ .

`Манай бодлоготой хэрхэн холбогдож байна гэвэл:`

p = a + b + c
p = (m² - n²) + (2mn) + (m² + n²)
If you simplify that expression, the n² terms cancel out:
p = 2m² + 2mn
p = 2m(m + n)

1. p=500 үед
   250 = m(m+n)
   250 = 1*(1+249)
   250= 2 * (2+123)
   250 = 5\* 50
   250 = 25 \*

`Шийдэл :`

1. p=2m(m+n)
2. m > n
