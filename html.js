
function makeCard(People) {
  let newcard =  ""
  for (let i = 0; i < People.length; i++) {
      switch (People[i].getRole()) {
          case "manager":
              newcard = newcard.concat(`<div class="card" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">${People[i].name}</h5>
                <h6 class="card-subtitle md-2 ">Email: <a href="mailto:${People[i].email}>:${People[i].email}</a></h6>
                <h6 class="card-subtitle mb-2 ">${People[i].position}</h6>
                <h6 class="card-subtitle mb-2 ">${People[i].id}</h6>
                <h6 class="card-subtitle mb-2 ">${People[i].officenumber}</h6>
              </div>
            </div>`)
              break;
             
                case "engineer":
                    newcard = newcard.concat(`<div class="card" style="width: 18rem;">
                    <div class="card-body">
                      <h5 class="card-title">${People[i].name}</h5>
                      <h6 class="card-subtitle md-2 ">Email: <a href="mailto:${People[i].email}>:${People[i].email}</a></h6>
                      <h6 class="card-subtitle mb-2 ">${People[i].position}</h6>
                      <h6 class="card-subtitle mb-2 ">${People[i].id}</h6>
                      <h6 class="card-subtitle md-2">Github: <a href="https://github.com/${People[i].github}" target="_blank">${People[i].github}</a></h6>
                    </div>
                  </div>`)
                    break;
                    
                case "intern":
                    newcard = newcard.concat(`<div class="card" style="width: 18rem;">
                    <div class="card-body">
                      <h5 class="card-title">${People[i].name}</h5>
                      <h6 class="card-subtitle md-2 ">Email: <a href="mailto:${People[i].email}>:${People[i].email}</a></h6>
                      <h6 class="card-subtitle mb-2 ">${People[i].position}</h6>
                      <h6 class="card-subtitle mb-2 ">${People[i].id}</h6>
                      <h6 class="card-subtitle mb-2 ">${People[i].school}</h6>
                    </div>
                  </div>`)
                    break;
         
      }
      
  }
  return newcard
}







function generatehtml(People) {




    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
</head>
<body>
    <h1> <strong>Team Profile Generator</strong></h1>
    ${makeCard (People)}
</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
</html>








`
}





module.exports = generatehtml



