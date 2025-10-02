// --- Quiz Data (বাংলা ও ইংরেজি) ---
const quizData = [
    {
        id: 1,
        question_en: "What is Phishing?",
        question_bn: "ফিশিং (Phishing) কী?",
        options_en: ["A type of online game", "A malicious attempt to obtain sensitive information by disguising as a trustworthy entity", "A strong password", "A network security tool"],
        options_bn: ["একটি অনলাইন খেলার ধরন", "একটি বিশ্বাসযোগ্য সত্তা হিসাবে ছদ্মবেশ ধারণ করে সংবেদনশীল তথ্য পাওয়ার একটি দূষিত প্রচেষ্টা", "একটি শক্তিশালী পাসওয়ার্ড", "একটি নেটওয়ার্ক সুরক্ষা সরঞ্জাম"],
        answer: "A malicious attempt to obtain sensitive information by disguising as a trustworthy entity"
    },
    {
        id: 2,
        question_en: "How long should a strong password be at minimum?",
        question_bn: "একটি শক্তিশালী পাসওয়ার্ডের ন্যূনতম দৈর্ঘ্য কত হওয়া উচিত?",
        options_en: ["4 characters", "8 characters", "12 characters", "16 characters"],
        options_bn: ["৪টি অক্ষর", "৮টি অক্ষর", "১২টি অক্ষর", "১৬টি অক্ষর"],
        answer: "12 characters"
    },
    {
        id: 3,
        question_en: "What is two-factor authentication (2FA)?",
        question_bn: "টু-ফ্যাক্টর অথেনটিকেশন (2FA) কী?",
        options_en: ["Using one password for two accounts", "Requiring a username and password", "Requiring two different factors of verification (e.g., password and a code from your phone)", "Logging in twice a day"],
        options_bn: ["দুটি অ্যাকাউন্টের জন্য একটি পাসওয়ার্ড ব্যবহার করা", "একটি ইউজারনেম এবং পাসওয়ার্ডের প্রয়োজন", "যাচাইকরণের দুটি ভিন্ন ফ্যাক্টরের প্রয়োজন (যেমন, পাসওয়ার্ড এবং আপনার ফোন থেকে একটি কোড)", "দিনে দুবার লগইন করা"],
        answer: "Requiring two different factors of verification (e.g., password and a code from your phone)"
    },
    {
        id: 4,
        question_en: "If an email looks suspicious, what should you do first?",
        question_bn: "যদি একটি ইমেল সন্দেহজনক মনে হয়, তবে আপনার প্রথমে কী করা উচিত?",
        options_en: ["Click all the links immediately", "Forward it to all your contacts", "Verify the sender's email address and contact the company directly", "Reply with your personal information"],
        options_bn: ["অবিলম্বে সব লিঙ্কে ক্লিক করুন", "আপনার সমস্ত পরিচিতিদের কাছে ফরোয়ার্ড করুন", "প্রেরকের ইমেল ঠিকানা যাচাই করুন এবং সরাসরি কোম্পানির সাথে যোগাযোগ করুন", "আপনার ব্যক্তিগত তথ্য দিয়ে উত্তর দিন"],
        answer: "Verify the sender's email address and contact the company directly"
    },
    {
        id: 5,
        question_en: "What does 'HTTPS' at the beginning of a URL indicate?",
        question_bn: "একটি URL-এর শুরুতে 'HTTPS' কী নির্দেশ করে?",
        options_en: ["The site is very popular", "The connection is secure (encrypted)", "The site is hosted in Bangladesh", "The site is a news portal"],
        options_bn: ["সাইটটি খুব জনপ্রিয়", "সংযোগটি সুরক্ষিত (এনক্রিপ্টেড)", "সাইটটি বাংলাদেশে হোস্ট করা হয়েছে", "সাইটটি একটি নিউজ পোর্টাল"],
        answer: "The connection is secure (encrypted)"
    },
{
id: 6,
question_en: "What is a safe practice for creating passwords?",
question_bn: "পাসওয়ার্ড তৈরির জন্য কোনটি নিরাপদ অভ্যাস?",
options_en: ["Use 'password123'", "Use a passphrase of 12+ characters including symbols", "Use your birthdate", "Use the word 'admin'"],
options_bn: ["'password123' ব্যবহার করা", "১২+ অক্ষরের পাসফ্রেজ ব্যবহার করা যার মধ্যে সাঙ্কেতিক চিহ্ন থাকবে", "জন্মতারিখ ব্যবহার করা", "'admin' শব্দ ব্যবহার করা"],
answer: "Use a passphrase of 12+ characters including symbols"
},
{
id: 7,
question_en: "Why is public Wi-Fi risky?",
question_bn: "পাবলিক Wi-Fi কেন ঝুঁকিপূর্ণ?",
options_en: ["It's always faster", "Data can be intercepted by others on the network", "It's free", "It prevents malware"],
options_bn: ["এটি সবসময় দ্রুত", "নেটওয়ার্কে অন্যান্যরা আপনার ডেটা আটকাতে পারে", "এটি বিনামূল্যে", "এটি ম্যালওয়্যার প্রতিরোধ করে"],
answer: "Data can be intercepted by others on the network"
},
{
id: 8,
question_en: "What should you check before downloading an attachment?",
question_bn: "কোন কিছু ডাউনলোড করার আগে কী পরীক্ষা করা উচিত?",
options_en: ["File icon", "Sender identity and file extension", "That it is big", "That it is colorful"],
options_bn: ["ফাইলের আইকন", "প্রেরকের পরিচয় ও ফাইল এক্সটেনশন পরীক্ষা করা", "এটি বড় কিনা", "এটি রঙিন কিনা"],
answer: "Sender identity and file extension"
},
{
id: 9,
question_en: "Which is a sign of a phishing website?",
question_bn: "ফিশিং ওয়েবসাইটের একটি চিহ্ন কোনটি?",
options_en: ["Proper SSL and known domain", "Misspelled domain and odd URL", "Contains company logo only", "Has many images"],
options_bn: ["সঠিক SSL এবং পরিচিত ডোমেইন", "ভুলভাবে বানানো ডোমেইন ও অদ্ভুত URL", "শুধু কোম্পানির লোগো আছে", "অনেক ছবি আছে"],
answer: "Misspelled domain and odd URL"
},
{
id: 10,
question_en: "What is the best way to manage many passwords?",
question_bn: "অনেক পাসওয়ার্ড ব্যবস্থাপনার জন্য সবচেয়ে ভালো উপায় কী?",
options_en: ["Use same password everywhere", "Use a password manager", "Write them on a sticky note", "Use short passwords"],
options_bn: ["সব জায়গায় একই পাসওয়ার্ড ব্যবহার করা", "একটি পাসওয়ার্ড ম্যানেজার ব্যবহার করা", "স্টিকি নোটে লেখা", "সংক্ষিপ্ত পাসওয়ার্ড ব্যবহার করা"],
answer: "Use a password manager"
},
{
id: 11,
question_en: "What does 'backup' mean?",
question_bn: "'ব্যাকআপ' কী বোঝায়?",
options_en: ["Deleting files", "Copying data to another location to prevent loss", "Installing apps", "Sharing files publicly"],
options_bn: ["ফাইল মুছে ফেলা", "তথ্য হারিয়ে গেলে পুনরুদ্ধারের জন্য অন্য স্থানে কপি করে রাখা", "অ্যাপস ইনস্টল করা", "ফাইল পাবলিকভাবে শেয়ার করা"],
answer: "Copying data to another location to prevent loss"
},
{
id: 12,
question_en: "If someone asks for your OTP, what should you do?",
question_bn: "যদি কেউ আপনার OTP চান, আপনি কী করবেন?",
options_en: ["Share it immediately", "Refuse and report", "Share only if they are polite", "Ignore and logout"],
options_bn: ["তৎক্ষণাৎ শেয়ার করা", "অস্বীকার করে রিপোর্ট করা", "শুধু যদি তারা ভদ্র হয় তাহলে শেয়ার করা", "উপেক্ষা করে লগআউট করা"],
answer: "Refuse and report"
},
{
id: 13,
question_en: "What is malware?",
question_bn: "ম্যালওয়্যার কী?",
options_en: ["A friendly app", "Software designed to harm or exploit systems", "A type of password", "A hardware device"],
options_bn: ["একটি বন্ধুত্বপূর্ণ অ্যাপ", "সিস্টেম ক্ষতিগ্রস্ত বা শोषণ করার উদ্দেশ্যে তৈরি সফটওয়্যার", "পাসওয়ার্ডের একটি ধরন", "একটি হার্ডওয়্যার ডিভাইস"],
answer: "Software designed to harm or exploit systems"
},
{
id: 14,
question_en: "How often should you update software?",
question_bn: "সফটওয়্যার কত ঘন ঘন আপডেট করা উচিত?",
options_en: ["Never", "Only when asked", "Regularly when updates are available", "Only annually"],
options_bn: ["কখনো না", "শুধু বলা হলে", "নিয়মিত যখন আপডেট আসে", "শুধু বার্ষিক"],
answer: "Regularly when updates are available"
},
{
id: 15,
question_en: "What is 'social engineering'?",
question_bn: "'সোশ্যাল ইঞ্জিনিয়ারিং' কী?",
options_en: ["A software tool", "Manipulating people to give confidential info", "A firewall type", "A browser setting"],
options_bn: ["একটি সফটওয়্যার টুল", "গোপন তথ্য পেতে মানুষকে পরিচালিত করা", "ফায়ারওয়ালের ধরন", "ব্রাউজারের সেটিং"],
answer: "Manipulating people to give confidential info"
},
{
id: 16,
question_en: "Which data is sensitive and should be protected?",
question_bn: "কোন তথ্য সংবেদনশীল এবং সুরক্ষিত রাখা উচিত?",
options_en: ["Favorite color", "National ID, bank details, passwords", "Public blog posts", "Weather info"],
options_bn: ["প্রিয় রঙ", "জাতীয় পরিচয়পত্র, ব্যাংক সম্পর্কিত তথ্য, পাসওয়ার্ড", "পাবলিক ব্লগ পোস্ট", "আবহাওয়ার তথ্য"],
answer: "National ID, bank details, passwords"
},
{
id: 17,
question_en: "What is HTTPS padlock used for?",
question_bn: "HTTPS প্যাডলক কী জন্য ব্যবহার হয়?",
options_en: ["To make site colorful", "To show a secure encrypted connection", "To make websites load faster", "To block ads"],
options_bn: ["সাইটকে রঙিন করার জন্য", "সুরক্ষিত এনক্রিপ্টেড সংযোগ দেখাতে", "ওয়েবসাইট দ্রুত লোড করার জন্য", "বিজ্ঞাপন ব্লক করার জন্য"],
answer: "To show a secure encrypted connection"
},
{
id: 18,
question_en: "How should you treat unknown friend requests?",
question_bn: "অচেনা ফ্রেন্ড রিকোয়েস্ট কিভাবে গ্রহণ করবেন?",
options_en: ["Accept all", "Ignore or verify before accepting", "Share documents immediately", "Send money first"],
options_bn: ["সব গ্রহণ করা", "অগ্রহণ বা যাচাই করে গ্রহণ করা", "তৎক্ষণাৎ ডকুমেন্ট শেয়ার করা", "প্রথমে টাকা পাঠানো"],
answer: "Ignore or verify before accepting"
},
{
id: 19,
question_en: "What is the purpose of a firewall?",
question_bn: "ফায়ারওয়ালের উদ্দেশ্য কী?",
options_en: ["To cook food", "To block unauthorized network access", "To speed up your CPU", "To change your wallpaper"],
options_bn: ["খাবার রান্না করা", "অননুমোদিত নেটওয়ার্ক অ্যাক্সেস ব্লক করা", "CPU দ্রুত করা", "ওয়ালপেপার বদলানো"],
answer: "To block unauthorized network access"
},
{
id: 20,
question_en: "What should you do if your account is compromised?",
question_bn: "যদি আপনার অ্যাকাউন্ট বিচ্ছিন্ন হয়ে যায় তাহলে কী করবেন?",
options_en: ["Change password and enable 2FA, notify provider", "Do nothing", "Post about it publicly", "Delete your phone"],
options_bn: ["পাসওয়ার্ড পরিবর্তন করুন এবং 2FA চালু করুন, প্রদানকারীকে জানান", "কিছুই না", "এটি পাবলিকলি পোস্ট করুন", "আপনার ফোন মুছে ফেলুন"],
answer: "Change password and enable 2FA, notify provider"
},
{
id: 21,
question_en: "Which is a secure authentication method?",
question_bn: "নিম্নের কোনটি একটি নিরাপদ অথেনটিকেশন পদ্ধতি?",
options_en: ["Single short password", "Two-factor authentication (2FA)", "Sharing password over chat", "Using '1234'"],
options_bn: ["একটি সংক্ষিপ্ত একক পাসওয়ার্ড", "টু-ফ্যাক্টর অথেনটিকেশন (2FA)", "চ্যাটে পাসওয়ার্ড শেয়ার করা", "'1234' ব্যবহার করা"],
answer: "Two-factor authentication (2FA)"
},
{
id: 22,
question_en: "Why should you accept software updates?",
question_bn: "কেন সফটওয়্যার আপডেট গ্রহণ করা উচিত?",
options_en: ["They include security fixes", "They slow your device", "They delete files", "They change colors"],
options_bn: ["এগুলোতে সিকিউরিটি ফিক্স থাকে", "এগুলো আপনার ডিভাইস ধীর করে", "এগুলো ফাইল মুছে দেয়", "এগুলো রঙ পরিবর্তন করে"],
answer: "They include security fixes"
},
{
id: 23,
question_en: "What's the risk of sharing location publicly?",
question_bn: "পাবলিকলি অবস্থান শেয়ার করার ঝুঁকি কী?",
options_en: ["No risk", "Privacy breach and physical safety risk", "It makes battery last longer", "It speeds internet"],
options_bn: ["কোন ঝুঁকি নেই", "গোপনীয়তা লঙ্ঘন এবং শারীরিক নিরাপত্তা ঝুঁকি", "ব্যাটারি বেশি চলে", "ইন্টারনেট দ্রুত হয়"],
answer: "Privacy breach and physical safety risk"
},
{
id: 24,
question_en: "What is encryption?",
question_bn: "এনক্রিপশন কী?",
options_en: ["Turning readable data into coded form", "A type of virus", "A browser feature", "A hardware cable"],
options_bn: ["পাঠযোগ্য ডেটাকে কোড করা ফর্মে রূপান্তর করা", "ভাইরাসের ধরন", "ব্রাউজারের ফিচার", "হার্ডওয়্যার কেবল"],
answer: "Turning readable data into coded form"
},
{
id: 25,
question_en: "What should parents do to keep kids safe online?",
question_bn: "অনলাইন-এ শিশুরা নিরাপদ রাখার জন্য অভিভাবকরা কী করবেন?",
options_en: ["Ignore activities", "Use parental controls and teach safe habits", "Let kids use any site", "Share passwords with kids"],
options_bn: ["কার্যকলাপ উপেক্ষা করা", "প্যারেন্টাল কন্ট্রোল ব্যবহার করা এবং সেফ হ্যাবিট শেখানো", "শিশুকে যেকোন সাইট ব্যবহার করতে দেওয়া", "শিশুর সাথে পাসওয়ার্ড শেয়ার করা"],
answer: "Use parental controls and teach safe habits"
},
{
id: 26,
question_en: "How to verify a trustworthy app before installing?",
question_bn: "ইনস্টল করার আগে একটি অ্যাপ কিভাবে বিশ্বাসযোগ্য কিনা যাচাই করবেন?",
options_en: ["Check reviews, developer, permissions", "Install from unknown sources", "Only by icon color", "By app size only"],
options_bn: ["রিভিউ, ডেভেলপার ও পারমিশন চেক করা", "অজানা সোর্স থেকে ইনস্টল করা", "শুধু আইকনের রঙ দেখে", "শুধু অ্যাপ সাইজ দেখে"],
answer: "Check reviews, developer, permissions"
},
{
id: 27,
question_en: "What is 'spoofing'?",
question_bn: "'স্পুফিং' কী?",
options_en: ["A kind of dessert", "Pretending to be someone else online to deceive", "Improving signal", "A browser plugin"],
options_bn: ["রান্নার একটি আইটেম", "অনলাইনে অন্য কারো ছদ্মবেশ ধারণ করে প্রতারণা করা", "সিগন্যাল উন্নত করা", "একটি ব্রাউজার প্লাগইন"],
answer: "Pretending to be someone else online to deceive"
},
{
id: 28,
question_en: "Why keep software licenses and receipts?",
question_bn: "কেন সফটওয়্যার লাইসেন্স ও রসিদ রাখা উচিত?",
options_en: ["For legal proof and recovery", "To decorate desk", "They are useless", "To sell later"],
options_bn: ["আইনি প্রমাণ ও পুনরুদ্ধারের জন্য", "ডেস্ক সাজানোর জন্য", "এসব অনাবশ্যক", "পরবর্তীতে বিক্রি করার জন্য"],
answer: "For legal proof and recovery"
},
{
id: 29,
question_en: "What to do when receiving a suspicious SMS with a link?",
question_bn: "লিংকসহ একটি সন্দেহজনক SMS পেলে আপনি কী করবেন?",
options_en: ["Click the link", "Do not click; verify sender and delete", "Forward to everyone", "Reply with personal info"],
options_bn: ["লিংকে ক্লিক করা", "ক্লিক না করা; প্রেরক যাচাই করা এবং মুছে ফেলা", "সবাইকে ফরওয়ার্ড করা", "ব্যক্তিগত তথ্য দিয়ে উত্তর দেওয়া"],
answer: "Do not click; verify sender and delete"
},
{
id: 30,
question_en: "How can institutions improve cyber safety?",
question_bn: "প্রতিষ্ঠানগুলি কিভাবে সাইবার নিরাপত্তা উন্নত করতে পারে?",
options_en: ["Ignore training", "Regular training, updates, incident response plan", "Hire nobody", "Use only default passwords"],
options_bn: ["প্রশিক্ষণ উপেক্ষা করা", "নিয়মিত প্রশিক্ষণ, আপডেট এবং ইনসিডেন্ট রেসপন্স প্ল্যান", "কাউকে নিয়োগ না করা", "শুধু ডিফল্ট পাসওয়ার্ড ব্যবহার করা"],
answer: "Regular training, updates, incident response plan"
}
];


