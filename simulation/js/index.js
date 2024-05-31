const charts = {};
const schema = ["Engineering Stress", "Engineering Strain"];
const readingData1 = [
  [0.0, 0.03],
  //[0.89, 0.43],
  [0.01, 82.21],
  //[6.07, 0.48],
  [0.01, 96.61],
  //[12.17, 0.51],
  [0.02, 101.42],
  //[18.12, 0.53],
  [0.02, 105.92],
  //[24.08, 0.55],
  [0.03, 109.98],
  //[30.03, 0.57],
  [0.03, 116.71],
  // [35.98, 0.58],
  [0.04, 123.1],
  //[41.94, 0.60],
  [0.04, 128.64],
  // [47.89, 0.62],
  [0.05, 134.35],
  //[53.84, 0.63],
  [0.05, 139.41],
  // [59.80, 0.64],
  [0.06, 144.44],
  //[65.75, 0.66],
  [0.06, 148.66],
  //[71.70, 0.67],
  [0.07, 153.03],
  //[77.66, 0.68],
  [0.07, 156.62],
  //[83.61, 0.70],
  [0.08, 160.56],
  //[89.56, 0.71],
  [0.08, 163.84],
  //[95.52, 0.73],
  [0.09, 167.22],
  //[101.47, 0.74],
  [0.09, 170.11],
  //[107.42, 0.78],
  [0.1, 173.14],
  //[113.58, 0.83],
  [0.1, 175.52],
  //[118.50, 0.90],
  [0.11, 178.29],
  //[121.14, 0.94],
  [0.11, 180.52],
  //[123.84, 1.03],
  [0.12, 182.84],
  //[126.73, 1.10],
  [0.12, 184.7],
  //[127.40, 1.16],
  [0.13, 186.56],
  [0.13, 188.34],
  [0.14, 190.46],
  [0.14, 192.05],
  [0.15, 193.97],
  [0.15, 195.4],
  [0.15, 196.38],
];

const readingData2 = [
  [0.0, 0.0],
  //[2.71, 0.45],
  [0.01, 128.4],
  //[7.13, 0.54],
  [0.02, 142.48],
  //[13.16, 0.60],
  [0.03, 154.1],
  //[19.12, 0.63],
  [0.04, 164.79],
  //[25.07, 0.67],
  [0.05, 174.03],
  //[31.02, 0.70],
  [0.06, 181.8],
  //[36.97, 0.73],
  [0.07, 188.15],
  //[42.93, 0.78],
  [0.08, 194.41],
  //[48.88, 0.81],
  [0.09, 200.07],
  //[54.93, 0.84],
  [0.1, 205.02],
  //[60.79, 0.88],
  [0.11, 208.75],
  //[66.93, 0.92],
  [0.12, 212.7],
  //[72.69, 0.96],
  [0.13, 216.56],
  //[78.78, 1.01],
  [0.14, 219.95],
  //[84.60, 1.06],
  [0.15, 222.93],
  //[89.71, 1.14],
  [0.16, 225.61],
  //[92.54, 1.16],
  [0.17, 228.04],
  //[95.52, 1.18],
  [0.18, 230.21],
  //[97.83, 1.19],
  [0.19, 232.17],
  //[101.29, 1.32],
  [0.2, 233.9],
  //[104.03, 1.45],
  [0.21, 235.58],
  [0.22, 236.86],
  [0.23, 238.07],
  [0.24, 239.15],
  [0.25, 240.03],
  [0.26, 240.92],
  [0.27, 241.64],
  [0.28, 242.22],
  [0.29, 242.66],
  [0.3, 242.99],
  [0.31, 242.69],
];
const readingData3 = [
  [0.0, 0.0],
  [0.01, 214.56],
  [0.02, 213.97],
  [0.03, 219.86],
  [0.04, 226.02],
  [0.05, 231.77],
  [0.06, 236.83],
  [0.07, 241.09],
  [0.08, 244.6],
  [0.09, 247.46],
  [0.1, 249.77],
  [0.11, 251.65],
  [0.12, 253.25],
  [0.13, 254.48],
  [0.14, 255.55],
  [0.15, 256.44],
  [0.16, 257.15],
  [0.17, 257.74],
  [0.18, 258.18],
  [0.19, 258.51],
  [0.2, 258.71],
  [0.21, 258.8],
  [0.22, 258.79],
  [0.23, 258.55],
  [0.24, 257.99],
  [0.25, 256.88],
  [0.26, 254.18],
  [0.27, 248.7],
  [0.28, 239.96],
  [0.29, 226.58],
  [0.3, 201.9],
  [0.31, 98.88],
];

