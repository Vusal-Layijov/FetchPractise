/*
Make fetch requests in the browser for each of the following phases.
Paste your code for fetch requests here once you finish each phase.
*/

/* ============================== Phase 1 ============================== */

// Your code here
fetch('/products',{
    method: "POST",
    body: "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery",
    headers: {"Content-Type": "application/x-www-form-urlencoded"}
})


/* ============================== Phase 2 ============================== */

// Your code here
fetch("/products", {
  method: "POST",
  body: "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
})
.then(response => {
  console.log({
    status: response.status,
    location: response.headers.get("Content-Type"),
    url: response.url,
    redirect: response.redirected
  })
})


/* ============================== Phase 3 ============================== */

// Your code here