// --- Global Variables ---
let currentLang = 'bn'; // Default language is Bangla
let currentQuestionIndex = 0;
let score = 0;
let quizStarted = false; // To track if we are on the quiz page

// --- Language Management (মাল্টি-ল্যাঙ্গুয়েজ লজিক) ---
function setLanguage(lang) {
    currentLang = lang;
    
    // 1. Update text based on data attributes
    const elements = document.querySelectorAll('[data-en], [data-bn]');
    elements.forEach(el => {
        const textKey = `data-${lang}`;
        if (el.hasAttribute(textKey)) {
            el.textContent = el.getAttribute(textKey);
        }
    });

    // 2. Update toggle button
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.textContent = lang === 'bn' ? 'English' : 'বাংলা';
    }

    // 3. Update title
    const titleEl = document.querySelector('title');
    if (titleEl) {
        const titleKey = titleEl.getAttribute(`data-${lang}`);
        if(titleKey) titleEl.textContent = titleKey;
    }


    // 4. Re-render quiz if on quiz page
    if (quizStarted) {
        loadQuestion();
    }
}

// Event listener for language toggle button
document.addEventListener('DOMContentLoaded', () => {
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', (e) => {
            e.preventDefault();
            const newLang = currentLang === 'bn' ? 'en' : 'bn';
            localStorage.setItem('lang', newLang); // Save preference
            setLanguage(newLang);
        });
        
        // Load saved language preference, or default to bn
        const savedLang = localStorage.getItem('lang') || 'bn';
        setLanguage(savedLang);
    }
    
    // Check if we are on the quiz page
    if (document.getElementById('quiz-container')) {
        quizStarted = true;
        startQuiz();
    }

    // Check if we are on the simulation page
    if (document.getElementById('simulation-section')) {
        setupSimulation();
    }
});


