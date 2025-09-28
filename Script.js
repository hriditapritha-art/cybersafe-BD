// --- Quiz Data (বাংলা ও ইংরেজি) - মোট 30টি প্রশ্ন ---
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
        question_en: "What is Malware?",
        question_bn: "ম্যালওয়্যার (Malware) কী?",
        options_en: ["Any software that helps you browse the internet", "Software designed to cause damage or gain unauthorized access", "A harmless file type", "A type of firewall"],
        options_bn: ["এমন একটি সফটওয়্যার যা আপনাকে ইন্টারনেট ব্রাউজ করতে সাহায্য করে", "ক্ষতি করার বা অননুমোদিত অ্যাক্সেস লাভের জন্য ডিজাইন করা সফটওয়্যার", "একটি ক্ষতিকারক ফাইল টাইপ", "এক ধরনের ফায়ারওয়াল"],
        answer: "Software designed to cause damage or gain unauthorized access"
    },
    {
        id: 7,
        question_en: "Which information is safe to share publicly on social media?",
        question_bn: "সোশ্যাল মিডিয়ায় কোন তথ্য প্রকাশ্যে শেয়ার করা নিরাপদ?",
        options_en: ["Your current location and home address", "Your bank account details", "A photo of your lunch (generally safe)", "Your phone number"],
        options_bn: ["আপনার বর্তমান অবস্থান এবং বাড়ির ঠিকানা", "আপনার ব্যাংক অ্যাকাউন্টের বিবরণ", "আপনার দুপুরের খাবারের একটি ছবি (সাধারণত নিরাপদ)", "আপনার ফোন নম্বর"],
        answer: "A photo of your lunch (generally safe)"
    },
    {
        id: 8,
        question_en: "What is a major risk of using public Wi-Fi without a VPN?",
        question_bn: "VPN ছাড়া পাবলিক Wi-Fi ব্যবহার করার প্রধান ঝুঁকি কী?",
        options_en: ["Slow internet speed", "High battery drainage", "Easy interception of your data by others", "Limited access to local websites"],
        options_bn: ["কম ইন্টারনেট গতি", "অত্যধিক ব্যাটারি খরচ", "অন্যদের দ্বারা আপনার ডেটা সহজে ইন্টারসেপশন", "স্থানীয় ওয়েবসাইটগুলিতে সীমিত অ্যাক্সেস"],
        answer: "Easy interception of your data by others"
    },
    {
        id: 9,
        question_en: "How often should you update your operating system (OS) and applications?",
        question_bn: "আপনার অপারেটিং সিস্টেম (OS) এবং অ্যাপ্লিকেশনগুলি কত ঘন ঘন আপডেট করা উচিত?",
        options_en: ["Only when the device forces you", "Never, it breaks things", "Immediately when updates are available", "Once a year"],
        options_bn: ["যখন ডিভাইস আপনাকে জোর করে কেবল তখনই", "কখনই না, এটি সমস্যা সৃষ্টি করে", "আপডেট উপলব্ধ হওয়ার সাথে সাথেই", "বছরে একবার"],
        answer: "Immediately when updates are available"
    },
    {
        id: 10,
        question_en: "What is 'Social Engineering' in a cybersecurity context?",
        question_bn: "সাইবার নিরাপত্তা প্রেক্ষাপটে 'সোশ্যাল ইঞ্জিনিয়ারিং' কী?",
        options_en: ["Writing code for social media", "Hacking people's social accounts", "Manipulating people to give up confidential information", "An advanced type of encryption"],
        options_bn: ["সোশ্যাল মিডিয়ার জন্য কোড লেখা", "মানুষের সোশ্যাল অ্যাকাউন্ট হ্যাক করা", "গোপনীয় তথ্য দিতে জনগণকে ম্যানিপুলেট করা", "একটি উন্নত ধরণের এনক্রিপশন"],
        answer: "Manipulating people to give up confidential information"
    },
    {
        id: 11,
        question_en: "What should you do if your social media account is hacked?",
        question_bn: "আপনার সোশ্যাল মিডিয়া অ্যাকাউন্ট হ্যাক হলে আপনার কী করা উচিত?",
        options_en: ["Create a new account immediately", "Try to change the password and inform friends/family", "Do nothing, the hacker will fix it", "Call the police immediately"],
        options_bn: ["অবিলম্বে একটি নতুন অ্যাকাউন্ট তৈরি করুন", "পাসওয়ার্ড পরিবর্তন করার চেষ্টা করুন এবং বন্ধু/পরিবারকে জানান", "কিছু করবেন না, হ্যাকার ঠিক করে দেবে", "অবিলম্বে পুলিশকে কল করুন"],
        answer: "Try to change the password and inform friends/family"
    },
    {
        id: 12,
        question_en: "Which character type is essential for a strong password?",
        question_bn: "একটি শক্তিশালী পাসওয়ার্ডের জন্য কোন ধরনের অক্ষর প্রয়োজন?",
        options_en: ["Only lowercase letters", "Only numbers", "A mix of uppercase, lowercase, numbers, and symbols", "Only names and dates"],
        options_bn: ["শুধুমাত্র ছোট হাতের অক্ষর", "শুধুমাত্র সংখ্যা", "বড় হাতের, ছোট হাতের, সংখ্যা এবং প্রতীকের মিশ্রণ", "শুধুমাত্র নাম এবং তারিখ"],
        answer: "A mix of uppercase, lowercase, numbers, and symbols"
    },
    {
        id: 13,
        question_en: "What is the primary function of an Antivirus program?",
        question_bn: "অ্যান্টিভাইরাস প্রোগ্রামের প্রাথমিক কাজ কী?",
        options_en: ["Speeding up your internet", "Detecting and removing malicious software", "Managing your emails", "Playing high-resolution videos"],
        options_bn: ["আপনার ইন্টারনেটের গতি বাড়ানো", "ক্ষতিকারক সফটওয়্যার শনাক্ত করা এবং অপসারণ করা", "আপনার ইমেল পরিচালনা করা", "উচ্চ-রেজোলিউশনের ভিডিও চালানো"],
        answer: "Detecting and removing malicious software"
    },
    {
        id: 14,
        question_en: "What is Ransomware?",
        question_bn: "র‍্যানসমওয়্যার (Ransomware) কী?",
        options_en: ["Software that encrypts your files and demands a ransom", "A program that makes your computer faster", "A type of cloud storage", "A secure operating system"],
        options_bn: ["এমন একটি সফটওয়্যার যা আপনার ফাইল এনক্রিপ্ট করে এবং মুক্তিপণ দাবি করে", "একটি প্রোগ্রাম যা আপনার কম্পিউটারকে দ্রুত করে তোলে", "এক ধরনের ক্লাউড স্টোরেজ", "একটি সুরক্ষিত অপারেটিং সিস্টেম"],
        answer: "Software that encrypts your files and demands a ransom"
    },
    {
        id: 15,
        question_en: "Before deleting an app, what security step should you take?",
        question_bn: "একটি অ্যাপ ডিলিট করার আগে আপনার কোন নিরাপত্তা পদক্ষেপ নেওয়া উচিত?",
        options_en: ["Change your phone wallpaper", "Log out and revoke its access to your accounts", "Backup all your photos", "Reinstall it once"],
        options_bn: ["আপনার ফোনের ওয়ালপেপার পরিবর্তন করুন", "লগ আউট করুন এবং আপনার অ্যাকাউন্টগুলিতে এর অ্যাক্সেস বাতিল করুন", "আপনার সমস্ত ফটোগুলি ব্যাকআপ করুন", "একবার এটি পুনরায় ইনস্টল করুন"],
        answer: "Log out and revoke its access to your accounts"
    },
    {
        id: 16,
        question_en: "Which practice helps prevent shoulder surfing when entering passwords?",
        question_bn: "পাসওয়ার্ড প্রবেশ করার সময় 'শোল্ডার সার্ফিং' (Shoulder Surfing) প্রতিরোধে কোন অভ্যাস সাহায্য করে?",
        options_en: ["Using a very short password", "Covering the keypad while typing", "Typing very slowly", "Using a mouse instead of a keyboard"],
        options_bn: ["খুব ছোট পাসওয়ার্ড ব্যবহার করা", "টাইপ করার সময় কীপ্যাড কভার করা", "খুব ধীরে টাইপ করা", "কীবোর্ডের পরিবর্তে মাউস ব্যবহার করা"],
        answer: "Covering the keypad while typing"
    },
    {
        id: 17,
        question_en: "What is the best way to back up important files?",
        question_bn: "গুরুত্বপূর্ণ ফাইল ব্যাক আপ করার সেরা উপায় কী?",
        options_en: ["Saving them all on the desktop", "Using cloud storage and an external hard drive (Multiple copies)", "Sending them to yourself in an email", "Leaving them as they are"],
        options_bn: ["সবকিছু ডেস্কটপে সেভ করা", "ক্লাউড স্টোরেজ এবং একটি এক্সটার্নাল হার্ড ড্রাইভ ব্যবহার করা (একাধিক কপি)", "একটি ইমেলের মাধ্যমে নিজের কাছে পাঠানো", "যেমন আছে তেমনই রেখে দেওয়া"],
        answer: "Using cloud storage and an external hard drive (Multiple copies)"
    },
    {
        id: 18,
        question_en: "What is a 'Vulnerability' in software?",
        question_bn: "সফটওয়্যারে 'দুর্বলতা' (Vulnerability) কী?",
        options_en: ["A secret feature programmed by the developer", "A flaw that attackers can exploit to gain access", "The main icon of the app", "A complex coding language"],
        options_bn: ["ডেভেলপার দ্বারা প্রোগ্রাম করা একটি গোপন বৈশিষ্ট্য", "একটি ত্রুটি যা আক্রমণকারীরা অ্যাক্সেস লাভের জন্য ব্যবহার করতে পারে", "অ্যাপটির প্রধান আইকন", "একটি জটিল কোডিং ভাষা"],
        answer: "A flaw that attackers can exploit to gain access"
    },
    {
        id: 19,
        question_en: "What does URL stand for?",
        question_bn: "URL-এর পূর্ণরূপ কী?",
        options_en: ["Universal Resource Locator", "Uniform Remote Link", "United Resource List", "Universal Registered Login"],
        options_bn: ["Universal Resource Locator", "Uniform Remote Link", "United Resource List", "Universal Registered Login"],
        answer: "Universal Resource Locator"
    },
    {
        id: 20,
        question_en: "What is 'Clickjacking'?",
        question_bn: "'ক্লিকজ্যাকিং' (Clickjacking) কী?",
        options_en: ["A game where you click fast", "Hiding malicious links under legitimate-looking buttons", "A type of mouse-related virus", "A way to increase website traffic"],
        options_bn: ["একটি গেম যেখানে আপনি দ্রুত ক্লিক করেন", "বৈধ দেখতে বোতামগুলির নিচে ক্ষতিকারক লিঙ্ক লুকিয়ে রাখা", "মাউস সম্পর্কিত এক ধরনের ভাইরাস", "ওয়েবসাইট ট্র্যাফিক বাড়ানোর একটি উপায়"],
        answer: "Hiding malicious links under legitimate-looking buttons"
    },
    {
        id: 21,
        question_en: "Why is it important to use different passwords for different sites?",
        question_bn: "বিভিন্ন সাইটের জন্য বিভিন্ন পাসওয়ার্ড ব্যবহার করা কেন গুরুত্বপূর্ণ?",
        options_en: ["It's easier to remember many passwords", "If one site is hacked, all your other accounts are still safe", "It speeds up the login process", "It's a requirement for all websites"],
        options_bn: ["অনেক পাসওয়ার্ড মনে রাখা সহজ", "যদি একটি সাইট হ্যাক হয়, তবে আপনার অন্য সব অ্যাকাউন্ট নিরাপদ থাকে", "এটি লগইন প্রক্রিয়াকে দ্রুত করে তোলে", "এটি সমস্ত ওয়েবসাইটের জন্য একটি আবশ্যকীয় প্রয়োজন"],
        answer: "If one site is hacked, all your other accounts are still safe"
    },
    {
        id: 22,
        question_en: "What is the safest way to dispose of old electronics?",
        question_bn: "পুরানো ইলেকট্রনিক্স নিষ্পত্তি করার নিরাপদ উপায় কী?",
        options_en: ["Throwing them in the regular trash", "Selling them without wiping data", "Wiping all data and disposing of them via certified e-waste recycling", "Storing them in a basement"],
        options_bn: ["সাধারণ আবর্জনায় ফেলে দেওয়া", "ডেটা না মুছে বিক্রি করা", "সমস্ত ডেটা মুছে ফেলে প্রত্যয়িত ই-বর্জ্য পুনর্ব্যবহারের মাধ্যমে নিষ্পত্তি করা", "একটি বেসমেন্টে সংরক্ষণ করা"],
        answer: "Wiping all data and disposing of them via certified e-waste recycling"
    },
    {
        id: 23,
        question_en: "What is a Digital Footprint?",
        question_bn: "ডিজিটাল ফুটপ্রিন্ট (Digital Footprint) কী?",
        options_en: ["The marks left on your screen by your fingers", "The trail of data you leave behind from your online activity", "A type of electronic signature", "The name of your home Wi-Fi network"],
        options_bn: ["আপনার আঙ্গুল দ্বারা স্ক্রিনে রেখে যাওয়া চিহ্ন", "অনলাইন কার্যকলাপ থেকে আপনি যে ডেটার পথ রেখে যান", "এক ধরনের ইলেকট্রনিক স্বাক্ষর", "আপনার বাড়ির Wi-Fi নেটওয়ার্কের নাম"],
        answer: "The trail of data you leave behind from your online activity"
    },
    {
        id: 24,
        question_en: "What is the purpose of a Firewall?",
        question_bn: "ফায়ারওয়ালের উদ্দেশ্য কী?",
        options_en: ["To heat up your computer", "To block unauthorized access to your network", "To store all your documents", "To speed up video streaming"],
        options_bn: ["আপনার কম্পিউটার গরম করা", "আপনার নেটওয়ার্কে অননুমোদিত অ্যাক্সেস ব্লক করা", "আপনার সমস্ত নথি সংরক্ষণ করা", "ভিডিও স্ট্রিমিং দ্রুত করা"],
        answer: "To block unauthorized access to your network"
    },
    {
        id: 25,
        question_en: "What is 'Smishing'?",
        question_bn: "'স্মিশিং' (Smishing) কী?",
        options_en: ["Phishing attempts delivered via SMS (text message)", "A type of computer cooling system", "A social media trend", "A method for video calls"],
        options_bn: ["SMS (টেক্সট মেসেজ) এর মাধ্যমে বিতরণ করা ফিশিং প্রচেষ্টা", "এক ধরণের কম্পিউটার কুলিং সিস্টেম", "একটি সোশ্যাল মিডিয়া ট্রেন্ড", "ভিডিও কলের একটি পদ্ধতি"],
        answer: "Phishing attempts delivered via SMS (text message)"
    },
    {
        id: 26,
        question_en: "Which permission should you be cautious about granting to a simple calculator app?",
        question_bn: "একটি সাধারণ ক্যালকুলেটর অ্যাপকে কোন অনুমতি দেওয়া সম্পর্কে আপনার সতর্ক হওয়া উচিত?",
        options_en: ["Access to the camera or contacts", "Access to storage", "Access to the calculator functions", "Access to the internet"],
        options_bn: ["ক্যামেরা বা পরিচিতিগুলিতে অ্যাক্সেস", "স্টোরেজে অ্যাক্সেস", "ক্যালকুলেটর ফাংশনগুলিতে অ্যাক্সেস", "ইন্টারনেটে অ্যাক্সেস"],
        answer: "Access to the camera or contacts"
    },
    {
        id: 27,
        question_en: "What is 'Doxxing'?",
        question_bn: "'ডক্সিং' (Doxxing) কী?",
        options_en: ["Sharing public documents", "Publicly broadcasting private or identifying information about an individual without their consent", "A safe way to chat online", "A new digital currency"],
        options_bn: ["পাবলিক ডকুমেন্ট শেয়ার করা", "ব্যক্তির সম্মতি ছাড়াই তাদের ব্যক্তিগত বা সনাক্তকারী তথ্য প্রকাশ্যে সম্প্রচার করা", "অনলাইনে চ্যাট করার একটি নিরাপদ উপায়", "একটি নতুন ডিজিটাল মুদ্রা"],
        answer: "Publicly broadcasting private or identifying information about an individual without their consent"
    },
    {
        id: 28,
        question_en: "What should be your reaction to an unsolicited email promising a huge cash prize?",
        question_bn: "অযাচিত ইমেল যদি প্রচুর নগদ পুরস্কারের প্রতিশ্রুতি দেয়, তবে আপনার প্রতিক্রিয়া কী হওয়া উচিত?",
        options_en: ["Reply immediately with your bank details", "Forward it to the police", "Delete it and mark it as spam", "Click the 'claim prize' link"],
        options_bn: ["অবিলম্বে আপনার ব্যাংক বিবরণী দিয়ে উত্তর দিন", "এটি পুলিশকে ফরোয়ার্ড করুন", "এটি ডিলিট করুন এবং স্প্যাম হিসাবে চিহ্নিত করুন", "'পুরস্কার দাবি করুন' লিঙ্কে ক্লিক করুন"],
        answer: "Delete it and mark it as spam"
    },
    {
        id: 29,
        question_en: "What is the purpose of using a Password Manager?",
        question_bn: "পাসওয়ার্ড ম্যানেজার ব্যবহার করার উদ্দেশ্য কী?",
        options_en: ["To remember only two passwords", "To generate and securely store unique, complex passwords for all accounts", "To make passwords shorter", "To share passwords with friends"],
        options_bn: ["শুধুমাত্র দুটি পাসওয়ার্ড মনে রাখা", "সমস্ত অ্যাকাউন্টের জন্য অনন্য, জটিল পাসওয়ার্ড তৈরি করা এবং নিরাপদে সংরক্ষণ করা", "পাসওয়ার্ড ছোট করা", "বন্ধুদের সাথে পাসওয়ার্ড শেয়ার করা"],
        answer: "To generate and securely store unique, complex passwords for all accounts"
    },
    {
        id: 30,
        question_en: "What is the risk of using pirated software?",
        question_bn: "পাইরেটেড সফটওয়্যার ব্যবহার করার ঝুঁকি কী?",
        options_en: ["The software might stop working after a week", "It often contains hidden malware or viruses", "You have to pay more for it", "It takes up less space on your hard drive"],
        options_bn: ["সফটওয়্যারটি এক সপ্তাহ পরে কাজ করা বন্ধ করে দিতে পারে", "এতে প্রায়শই লুকানো ম্যালওয়্যার বা ভাইরাস থাকে", "এর জন্য আপনাকে বেশি অর্থ প্রদান করতে হবে", "এটি আপনার হার্ড ড্রাইভে কম জায়গা নেয়"],
        answer: "It often contains hidden malware or viruses"
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

    // 3. Re-render quiz if on quiz page and quiz is running
    if (quizStarted && document.getElementById('quiz-container').style.display !== 'none') {
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
        // Check for Firebase initialization (done in index.html/quiz.html script block)
        if (typeof firebase !== 'undefined') {
            // Firebase is initialized, we can start the quiz process
            document.getElementById('next-btn').textContent = currentLang
