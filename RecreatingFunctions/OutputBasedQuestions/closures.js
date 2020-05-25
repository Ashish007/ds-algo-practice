for (var i = 0; i < 5; i++) {
    console.log("wqwqwq")
    setTimeout(
      (function(i) {
        console.log("sasas",i)
        return function() {
          console.log(i);
        };
      })(i),
      0
    );
  }

