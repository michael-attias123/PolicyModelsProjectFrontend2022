//'use strict'

class Question {
    constructor(id, question, answers){
        this.id = id
        this.question = question
        this.answers = answers
    }
}

const Languages = {
    ENGLISH_RAW: 0,
    HEBREW: 1,
    ARABIC: 2,
    ENGLISH_US: 3
};

class TextAssets {
    constructor(){
        this.welcome = ["Welcome", "ברוכים הבאים", "", "Welcome"];
        this.start_interview = ["Start Interview", "התחל ראיון", "","Start Interview"];
        this.start = ["Start","התחלה","","Start"];
        this.restart = ["Restart","התחל מחדש","","Restart"];
        this.show_transcript = ["Show Transcript","הראה תשובות","","Show Transcript"];
        this.hide_transcript = ["Hide Transcript","הסתר תשובות", "","Hide Transcript"];
        this.question = ["Question", "שאלה","","Question"];
        this.your_answer = ["Your answer","התשובה שלך","","Your answer"];
        this.revisit = ["Revisit this question", "חזור לשאלה זו","","Revisit this question"];
        this.show_conclusion = ["Show Conclusion", "הראה תוצאות", "", "Show Conclusion"];
        this.home = ["Home", "חזרה לעמוד הבית","","Home"];
        this.welcome_PM = ["Welcome to the PolicyModels test site!", "ברוכים הבאים לאתר הזמני של PolicyModels","","Welcome to the PolicyModels test site!"];
        this.results = ["Your results", "התוצאות שלך", "", "your results"];
        this.conclusion_page = ["The conclusions of your interview", "מסקנות הראיון שלך","","The conclusions of your interview"];
        this.press_conclusions = ["Press the \"show conclusion\" button to see the conclusion of your interview","לחץ על כפתור \"הראה תוצאות\" על מנת לראות את תוצאות הראיון","","Press the \"show conclusion\" button to see the conclusion of your interview"];
        this.download_transcript = ["Download Transcript", "הורד גיליון תשובות", "", "Download Transcript"];
        this.download_conclusions = ["Download Conclusions", "הורד מסקנות", "", "Download Conclusions"];
        this.writeFeedback = ["Write Feedback", "כתוב משוב", "", "Write Feedback"];
        this.submitFeedback = ["Submit Feedback", "שלח משוב", "", "Submit Feedback"];
        this.writeComment = ["Write Personal Comment", "כתוב תגובה אישית", "", "Write Personal Comment"];
        this.submitComment = ["Submit Personal Comment", "שלח תגובה אישית", "", "Submit Personal Comment"];
        this.show_tags = ["Show Current Tags (intermediate result)", "הראה תוצאות ביניים", "", "Show Current Tags (intermediate result)"];
        this.hide_tags = ["Hide Current Tags (intermediate result)", "הסתר תוצאות ביניים", "", "Hide Current Tags (intermediate result)"];
        this.my_feedback_is = ["My Feedback is:", "המשוב שלי הוא:", "", "My Feedback is:"],
        this.my_comment_is = ["My Comment is:", "התגובה שלי הוא:", "", "My Comment is:"],
        this.my_name_is = ["My Name is:", "השם שלי הוא:", "", "My Name is:"]
    }
}

/**
 * temp question bank
 */
 const jsonData = {"EmployerObligations":["finalAccountSettlement","jobTerminationConfirmation","workPeriodLetter","form161"],"Benefits":{"Pension":"allowance"},"Assertions":{"AgeGroup":"voluntaryPension","Gender":"female"}};
 //answer order - are you a woman? - yes || How old are you? - 62 to 67 || Are you an Israeli citizen? - yes.
 const jsonQuestionBankEnglish = [{
     "questionID": 1,
     "question": "Are you a woman?",
     "answers": ["yes", "no"]
 },
 {
     "questionID": 2,
     "question": "How old are you?",
     "answers": ["under 62", "62 to 67", "67 and over"]
 },
 {
     "questionID": 3,
     "question": "Are you an Israeli citizen?",
     "answers": ["yes", "no"]
 },
 {
     "questionID": 4,
     "question": "How was your salary calculated?",
     "answers": ["monthly", "daily", "hourly"]
 },
 {
     "questionID": 5,
     "question": "How has your day been?",
     "answers":  ["Best day of my life", "Great", "Ok", "Bad", "Straight up agony"]
 },
 {
     "questionID": 6,
     "question": "What is your favorite animal",
     "answers": ["Dog", "Cat", "Mouse", "Frog", "Hedgehog", "Bee", "Wolf", "Other"]
 },
 {
     "questionID": 7,
     "question": "Who is the best?",
     "answers": ["Shady", "Shelly", "Eilon", "Tbh none of them"]
 },
 {
     "questionID": 8,
     "question": "Are you an israeli citizan",
     "answers": ["Yes", "No"]
 },
 {
     "questionID": 9,
     "question": "Who is the best friend?",
     "answers": ["Ross", "Chandler", "Monica", "Rachel", "Pheobe", "Joey"]
 },
 {
     "questionID": 10,
     "question": "HIMYM or Seinfeld?",
     "answers": ["HIMYM", "Seinfeld", "F.r.i.e.n.d.s", "other"]
 },
 {
     "questionID": -1,
     "question": "",
     "answers": []
 }];

