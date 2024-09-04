function calculateGPA() 
{
  let validGrades = 0;
  let reattempt = false;
  const O = 10;
  const Aplus = 9;
  const A = 8;
  const Bplus = 7;
  const B = 6;
  const C = 5;
  let sub1Mark = 3;
  let sub2Mark = 1;
  let sub3Mark = 3;
  let sub4Mark = 3;
  let sub5Mark = 2;
  let sub6Mark = 3;
  let sub7Mark = 1;
  let sub8Mark = 2;
  let sub9Mark = 3;
  let sub10Mark = 2;
  let sub1Grade;
  let sub2Grade;
  let sub3Grade;
  let sub4Grade;
  let sub5Grade;
  let sub6Grade;
  let sub7Grade;
  let sub8Grade;
  let sub9Grade;
  let sub10Grade;

  function selectSub() {
    const selectedcoreSubject = document.getElementById("coreSubject").value;
    switch (selectedcoreSubject) {
      case "math":
        sub9Mark;
        break;
      case "eng":
        sub9Mark;
        break;
      case "sci":
        sub9Mark;
        break;
      case "hist":
        sub9Mark;
        break;
      default:
        alert("PleaseSelect A Core Subject:");
        return;
    }
  }
  function selectLab() {
    const selectedcoreLab = document.getElementById("coreSubjectLab").value;
    switch (selectedcoreLab) {
      case "math":
        sub10Mark;
        break;
      case "eng":
        sub10Mark;
        break;
      case "sci":
        sub10Mark;
        break;
      case "hist":
        sub10Mark;
        break;
      default:
        alert("Please Select A Core Subject Lab");
        return;
    }
  }

  // Subject 1
  const selectedSubGrade1 = document.querySelector(
    'input[name="subject1"]:checked'
  );

  if (selectedSubGrade1) {
    const subgradeValue1 = parseFloat(selectedSubGrade1.value);
    switch (subgradeValue1) {
      case 4:
        // Handle O grade
        sub1Grade = sub1Mark * O;
        validGrades++;
        break;
      case 3.7:
        // Handle A+ grade
        sub1Grade = sub1Mark * Aplus;
        validGrades++;
        break;
      case 3.3:
        // Handle A grade
        sub1Grade = sub1Mark * A;
        validGrades++;
        break;
      case 3:
        // Handle B+ grade
        sub1Grade = sub1Mark * Bplus;
        validGrades++;
        break;
      case 2.7:
        // Handle B grade
        sub1Grade = sub1Mark * B;
        validGrades++;
        break;
      case 2:
        // Handle C grade
        sub1Grade = sub1Mark * C;
        validGrades++;
        break;
      case 0:
        // Handle U grade
        reattempt = true;
        break;
      default:
        alert("Invalid grade value");
        return;
    }
    /* processString(subgradeValue1) */
  } else {
    alert("Please select grades for all subjects.");
  }

  // Subject 2
  const selectedSubGrade2 = document.querySelector(
    'input[name="subject2"]:checked'
  );
  if (selectedSubGrade2) {
    const subgradeValue2 = parseFloat(selectedSubGrade2.value);
    switch (subgradeValue2) {
      case 4:
        // Handle O grade
        sub2Grade = sub2Mark * O;
        validGrades++;
        break;
      case 3.7:
        // Handle A+ grade
        sub2Grade = sub2Mark * Aplus;
        validGrades++;
        break;
      case 3.3:
        // Handle A grade
        sub2Grade = sub2Mark * A;
        validGrades++;
        break;
      case 3:
        // Handle B+ grade
        sub2Grade = sub2Mark * Bplus;
        validGrades++;
        break;
      case 2.7:
        // Handle B grade
        sub2Grade = sub2Mark * B;
        break;
      case 2:
        // Handle C grade
        sub2Grade = sub2Mark * C;
        validGrades++;
        break;
      case 0:
        // Handle U grade
        reattempt = true;
        break;
      default:
        alert("Invalid grade value");
        return;
    }
  } else {
    alert("Please select grades for all subjects.");
  }
  // Repeat similar blocks for subjects 3 to 10
  // Subject 3
  const selectedSubGrade3 = document.querySelector(
    'input[name="subject3"]:checked'
  );
  if (selectedSubGrade3) {
    const subgradeValue3 = parseFloat(selectedSubGrade3.value);
    switch (subgradeValue3) {
      case 4:
        // Handle O grade
        sub3Grade = sub3Mark * O;
        validGrades++;
        break;
      case 3.7:
        // Handle A+ grade
        sub3Grade = sub3Mark * Aplus;
        validGrades++;
        break;
      case 3.3:
        // Handle A grade
        sub3Grade = sub3Mark * A;
        validGrades++;
        break;
      case 3:
        // Handle B+ grade
        sub3Grade = sub3Mark * Bplus;
        validGrades++;
        break;
      case 2.7:
        // Handle B grade
        sub3Grade = sub3Mark * B;
        break;
      case 2:
        // Handle C grade
        sub3Grade = sub3Mark * C;
        validGrades++;
        break;
      case 0:
        // Handle U grade
        reattempt = true;
        break;
      default:
        alert("Invalid grade value");
        return;
    }
  } else {
    alert("Please select grades for all subjects.");
    return;
  }
  // Subject 4
  const selectedSubGrade4 = document.querySelector(
    'input[name="subject4"]:checked'
  );
  if (selectedSubGrade4) {
    const subgradeValue4 = parseFloat(selectedSubGrade4.value);
    switch (subgradeValue4) {
      case 4:
        // Handle O grade
        sub4Grade = sub4Mark * O;
        validGrades++;
        break;
      case 3.7:
        // Handle A+ grade
        sub4Grade = sub4Mark * Aplus;
        validGrades++;
        break;
      case 3.3:
        // Handle A grade
        sub4Grade = sub4Mark * A;
        validGrades++;
        break;
      case 3:
        // Handle B+ grade
        sub4Grade = sub4Mark * Bplus;
        validGrades++;
        break;
      case 2.7:
        // Handle B grade
        sub4Grade = sub4Mark * B;
        break;
      case 2:
        // Handle C grade
        sub4Grade = sub4Mark * C;
        validGrades++;
        break;
      case 0:
        // Handle U grade
        reattempt = true;
        break;
      default:
        alert("Invalid grade value");
        return;
    }
  } else {
    alert("Please select grades for all subjects.");
    return;
  }

  // Subject 5
  const selectedSubGrade5 = document.querySelector(
    'input[name="subject5"]:checked'
  );
  if (selectedSubGrade5) {
    const subgradeValue5 = parseFloat(selectedSubGrade5.value);
    switch (subgradeValue5) {
      case 4:
        // Handle O grade
        sub5Grade = sub5Mark * O;
        validGrades++;
        break;
      case 3.7:
        // Handle A+ grade
        sub5Grade = sub5Mark * Aplus;
        validGrades++;
        break;
      case 3.3:
        // Handle A grade
        sub5Grade = sub5Mark * Bplus;
        validGrades++;
        break;
      case 3:
        // Handle B+ grade
        sub5Grade = sub5Mark * Bplus;
        validGrades++;
        break;
      case 2.7:
        // Handle B grade
        sub5Grade = sub5Mark * B;
        break;
      case 2:
        // Handle C grade
        sub5Grade = sub5Mark * C;
        validGrades++;
        break;
      case 0:
        // Handle U grade
        reattempt = true;
        break;
      default:
        alert("Invalid grade value");
        return;
    }
  } else {
    alert("Please select grades for all subjects.");
    return;
  }

  // Subject 6
  const selectedSubGrade6 = document.querySelector(
    'input[name="subject6"]:checked'
  );
  if (selectedSubGrade6) {
    const subgradeValue6 = parseFloat(selectedSubGrade6.value);
    switch (subgradeValue6) {
      case 4:
        // Handle O grade
        sub6Grade = sub6Mark * O;
        validGrades++;
        break;
      case 3.7:
        // Handle A+ grade
        sub6Grade = sub6Mark * Aplus;
        validGrades++;
        break;
      case 3.3:
        // Handle A grade
        sub6Grade = sub6Mark * A;
        validGrades++;
        break;
      case 3:
        // Handle B+ grade
        sub6Grade = sub6Mark * Bplus;
        validGrades++;
        break;
      case 2.7:
        // Handle B grade
        sub6Grade = sub6Mark * B;
        break;
      case 2:
        // Handle C grade
        sub6Grade = sub6Mark * C;
        validGrades++;
        break;
      case 0:
        // Handle U grade
        reattempt = true;
        break;
      default:
        alert("Invalid grade value");
        return;
    }
  } else {
    alert("Please select grades for all subjects.");
    return;
  }
  // Subject 7
  const selectedSubGrade7 = document.querySelector(
    'input[name="subject7"]:checked'
  );
  if (selectedSubGrade7) {
    const subgradeValue7 = parseFloat(selectedSubGrade7.value);
    switch (subgradeValue7) {
      case 4:
        // Handle O grade
        sub7Grade = sub7Mark * O;
        validGrades++;
        break;
      case 3.7:
        // Handle A+ grade
        sub7Grade = sub7Mark * Aplus;
        validGrades++;
        break;
      case 3.3:
        // Handle A grade
        sub7Grade = sub7Mark * A;
        validGrades++;
        break;
      case 3:
        // Handle B+ grade
        sub7Grade = sub7Mark * Bplus;
        validGrades++;
        break;
      case 2.7:
        // Handle B grade
        sub7Grade = sub7Mark * B;
        break;
      case 2:
        // Handle C grade
        sub7Grade = sub7Mark * C;
        validGrades++;
        break;
      case 0:
        // Handle U grade
        reattempt = true;
        break;
      default:
        alert("Invalid grade value");
        return;
    }
  } else {
    alert("Please select grades for all subjects.");
    return;
  }
  // Subject 8
  const selectedSubGrade8 = document.querySelector(
    'input[name="subject8"]:checked'
  );
  if (selectedSubGrade8) {
    const subgradeValue8 = parseFloat(selectedSubGrade8.value);
    switch (subgradeValue8) {
      case 4:
        // Handle O grade
        sub8Grade = sub8Mark * O;
        validGrades++;
        break;
      case 3.7:
        // Handle A+ grade
        sub8Grade = sub8Mark * Aplus;
        validGrades++;
        break;
      case 3.3:
        // Handle A grade
        sub8Grade = sub8Mark * A;
        validGrades++;
        break;
      case 3:
        // Handle B+ grade
        sub8Grade = sub8Mark * Bplus;
        validGrades++;
        break;
      case 2.7:
        // Handle B grade
        sub8Grade = sub8Mark * B;
        break;
      case 2:
        // Handle C grade
        sub8Grade = sub8Mark * C;
        validGrades++;
        break;
      case 0:
        // Handle U grade
        reattempt = true;
        break;
      default:
        alert("Invalid grade value");
        return;
    }
  } else {
    alert("Please select grades for all subjects.");
    return;
  }
  // Subject 9
  selectSub();
  const selectedSubGrade9 = document.querySelector(
    'input[name="subject9"]:checked'
  );
  if (selectedSubGrade9) {
    const subgradeValue9 = parseFloat(selectedSubGrade9.value);
    switch (subgradeValue9) {
      case 4:
        // Handle O grade
        sub9Grade = sub9Mark * O;
        validGrades++;
        break;
      case 3.7:
        // Handle A+ grade
        sub9Grade = sub9Mark * Aplus;
        validGrades++;
        break;
      case 3.3:
        // Handle A grade
        sub9Grade = sub9Mark * A;
        validGrades++;
        break;
      case 3:
        // Handle B+ grade
        sub9Grade = sub9Mark * Bplus;
        validGrades++;
        break;
      case 2.7:
        // Handle B grade
        sub9Grade = sub9Mark * B;
        break;
      case 2:
        // Handle C grade
        sub9Grade = sub9Mark * C;
        validGrades++;
        break;
      case 0:
        // Handle U grade
        reattempt = true;
        break;
      default:
        alert("Invalid grade value");
        return;
    }
  } else {
    alert("Please select grades for all subjects.");
    return;
  }
  // Subject 10
  selectLab();
  const selectedSubGrade10 = document.querySelector(
    'input[name="subject10"]:checked'
  );
  if (selectedSubGrade10) {
    const subgradeValue10 = parseFloat(selectedSubGrade10.value);
    switch (subgradeValue10) {
      case 4:
        // Handle O grade
        sub10Grade = sub10Mark * O;
        validGrades++;
        break;
      case 3.7:
        // Handle A+ grade
        sub10Grade = sub10Mark * Aplus;
        validGrades++;
        break;
      case 3.3:
        // Handle A grade
        sub10Grade = sub10Mark * A;
        validGrades++;
        break;
      case 3:
        // Handle B+ grade
        sub10Grade = sub10Mark * Bplus;
        validGrades++;
        break;
      case 2.7:
        // Handle B grade
        sub10Grade = sub10Mark * B;
        break;
      case 2:
        // Handle C grade
        sub10Grade = sub10Mark * C;
        validGrades++;
        break;
      case 0:
        // Handle U grade
        reattempt = true;
        break;
      default:
        alert("Invalid grade value");
        return;
    }
  } else {
    alert("Please select grades for all subjects.");
    return;
  }
  /* if (reattempt){
                  if (confirm('SORRY YOU GOT RE-ATTEMPT, BUT STILL YOU NEED A GPA ?')) {
                  let failsum10= sub1Mark +sub2Mark  + sub3Mark + sub4Mark + sub5Mark + sub6Mark + sub7Mark + sub8Grade + sub10Grade;
                  let failGpa10 = failsum10 / 23;
                  gpaResult.style.color = 'red'
                  document.getElementById('gpaResult').innerText = failGpa10.toFixed(2)+("𝔹𝕦𝕥 𝔽𝕒𝕚𝕝");
                } else {
                  alert('THANK YOU FOR VIST');
                 }
              } */
  function fail() {
    if (
      confirm("SORRY YOU GOT RE-ATTEMPT ...DON'T WORRY KEEP DOING SCORE MORE")
    ) {
      document.getElementById("gpaResult").style.color = "red";
      let failMsg = "𝕊𝕠𝕣𝕣𝕪 𝕐𝕠𝕦 𝔸𝕣𝕖 𝔽𝕒𝕚𝕝";
      document.getElementById("gpaResult").innerText = failMsg;
    }
  }
  const sum =
    sub1Grade +
    sub2Grade +
    sub3Grade +
    sub4Grade +
    sub5Grade +
    sub6Grade +
    sub7Grade +
    sub8Grade +
    sub9Grade +
    sub10Grade;
  let result = sum / 23;
  /*      if (reattempt = true) {
      confirm("you got arrear .. sitll you want gpa");
      
    }    
    */
  gpaResult.style.color = "#45a049";
  const totalGpa = reattempt ? fail() : result;
  document.getElementById("gpaResult").innerText = totalGpa.toFixed(2);
}