// --- Quiz Logic (কুইজ প্রক্রিয়া) ---

function startQuiz() {
    // Get username before starting
    let username;
    // We use a custom modal or input, avoiding the native prompt/alert for better UX.
    const storedUsername = localStorage.getItem('currentUser');
    if (storedUsername) {
        username = storedUsername;
    } else {
        username = prompt(currentLang === 'bn' ? "কুইজ শুরু করার জন্য আপনার নাম লিখুন:" : "Please enter your name to start the quiz:");
    }
    
    if (!username || username.trim() === "") {
        alert(currentLang === 'bn' ? "নাম ছাড়া কুইজ শুরু করা যাবে না।" : "Cannot start quiz without a name.");
        return;
    }
    
    localStorage.setItem('currentUser', username.trim()); // Save for later use
    
    currentQuestionIndex = 0;
    score = 0;
    loadQuestion();
    
    const resultContainer = document.getElementById('result-container');
    const quizContainer = document.getElementById('quiz-container');

    if(resultContainer) resultContainer.style.display = 'none';
    if(quizContainer) quizContainer.style.display = 'block';
}

function loadQuestion() {
    const progressEl = document.getElementById('quiz-progress');
    const titleEl = document.getElementById('question-title');
    const optionsEl = document.getElementById('options-container');
    const nextBtn = document.getElementById('next-btn');

    if (currentQuestionIndex >= quizData.length) {
        showResult();
        return;
    }

    // Update progress text
    const totalQuestions = quizData.length;
    const progressText = currentLang === 'bn' 
        ? `প্রশ্ন ${currentQuestionIndex + 1} এর মধ্যে ${totalQuestions}` 
        : `Question ${currentQuestionIndex + 1} of ${totalQuestions}`;
    if(progressEl) progressEl.textContent = progressText;

    // Load current question
    const currentQ = quizData[currentQuestionIndex];
    const questionTextKey = `question_${currentLang}`;
    const optionsKey = `options_${currentLang}`;

    if(titleEl) titleEl.textContent = currentQ[questionTextKey];
    if(optionsEl) optionsEl.innerHTML = ''; // Clear previous options

    // Create option buttons
    currentQ[optionsKey].forEach(option => {
        const button = document.createElement('button');
        button.classList.add('option-btn');
        button.textContent = option;
        button.dataset.option = option;
        button.onclick = () => selectAnswer(button, currentQ.answer);
        if(optionsEl) optionsEl.appendChild(button);
    });
    
    // Disable next button until an answer is selected
    if(nextBtn) {
        nextBtn.textContent = currentLang === 'bn' ? "পরবর্তী প্রশ্ন" : "Next Question";
        nextBtn.classList.remove('enabled');
        nextBtn.onclick = null;
    }
}

