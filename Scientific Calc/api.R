library(plumber)

r <- plumb()
r$handle("GET", "/add", function(a, b) {
  as.numeric(a) + as.numeric(b)
})
r$handle("GET", "/subtract", function(a, b) {
  as.numeric(a) - as.numeric(b)
})
r$handle("GET", "/multiply", function(a, b) {
  as.numeric(a) * as.numeric(b)
})

r$handle("GET", "/divide", function(a, b) {
  as.numeric(a) / as.numeric(b)
})

r$handle("GET", "/sin", function(x) {
  sin(as.numeric(x))
})

r$handle("GET", "/cos", function(x) {
  cos(as.numeric(x))
})

r$handle("GET", "/tan", function(x) {
  tan(as.numeric(x))
})

r$handle("GET", "/log", function(x) {
  log(as.numeric(x))
})

r$handle("GET", "/sqrt", function(x) {
  sqrt(as.numeric(x))
})

r$run(port = 8000)

cat(plumb)