//const jsonQuestionBankArabic = [];
//const jsonQuestionBankHebrew = [];
//const jsonQuestionBankRussian = [];


/**
 * a class that portrays the API calls. later will be changed to include them
 */
class APIMock {
    constructor(){
        this.questionbank = jsonQuestionBankEnglish
    }

    getNextQuestion(questionID, answer) {
        var retObject
        if (answer == -1)
            retObject = JSON.stringify(this.questionbank[questionID - 1]); 
        else if (questionID == undefined)
            retObject = JSON.stringify(this.questionbank[0]);
        else
            retObject = JSON.stringify(this.questionbank[questionID]);
        return retObject;
    }
}

class APIHandler{
    userId;
    modelId;
    versionNum;
    nodeId;

    answers;

    constructor(){
    }

    sendAPIRequest (type){
    }
}
 


const template = document.createElement('template');
var nameOfFileCss = document.getElementById("style").innerHTML;

template.innerHTML = `<link rel=\"stylesheet\" href=` + nameOfFileCss + `>
                        <select name="languageSelect" id="mySelect">
                        <option value="ENGLISH_RAW">ENGLISH_RAW</option>
                        <option value="HEBREW">עברית</option>
                        <option value="ARABIC">العربية</option>
                        <option value="ENGLISH_US">ENGLISH_US</option>
                        </select>
                        <div class=\"policy-models-default\">
                        </div>
                      `; 


class PolicyModelsDefault extends HTMLElement{
    constructor(){
        super();
        this.number = 1;
        this.transcriptFlag = false;
        this.feedbackFlag = false;
        this.commentFlag = false;
        this.tagsFlag = false;
        this.question;
        this.tags = jsonData;
        this.buttons;
        // answers arre represented in a map  [QuestionID]-->[question text | answer text | answer position]
        this.answers = new Map();   
        this.apiHandler = new APIMock();
        this.language = Languages.ENGLISH_RAW;
        this.textassets = new TextAssets();  

        this.question = new Question(undefined,this.textassets.welcome_PM[this.language], [this.textassets.start[this.language]]);
        this.buttons = ['#a0'];

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.welcomePage();
        


        //  NEW (delete the btn and the script)
        this.shadowRoot.querySelector('#mySelect').addEventListener('change', () => {
            var selectElement = this.shadowRoot.querySelector('#mySelect').value;
            switch (selectElement) { //FIX
                case "ENGLISH_RAW":
                    this.language = Languages.ENGLISH_RAW;
                    break;
                case "HEBREW":
                    this.language = Languages.HEBREW;
                    break;
                case "ARABIC":
                    this.language = Languages.ARABIC;
                    break;
                case "ENGLISH_US":
                    this.language = Languages.ENGLISH_US;
                    break;
            }
            if(this.number == 1)
                this.welcomePage();
            else if (this.number == 2)
                this.interviewPage();
            else if (this.number == 3)
                this.conclusionPage();
        });
        

    }
    /** 
     * a function called to load the welcome page
    */
    welcomePage(){
        this.number = 1;
        let div = `
        <div>
        <p class=welcomeContent>`+ this.textassets.welcome[this.language] +`</p>
        <h4></h4>
        <div class=\"startInterview\"></div>
        </div>`;
        this.shadowRoot.querySelector('.policy-models-default').innerHTML = div;
        this.shadowRoot.querySelector('.startInterview').innerHTML = "<button class = \"startInterview\">" + this.textassets.start_interview[this.language] + "</button>\n";
        this.shadowRoot.querySelector('.startInterview').addEventListener('click', () => this.interviewPage());
        
    }