function selectAnswer(selectedButton, correctAnswer) {
    const options = document.querySelectorAll('.option-btn');
    options.forEach(btn => {
        btn.onclick = null; // Disable all buttons after selection
    });
    
    const nextBtn = document.getElementById('next-btn');
    if(!nextBtn) return;
    nextBtn.classList.add('enabled');
    
    const selectedAnswer = selectedButton.dataset.option;
    
    if (selectedAnswer === correctAnswer) {
        selectedButton.classList.add('correct');
        score++;
        // showFeedback(true);
    } else {
        selectedButton.classList.add('incorrect');
        // Highlight the correct answer
        options.forEach(btn => {
            if (btn.dataset.option === correctAnswer) {
                btn.classList.add('correct');
            }
        });
        // showFeedback(false);
    }
    
    // Setup for next question
    nextBtn.onclick = nextQuestion;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    // 1. Calculate Score
    const finalScore = score;
    const totalQuestions = quizData.length;
    const percentage = ((finalScore / totalQuestions) * 100).toFixed(0);
    const username = localStorage.getItem('currentUser');
    
    // 2. Save Score to Firebase and Compare (NEW FUNCTION CALL)
    saveUserScore(username, finalScore, totalQuestions, currentLang); // Call the new function

    // 3. Load Scorecard Template
    fetch('templates/scorecard.html')
        .then(response => response.text())
        .then(html => {
            const resultContainer = document.getElementById('result-container');
            if (!resultContainer) return;

            resultContainer.innerHTML = html;
            
            // Set text based on language
            const resultTitle = resultContainer.querySelector('.scorecard h2');
            if(resultTitle) {
                resultTitle.textContent = currentLang === 'en' ? "Quiz Complete!" : "কুইজ সম্পূর্ণ!";
            }

            // Update score
            const finalScoreValue = document.getElementById('final-score-value');
            if(finalScoreValue) finalScoreValue.textContent = `${finalScore}/${totalQuestions}`;
            
            const finalPercentage = document.getElementById('final-percentage');
            if(finalPercentage) finalPercentage.textContent = `${percentage}%`;

            const scoreText = resultContainer.querySelector('.scorecard p:nth-child(2)');
            if(scoreText) scoreText.textContent = currentLang === 'en' ? "Your Final Score" : "আপনার চূড়ান্ত স্কোর";
            
            // Set comparison text (will be updated by Firebase function later)
            const comparisonEl = document.getElementById('comparison-result');
            if(comparisonEl) {
                comparisonEl.textContent = currentLang === 'bn' 
                ? "আপনার পূর্ববর্তী স্কোরের সাথে তুলনা করা হচ্ছে..." 
                : "Comparing with your previous scores...";
            }

            document.getElementById('quiz-container').style.display = 'none';
            resultContainer.style.display = 'block';

            // Re-bind start quiz button
            const startNewBtn = document.getElementById('start-new-quiz-btn');
            if(startNewBtn) {
                startNewBtn.textContent = currentLang === 'bn' ? "নতুন কুইজ শুরু করুন" : "Start New Quiz";
                startNewBtn.onclick = startQuiz;
            }
        })
        .catch(error => console.error('Error loading scorecard template:', error));
}


