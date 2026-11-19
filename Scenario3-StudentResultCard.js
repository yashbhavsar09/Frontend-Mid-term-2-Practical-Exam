const students = [
    { name: "Anu", maths: 85, science: 85, english: 85 },
    { name: "Rahul", maths: 62, science: 63, english: 62 },
    { name: "Meena", maths: 94, science: 95, english: 94 },
    { name: "Karthik", maths: 60, science: 32, english: 58 },
    { name: "Divya", maths: 70, science: 70, english: 70 }
];

function getGrade(percent) {
    if (percent >= 90) return "A+";
    else if (percent >= 75) return "A";
    else if (percent >= 60) return "B";
    else if (percent >= 50) return "C";
    else return "D";
}

function generateResults() {
    const table = document.getElementById("resultBody");
    table.innerHTML = "";

    let totalPercentage = 0;
    let passed = 0;
    let topper = "";
    let highest = 0;

    students.forEach(function (student) {
        const total = student.maths + student.science + student.english;
        const percent = (total / 300) * 100;
        const grade = getGrade(percent);

        const result = (
            student.maths >= 35 &&
            student.science >= 35 &&
            student.english >= 35
        ) ? "Pass" : "Fail";

        totalPercentage += percent;

        if (result === "Pass") {
            passed++;
        }

        if (percent > highest) {
            highest = percent;
            topper = student.name;
        }

        const row = document.createElement("tr");

        if (result === "Fail") {
            row.classList.add("fail");
        }

        row.innerHTML = `
            <td>${student.name}</td>
            <td>${total}</td>
            <td>${percent.toFixed(2)}%</td>
            <td>${grade}</td>
            <td>${result}</td>
        `;

        table.appendChild(row);
    });

    const average = totalPercentage / students.length;

    document.getElementById("summary").innerHTML = `
        <p><b>Topper:</b> ${topper} (${highest.toFixed(2)}%)</p>
        <p><b>Class Average:</b> ${average.toFixed(2)}%</p>
        <p><b>Passed:</b> ${passed} out of ${students.length} students</p>
    `;
}

document.getElementById("generateBtn").addEventListener("click", generateResults);