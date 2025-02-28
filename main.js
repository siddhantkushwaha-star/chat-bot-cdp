const sendBtn = document.getElementById('send-btn');
const userInput = document.getElementById('user-input');
const chatboxBody = document.getElementById('chatbox-body');

const cdpDocs = {
    segment: "https://segment.com/docs/?ref=nav",
    mparticle: "https://docs.mparticle.com/",
    lytics: "https://docs.lytics.com/",
    zeotap: "https://docs.zeotap.com/home/en-us/"
};

// Placeholder for document fetching functions
function getAnswerFromDoc(query, cdp) {
    // This function would ideally fetch the documentation URL and extract relevant data.
    // For now, we're simulating the response.
    
    const responses = {
        "segment": "To set up a new source in Segment, you need to navigate to the Sources page and click 'Add Source'.",
        "mparticle": "To create a user profile in mParticle, go to the Profiles section and click 'Create Profile'.",
        "lytics": "To build an audience segment in Lytics, go to 'Audiences' and select 'Create Segment'.",
        "zeotap": "To integrate your data with Zeotap, refer to the 'Integrations' section in the dashboard."
    };

    return responses[cdp.toLowerCase()] || "Sorry, I couldn't find an answer for this query.";
}

function handleUserInput() {
    const question = userInput.value.trim();

    if (!question) {
        return;
    }

    // Display user's question
    chatboxBody.innerHTML += `<div class="user-msg">${question}</div>`;

    // Process the question and find the CDP mentioned in the query
    let cdp = "";
    if (question.toLowerCase().includes("segment")) {
        cdp = "segment";
    } else if (question.toLowerCase().includes("mparticle")) {
        cdp = "mparticle";
    } else if (question.toLowerCase().includes("lytics")) {
        cdp = "lytics";
    } else if (question.toLowerCase().includes("zeotap")) {
        cdp = "zeotap";
    } else {
        cdp = "general";
    }

    // Get the answer from the documentation
    const answer = getAnswerFromDoc(question, cdp);

    // Display the chatbot's response
    chatboxBody.innerHTML += `<div class="bot-msg">${answer}</div>`;
    
    // Clear the input field after sending the message
    userInput.value = '';
    chatboxBody.scrollTop = chatboxBody.scrollHeight; // Auto scroll to bottom
}

// Event listener for the Send button
sendBtn.addEventListener('click', handleUserInput);

// Optional: Allow user to press Enter instead of clicking Send
userInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        handleUserInput();
    }
});