// --- Firebase Data Handling Functions ---
function saveUserScore(username, score, total, lang) {
    if (!username || !window.database) return; // Check if Firebase is initialized
    
    const timestamp = new Date().toISOString();
    // Use the username to uniquely identify the user in Firebase
    const resultRef = database.ref('results/' + username.replace(/[.#$/[\]]/g, "_")); 
    
    // Data to be saved for this attempt
    const newAttempt = {
        score: score,
        total: total,
        percentage: ((score / total) * 100).toFixed(0),
        date: timestamp,
        lang: lang
    };

    // 1. Read previous scores
    resultRef.once('value', (snapshot) => {
        const previousData = snapshot.val() || { history: [], highestScore: 0 };
        
        let comparisonMessage = "";
        let hasPreviousScore = previousData.history.length > 0;
        let lastScore = hasPreviousScore ? previousData.history[previousData.history.length - 1].score : 0;
        
        // 2. Add current score to history
        previousData.history.push(newAttempt);
        
        // 3. Update highest score
        if (parseInt(newAttempt.score) > parseInt(previousData.highestScore)) {
            previousData.highestScore = newAttempt.score;
        }

        // 4. Comparison Logic
        if (hasPreviousScore) {
            const difference = newAttempt.score - lastScore;
            
            if (difference > 0) {
                comparisonMessage = lang === 'bn' 
                    ? `অভিনন্দন! আপনার শেষ স্কোর থেকে ${difference} পয়েন্ট উন্নতি হয়েছে! 🎉` 
                    : `Congratulations! You improved by ${difference} points from your last score! 🎉`;
            } else if (difference < 0) {
                comparisonMessage = lang === 'bn' 
                    ? `মনোযোগ দিন! আপনার শেষ স্কোর থেকে ${Math.abs(difference)} পয়েন্ট কম হয়েছে। 📉` 
                    : `Careful! Your score dropped by ${Math.abs(difference)} points from your last score. 📉`;
            } else {
                comparisonMessage = lang === 'bn' 
                    ? "আপনার স্কোর আগের মতোই আছে। দারুণ! কিন্তু আরও উন্নতির চেষ্টা করুন। ✨" 
                    : "Your score is the same as the previous attempt. Great! But try for more improvement. ✨";
            }
        } else {
            comparisonMessage = lang === 'bn' 
                ? "এটি আপনার প্রথম কুইজ। পরেরবার আরও ভালো করুন! 💪" 
                : "This is your first quiz. Do better next time! 💪";
        }
        
        // Add highest score info
        comparisonMessage += (lang === 'bn' 
            ? ` (আপনার সর্বোচ্চ স্কোর: ${previousData.highestScore}/${total} )` 
            : ` (Your Highest Score: ${previousData.highestScore}/${total} )`);
        
        // 5. Save all data back to Firebase
        resultRef.set(previousData)
            .then(() => {
                // Update UI with comparison message
                const comparisonEl = document.getElementById('comparison-result');
                if (comparisonEl) {
                    comparisonEl.textContent = comparisonMessage;
                }
                console.log("Score saved and comparison done successfully.");
            })
            .catch(error => {
                console.error("Firebase write failed:", error);
                const comparisonEl = document.getElementById('comparison-result');
                if (comparisonEl) {
                    comparisonEl.textContent = lang === 'bn' ? "স্কোর সংরক্ষণে সমস্যা হয়েছে। Firebase কনফিগারেশন চেক করুন।" : "Failed to save score. Check Firebase config.";
                }
            });
    });
}

// --- Simulation Logic ---
function setupSimulation() {
    const phishingLink = document.getElementById('phishing-link');
    if (phishingLink) {
        phishingLink.addEventListener('click', (e) => {
            e.preventDefault();
            showSimulationResult();
        });
    }
}

function showSimulationResult() {
    const feedbackEl = document.getElementById('simulation-feedback');
    const phishingLink = document.getElementById('phishing-link');
    
    if(!feedbackEl || !phishingLink) return;

    // Disable the link after click
    phishingLink.onclick = (e) => e.preventDefault();
    phishingLink.style.opacity = '0.5';

    const resultHeader = currentLang === 'bn' 
        ? '<h2 style="color: #c0392b;">আপনি বোকা বনে গেছেন! 😞</h2>' 
        : '<h2 style="color: #c0392b;">You Got Fooled! 😞</h2>';
    const resultTip = currentLang === 'bn' 
        ? `
            <h3 style="color:#2c3e50;">শিক্ষা:</h3>
            <p><strong>১. তাড়াহুড়ো:</strong> আক্রমণকারীরা আপনাকে ভয় দেখিয়ে দ্রুত ক্লিক করতে বাধ্য করে (যেমন: '২৪ ঘণ্টার মধ্যে বন্ধ হয়ে যাবে')।</p>
            <p><strong>২. প্রেরকের ঠিকানা:</strong> আসল Amazon নয়, ডোমেইনটি দেখুন: <code>amaz0n-update.com</code> (নোটিশ 'o'-এর জায়গায় '0')</p>
            <p><strong>৩. ব্যক্তিগত সম্বোধন:</strong> প্রকৃত কোম্পানি সবসময় আপনার নাম ধরে সম্বোধন করে, শুধু 'Dear Customer' নয়।</p>
            <button onclick="window.location.reload()" class="cta-button" style="margin-top:20px;">আবার চেষ্টা করুন</button>
          `
        : `
            <h3 style="color:#2c3e50;">The Lesson:</h3>
            <p><strong>1. Urgency:</strong> Attackers scare you into clicking quickly (e.g., 'Failure to verify within 24 hours').</p>
            <p><strong>2. Sender Address:</strong> It's not the real Amazon, check the domain: <code>amaz0n-update.com</code> (notice 'o' instead of '0')</p>
            <p><strong>3. Generic Greeting:</strong> Real companies usually address you by name, not just 'Dear Customer'.</p>
            <button onclick="window.location.reload()" class="cta-button" style="margin-top:20px;">Try Again</button>
          `;

    feedbackEl.innerHTML = `
        ${resultHeader}
        <div style="text-align: left; margin-top: 20px; background-color: #f7f7f7; padding: 15px; border-radius: 5px;">
            ${resultTip}
        </div>
    `;
    feedbackEl.style.display = 'block';
    
    // Scroll to feedback
    feedbackEl.scrollIntoView({ behavior: 'smooth' });
                   }    