    /**
     * a function called to load the interview page
     */
    interviewPage(){
        this.number = 2;
        let div = `
        <div class = "grid">
            <div class = "defaultInterview">
                <div>
                    <div class="restartClass"></div>
                    <p class=namePolicyModels></p>
                    <p class=questions></p>
                </div>
                <div class="buttons"></div>
                <div class="feedbackDiv" id="feedbackDivID"></div>
                <div class="feedbackInputDiv"></div>
                <div class="commentDiv" id="commentDivID"></div>
                <div class="commentInputDiv"></div>
                <div class = divBtnShowTranscript><button class = btnShowTranscript id="transcript-toggle">`+ this.textassets.show_transcript[this.language] +`</button></div>
                <div class="transcript"></div>
                <div class="conclusion"></div>
                <div class="downloadTranscript"></div>
            </div>
            <div class = "tags">
                <div class = divBtnShowTags><button class = btnShowTags id="tags-toggle">`+ this.textassets.show_tags[this.language] +`</button></div>
                <div class = \"tagsDiv\"></div>
            </div>
        </div>
        `;


        this.shadowRoot.querySelector('.policy-models-default').innerHTML = div;
        
        this.shadowRoot.querySelector('#transcript-toggle').addEventListener('click', () => this.toggleTranscript());
        //this.transcriptFlag = false;
        //this.question = new Question(0,this.textassets.welcome_PM[this.language], [this.textassets.start[this.language]]);
        //this.buttons = ['#a0'];

        this.shadowRoot.querySelector('.namePolicyModels').innerText = this.getAttribute('name');
        this.shadowRoot.querySelector('.questions').innerText = this.question.question;
        if (this.question.id == undefined){
            this.shadowRoot.querySelector('.buttons').innerHTML = "<button class = \"btnStart\" id =\"a0\">" + this.textassets.start[this.language] + "</button>\n";
            this.shadowRoot.querySelector('#a0').addEventListener('click', () => this.QuestionSetUp(""));
            }
        else{
            this.QuestionSetUp(undefined,Array.from(this.answers.keys()).pop());
        }
        
        this.shadowRoot.querySelector('.restartClass').innerHTML = "<button class = \"restartBtn\">" + this.textassets.home[this.language] + "</button>\n";
        this.shadowRoot.querySelector('.restartBtn').addEventListener('click', () => this.backToWelcomePage());
        this.shadowRoot.querySelector('#tags-toggle').addEventListener('click', () => this.toggleTags());
        this.shadowRoot.querySelector('.tagsDiv').innerHTML = this.parseTags(this.tags, false);
        if (this.tagsFlag == true){
            this.shadowRoot.querySelector('.tagsDiv').style.display = 'block';
            this.shadowRoot.querySelector('#tags-toggle').innerText = this.textassets.hide_tags[this.language];
        }
        if (this.transcriptFlag == true){
            this.shadowRoot.querySelector('.transcript').style.display = 'block';
            this.shadowRoot.querySelector('#transcript-toggle').innerText = this.textassets.hide_transcript[this.language];
        }
                
        this.shadowRoot.querySelector('.downloadTranscript').innerHTML = "<button class=\"btnDownloadTranscript\">" + this.textassets.download_transcript[this.language] + "</button>";
        this.shadowRoot.querySelector('.btnDownloadTranscript').addEventListener('click', () => this.downloadTranscript(this.answers, 'myTranscript.json'));
    }

    downloadTranscript(objToJson, name) {
        const obj = Object.fromEntries(objToJson);
        const text = JSON.stringify(obj);
        const a = document.createElement('a');
        const type = name.split(".").pop();
        a.href = URL.createObjectURL( new Blob([text], { type:`text/${type === "txt" ? "plain" : type}` }) );
        a.download = name;
        a.click();
    }