// x axis
const engineering_strain1 = [
  0.0, 0.01, 0.01, 0.02, 0.02, 0.03, 0.03, 0.04, 0.04, 0.05, 0.05, 0.06, 0.06, 0.07, 0.07, 0.08, 0.08, 0.09, 0.09, 0.1,
  0.1, 0.11, 0.11, 0.12, 0.12, 0.13, 0.13, 0.14, 0.14, 0.15, 0.15, 0.15,
];
// y axis
const engineering_stress1 = [
  0.03, 82.21, 96.61, 101.42, 105.92, 109.98, 116.71, 123.1, 128.64, 134.35, 139.41, 144.44, 148.66, 153.03, 156.62,
  160.56, 163.84, 167.22, 170.11, 173.14, 175.52, 178.29, 180.52, 182.84, 184.7, 186.56, 188.34, 190.46, 192.05, 193.97,
  195.4, 196.38,
];

const engineering_strain2 = [
  0.0, 0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.1, 0.11, 0.12, 0.13, 0.14, 0.15, 0.16, 0.17, 0.18, 0.19,
  0.2, 0.21, 0.22, 0.23, 0.24, 0.25, 0.26, 0.27, 0.28, 0.29, 0.3, 0.31,
];

const engineering_stress2 = [
  0.0, 128.4, 142.48, 154.1, 164.79, 174.03, 181.8, 188.15, 194.41, 200.07, 205.02, 208.75, 212.7, 216.56, 219.95,
  222.93, 225.61, 228.04, 230.21, 232.17, 233.9, 235.58, 236.86, 238.07, 239.15, 240.03, 240.92, 241.64, 242.22, 242.66,
  242.99, 242.69,
];

const engineering_strain3 = [
  0.0, 0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.1, 0.11, 0.12, 0.13, 0.14, 0.15, 0.16, 0.17, 0.18, 0.19,
  0.2, 0.21, 0.22, 0.23, 0.24, 0.25, 0.26, 0.27, 0.28, 0.29, 0.3, 0.31,
];

const engineering_stress3 = [
  0.0, 214.56, 213.97, 219.86, 226.02, 231.77, 236.83, 241.09, 244.6, 247.46, 249.77, 251.65, 253.25, 254.48, 255.55,
  256.44, 257.15, 257.74, 258.18, 258.51, 258.71, 258.8, 258.79, 258.55, 257.99, 256.88, 254.18, 248.7, 239.96, 226.58,
  201.9, 98.88,
];

var currPos = 0;

var currentStepProgress = 1;
var sampleLength = 0;
var sampleDiameter = 0;
var sampleFinalLength = 0;
var sampleFinalDiameter = 0;

document.getElementById("step1").classList.remove("disabled");
window.refresh();

window.addEventListener("load", function () {
  setTimeout(() => {
    // if (vc) vc.init();
    // if (sample1) sample1.init();
    if (utm) utm.init();
  }, 1500);
});

function handle() {
  eval(`handleStep${currentStepProgress}()`);
  window.refresh();
}

function handleStep1() {
  let pane = document.getElementById("step1");
  if (utm) utm.init();
  if (sample1) sample1.init();
  pane.classList.add("done");
  pane.classList.remove("active");

  let next = document.getElementById("step2");
  next.classList.add("active");
  next.classList.remove("disabled");

  currentStepProgress = 2;
}

