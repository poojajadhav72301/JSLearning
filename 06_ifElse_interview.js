console.log("***** Interview eligibility *****");
function interviewEligibility(gradScore, hscScore, sscScore, candidateName){
    if(gradScore >= 70 || hscScore >= 80 || sscScore > 90){
        console.log(`${candidateName} you are eligible for TCS interview`);
    }
    else{
        console.log(`${candidateName} you are not eligible for TCS interview`);
    }
}
interviewEligibility(80, 86, 90, "Pooja Jadhav");
interviewEligibility(70, 65, 55, "Vaishnavi Bhosale");
interviewEligibility(60, 79, 88, "Nisha Jadhav");