    backToWelcomePage(){
        this.answers = new Map();   
        this.transcriptFlag = false;
        this.question = new Question(undefined,this.textassets.welcome_PM[this.language], [this.textassets.start[this.language]]);
        this.buttons = ['#a0'];
        this.welcomePage();
    }
      
      
    /**
     * a function called to load the conclusion page
     */
    conclusionPage(){ //TODO add text assets
        this.number = 3;
        let div = `
        <div>
        <p class=conclusionContent>`+this.textassets.conclusion_page[this.language]+`</p>  
        <div class = \"conclusions\"></div>
        <br>
        <div class="downloadConclusions">
        </div>
        <div class=backToHome><button class=\"backToWelcomePage\">`+this.textassets.home[this.language]+`</button></div>
        </div>`;
        this.shadowRoot.querySelector('.policy-models-default').innerHTML = div;
        //the conclusion
        let conclusions = this.getConclusions()
        this.shadowRoot.querySelector('.conclusions').innerText = conclusions;
        this.shadowRoot.querySelector('.backToWelcomePage').addEventListener('click', () => this.backToWelcomePage());
        this.shadowRoot.querySelector('.downloadConclusions').innerHTML = "<button class=\"btnDownloadConclusions\">" + this.textassets.download_conclusions[this.language] + "</button>";
        this.shadowRoot.querySelector('.btnDownloadConclusions').addEventListener('click', () => this.downloadConclusions(this.tags, 'conclusions.json'));
    }

    downloadConclusions(obj, name) {
        // const obj = Object.fromEntries(objToJson);
        const text = JSON.stringify(obj);
        const a = document.createElement('a');
        const type = name.split(".").pop();
        a.href = URL.createObjectURL( new Blob([text], { type:`text/${type === "txt" ? "plain" : type}` }) );
        a.download = name;
        a.click();
    }
    /**
     * Loads up the conclusion page when press on conclusion btn.
     */
    conclusion(){
        this.shadowRoot.querySelector('.feedbackBtn').style.display = 'none';
        this.shadowRoot.querySelector('.commentBtn').style.display = 'none';
        if(this.shadowRoot.querySelector('#inputID')  != null){
            var e = this.shadowRoot.querySelector('#inputID') ;
            e.parentNode.removeChild(e);
        }
        if(this.shadowRoot.querySelector('#inputNameID')  != null){
            var e = this.shadowRoot.querySelector('#inputNameID') ;
            e.parentNode.removeChild(e);
        }
        this.shadowRoot.querySelector('.conclusion').innerHTML = "<button class = \"btnConclusion\">" + this.textassets.show_conclusion[this.language] + "</button>\n";
        this.shadowRoot.querySelector('.conclusion').addEventListener('click', () => this.conclusionPage());
    }

    /**
     * Loads up the next question in the interview.
     * @param
     * answer -> the answer's text
     * overwriteid -> if defined, will fetch a specific question. otherwise if undefined will fetch the next question
     * answerNum -> position of the answer in the answer array
     */
    FetchQuestion(answer, overwriteid, answerNum){ 
        let jsonQuestion;
        if (answer != undefined && this.question.id > 0){
            this.answers.set(this.question.id, [this.question.question, answer, answerNum]);
        }
        if(overwriteid != undefined){
            jsonQuestion = this.apiHandler.getNextQuestion(overwriteid, answerNum);
        }
        else{
            jsonQuestion = this.apiHandler.getNextQuestion(this.question.id);
        }
        let obj = JSON.parse(jsonQuestion);
        this.question = new Question(obj.questionID,obj.question,Array.from(obj.answers));
    }
    

    /**
     * sets up the transcript
     */
    setTranscript(){
        let transcriptSTR = "";
        let transcript = this.shadowRoot.querySelector('.transcript');
        this.answers.forEach((value,key) => {transcriptSTR += ("<div>" +this.textassets.question[this.language]+ " "+ key.toString() +": " + value[0] +"&emsp;|&emsp;" +this.textassets.your_answer[this.language]+ ": " +
        value[1] + "&emsp;|&emsp;<button class = \"btnRevisitQ\" id = \"QR"+ key.toString() +"\">"+this.textassets.revisit[this.language]+"</button></div>")});
        transcript.innerHTML = transcriptSTR;
        this.answers.forEach((value,key) => {this.shadowRoot.querySelector('#QR' + key.toString()).addEventListener('click', ()=>this.ReturnToQuestion(key))});
    }

