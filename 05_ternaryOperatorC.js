function interviewEligibility(gradScore, hscScore, sscScore, candidateName){
    var result = gradScore >= 70 || hscScore >= 80 || sscScore > 90 
        ? `Congrates ${candidateName} you are eligible for TCS interview` 
        : `${candidateName} Unfortunately you are not eligible for interview`;
        console.log(result);
}
interviewEligibility(80, 86, 90, "Pooja Jadhav");
interviewEligibility(70, 65, 55, "vaishnavi Bhosale");
interviewEligibility(60, 70, 80, "Nisha Jadhav");