function handleStep2() {
  let pane = document.getElementById("step2");
  if (utm) utm.init();
  if (sample1) sample1.init();

  if (!utm || !utm.isActive()) {
    alert("Please take UTM machine from menu first!");
    return;
  }

  if (!utm.isSampleLoaded()) {
    alert("Please load the sample on the UTM machine first!");
    return;
  }

  let step = 1;
  document.getElementById("nextStep").addEventListener("click", function () {
    if(step == 3) return;

    step++;
    document.getElementById("startTest").disabled = false;
    document.getElementById("nextStep").disabled = true;
  });

  document.getElementById("btnNext").disabled = true;
  document.getElementById("startTest").addEventListener("click", function testHandler(e) {
    e.currentTarget.disabled = true;
    document.getElementById("btnNext").disabled = true;
    // document.getElementById("arrowNext").classList.add("disabled");
    e.currentTarget.innerHTML = "Running...";

    utm.setConfig({
      yield_point: 10, // no yield point
      breaking_point: 0.65,
      finish_point: 0.7,
    });

    setTimeout(() => {
      utm.start(0.015, 1);
    }, 4000);

    if (step == 1) {
      let intr1 = setInterval(() => {
        if (currPos >= readingData3.length) {
          clearInterval(intr1);
          currPos = 0;
          document.getElementById("nextStep").disabled = false;
          document.getElementById("startTest").disabled = true;
          document.getElementById("startTest").innerHTML = "Start Test";
          return;
        }

        const tableData1 = readingData1; // Change to the appropriate data array for Table 1 (readingData1, readingData2, or readingData3)

        const tableBody1 = document.getElementById("testData1"); // Change to the appropriate table body ID for Table 1 (testData1, testData2, or testData3)

        tableBody1.innerHTML += `
        <tr>
          <td>${tableData1[currPos][0]}</td>
          <td>${tableData1[currPos][1]}</td>
        </tr>
      `;

        currPos++;

        let progress1 = (engineering_stress1.length / tableData1.length) * currPos;

        const chart1Data = {
          labels: engineering_strain1,
          datasets: [
            {
              data: engineering_stress1.slice(0, progress1),
              borderColor: "#000",
              fill: false,
              label: "Test 1",
            },
          ],
        };
        // createChart("graph1", chart1Data, "Strain", "Stress");
        plotGraph(document.getElementById("graph1").getContext("2d"), chart1Data, "Strain", "Stress");

        // document.querySelector(".menu").scrollTo(0, document.querySelector(".menu").scrollHeight);
      }, 600);
    }

    if (step == 2) {
      let intr2 = setInterval(() => {

        if (currPos >= readingData3.length) {
          clearInterval(intr2);
          currPos = 0;
          document.getElementById("nextStep").disabled = false;
          document.getElementById("startTest").disabled = true;
          document.getElementById("startTest").innerHTML = "Start Test";
          return;
        }

        const tableData2 = readingData2; // Change to the appropriate data array for Table 2 (readingData1, readingData2, or readingData3)

        const tableBody2 = document.getElementById("testData2"); // Change to the appropriate table body ID for Table 2 (testData1, testData2, or testData3)

        tableBody2.innerHTML += `
        <tr>
          <td>${tableData2[currPos][0]}</td>
          <td>${tableData2[currPos][1]}</td>
        </tr>
      `;

        currPos++;

        let progress1 = (engineering_stress2.length / tableData2.length) * currPos;

        const chart1Data = {
          labels: engineering_strain1,
          datasets: [
            {
              data: engineering_stress1,
              borderColor: "#000",
              fill: false,
              label: "Test 1",
            },
            {
              data: engineering_stress2.slice(0, progress1),
              borderColor: "#ff5733", // Choose a different color
              fill: false,
              label: "Test 2",
            },
            // {
            //   data: engineering_stress3.slice(0, progress1),
            //   borderColor: "#00ff00", // Choose a different color
            //   fill: false,
            //   label: "Test 3"
            // },
          ],
        };
        // createChart("graph1", chart1Data, "Strain", "Stress");
        plotGraph(document.getElementById("graph1").getContext("2d"), chart1Data, "Strain", "Stress");

        // document.querySelector(".menu").scrollTo(0, document.querySelector(".menu").scrollHeight);
      }, 600);
    }

    if (step == 3) {
      let intr3 = setInterval(() => {

        if (currPos >= readingData3.length) {
          clearInterval(intr3);
          document.getElementById("startTest").disabled = true;
          document.getElementById("startTest").innerHTML = "Done";
          utm.stop();
          document.getElementById("btnNext").disabled = false;
          // document.getElementById("arrowNext").classList.remove("disabled");
          return;
        }

        const tableData3 = readingData3; // Change to the appropriate data array for Table 3 (readingData1, readingData2, or readingData3)

        const tableBody3 = document.getElementById("testData3"); // Change to the appropriate table body ID for Table 3 (testData1, testData2, or testData3)

        tableBody3.innerHTML += `
        <tr>
          <td>${tableData3[currPos][0]}</td>
          <td>${tableData3[currPos][1]}</td>
        </tr>
      `;

        currPos++;

        let progress1 = (engineering_stress1.length / tableData3.length) * currPos;

        const chart1Data = {
          labels: engineering_strain1,
          datasets: [
            {
              data: engineering_stress1,
              borderColor: "#000",
              fill: false,
              label: "Test 1",
            },
            {
              data: engineering_stress2,
              borderColor: "#ff5733", // Choose a different color
              fill: false,
              label: "Test 2",
            },
            {
              data: engineering_stress3.slice(0, progress1),
              // borderColor: "#00ff00", // Choose a different color
              borderColor: "#3e95cd", // Choose a different color
              fill: false,
              label: "Test 3",
            },
          ],
        };
        // createChart("graph1", chart1Data, "Strain", "Stress");
        plotGraph(document.getElementById("graph1").getContext("2d"), chart1Data, "Strain", "Stress");

        // document.querySelector(".menu").scrollTo(0, document.querySelector(".menu").scrollHeight);
      }, 600);
    }
  });

  pane.classList.add("done");
  pane.classList.remove("active");

  let next = document.getElementById("step3");
  next.classList.add("active");
  next.classList.remove("disabled");
  sample1.destory();

  currentStepProgress = 3;
}

function handleStep3() {
  let pane = document.getElementById("step3");

  pane.classList.add("done");
  pane.classList.remove("active");

  let next = document.getElementById("step4");
  next.classList.add("active");
  next.classList.remove("disabled");

  currentStepProgress = 4;
}