    /**
     * Sets up the current Question.
     *  @param
     * answer -> the answer's text
     * overwriteid -> if defined, will fetch a specific question. otherwise if undefined will fetch the next question
     * answerNum -> position of the answer in the answer array
     */
    QuestionSetUp(answer, overwriteid, answerNum){ 
        this.FetchQuestion(answer,overwriteid, answerNum);
        this.setTranscript(); 
        this.shadowRoot.querySelector('.questions').innerText = this.question.question; 
        this.shadowRoot.querySelector('.feedbackDiv').innerHTML = 
        `<button class = feedbackBtn id = feedbackBtnID>`+this.textassets.writeFeedback[this.language]+`</button>`;
        this.shadowRoot.querySelector('.feedbackBtn').addEventListener('click', () => this.toggleFeedback());
        this.feedbackFlag = false;
        this.shadowRoot.querySelector('.commentDiv').innerHTML = 
        `<button class = commentBtn id = commentBtnID>`+this.textassets.writeComment[this.language]+`</button>`;
        this.shadowRoot.querySelector('.commentBtn').addEventListener('click', () => this.toggleComment());
        this.commentFlag = false;
        if(this.question.id == -1){
            this.shadowRoot.querySelector('.buttons').innerHTML = 
                "<p class=transitionToConclusionPageContent>"+this.textassets.press_conclusions[this.language]+"</p>";

            this.conclusion();
        }
        else{
            this.ButtonSetUp();
            var e = this.shadowRoot.querySelector('#inputID') ; //NEW
            if (e != null){
                e.parentNode.removeChild(e);
            }
            var name = this.shadowRoot.querySelector('#inputNameID') ; //NEW
            if (name != null){
                name.parentNode.removeChild(name);
            }
            var c = this.shadowRoot.querySelector('#inputCommentID') ; //NEW
            if (c != null){
                c.parentNode.removeChild(c);
            }
        }
    }


    createInputFeedback(){
        if((this.shadowRoot.querySelector('#inputID') == null) && (this.shadowRoot.querySelector('#inputNameID') == null)){
            this.createElementInput();
        }
        else{
            var e = this.shadowRoot.querySelector('#inputID');
            e.parentNode.removeChild(e);
            var name = this.shadowRoot.querySelector('#inputNameID');
            name.parentNode.removeChild(name);
            this.createElementInput();
        }
    }

    createInputComment(){
        if(this.shadowRoot.querySelector('#inputCommentID') == null){
            this.createElementCommentInput();
        }
        else{
            var e = this.shadowRoot.querySelector('#inputCommentID');
            e.parentNode.removeChild(e);
            this.createElementCommentInput();
        }
        
    }
    createElementCommentInput(){
        this.shadowRoot.querySelector('.commentInputDiv').innerHTML = 
        `<input type="text" id="inputCommentID" placeholder="`+this.textassets.my_comment_is[this.language]+`"><br><br>`;
    }

    createElementInput(){
        this.shadowRoot.querySelector('.feedbackInputDiv').innerHTML = 
        `<input type="text" id="inputNameID" placeholder="`+this.textassets.my_name_is[this.language]+`"><br>`+
        `<input type="text" id="inputID" placeholder="`+this.textassets.my_feedback_is[this.language]+`"><br><br>`;
    }

    feedbackSubmit(){
        const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        var x = this.shadowRoot.querySelector('#inputID');
        var strFeedback = String(x.value);
        var name = this.shadowRoot.querySelector('#inputNameID');
        var strName = String(name.value);
        if((!specialChars.test(strFeedback)) && (!specialChars.test(strName))){
            prompt(strFeedback);
            prompt(strName);
        }
        else{
            if(specialChars.test(strFeedback)){
                prompt("Error : Your feedback contains special characters like : `!@#$%^&*()_+\-=\[\]{};':\"\\|,.<>\/?~ ")
            } else if(specialChars.test(strName)){
                prompt("Error: Your name contains special characters like : `!@#$%^&*()_+\-=\[\]{};':\"\\|,.<>\/?~ ")
            }
        }
        x.parentNode.removeChild(x);
        name.parentNode.removeChild(name);
    }

    commentSubmit(){
        var x = this.shadowRoot.querySelector('#inputCommentID');
        prompt(x.value);
        x.parentNode.removeChild(x);
    }

    /**
     * toggles the feedback button
     */
    toggleFeedback(){ 
        let btn = this.shadowRoot.querySelector('#feedbackDivID');
        this.feedbackFlag = !this.feedbackFlag;
        if(this.feedbackFlag){
            this.createInputFeedback();
            this.shadowRoot.querySelector('.feedbackDiv').innerHTML = `
            <button class = feedbackSubmitBtn>`+this.textassets.submitFeedback[this.language]+`</button>`;
            this.shadowRoot.querySelector('.feedbackSubmitBtn').addEventListener('click', () => this.toggleFeedback());
        }
        else{
            this.feedbackSubmit();
            this.shadowRoot.querySelector('.feedbackDiv').innerHTML = 
            `<button class = feedbackBtn id = feedbackBtnID>`+this.textassets.writeFeedback[this.language]+`</button>`;
            this.shadowRoot.querySelector('.feedbackBtn').addEventListener('click', () => this.toggleFeedback());
        }
    }

