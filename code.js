$(document).ready(
    function () {
        //add all event listener (clicks, etc.)
        $("#showGrade").click(createGradebook);

        //any other functions (calculate trip, roll die, etc.)
        function createGradebook(event)
        {
            event.preventDefault();
            var firstName = $("#firstName").val();
            var lastName = $("#lastName").val();
            var pointsEarned = $("#pointsEarned").val();
            pointsEarned = parseFloat(pointsEarned);
            var pointsPossible = $("#pointsPossible").val();
            pointsPossible = parseFloat(pointsPossible);
            var percentage = Math.round(100*(pointsEarned/pointsPossible));
            var gradeEarned = "";

            var gradeBook = {"firstName":firstName, "lastName":lastName,
                "pointsEarned":pointsEarned, "pointsPossible":pointsPossible};

            if(percentage >= 93) gradeEarned="A";
            else if(percentage >= 90) gradeEarned="A-";
            else if(percentage >= 87) gradeEarned="B+";
            else if(percentage >= 83) gradeEarned="B";
            else if(percentage >= 80) gradeEarned="B-";
            else if(percentage >= 77) gradeEarned="C+";
            else if(percentage >= 73) gradeEarned="C";
            else if(percentage >= 70) gradeEarned="C-";
            else if(percentage >= 67) gradeEarned="D+";
            else if(percentage >= 63) gradeEarned="D";
            else if(percentage >= 60) gradeEarned="D-";
            else gradeEarned="F";


            $("#output").text(`${gradeBook.firstName} ${gradeBook.lastName} 
            scored a ${percentage}% which gives you a ${gradeEarned}`);
        }
    }
);