export const resources = {
  en: {
    translation: {
      "nav": {
        "cat": {
          "documents": "Documents & Files",
          "developer": "Developer Tools",
          "utilities": "Utilities"
        },
        "home": "Home",
        "pdfTools": "PDF Merge",
        "imageConverter": "Image Converter",
        "extensionTools": "Extension Changer",
        "qrGenerator": "QR Code Generator",
        "base64Tool": "Base64 Encoder/Decoder",
        "urlTool": "URL Encoder/Decoder",
        "jsonTool": "JSON Formatter",
        "passGen": "Password Generator",
        "wordCount": "Word Counter"
      },
      "common": {
        "startUsing": "Start Using",
        "allRightsReserved": "All rights reserved",
        "fileStation": "File Station",
        "terms": "Terms of Service",
        "privacy": "Privacy Policy",
        "support": "Support"
      },
      "home": {
        "tag": "100% Free & Runs in your browser",
        "title1": "Everything you need to manage",
        "title2": "your files in one place.",
        "subtitle": "Merge PDFs, convert supported images, and use practical browser-based tools for everyday files and text. File contents for the implemented tools are processed locally in your browser.",
        "features": {
          "pdf": {
            "title": "PDF Merger",
            "desc": "Combine multiple PDF files in a chosen order directly in your browser."
          },
          "image": {
            "title": "Image Converter",
            "desc": "Convert supported images to PNG, JPG, or WEBP and adjust image quality. Animated GIFs are flattened to the first frame."
          },
          "extension": {
            "title": "Extension Changer",
            "desc": "Change a file name’s extension only; this does not convert its internal format."
          },
          "qr": {
            "title": "QR Generator",
            "desc": "Easily generate custom colored QR codes for your URLs and text."
          },
          "base64": {
            "title": "Base64 Tool",
            "desc": "Encode and decode text strings to Base64 instantly."
          },
          "url": {
            "title": "URL Encoder",
            "desc": "Safely encode and decode URLs and URI components."
          },
          "json": {
            "title": "JSON Formatter",
            "desc": "Format, validate, and beautify your JSON data."
          },
          "pass": {
            "title": "Password Generator",
            "desc": "Create strong, secure, and customizable random passwords."
          },
          "wordCountFeature": {
            "title": "Text Counter",
            "desc": "Count words, characters, and sentences in your text."
          }
        },
        "why": {
          "title": "Why choose File Station?",
          "secureTitle": "Secure & Private",
          "secureDesc": "The implemented file tools process selected files in your browser. The app does not upload them to its own server; external fonts and scripts may still load from their providers.",
          "fastTitle": "Lightning Fast",
          "fastDesc": "No need to wait for uploads. Experience instant file conversions and modifications.",
          "freeTitle": "100% Free",
          "freeDesc": "Use all tools without hidden fees or subscriptions."
        },
        "howItWorks": {
          "title": "How it works",
          "step1Title": "Choose a Tool",
          "step1Desc": "Select the tool you need from our collection above.",
          "step2Title": "Upload Files",
          "step2Desc": "Drag & drop or select your files to begin processing.",
          "step3Title": "Download Result",
          "step3Desc": "Get your modified files instantly without waiting."
        },
        "faq": {
          "title": "Frequently Asked Questions",
          "q1": "Are my files secure?",
          "a1": "The implemented file tools process your selected files locally in your browser. The app does not upload them to its own server, though external fonts and scripts may be requested.",
          "q2": "Do I need to create an account?",
          "a2": "No, File Station is designed to be used instantly without any registration or login required.",
          "q3": "Is there a limit on file size?",
          "a3": "Yes. To limit memory use, the PDF merger accepts up to 20 files (50 MB each, 100 MB total), the image converter accepts images up to 20 MB, and the extension tool accepts files up to 100 MB."
        }
      },
      "pdfTools": {
        "title": "Merge PDF Files",
        "desc": "Add your files, order them as you want, and merge them into one file.",
        "dropzoneTitle": "Click to select PDF files or drag them here",
        "browse": "Browse files",
        "selectedFiles": "Selected files",
        "moveUp": "Move up",
        "moveDown": "Move down",
        "error": "An error occurred while merging files. Ensure files are not password protected.",
        "minFiles": "You need at least two files to merge.",
        "limits": "Limits: 20 PDFs maximum, 50 MB per file, 100 MB total.",
        "invalidType": "Some files were skipped because they are not PDFs.",
        "fileTooLarge": "Each PDF must be larger than zero and no larger than 50 MB.",
        "tooManyFiles": "You can merge up to 20 PDF files at once.",
        "totalTooLarge": "The combined size of selected PDFs cannot exceed 100 MB.",
        "merging": "Merging files...",
        "mergeBtn": "Merge and Download"
      },
      "imageConverter": {
        "title": "Smart Image Converter",
        "desc": "A browser-based converter for supported images. Animated GIFs are converted as a still image using the first frame; files are not uploaded to an app server.",
        "dropzoneTitle": "Drag and drop your image here",
        "dropzoneSub": "Or click to choose an image from your device (JPG, PNG, WEBP, GIF, BMP)",
        "browse": "Browse files",
        "remove": "Remove image",
        "settings": "Conversion Settings",
        "outputFormat": "Output Format",
        "quality": "Image Quality",
        "qualityInfo": "Reducing quality significantly decreases file size",
        "converting": "Converting...",
        "convertBtn": "Convert and save image",
        "invalidFile": "Please select a supported image (JPEG, PNG, WEBP, GIF or BMP).",
        "tooLarge": "Images must be no larger than 20 MB.",
        "canvasError": "Image conversion failed. The image may be too large or unsupported."
      },
      "extensionTools": {
        "title": "Quick Extension Modifier",
        "desc": "Change the extension of any file with ease.",
        "noteTitle": "Important Technical Note:",
        "noteDesc": "This tool changes the file extension name itself (like .txt to .csv). However, it does not change the actual internal encoding. For true image conversion, use the Image Converter.",
        "dropzoneTitle": "Choose any file to modify its extension",
        "browse": "Browse",
        "changeFile": "Change File",
        "newExtension": "Enter new extension (no spaces)",
        "example": "Example: pdf, docx, mp4, csv",
        "saveBtn": "Save with new extension",
        "invalidFile": "Please choose a non-empty file.",
        "fileTooLarge": "This tool accepts files up to 100 MB.",
        "invalidExtension": "Use 1–12 letters or numbers for the new extension.",
        "error": "Error occurred while modifying file."
      },
      "terms": {
        "title": "Terms of Service",
        "lastUpdated": "Last updated: October 27, 2026",
        "p1": "Welcome to File Station. By accessing our website and using our services, you agree to comply with and be bound by the following terms and conditions.",
        "h1": "1. Use of Service",
        "p2": "Our services are provided \"as is\" without any warranties. You agree to use the services only for lawful purposes and in accordance with these Terms.",
        "h2": "2. Data Privacy",
        "p3": "The implemented file tools process selected file contents locally in your browser. The application does not upload those files to its own server. The site may still load external assets such as fonts or scripts from their providers.",
        "h3": "3. Modifications",
        "p4": "We reserve the right to modify these terms at any time. Continued use of the service constitutes your acceptance of such modifications."
      },
      "privacy": {
        "title": "Privacy Policy",
        "lastUpdated": "Last updated: October 27, 2026",
        "p1": "At File Station, your privacy is our highest priority. This policy outlines how we handle your data.",
        "h1": "1. Local Processing",
        "p2": "File Station is a client-side application: the implemented file tools process selected file contents in your browser, and the app does not upload those files to its own server. The site may load external assets such as fonts and scripts.",
        "h2": "2. Tracking & Analytics",
        "p3": "We do not use any tracking cookies or third-party analytics that tie your personal identity to your usage of the site.",
        "h3": "3. Changes to Privacy Policy",
        "p4": "We may update our Privacy Policy occasionally. We will notify you of any changes by posting the new Privacy Policy on this page."
      },
      "support": {
        "title": "Support & Contact",
        "desc": "Need help with File Station? We're here for you.",
        "faqTitle": "Check out our FAQ",
        "faqDesc": "Many common questions are answered in our FAQ section on the home page.",
        "contactTitle": "Contact Us",
        "contactDesc": "If you encounter a bug or have a feature request, please open an issue on GitHub.",
        "back": "Back to Home"
      },
      "qrGenerator": {
        "title": "QR Code Generator",
        "desc": "Easily generate custom QR codes for your URLs, text, and more.",
        "inputPlaceholder": "Enter text or URL here...",
        "color": "QR Color",
        "bgColor": "Background Color",
        "size": "Size",
        "download": "Download QR Code"
      },
      "base64Tool": {
        "title": "Base64 Encoder / Decoder",
        "desc": "Quickly encode or decode your text and data to Base64 format locally in your browser.",
        "modeEncode": "Encode",
        "modeDecode": "Decode",
        "inputLabel": "Input string",
        "inputPlaceholderText": "Enter text here...",
        "outputLabel": "Output",
        "outputPlaceholder": "Result will appear here...",
        "errorDecode": "Invalid Base64 string",
        "copyBtn": "Copy to clipboard",
        "copied": "Copied!"
      },
      "urlTool": {
        "title": "URL Encoder / Decoder",
        "desc": "Safely encode and decode URLs and URI components to ensure they transfer properly over the internet.",
        "modeEncode": "Encode",
        "modeDecode": "Decode",
        "inputLabel": "Input URL or Text",
        "inputPlaceholderText": "Enter URL or text here...",
        "outputLabel": "Result",
        "outputPlaceholder": "Result will appear here...",
        "errorDecode": "Invalid URL encoding",
        "copyBtn": "Copy to clipboard",
        "copied": "Copied!"
      },
      "jsonTool": {
        "title": "JSON Formatter & Validator",
        "desc": "Format, beautify, and validate your JSON data in seconds.",
        "inputPlaceholder": "Paste your JSON here...",
        "formatBtn": "Format JSON",
        "minifyBtn": "Minify JSON",
        "error": "Invalid JSON",
        "valid": "Valid JSON",
        "copyBtn": "Copy",
        "copied": "Copied!"
      },
      "passGen": {
        "title": "Strong Password Generator",
        "desc": "Generate strong, secure, and random passwords for your online accounts.",
        "length": "Password Length",
        "uppercase": "Include Uppercase (A-Z)",
        "lowercase": "Include Lowercase (a-z)",
        "numbers": "Include Numbers (0-9)",
        "symbols": "Include Symbols (!@#$)",
        "generateBtn": "Generate Password",
        "copyBtn": "Copy to clipboard",
        "copied": "Copied!"
      },
      "wordCount": {
        "title": "Word & Character Counter",
        "desc": "A simple tool to count words, characters, sentences, and paragraphs in your text.",
        "inputPlaceholder": "Type or paste your text here...",
        "words": "Words",
        "chars": "Characters",
        "charsNoSpaces": "Characters (no spaces)",
        "sentences": "Sentences",
        "paragraphs": "Paragraphs",
        "clearBtn": "Clear text"
      }
    }
  },
  ar: {
    translation: {
      "nav": {
        "cat": {
          "documents": "الملفات والمستندات",
          "developer": "أدوات المطورين",
          "utilities": "الأدوات المساعدة"
        },
        "home": "الرئيسية",
        "pdfTools": "دمج PDF",
        "imageConverter": "تحويل الصور",
        "extensionTools": "تعديل الامتدادات",
        "qrGenerator": "مولد QR Code",
        "base64Tool": "تشفير Base64",
        "urlTool": "تشفير الروابط (URL)",
        "jsonTool": "منسق JSON",
        "passGen": "مولد كلمات المرور",
        "wordCount": "عداد الكلمات"
      },
      "common": {
        "startUsing": "ابدأ الاستخدام",
        "allRightsReserved": "جميع الحقوق محفوظة",
        "fileStation": "محطة الملفات",
        "terms": "شروط الخدمة",
        "privacy": "سياسة الخصوصية",
        "support": "الدعم الفني"
      },
      "home": {
        "tag": "مجاني %100 ويعمل من متصفحك مباشرة",
        "title1": "كل ما تحتاجه لإدارة",
        "title2": "ملفاتك في مكان واحد.",
        "subtitle": "ادمج ملفات PDF، وحوّل الصور المدعومة، واستخدم أدوات بسيطة للملفات والنصوص. تتم معالجة محتويات الملفات داخل المتصفح في الأدوات المنفذة.",
        "features": {
          "pdf": {
            "title": "دمج ملفات PDF",
            "desc": "ادمج عدة ملفات PDF بعد ترتيبها، مباشرة داخل المتصفح."
          },
          "image": {
            "title": "محول الصور",
            "desc": "حوّل الصور المدعومة إلى PNG أو JPG أو WEBP واضبط الجودة."
          },
          "extension": {
            "title": "تعديل الامتدادات",
            "desc": "تغيّر الأداة امتداد اسم الملف فقط ولا تحوّل محتواه الداخلي."
          },
          "qr": {
            "title": "مولد QR",
            "desc": "قم بإنشاء رموز QR ملونة مخصصة للروابط والنصوص."
          },
          "base64": {
            "title": "أداة Base64",
            "desc": "تشفير وفك تشفير النصوص إلى Base64 بسهولة."
          },
          "url": {
            "title": "تشفير الروابط",
            "desc": "تشفير وفك تشفير الروابط ومكوناتها بشكل آمن."
          },
          "json": {
            "title": "منسق JSON",
            "desc": "تنسيق والتحقق من صحة وتجميل بيانات JSON الخاصة بك."
          },
          "pass": {
            "title": "مولد كلمات المرور",
            "desc": "إنشاء كلمات مرور عشوائية قوية وآمنة وقابلة للتخصيص."
          },
          "wordCountFeature": {
            "title": "عداد الكلمات",
            "desc": "احسب الكلمات والأحرف والجمل في النص الخاص بك."
          }
        },
        "why": {
          "title": "لماذا تختار محطة الملفات؟",
          "secureTitle": "آمن وخاص",
          "secureDesc": "تُعالج الأدوات المنفذة الملفات داخل المتصفح ولا ترفعها إلى خادم التطبيق، مع احتمال تحميل خطوط أو نصوص برمجية من مزوّدين خارجيين.",
          "fastTitle": "فائق السرعة",
          "fastDesc": "لا حاجة لانتظار الرفع. جرب التحويل والتعديل الفوري للملفات.",
          "freeTitle": "مجاني 100%",
          "freeDesc": "استخدم جميع أدواتنا مجاناً وبدون أي رسوم خفية أو اشتراكات."
        },
        "howItWorks": {
          "title": "كيف تعمل؟",
          "step1Title": "اختر الأداة",
          "step1Desc": "اختر الأداة التي تحتاجها من المجموعة أعلاه.",
          "step2Title": "ارفع ملفاتك",
          "step2Desc": "اسحب وافلت ملفاتك أو اخترها للبدء بالعملية.",
          "step3Title": "حمل النتيجة",
          "step3Desc": "حمّل الملفات الناتجة بعد اكتمال المعالجة."
        },
        "faq": {
          "title": "الأسئلة الشائعة",
          "q1": "هل ملفاتي آمنة؟",
          "a1": "تُعالج الأدوات المنفذة ملفاتك داخل المتصفح ولا يرفعها التطبيق إلى خادمه، لكن قد يُحمّل الموقع خطوطًا أو نصوصًا برمجية من مزوّدين خارجيين.",
          "q2": "هل أحتاج لإنشاء حساب؟",
          "a2": "لا، الموقع مصمم للاستخدام المباشر دون الحاجة لأي تسجيل دخول.",
          "q3": "هل هناك حد لحجم الملفات؟",
          "a3": "نعم. لتقليل استهلاك الذاكرة، يدعم دمج PDF حتى 20 ملفًا (50 ميجابايت لكل ملف و100 ميجابايت إجمالًا)، والصور حتى 20 ميجابايت، وتغيير الامتداد حتى 100 ميجابايت."
        }
      },
      "pdfTools": {
        "title": "دمج ملفات PDF",
        "desc": "أضف ملفاتك، رتبها كما تريد ومن ثم قم بدمجها في ملف واحد.",
        "dropzoneTitle": "اضغط لاختيار ملفات PDF أو اسحبها هنا",
        "browse": "تصفح الملفات",
        "selectedFiles": "الملفات المحددة",
        "moveUp": "تحريك لأعلى",
        "moveDown": "تحريك لأسفل",
        "error": "حدث خطأ أثناء دمج الملفات. تأكد من أن الملفات غير محمية بكلمة مرور.",
        "minFiles": "تحتاج إلى ملفين على الأقل لإجراء عملية الدمج.",
        "limits": "الحدود: 20 ملف PDF كحد أقصى، و50 ميجابايت لكل ملف، و100 ميجابايت إجمالًا.",
        "invalidType": "تم تجاهل بعض الملفات لأنها ليست بصيغة PDF.",
        "fileTooLarge": "يجب ألا يتجاوز حجم ملف PDF الواحد 50 ميجابايت وألا يكون فارغًا.",
        "tooManyFiles": "يمكنك دمج 20 ملف PDF كحد أقصى في المرة الواحدة.",
        "totalTooLarge": "يجب ألا يتجاوز الحجم الإجمالي لملفات PDF المحددة 100 ميجابايت.",
        "merging": "جاري دمج الملفات...",
        "mergeBtn": "دمج وحفظ الملف"
      },
      "imageConverter": {
        "title": "محول الصور الذكي",
        "desc": "أداة لتحويل الصور داخل المتصفح. تتحول صور GIF المتحركة إلى صورة ثابتة من الإطار الأول، ولا تُرفع الملفات إلى خادم التطبيق.",
        "dropzoneTitle": "اسحب الصورة وأفلتها هنا",
        "dropzoneSub": "أو اضغط لاختيار صورة من جهازك (JPG, PNG, WEBP, GIF, BMP)",
        "browse": "تصفح الملفات",
        "remove": "إزالة الصورة",
        "settings": "إعدادات التحويل",
        "outputFormat": "صيغة الإخراج",
        "quality": "جودة الصورة",
        "qualityInfo": "تخفيض الجودة يقلل من حجم الملف بشكل كبير",
        "converting": "جاري التحويل...",
        "convertBtn": "تحويل وحفظ الصورة",
        "invalidFile": "اختر صورة مدعومة بصيغة JPEG أو PNG أو WEBP أو GIF أو BMP.",
        "tooLarge": "يجب ألا يتجاوز حجم الصورة 20 ميجابايت.",
        "canvasError": "فشل تحويل الصورة. قد تكون كبيرة جدًا أو غير مدعومة."
      },
      "extensionTools": {
        "title": "مُعدِّل الامتدادات السريع",
        "desc": "قم بتغيير امتداد أي ملف بسهولة تامة.",
        "noteTitle": "معلومة تقنية هامة:",
        "noteDesc": "هذه الأداة تقوم بتغيير اسم امتداد الملف (مثل تغيير .txt إلى .csv). ومع ذلك، تغيير الامتداد لا يغير الترميز الداخلي الحقيقي للملف. إذا كنت تبحث عن تحويل ترميزات الصور، الرجاء استخدام \"محول الصور\".",
        "dropzoneTitle": "اختر أي ملف لتعديل امتداده",
        "browse": "استعراض",
        "changeFile": "تغيير الملف",
        "newExtension": "اكتب الامتداد الجديد (بدون مسافة)",
        "example": "مثال: pdf, docx, mp4, csv",
        "saveBtn": "حفظ بالامتداد الجديد",
        "invalidFile": "اختر ملفًا غير فارغ.",
        "fileTooLarge": "تدعم هذه الأداة ملفات حتى 100 ميجابايت.",
        "invalidExtension": "استخدم من حرف إلى 12 حرفًا أو رقمًا للامتداد الجديد.",
        "error": "حدث خطأ أثناء تعديل الملف."
      },
      "terms": {
        "title": "شروط الخدمة",
        "lastUpdated": "آخر تحديث: 27 أكتوبر 2026",
        "p1": "مرحباً بك في محطة الملفات. من خلال الوصول إلى موقعنا واستخدام خدماتنا، فإنك توافق على الالتزام بالشروط والأحكام التالية.",
        "h1": "1. استخدام الخدمة",
        "p2": "يتم تقديم خدماتنا \"كما هي\" دون أي ضمانات. أنت توافق على استخدام الخدمات لأغراض قانونية فقط ووفقاً لهذه الشروط.",
        "h2": "2. خصوصية البيانات",
        "p3": "تتم معالجة محتويات الملفات داخل المتصفح في الأدوات المنفذة، ولا يرفعها التطبيق إلى خادمه. قد يحمّل الموقع بعض العناصر الخارجية مثل الخطوط أو النصوص البرمجية من مزوّديها.",
        "h3": "3. التعديلات",
        "p4": "نحتفظ بالحق في تعديل هذه الشروط في أي وقت. استمرارك في استخدام الخدمة يشكل قبولاً لهذه التعديلات."
      },
      "privacy": {
        "title": "سياسة الخصوصية",
        "lastUpdated": "آخر تحديث: 27 أكتوبر 2026",
        "p1": "في محطة الملفات، خصوصيتك هي أولويتنا القصوى. توضح هذه السياسة كيف نتعامل مع بياناتك.",
        "h1": "1. المعالجة المحلية",
        "p2": "محطة الملفات تطبيق يعمل من جهة العميل؛ إذ تُعالج الملفات داخل المتصفح في الأدوات المنفذة ولا يرفعها التطبيق إلى خادمه. قد يحمّل الموقع خطوطًا أو نصوصًا برمجية خارجية.",
        "h2": "2. التتبع والتحليلات",
        "p3": "نحن لا نستخدم أي ملفات تعريف ارتباط للتتبع أو تحليلات لجهات خارجية تربط هويتك الشخصية باستخدامك للموقع.",
        "h3": "3. التغييرات على سياسة الخصوصية",
        "p4": "قد نقوم بتحديث سياسة الخصوصية من وقت لآخر. سنعلمك بأي تغييرات عن طريق نشر سياسة الخصوصية الجديدة في هذه الصفحة."
      },
      "support": {
        "title": "الدعم والاتصال",
        "desc": "هل تحتاج إلى مساعدة مع محطة الملفات؟ نحن هنا من أجلك.",
        "faqTitle": "اطلع على الأسئلة الشائعة",
        "faqDesc": "تمت الإجابة على العديد من الأسئلة الشائعة في قسم الأسئلة الشائعة في الصفحة الرئيسية.",
        "contactTitle": "اتصل بنا",
        "contactDesc": "إذا واجهت أي خطأ أو كان لديك طلب لميزة جديدة، يمكنك فتح مشكلة (Issue) على GitHub.",
        "back": "العودة للرئيسية"
      },
      "qrGenerator": {
        "title": "مولد رمز الاستجابة السريعة (QR)",
        "desc": "قم بإنشاء رموز QR مخصصة للروابط والنصوص الخاصة بك بكل سهولة.",
        "inputPlaceholder": "أدخل النص أو الرابط هنا...",
        "color": "لون الرمز",
        "bgColor": "لون الخلفية",
        "size": "الحجم",
        "download": "تحميل الرمز"
      },
      "base64Tool": {
        "title": "تشفير وفك تشفير Base64",
        "desc": "قم بتشفير أو فك تشفير النصوص والبيانات بسرعة إلى صيغة Base64 محلياً في متصفحك.",
        "modeEncode": "تشفير (Encode)",
        "modeDecode": "فك التشفير (Decode)",
        "inputLabel": "النص المدخل",
        "inputPlaceholderText": "أدخل النص هنا...",
        "outputLabel": "النتيجة",
        "outputPlaceholder": "ستظهر النتيجة هنا...",
        "errorDecode": "نص Base64 غير صالح",
        "copyBtn": "نسخ الحافظة",
        "copied": "تم النسخ!"
      },
      "urlTool": {
        "title": "تشفير وفك تشفير الروابط",
        "desc": "قم بتشفير وفك تشفير الروابط ومكوناتها لضمان نقلها بشكل صحيح عبر الإنترنت.",
        "modeEncode": "تشفير",
        "modeDecode": "فك التشفير",
        "inputLabel": "الرابط المدخل أو النص",
        "inputPlaceholderText": "أدخل الرابط أو النص هنا...",
        "outputLabel": "النتيجة",
        "outputPlaceholder": "ستظهر النتيجة هنا...",
        "errorDecode": "تشفير غير صالح",
        "copyBtn": "نسخ الحافظة",
        "copied": "تم النسخ!"
      },
      "jsonTool": {
        "title": "منسق ومدقق JSON",
        "desc": "تنسيق وتجميل والتحقق من صحة بيانات JSON الخاصة بك في ثوانٍ.",
        "inputPlaceholder": "الصق بيانات JSON الخاص بك هنا...",
        "formatBtn": "تنسيق JSON",
        "minifyBtn": "تصغير JSON",
        "error": "JSON غير صالح",
        "valid": "JSON صالح",
        "copyBtn": "نسخ",
        "copied": "تم النسخ!"
      },
      "passGen": {
        "title": "مولد كلمات المرور القوية",
        "desc": "قم بإنشاء كلمات مرور قوية وآمنة وعشوائية لحساباتك عبر الإنترنت.",
        "length": "طول كلمة المرور",
        "uppercase": "تضمين أحرف كبيرة (A-Z)",
        "lowercase": "تضمين أحرف صغيرة (a-z)",
        "numbers": "تضمين أرقام (0-9)",
        "symbols": "تضمين رموز (!@#$)",
        "generateBtn": "إنشاء كلمة مرور",
        "copyBtn": "نسخ كلمة المرور",
        "copied": "تم النسخ!"
      },
      "wordCount": {
        "title": "عداد الكلمات والأحرف",
        "desc": "أداة بسيطة لعد الكلمات والأحرف والجمل والفقرات في النص الخاص بك.",
        "inputPlaceholder": "اكتب أو الصق نصك هنا...",
        "words": "كلمات",
        "chars": "أحرف",
        "charsNoSpaces": "أحرف (بدون مسافات)",
        "sentences": "جمل",
        "paragraphs": "فقرات",
        "clearBtn": "مسح النص"
      }
    }
  },
  ru: {
    translation: {
      "nav": {
        "cat": {
          "documents": "Документы и файлы",
          "developer": "Инструменты разработчика",
          "utilities": "Утилиты"
        },
        "home": "Главная",
        "pdfTools": "Слияние PDF",
        "imageConverter": "Конвертер изображений",
        "extensionTools": "Изменение расширений",
        "qrGenerator": "Генератор QR-кода",
        "base64Tool": "Кодировщик Base64",
        "urlTool": "Кодировщик URL",
        "jsonTool": "Форматтер JSON",
        "passGen": "Генератор паролей",
        "wordCount": "Счетчик слов"
      },
      "common": {
        "startUsing": "Начать",
        "allRightsReserved": "Все права защищены",
        "fileStation": "Файловая Станция",
        "terms": "Условия",
        "privacy": "Конфиденциальность",
        "support": "Поддержка"
      },
      "home": {
        "tag": "100% Бесплатно и работает в браузере",
        "title1": "Всё необходимое для управления",
        "title2": "файлами в одном месте.",
        "subtitle": "Объединяйте PDF, конвертируйте поддерживаемые изображения и используйте простые браузерные инструменты для файлов и текста. Обработка файлов в реализованных инструментах выполняется локально.",
        "features": {
          "pdf": {
            "title": "Объединение PDF",
            "desc": "Объединяйте несколько PDF-файлов в выбранном порядке прямо в браузере."
          },
          "image": {
            "title": "Конвертер изображений",
            "desc": "Конвертируйте поддерживаемые изображения в PNG, JPG или WEBP и настраивайте качество."
          },
          "extension": {
            "title": "Смена расширений",
            "desc": "Меняет только расширение имени файла и не преобразует его внутренний формат."
          },
          "qr": {
            "title": "Генератор QR",
            "desc": "Создавайте настраиваемые цветные QR-коды для ваших URL и текста."
          },
          "base64": {
            "title": "Инструмент Base64",
            "desc": "Легко кодируйте и декодируйте текст в Base64."
          },
          "url": {
            "title": "Кодировщик URL",
            "desc": "Безопасное кодирование и декодирование URL-адресов."
          },
          "json": {
            "title": "Форматтер JSON",
            "desc": "Форматирование, валидация и украшение данных JSON."
          },
          "pass": {
            "title": "Генератор паролей",
            "desc": "Создавайте надежные, безопасные и настраиваемые пароли."
          },
          "wordCountFeature": {
            "title": "Счетчик текста",
            "desc": "Подсчет слов, символов и предложений в вашем тексте."
          }
        },
        "why": {
          "title": "Почему File Station?",
          "secureTitle": "Безопасно и конфиденциально",
          "secureDesc": "Реализованные инструменты обрабатывают выбранные файлы в браузере и не загружают их на сервер приложения; внешние шрифты и скрипты могут загружаться со своих источников.",
          "fastTitle": "Мгновенная скорость",
          "fastDesc": "Без долгого ожидания загрузки. Мгновенная конвертация.",
          "freeTitle": "100% Бесплатно",
          "freeDesc": "Все инструменты доступны без скрытых платежей и подписок."
        },
        "howItWorks": {
          "title": "Как это работает",
          "step1Title": "Выберите инструмент",
          "step1Desc": "Выберите нужный инструмент из коллекции выше.",
          "step2Title": "Загрузите файлы",
          "step2Desc": "Перетащите или выберите файлы для начала обработки.",
          "step3Title": "Скачайте результат",
          "step3Desc": "Получите измененные файлы мгновенно без ожидания."
        },
        "faq": {
          "title": "Часто задаваемые вопросы",
          "q1": "Мои файлы в безопасности?",
          "a1": "Реализованные инструменты обрабатывают файлы локально в браузере и не загружают их на сервер приложения, хотя сайт может обращаться за внешними шрифтами и скриптами.",
          "q2": "Нужно ли создавать аккаунт?",
          "a2": "Нет, File Station создан для мгновенного использования без регистрации.",
          "q3": "Есть ли ограничение на размер файла?",
          "a3": "Да. Для ограничения потребления памяти объединитель PDF принимает до 20 файлов (до 50 МБ каждый и 100 МБ суммарно), конвертер изображений — до 20 МБ на файл, а смена расширения — до 100 МБ."
        }
      },
      "pdfTools": {
        "title": "Объединить PDF-файлы",
        "desc": "Добавьте файлы, упорядочите по желанию и объедините в один файл.",
        "dropzoneTitle": "Нажмите, чтобы выбрать PDF или перетащите их сюда",
        "browse": "Обзор файлов",
        "selectedFiles": "Выбранные файлы",
        "moveUp": "Переместить вверх",
        "moveDown": "Переместить вниз",
        "error": "Ошибка при объединении файлов. Убедитесь, что файлы не защищены паролем.",
        "minFiles": "Для слияния необходимо как минимум два файла.",
        "limits": "Ограничения: до 20 PDF, 50 МБ на файл и 100 МБ суммарно.",
        "invalidType": "Некоторые файлы пропущены, так как они не являются PDF.",
        "fileTooLarge": "Размер PDF должен быть больше нуля и не превышать 50 МБ.",
        "tooManyFiles": "За один раз можно объединить не более 20 PDF-файлов.",
        "totalTooLarge": "Общий размер выбранных PDF не должен превышать 100 МБ.",
        "merging": "Объединение файлов...",
        "mergeBtn": "Объединить и скачать"
      },
      "imageConverter": {
        "title": "Умный конвертер изображений",
        "desc": "Конвертер изображений в браузере. Анимированные GIF преобразуются в статичное изображение по первому кадру; файлы не отправляются на сервер приложения.",
        "dropzoneTitle": "Перетащите изображение сюда",
        "dropzoneSub": "Или нажмите, чтобы выбрать изображение (JPG, PNG, WEBP, GIF, BMP)",
        "browse": "Обзор файлов",
        "remove": "Удалить",
        "settings": "Настройки конвертации",
        "outputFormat": "Формат вывода",
        "quality": "Качество изображения",
        "qualityInfo": "Снижение качества значительно уменьшает размер файла",
        "converting": "Конвертирование...",
        "convertBtn": "Конвертировать и сохранить",
        "invalidFile": "Выберите поддерживаемое изображение JPEG, PNG, WEBP, GIF или BMP.",
        "tooLarge": "Размер изображения не должен превышать 20 МБ.",
        "canvasError": "Не удалось преобразовать изображение. Возможно, оно слишком большое или не поддерживается."
      },
      "extensionTools": {
        "title": "Быстрый модификатор расширений",
        "desc": "С легкостью меняйте расширение любого файла.",
        "noteTitle": "Важное техническое примечание:",
        "noteDesc": "Инструмент только меняет название расширения (например, с .txt на .csv). Он не изменяет реальную внутреннюю кодировку файла. Для конвертации изображений используйте Умный конвертер изображений.",
        "dropzoneTitle": "Выберите файл для изменения расширения",
        "browse": "Обзор",
        "changeFile": "Изменить файл",
        "newExtension": "Введите новое расширение (без пробелов)",
        "example": "Например: pdf, docx, mp4, csv",
        "saveBtn": "Сохранить с новым расширением",
        "invalidFile": "Выберите непустой файл.",
        "fileTooLarge": "Этот инструмент поддерживает файлы размером до 100 МБ.",
        "invalidExtension": "Новое расширение должно содержать от 1 до 12 букв или цифр.",
        "error": "Ошибка при изменении файла."
      },
      "terms": {
        "title": "Условия",
        "lastUpdated": "Последнее обновление: 27 октября 2026 г.",
        "p1": "Добро пожаловать в File Station. Получая доступ к нашему сайту и используя наши сервисы, вы соглашаетесь соблюдать следующие условия.",
        "h1": "1. Использование сервиса",
        "p2": "Наши сервисы предоставляются \"как есть\" без каких-либо гарантий. Вы соглашаетесь использовать сервисы только в законных целях.",
        "h2": "2. Конфиденциальность данных",
        "p3": "Реализованные инструменты обрабатывают содержимое файлов локально в браузере; приложение не загружает файлы на собственный сервер. Сайт может загружать внешние ресурсы, например шрифты и скрипты.",
        "h3": "3. Изменения",
        "p4": "Мы оставляем за собой право изменять эти условия в любое время. Продолжение использования ресурса означает ваше согласие."
      },
      "privacy": {
        "title": "Конфиденциальность",
        "lastUpdated": "Последнее обновление: 27 октября 2026 г.",
        "p1": "В File Station ваша конфиденциальность — наш главный приоритет.",
        "h1": "1. Локальная обработка",
        "p2": "File Station — клиентское приложение: реализованные инструменты обрабатывают содержимое файлов в браузере и не отправляют их на сервер приложения. Сайт может загружать внешние ресурсы, например шрифты и скрипты.",
        "h2": "2. Отслеживание и аналитика",
        "p3": "Мы не используем файлы cookie для отслеживания или стороннюю аналитику, которая связывает вашу личность с использованием сайта.",
        "h3": "3. Изменения в политике",
        "p4": "Мы можем время от времени обновлять нашу Политику конфиденциальности. Мы уведомим вас о любых изменениях, опубликовав новую политику на этой странице."
      },
      "support": {
        "title": "Поддержка и контакты",
        "desc": "Нужна помощь с File Station? Мы здесь.",
        "faqTitle": "Проверьте наш FAQ",
        "faqDesc": "Ответы на многие вопросы можно найти в разделе FAQ на главной странице.",
        "contactTitle": "Свяжитесь с нами",
        "contactDesc": "Если вы столкнулись с ошибкой или у вас есть пожелания, создайте обращение (Issue) на GitHub.",
        "back": "На главную"
      },
      "qrGenerator": {
        "title": "Генератор QR-кода",
        "desc": "Легко создавайте настраиваемые QR-коды для URL-адресов, текста и многого другого.",
        "inputPlaceholder": "Введите текст или URL...",
        "color": "Цвет QR-кода",
        "bgColor": "Цвет фона",
        "size": "Размер",
        "download": "Скачать QR-код"
      },
      "base64Tool": {
        "title": "Кодировщик Base64",
        "desc": "Быстро кодируйте или декодируйте текст локально в вашем браузере.",
        "modeEncode": "Кодировать",
        "modeDecode": "Декодировать",
        "inputLabel": "Входная строка",
        "inputPlaceholderText": "Введите текст здесь...",
        "outputLabel": "Результат",
        "outputPlaceholder": "Здесь появится результат...",
        "errorDecode": "Недопустимая строка Base64",
        "copyBtn": "Копировать",
        "copied": "Скопировано!"
      },
      "urlTool": {
        "title": "Кодировщик URL",
        "desc": "Безопасное кодирование и декодирование URL-адресов.",
        "modeEncode": "Кодировать",
        "modeDecode": "Декодировать",
        "inputLabel": "URL или текст",
        "inputPlaceholderText": "Введите URL или текст здесь...",
        "outputLabel": "Результат",
        "outputPlaceholder": "Здесь появится результат...",
        "errorDecode": "Недопустимая кодировка URL",
        "copyBtn": "Копировать",
        "copied": "Скопировано!"
      },
      "jsonTool": {
        "title": "Форматтер JSON",
        "desc": "Форматирование, валидация и украшение данных JSON в секунды.",
        "inputPlaceholder": "Вставьте ваш JSON здесь...",
        "formatBtn": "Формат JSON",
        "minifyBtn": "Минификация JSON",
        "error": "Недопустимый JSON",
        "valid": "Допустимый JSON",
        "copyBtn": "Копировать",
        "copied": "Скопировано!"
      },
      "passGen": {
        "title": "Генератор паролей",
        "desc": "Создавайте надежные, безопасные пароли для ваших аккаунтов.",
        "length": "Длина пароля",
        "uppercase": "Включая Заглавные (A-Z)",
        "lowercase": "Включая Строчные (a-z)",
        "numbers": "Включая Цифры (0-9)",
        "symbols": "Включая Символы (!@#$)",
        "generateBtn": "Сгенерировать",
        "copyBtn": "Копировать",
        "copied": "Скопировано!"
      },
      "wordCount": {
        "title": "Счетчик текста",
        "desc": "Инструмент для подсчета слов, символов, предложений и абзацев.",
        "inputPlaceholder": "Введите или вставьте ваш текст здесь...",
        "words": "Слова",
        "chars": "Символы",
        "charsNoSpaces": "Символы (без пробелов)",
        "sentences": "Предложения",
        "paragraphs": "Абзацы",
        "clearBtn": "Очистить текст"
      }
    }
  }
};