function handleStep4() {
  let pane = document.getElementById("step4");

  pane.classList.add("done");
  pane.classList.remove("active");

  modal = new Modal({
    title: "Can you answer the questions?",
    body: [
      {
        page: 1,
        title: "Which of the following elements primarily cause strain aging in steels?",
        options: ["Carbon", "Chromium", "Zinc", "Nickel"],
        correct: 0,
      },
      {
        page: 2,
        title: "Which of the following statements are correct w.r.t. strain aging?",
        options: [
          "Strain aging process involves precipitation of carbides",
          "Unloading the sample after completion of yield point phenomenon and quickly reloading it would show strain aging",
          "The yield point after aging is higher than the initial yield point",
          "Strain aging phenomenon is due to change in crystal structure",
        ],
        correct: 2,
      },
      {
        page: 3,
        title: "Strain aging is more popular in:",
        options: ["Mild steel", "304 stainless steels", "Aluminum alloys", "Magnesium alloys"],
        correct: 0,
      },
      {
        page: 4,
        title: "Which one of the following is incorrect?",
        options: [
          "Reappearance of yield point phenomenon is due to diffusion of interstitial atoms to core of dislocations.",
          "Reducing carbon content can avoid yield point phenomenon.",
          "The upper yield point is nucleation stress of the Lüders bands.",
          "The strain aging effect does not depend upon the type of solute atoms.",
        ],
        correct: 3,
      },
      {
        page: 5,
        title: "Lower yield point is not related to:",
        options: [
          "Inhomogeneous deformation",
          "Initiation of Lüder bands",
          "Growth of Lüder bands",
          "Plastic deformation",
        ],
        correct: 1,
      },
      {
        page: 6,
        title: "Which of the following element causes strain aging in steels other than carbon?",
        options: ["Molybdenum", "Nitrogen", "Chromium", "Copper"],
        correct: 1,
      },
      {
        page: 7,
        title: "Strain aging involves:",
        options: ["Nitrides", "Substitutional atoms", "Interstitial atoms", "Carbides"],
        correct: 2,
      },
      {
        page: 8,
        title: "Lüder bands can be seen in:",
        options: ["Creep", "Strain aging", "Strain hardening", "Age hardening"],
        correct: 1,
      },
      {
        page: 9,
        title: "Which is/are true for strain aging?",
        options: [
          "Interstitial elements pin dislocations resulting in an increased yield stress",
          "Yield point phenomenon improves the ductility and decreases the strength",
          "Unloading the sample after completion of yield point phenomenon and reloading it after heating will not show strain aging",
          "Strain aging process involves precipitation of nitrides",
        ],
        correct: 0,
      },
      {
        page: 10,
        title: "Upper yield point is not related to:",
        options: [
          "The point where elastic extension is terminated",
          "The point where yielding starts",
          "The point of initiation of Lüders bands",
          "The stress related to growth of Lüder bands",
        ],
        correct: 3,
      },
      {
        page: 11,
        title:
          "In stress-strain plot of mild steel (showing yield point phenomenon), homogeneous deformation is related to:",
        options: ["Deformation after necking", "Lower yield point", "Elastic deformation", "Growth of Lüder bands"],
        correct: 2,
      },
    ],
    onClose: () => {
      let next = document.getElementById("step5");
      next.classList.add("active");
      next.classList.remove("disabled");

      let btnNext = document.getElementById("btnNext");
      btnNext.disabled = true;
      btnNext.innerHTML = "Finish";
    },
  });
  modal.show();
}

function plotGraph(graphCtx, data, labelX, labelY) {
  let chartObj = charts[graphCtx.canvas.id];
  if (chartObj) {
    chartObj.config.data.labels = data.labels;
    chartObj.config.data.datasets = data.datasets;
    chartObj.update();
  } else {
    charts[graphCtx.canvas.id] = new Chart(graphCtx, {
      type: "line",
      data: data,
      options: {
        responsive: true,
        animation: false,
        scaleOverride: true,
        // legend: { display: false },
        scales: {
          xAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: labelX,
              },
              ticks: {
                beginAtZero: true,
                steps: 20,
                stepValue: 10,
                // max: Math.max(...time1),
              },
              // stacked: true,
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: labelY,
              },
              ticks: {
                beginAtZero: true,
                steps: 10,
                stepValue: 5,
                // max: Math.max(...elongation1),
              },
            },
          ],
        },
      },
    });
  }
}

function showGraph() {
  graphModal = new Modal({
    title: "Strain Aging and Yield Point Phenomenon in Steel",
    body: [
      {
        page: 1,
        title: "Engineering Stress vs Engineering Strain Curve",
        image: "images/result/result_exp_3.png",
      },
    ],
  });
  graphModal.show();
}
