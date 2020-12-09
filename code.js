$(document).ready(
    function () {
        //add all event listener (clicks, etc.)
        $("#sortByName").click(createGradebook);
        $("#sortByPercentage").click(createGradebook);

        //any other functions (calculate trip, roll die, etc.)
        function createGradebook(event) {
            event.preventDefault();
            var firstName = $("#firstName").val();
            var lastName = $("#lastName").val();
            var pointsEarned = $("#pointsEarned").val();
            pointsEarned = parseFloat(pointsEarned);
            var pointsPossible = $("#pointsPossible").val();
            pointsPossible = parseFloat(pointsPossible);
            var percentage = Math.round(100 * (pointsEarned / pointsPossible));
            var gradeEarned = "";

            var gradebook = [];

            var studentSubmission = {
                firstName: firstName,
                lastName: lastName,
                pointsEarned: pointsEarned,
                pointsPossible: pointsPossible,
                percentage: percentage
            };
            gradebook.push(studentSubmission);

            if (percentage >= 93) gradeEarned = "A";
            else if (percentage >= 90) gradeEarned = "A-";
            else if (percentage >= 87) gradeEarned = "B+";
            else if (percentage >= 83) gradeEarned = "B";
            else if (percentage >= 80) gradeEarned = "B-";
            else if (percentage >= 77) gradeEarned = "C+";
            else if (percentage >= 73) gradeEarned = "C";
            else if (percentage >= 70) gradeEarned = "C-";
            else if (percentage >= 67) gradeEarned = "D+";
            else if (percentage >= 63) gradeEarned = "D";
            else if (percentage >= 60) gradeEarned = "D-";
            else gradeEarned = "F";

            var sortingMethod = $(this).attr("value");
            if (sortingMethod === "names") {
                function compareStudentLastNames(a, b)
                {
                    if (a.lastName < b.lastName)
                        return -1;
                    else if (a.lastName > b.lastName)
                        return 1;
                    else
                        return 0;
                }

                gradebook.sort(compareStudentLastNames);
                for (var student of gradebook)
                {
                    $("#output").append(`${student.firstName} ${student.lastName} Scored:
                ${student.pointsEarned}/${student.pointsPossible} which is ${student.percentage}%   `);
                }
            }
            if (sortingMethod === "percentages")
            {
                function compareStudentPercentages(a, b)
                {
                    if (a.percentage < b.percentage)
                        return -1;
                    else if (a.percentage > b.percentage)
                        return 1;
                    else
                        return 0;
                }

                gradebook.sort(compareStudentPercentages);
                for (var student of gradebook)
                {
                    $("#output").append(`${student.firstName} ${student.lastName} Scored:
                ${student.pointsEarned}/${student.pointsPossible} which is ${student.percentage}%   `);
                }
            }

        }

    }
);