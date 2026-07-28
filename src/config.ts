import proj1 from "./assets/bengaluru_property_estimator.jpg";
import proj2 from "./assets/Executive sales.png";
import proj3 from "./assets/covid19_global_analytics_dashboard.png";
import proj4 from "./assets/EDA_201.jpg";
import proj5 from "./assets/Agrilink.jpg";
import proj6 from "./assets/fuelmate.jpg";
import proj7 from "./assets/hostelfix.jpg";
import proj8 from "./assets/freelance_predictor.jpg";
import proj9 from "./assets/sportsperson_image_classifier.png";
import proj10 from "./assets/customer_churn.png";
import proj11 from "./assets/retinopathy.png";

export const config = {
    developer: {
        name: "Nazik",
        fullName: "Mohamed Nazik",
        title: "Data Scientist",
        description: "Third-year Computer Science undergraduate focused on Data Science and Machine Learning. Skilled in data analysis, predictive modeling, and dashboard development, with a passion for solving real-world problems using data. As a Microsoft Learn Student Ambassador, I actively engage in learning, sharing knowledge, and contributing to the tech community."
    },
    social: {
        github: "Nazik2020",
        email: "nasikmohamednzk2020@gmail.com",
        location: "Galle, Sri Lanka"
    },
    about: {
        title: "About Me",
        description: "Analytical Computer Science undergraduate focused on Data Science, Machine Learning, and Predictive Analytics. Experienced in Python, SQL, Pandas, NumPy, Scikit-Learn, TensorFlow, and Power BI for building end-to-end data pipelines, predictive models, and interactive dashboards. Actively seeking opportunities to apply data-driven solutions to real-world business problems."
    },
    experiences: [
        {
            position: "Microsoft Student Ambassador",
            company: "Microsoft",
            period: "April 2026",
            location: "Remote",
            description: "Currently serving as a Microsoft Learn Student Ambassador, driving student-focused technical learning initiatives. Lead technical workshops, promote Microsoft technologies, and support the student developer community through peer mentoring and knowledge-sharing sessions.",
            responsibilities: [
                "Lead technical workshops on Azure and AI",
                "Promote Microsoft technologies",
                "Support the student developer community"
            ],
            technologies: ["Azure", "AI", "Community Building", "Technical Leadership"]
        },
        {
            position: "Treasurer",
            company: "IEEE Uva Wellassa University Student Branch",
            period: "March 2026",
            location: "Sri Lanka",
            description: "Managing financial planning, budgeting, and fund allocation for the student branch; supporting execution of technical events, workshops, and IEEE-affiliated programes.",
            responsibilities: [
                "Manage financial planning and budgeting",
                "Handle fund allocation for the student branch",
                "Support execution of technical events and workshops"
            ],
            technologies: ["Financial Planning", "Budgeting", "Event Management"]
        },
        {
            position: "Project Chair",
            company: "HacKMS'26 Hackathon - MS Club of Uva Wellassa University",
            period: "Nov 2025 - Feb 2026",
            color: "red",
            location: "Sri Lanka",
            description: "Led planning and execution of a 12-hour hackathon and internship pathway program with industry mentors.",
            responsibilities: [
                "Led planning and execution of a 12-hour hackathon event",
                "Coordinated internship pathway program with industry mentors",
                "Managed cross-functional teams and stakeholder communications",
                "Organized technical sessions and workshops with industry professionals"
            ],
            technologies: ["Event Management", "Leadership", "Technical Workshops"]
        },
        {
            position: "Data Science Bootcamp Graduate",
            company: "DSAcademy.lk",
            period: "Jul 2024 - Nov 2024",
            location: "Sri Lanka",
            description: "Intensive 3-month training in Python, SQL, Pandas, Exploratory Data Analysis, Regression Modeling, NLP basics, and Data Visualization.",
            responsibilities: [
                "Completed training in Python, SQL, and Pandas for data analysis",
                "Learned Exploratory Data Analysis (EDA) and Regression Modeling",
                "Built data visualization projects using Matplotlib, Seaborn, and Power BI",
                "Applied NLP basics and statistical methods to real datasets"
            ],
            technologies: ["Python", "SQL", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI", "Jupyter"]
        }
    ],
    projects: [
        {
            id: 11,
            title: "Retinal Screening — AI-Assisted Diabetic Retinopathy Detection",
            category: "AI / ML",
            technologies: "Python, TensorFlow, Keras, Flask, Grad-CAM",
            description: "An educational web app that grades diabetic retinopathy (DR) severity from a single retina (fundus) photograph using a fine-tuned EfficientNetB0 CNN. Explains its reasoning with a Grad-CAM heatmap overlay. Built end-to-end with data pipeline, transfer learning, class weighting, and Flask deployment.",
            image: proj11,
            link: "https://lnkd.in/g8b7z2nm"
        },
        {
            id: 10,
            title: "Bank Customer Churn Prediction (ANN)",
            category: "AI / ML",
            technologies: "Python, TensorFlow, Keras, Scikit-learn, imbalanced-learn (SMOTE)",
            description: "End-to-end Artificial Neural Network to predict bank customer churn from 10,000 real records. Tackled class imbalance with SMOTE, boosting churned-class F1-score from 0.61 to 0.81. Pipeline includes Label & One-Hot Encoding, MinMaxScaler, and a 2-hidden-layer ANN trained for 100 epochs — achieving 81% balanced accuracy.",
            image: proj10,
            link: "https://github.com/Nazik2020/Bank-Customer-Churn-Prediction-using-ANN"
        },
        {
            id: 9,
            title: "KineticLens — Sports Image Classifier",
            category: "AI / ML",
            technologies: "Python (OpenCV, Scikit-learn, PyWavelets), Computer Vision, SVM, Flask",
            description: "An end-to-end ML web application that identifies world-famous athletes from facial images. Features a complete ML pipeline: OpenCV Haar Cascades for face detection, Wavelet transforms for feature extraction, and a tuned SVM model (GridSearchCV) served via a Flask REST API.",
            image: proj9,
            link: "https://github.com/Nazik2020/-KineticLens-Sports-Person-Image-Classifier"
        },
        {
            id: 8,
            title: "Freelancer Earnings Predictor",
            category: "AI / ML",
            technologies: "Python (Scikit-learn, Pandas, NumPy), Flask, JavaScript, Tailwind CSS, Azure",
            description: "A full-stack machine learning web application that predicts freelancer monthly earnings based on profile attributes. Features an end-to-end ML pipeline with Random Forest (~0.71 R²), feature importance analysis, percentile ranking, and a real-time prediction system deployed on Azure.",
            image: proj8,
            link: "https://github.com/Nazik2020/freelancer-earnings-predictor"
        },
        {
            id: 1,
            title: "Bengaluru Property Estimator",
            category: "AI / ML",
            technologies: "Python (Pandas, NumPy, Scikit-learn), Flask, HTML/CSS",
            description: "Built a predictive model for residential property prices with ~84.5% cross-validated accuracy. Conducted Exploratory Data Analysis on 13,000+ records, performed One-Hot Encoding, dimensionality reduction, and outlier handling. Implemented Flask REST API for real-time predictions.",
            image: proj1,
            link: "https://github.com/Nazik2020/Bengaluru-Property-Estimator"
        },
        {
            id: 2,
            title: "Executive Sales Analytics Dashboard",
            category: "Data Analytics",
            technologies: "Power BI, DAX, Power Query",
            description: "Developed an interactive sales performance dashboard with real-time slicers, KPI metrics, and category/sub-category analysis. Designed star-schema data model with custom DAX measures for accurate cross-filtering. Impact: Identified $2.3M revenue opportunity and reduced reporting time by 60%.",
            image: proj2,
            link: "https://github.com/Nazik2020/Executive-Sales-Dashboard"
        },
        {
            id: 3,
            title: "COVID-19 Global Analytics Dashboard",
            category: "Data Analytics",
            technologies: "Power BI, DAX, Power Query, Worldometer & USA COVID datasets",
            description: "Created a 5-page interactive dashboard analyzing global pandemic trends by continent, country, and US states. Built dynamic slicers, KPI cards, month-level trend analysis, and custom tooltip summaries.",
            image: proj3,
            link: "https://github.com/Nazik2020/COVID-19-Global-Analytics-Power-BI-Dashboard"
        },
        {
            id: 4,
            title: "EDA-201 Rental Data Analysis",
            category: "Data Science",
            technologies: "Python (Pandas, Matplotlib, Seaborn)",
            description: "Conducted Exploratory Data Analysis on rental dataset: missing values handling, outlier detection, and categorical conversion. Visualized price distributions, top cities, price vs. sqft, and price trends over time using line, bar, and scatter plots.",
            image: proj4,
            link: "https://github.com/Nazik2020/EDA-201-Project-Rental-Data-Analysis"
        },
        {
            id: 5,
            title: "Agrilink Marketplace",
            category: "Full-Stack",
            technologies: "React.js(Vite), PHP, MySQL, Tailwind CSS",
            description: "A full-stack agricultural e-commerce platform bridging the gap between farmers and global buyers. Features product listings, shopping cart, order management, review system, JWT-based authentication, and role-based access control.",
            image: proj5,
            link: "https://github.com/Nazik2020/Agrilink-Agri-Marketplace"
        },
        {
            id: 6,
            title: "FuelMate - Smart Fuel Tracking App",
            category: "Mobile App",
            technologies: "React Native(Expo), Firebase, TypeScript",
            description: "A comprehensive mobile application for tracking fuel consumption, managing vehicles, and locating nearby fuel stations. Features include fuel log tracking, vehicle management, task reminders, and a real-time interactive map.",
            image: proj6,
            link: "https://github.com/Nazik2020/FuelMate-Smart-Fuel-Tracking-Vehicle-Management-App"
        },
        {
            id: 7,
            title: "Hostelfix Hostel Maintenance System",
            category: "Full-Stack",
            technologies: "Django, React, Service Layer Pattern, OOP",
            description: "A web-based application designed to streamline and automate the process of reporting and resolving maintenance issues within university hostels. Features dashboards for Students, Wardens, Technicians, and Admins with real-time status updates.",
            image: proj7,
            link: "https://github.com/Nazik2020/hostel-fix"
        }
    ],
    contact: {
        email: "nasikmohamednzk2020@gmail.com",
        github: "https://github.com/Nazik2020",
        linkedin: "https://www.linkedin.com/in/nazikhassan11",
        instagram: "https://www.instagram.com/",
        facebook: "https://www.facebook.com/",
    },
    skills: {
        develop: {
            title: "DATA SCIENCE",
            description: "Machine Learning & Predictive Analytics",
            details: "Building predictive models, data pipelines, and analytics solutions using Python, TensorFlow, and Scikit-Learn. Specializing in regression, classification, and neural networks.",
            tools: ["Python", "TensorFlow", "Scikit-Learn", "Pandas", "NumPy", "SQL", "MySQL", "Jupyter", "Google Colab", "Flask"]
        },
        design: {
            title: "ANALYTICS",
            description: "Data Visualization & Business Intelligence",
            details: "Creating interactive dashboards and compelling data visualizations with Power BI and Tableau. Expert in DAX, Power Query, and KPI reporting.",
            tools: ["Power BI", "Tableau", "DAX", "Power Query", "Matplotlib", "Seaborn", "EDA", "KPI Reporting"]
        }
    }
};


