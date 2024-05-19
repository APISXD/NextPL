document.addEventListener("DOMContentLoaded", function () {
  const data = [
    {
      klub: "Man City",
      logo: "//ssl.gstatic.com/onebox/media/sports/logos/z44l-a0W1v5FmgPnemV6Xw_48x48.png",
      T: 0,
      M: 0,
      S: 0,
      K: 0,
      GM: 0,
      GK: 0,
      SG: 0,
      Poin: 0,
      last5: ["➖", "➖", "➖", "➖", "➖"],
    },
    {
      klub: "Arsenal",
      logo: "//ssl.gstatic.com/onebox/media/sports/logos/4us2nCgl6kgZc0t3hpW75Q_48x48.png",
      T: 0,
      M: 0,
      S: 0,
      K: 0,
      GM: 0,
      GK: 0,
      SG: 0,
      Poin: 0,
      last5: ["➖", "➖", "➖", "➖", "➖"],
    },
    {
      klub: "Liverpool",
      logo: "//ssl.gstatic.com/onebox/media/sports/logos/0iShHhASp5q1SL4JhtwJiw_48x48.png",
      T: 0,
      M: 0,
      S: 0,
      K: 0,
      GM: 0,
      GK: 0,
      SG: 0,
      Poin: 0,
      last5: ["➖", "➖", "➖", "➖", "➖"],
    },
    {
      klub: "Aston Villa",
      logo: "//ssl.gstatic.com/onebox/media/sports/logos/uyNNelfnFvCEnsLrUL-j2Q_48x48.png",
      T: 0,
      M: 0,
      S: 0,
      K: 0,
      GM: 0,
      GK: 0,
      SG: 0,
      Poin: 0,
      last5: ["➖", "➖", "➖", "➖", "➖"],
    },
    {
      klub: "Tottenham",
      logo: "//ssl.gstatic.com/onebox/media/sports/logos/k3Q_mKE98Dnohrcea0JFgQ_48x48.png",
      T: 0,
      M: 0,
      S: 0,
      K: 0,
      GM: 0,
      GK: 0,
      SG: 0,
      Poin: 0,
      last5: ["➖", "➖", "➖", "➖", "➖"],
    },
    {
      klub: "Chelsea",
      logo: "//ssl.gstatic.com/onebox/media/sports/logos/fhBITrIlbQxhVB6IjxUO6Q_48x48.png",
      T: 0,
      M: 0,
      S: 0,
      K: 0,
      GM: 0,
      GK: 0,
      SG: 0,
      Poin: 0,
      last5: ["➖", "➖", "➖", "➖", "➖"],
    },
    {
      klub: "Newcastle",
      logo: "//ssl.gstatic.com/onebox/media/sports/logos/96CcNNQ0AYDAbssP0V9LuQ_48x48.png",
      T: 0,
      M: 0,
      S: 0,
      K: 0,
      GM: 0,
      GK: 0,
      SG: 0,
      Poin: 0,
      last5: ["➖", "➖", "➖", "➖", "➖"],
    },
    {
      klub: "Man Utd",
      logo: "//ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69PctCv143h-GeYw_48x48.png",
      T: 0,
      M: 0,
      S: 0,
      K: 0,
      GM: 0,
      GK: 0,
      SG: 0,
      Poin: 0,
      last5: ["➖", "➖", "➖", "➖", "➖"],
    },
    {
      klub: "West Ham",
      logo: "//ssl.gstatic.com/onebox/media/sports/logos/bXkiyIzsbDip3x2FFcUU3A_48x48.png",
      T: 0,
      M: 0,
      S: 0,
      K: 0,
      GM: 0,
      GK: 0,
      SG: 0,
      Poin: 0,
      last5: ["➖", "➖", "➖", "➖", "➖"],
    },
    {
      klub: "Brighton",
      logo: "//ssl.gstatic.com/onebox/media/sports/logos/EKIe0e-ZIphOcfQAwsuEEQ_48x48.png",
      T: 0,
      M: 0,
      S: 0,
      K: 0,
      GM: 0,
      GK: 0,
      SG: 0,
      Poin: 0,
      last5: ["➖", "➖", "➖", "➖", "➖"],
    },
    {
      klub: "Bournemouth",
      logo: "//ssl.gstatic.com/onebox/media/sports/logos/IcOt-hrK04B-RlRwI3R0yA_48x48.png",
      T: 0,
      M: 0,
      S: 0,
      K: 0,
      GM: 0,
      GK: 0,
      SG: 0,
      Poin: 0,
      last5: ["➖", "➖", "➖", "➖", "➖"],
    },
    {
      klub: "Crystal Palace",
      logo: "//ssl.gstatic.com/onebox/media/sports/logos/8piQOzndGmApKYTcvyN9vA_48x48.png",
      T: 0,
      M: 0,
      S: 0,
      K: 0,
      GM: 0,
      GK: 0,
      SG: 0,
      Poin: 0,
      last5: ["➖", "➖", "➖", "➖", "➖"],
    },
    {
      klub: "Wolves",
      logo: "//ssl.gstatic.com/onebox/media/sports/logos/-WjHLbBIQO9xE2e2MW3OPQ_48x48.png",
      T: 0,
      M: 0,
      S: 0,
      K: 0,
      GM: 0,
      GK: 0,
      SG: 0,
      Poin: 0,
      last5: ["➖", "➖", "➖", "➖", "➖"],
    },
    {
      klub: "Fulham",
      logo: "//ssl.gstatic.com/onebox/media/sports/logos/Gh7_5p3n364p4vxeM8FhNg_48x48.png",
      T: 0,
      M: 0,
      S: 0,
      K: 0,
      GM: 0,
      GK: 0,
      SG: 0,
      Poin: 0,
      last5: ["➖", "➖", "➖", "➖", "➖"],
    },
    {
      klub: "Everton",
      logo: "//ssl.gstatic.com/onebox/media/sports/logos/C3J47ea36cMBc4XPbp9aaA_48x48.png",
      T: 0,
      M: 0,
      S: 0,
      K: 0,
      GM: 0,
      GK: 0,
      SG: 0,
      Poin: 0,
      last5: ["➖", "➖", "➖", "➖", "➖"],
    },
    {
      klub: "Brentford",
      logo: "//ssl.gstatic.com/onebox/media/sports/logos/QOUce0WQBYqnkSmN6_TxGA_48x48.png",
      T: 0,
      M: 0,
      S: 0,
      K: 0,
      GM: 0,
      GK: 0,
      SG: 0,
      Poin: 0,
      last5: ["➖", "➖", "➖", "➖", "➖"],
    },
    {
      klub: "Nottingham Forest",
      logo: "//ssl.gstatic.com/onebox/media/sports/logos/Zr6FbE-8pDH7UBpWCO8U9A_48x48.png",
      T: 0,
      M: 0,
      S: 0,
      K: 0,
      GM: 0,
      GK: 0,
      SG: 0,
      Poin: 0,
      last5: ["➖", "➖", "➖", "➖", "➖"],
    },
    {
      klub: "Leicester City",
      logo: "data:image/png;base64,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",
      T: 0,
      M: 0,
      S: 0,
      K: 0,
      GM: 0,
      GK: 0,
      SG: 0,
      Poin: 0,
      last5: ["➖", "➖", "➖", "➖", "➖"],
    },
    {
      klub: "Ipswich Town",
      logo: "data:image/png;base64,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",
      T: 0,
      M: 0,
      S: 0,
      K: 0,
      GM: 0,
      GK: 0,
      SG: 0,
      Poin: 0,
      last5: ["➖", "➖", "➖", "➖", "➖"],
    },
    {
      klub: "Southampton",
      logo: "data:image/png;base64,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",
      T: 0,
      M: 0,
      S: 0,
      K: 0,
      GM: 0,
      GK: 0,
      SG: 0,
      Poin: 0,
      last5: ["➖", "➖", "➖", "➖", "➖"],
    },
    // Add more teams as needed
  ];

  // Sort data alphabetically by klub name
  data.sort((a, b) => a.klub.localeCompare(b.klub));

const tableBody = document.querySelector("#standings tbody");

function populateTable(data) {
  tableBody.innerHTML = "";
  data.forEach((team, index) => {
    const row = document.createElement("tr");
    const klubCell = document.createElement("td");
    klubCell.innerHTML = `<img src="${team.logo}" alt="${team.klub}" class="club-logo"> ${team.klub}`;
    row.appendChild(klubCell);
    Object.keys(team).forEach((key) => {
      if (key !== "klub" && key !== "logo") {
        const cell = document.createElement("td");
        if (key === "last5") {
          cell.innerHTML = team[key]
            .map((result) => {
              if (result === "➖") return "<span class='icon seri'></span>";
              if (result === "✅") return "<span class='icon menang'></span>";
              if (result === "❌") return "<span class='icon kalah'></span>";
            })
            .join(" ");
        } else {
          cell.textContent = team[key];
        }
        row.appendChild(cell);
      }
    });
    tableBody.appendChild(row);

    // Add border color for top 4 clubs
        if (index < 4) {
          klubCell.style.borderLeft = "2px solid blue";
        } else if (index === 4) {
          // Assign orange border color for the 5th club
          klubCell.style.borderLeft = "2px solid orange";
        } else if (index >= 17) {
          // Assign red border color for clubs positioned at 18, 19, and 20
          klubCell.style.borderLeft = "2px solid red";
        }
  });
}

populateTable(data);

document.getElementById("predictButton").addEventListener("click", function () {
  // Simulate end-of-season predictions
  const predictions = data.map((team) => {
    // Simulate random values for demonstration purposes
    team.T = 38;
    if (
      [
        "Man City",
        "Man Utd",
        "Chelsea",
        "Newcastle",
        "Liverpool",
        "Arsenal",
      ].includes(team.klub)
    ) {
      // Ensure these teams are in the top 10
      team.M = Math.floor(Math.random() * 25) + 10;
      team.S = Math.floor(Math.random() * 10);
    } else {
      team.M = Math.floor(Math.random() * 25);
      team.S = Math.floor(Math.random() * 10);
    }
    team.K = 38 - team.M - team.S;
    team.GM = Math.floor(Math.random() * 100);
    team.GK = Math.floor(Math.random() * 80);
    team.SG = team.GM - team.GK;
    team.Poin = team.M * 3 + team.S;
    team.last5 = Array.from(
      { length: 5 },
      () => ["➖", "✅", "❌"][Math.floor(Math.random() * 3)]
    );
    return team;
  });

  // Sort by points
  predictions.sort((a, b) => b.Poin - a.Poin);

  populateTable(predictions);
});


});