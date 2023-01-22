function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello" || input == "hi") {
        return "Hello there!";
    } else if (input == "goodbye" || input == "bye") {
        return "Talk to you later!";
    } else if (input == "thank you") {
        return "You're welcome!"; 
    } else if (input == "covcare") {
        return "CovCare is a MOH-Approved Covid-19 PCR Testing Clinic. Click on 'About Us' or 'Services' to find out more!";
    } else if (input == "serology test") {
        return "A serology test helps to determine past infections through blood-taking by checking the existence of COVID-19 antibodies. It is also known as the IgG/IgM (Immunoglobulins) antibody test. The usual turnaround time for our serology test result is about 8 hours.";
    } else if (input == "cancellation policy") {
        return "You are allowed to amend or cancel your booking through a link included in the SMS text or email you received after making a successful booking. However, do note that rescheduling or cancelling of booking has to be done at least one day prior to the original booking schedule. Payment will be refunded to you within 24 hours.";
    } else if (input == "opening hours") {
        return "Our headquarter is located at #10-02 Asia Square Tower 2, 12 Marina View, 018961. We are open from 8am to 6pm, for further enquires feel free to contact us at (+65) 6664 6261 or email us at admin@covcare.com. For details of our test centres, kindly click on 'Contact Us'";
    } else if (input == "test now pay later") {
        return "Get swabbed first then pay the full service amount next month (starting from the day you get swabbed). The E-Bill will be sent to you via SMS text and email. Please note that a late fee of $3 will be imposed in the revised E-Bill if you have not made payment by the final E-Bill due date.";
    } else {
        return "Try asking something else!";
    }
}