    toggleComment(){ 
        this.commentFlag = !this.commentFlag;
        if(this.commentFlag){
            this.createInputComment();
            this.shadowRoot.querySelector('.commentDiv').innerHTML = `
            <button class = commentSubmitBtn>`+this.textassets.submitComment[this.language]+`</button>`;
            this.shadowRoot.querySelector('.commentSubmitBtn').addEventListener('click', () => this.toggleComment());
        }
        else{
            this.commentSubmit();
            this.shadowRoot.querySelector('.commentDiv').innerHTML = 
            `<button class = commentBtn id = commentBtnID>`+this.textassets.writeComment[this.language]+`</button>`;
            this.shadowRoot.querySelector('.commentBtn').addEventListener('click', () => this.toggleComment());
        }
    }

    /**
     * sets up the buttons for the current question.
     * button IDs are "#a" + the answers number
     */
    ButtonSetUp(){
        let btnIDs = [];
        let btnSTR = ""; 
        for (let i = 0; i< this.question.answers.length; i++){
            btnSTR += "<button class = \"btn\" id =\"a" + i.toString() + "\">" + this.question.answers[i] + "</button>\n";
            btnIDs[i] = '#a' + i.toString();
        } 
        this.shadowRoot.querySelector('.buttons').innerHTML = btnSTR;
        for (let j = 0; j< this.question.answers.length; j++){
            this.shadowRoot.querySelector(btnIDs[j]).addEventListener('click', () => this.QuestionSetUp(this.question.answers[j],undefined,j));
        }
    }

    /**
     * Concludes the interview
     */
    getConclusions(){
        let answersStr = "";
        this.answers.forEach((value, key) => answersStr += (value[1] + ","));
        answersStr ="[" + answersStr + "]";
        return answersStr;
    }

    /**
     * returns to a specific question
     * @param
     * questionNum -> question to return to
     */
    ReturnToQuestion(questionNum){
        //TODO remove this condition with the full API implementation
        if(questionNum > 10 || questionNum < 1){
            return;
        }
        this.answers.forEach((value, key) => {if(key >= questionNum) this.answers.delete(key)});
        this.QuestionSetUp(undefined,questionNum, -1);
    }

    /**
     * toggles the transcript button
     */
    toggleTranscript(){
        let info = this.shadowRoot.querySelector('.transcript');
        let btn = this.shadowRoot.querySelector('#transcript-toggle');
        this.transcriptFlag = !this.transcriptFlag;
        if(this.transcriptFlag){
            info.style.display = 'block';
            btn.innerText = this.textassets.hide_transcript[this.language];
        }
        else{
            info.style.display = 'none';
            btn.innerText = this.textassets.show_transcript[this.language];
        }
    }

    toggleTags(){
        let info = this.shadowRoot.querySelector('.tagsDiv');
        let btn = this.shadowRoot.querySelector('#tags-toggle');
        this.tagsFlag = !this.tagsFlag;
        if(this.tagsFlag){
            info.style.display = 'block';
            btn.innerText = this.textassets.hide_tags[this.language];
        }
        else{
            info.style.display = 'none';
            btn.innerText = this.textassets.show_tags[this.language];
        }
    }

    parseTags(data, isSub){
        var html = (isSub)?'<div>':''; // Wrap with div if true
        html += '<ul>';
        for(var item in data){
            html += '<li>';
            if(typeof(data[item]) === 'object'){ // An array will return 'object'
                html += item; // Submenu found, but top level list item.
                html += this.parseTags(data[item], true); // Submenu found. Calling recursively same method (and wrapping it in a div)
            } else {
                if(isNaN(item)){
                  html += item; 
                  html += `: `; 
                }
                html += data[item]; // No submenu
            }
            html += '</li>';
        }
        html += '</ul>';
        html += (isSub)?'</div>':'';
        return html;
    } 
}

window.customElements.define('policy-models-default',PolicyModelsDefault); //the name of the tag and the name of the class we want to be connected