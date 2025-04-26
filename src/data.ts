// src/data.ts

export const incidents = [
    {
      id: 1,
      title: "Biased Recommendation Algorithm",
      description: "Algorithm consistently favored certain demographics...",
      severity: "Low",
      reported_at: "2025-03-15T10:00:00Z",
      long_description: "The recommendation algorithm used by the platform showed a strong bias towards certain demographics, such as age and location, resulting in unfair content suggestions. This issue was traced back to the dataset used for training, which was not diverse enough and lacked representation from various groups. The team has started working on a fix by diversifying the dataset and testing it against a broader range of users."
    },
    {
      id: 2,
      title: "Inaccurate Data Reporting in Health App",
      description: "Health app recorded incorrect steps and activity data...",
      severity: "Low",
      reported_at: "2025-03-20T11:00:00Z",
      long_description: "A popular health app began showing incorrect step counts and activity data after a recent update. Users reported discrepancies in their daily steps and calorie calculations. A bug in the algorithm caused certain movements to not be recorded accurately. The company has confirmed that the issue will be fixed in the next update."
    },
    {
      id: 3,
      title: "Delayed AI Response in Virtual Assistant",
      description: "AI virtual assistant took longer than expected to respond...",
      severity: "Low",
      reported_at: "2025-03-22T14:30:00Z",
      long_description: "A virtual assistant app experienced delays in processing certain queries, resulting in a frustrating user experience. The delay was caused by an increase in server load and high query volume. The issue has been temporarily resolved by adding more server capacity, with a permanent fix in progress."
    },
    {
      id: 4,
      title: "Incorrect Facial Recognition in Security System",
      description: "Facial recognition system failed to recognize authorized users...",
      severity: "Low",
      reported_at: "2025-03-25T09:00:00Z",
      long_description: "A facial recognition-based security system began incorrectly flagging authorized personnel as unrecognized. The issue was traced to poor lighting conditions and the angle of the camera in certain environments. The company is working on an update to improve detection accuracy in diverse conditions."
    },
    {
      id: 5,
      title: "AI Content Moderation Error",
      description: "Moderation algorithm flagged harmless posts as inappropriate...",
      severity: "Low",
      reported_at: "2025-03-27T16:45:00Z",
      long_description: "The AI moderation tool on a social media platform mistakenly flagged harmless content, including personal photos and posts related to educational content, as inappropriate. This was due to an error in the keyword filtering algorithm. A patch is being rolled out to resolve this issue."
    },
    {
      id: 6,
      title: "Chatbot Misinterpretation in Customer Support",
      description: "Chatbot misunderstood user queries, providing incorrect answers...",
      severity: "Low",
      reported_at: "2025-03-28T13:30:00Z",
      long_description: "A customer support chatbot in an e-commerce store frequently misunderstood user queries and provided irrelevant or incorrect responses. The issue was traced back to the training dataset, which lacked enough variations in phrasing. The team has started retraining the model to improve accuracy."
    },
    {
      id: 7,
      title: "Faulty Sentiment Analysis on Social Media",
      description: "Sentiment analysis AI misclassified neutral posts as negative...",
      severity: "Low",
      reported_at: "2025-03-29T10:00:00Z",
      long_description: "The sentiment analysis tool used by a social media monitoring company mistakenly classified neutral posts as negative. This was caused by an error in the natural language processing model that had trouble understanding context. The issue is being addressed by improving the model's ability to detect tone."
    },
    {
      id: 8,
      title: "Overestimated Delivery Times in AI-Powered Logistics",
      description: "AI system inaccurately predicted delivery times...",
      severity: "Low",
      reported_at: "2025-03-30T12:15:00Z",
      long_description: "A logistics company using AI for route optimization encountered an issue where delivery times were consistently overestimated, resulting in customer dissatisfaction. This was due to the AI model failing to account for traffic patterns and weather conditions in real time. A fix is being implemented to improve accuracy."
    },
    {
      id: 9,
      title: "AI-Powered Financial Predictions Incorrectly Analyzed Market Trends",
      description: "Financial forecasting tool misinterpreted market trends...",
      severity: "Low",
      reported_at: "2025-04-01T08:45:00Z",
      long_description: "An AI-powered financial prediction tool incorrectly analyzed market trends and offered incorrect stock recommendations to users. The issue stemmed from outdated training data that didn’t account for recent market changes. The developers are updating the model with the latest market data."
    },
    {
      id: 10,
      title: "Chatbot Failure to Address Specific Customer Issues",
      description: "Chatbot failed to address specific technical support queries...",
      severity: "Low",
      reported_at: "2025-04-03T14:00:00Z",
      long_description: "A customer service chatbot used by a tech company failed to address specific technical support queries, providing generic responses instead of useful troubleshooting steps. This was due to a lack of specialized knowledge in the model. A knowledge base update is scheduled to improve response accuracy."
    },
    {
      id: 11,
      title: "Voice Recognition Error in Smart Home Assistant",
      description: "Smart home assistant failed to recognize certain voice commands...",
      severity: "Low",
      reported_at: "2025-04-05T10:30:00Z",
      long_description: "The voice recognition feature of a popular smart home assistant device failed to recognize certain voice commands, particularly those with accents. This issue was caused by insufficient data for diverse accents during the training phase. A new update is being developed to improve recognition accuracy."
    },
    {
      id: 12,
      title: "AI-Powered Personalization Issue in E-commerce",
      description: "Personalization algorithm suggested irrelevant products...",
      severity: "Low",
      reported_at: "2025-04-06T17:00:00Z",
      long_description: "The AI-powered recommendation system in an e-commerce platform started suggesting irrelevant products to users, based on incorrect analysis of their browsing history. The error was traced back to the algorithm misinterpreting user behavior due to a recent update. The issue will be resolved in an upcoming fix."
    },
    {
      id: 13,
      title: "Algorithmic Bias in AI-Powered Search Engine",
      description: "Search engine results showed biased results for certain queries...",
      severity: "Low",
      reported_at: "2025-04-07T11:20:00Z",
      long_description: "The AI-powered search engine began showing biased results for certain types of queries, favoring certain websites over others based on algorithmic bias. This issue was caused by biased training data that the search engine used. The team is working on diversifying the data to improve the search results."
    },
    {
      id: 14,
      title: "Unnecessary Data Collection by AI-Enabled App",
      description: "App collected more data than necessary for its functions...",
      severity: "Low",
      reported_at: "2025-04-10T12:00:00Z",
      long_description: "An AI-enabled fitness app was found to collect unnecessary personal data, including location and health information, without clear user consent. The issue was a result of poorly defined privacy settings in the app’s terms of service. The app developers have committed to reducing data collection and enhancing privacy controls."
    },
    {
      id: 15,
      title: "Glitch in AI-Powered Game Recommendation Engine",
      description: "Game recommendation engine suggested irrelevant games...",
      severity: "Low",
      reported_at: "2025-04-12T13:30:00Z",
      long_description: "An AI-powered game recommendation engine suggested irrelevant or inappropriate games to players based on their previous selections. The issue was traced to a bug in the recommendation algorithm, which failed to consider the age ratings and content preferences of users. A patch is being developed to fix the issue."
    },
    {
        id: 16,
        title: "Biased Recommendation Algorithm",
        description: "Algorithm consistently favored certain demographics...",
        severity: "Low",
        reported_at: "2025-03-15T10:00:00Z",
        long_description: "The recommendation algorithm used by the platform showed a strong bias towards certain demographics, such as age and location, resulting in unfair content suggestions. This issue was traced back to the dataset used for training, which was not diverse enough and lacked representation from various groups. The team has started working on a fix by diversifying the dataset and testing it against a broader range of users."
      },
      {
        id: 17,
        title: "Inaccurate Data Reporting in Health App",
        description: "Health app recorded incorrect steps and activity data...",
        severity: "Low",
        reported_at: "2025-03-20T11:00:00Z",
        long_description: "A popular health app began showing incorrect step counts and activity data after a recent update. Users reported discrepancies in their daily steps and calorie calculations. A bug in the algorithm caused certain movements to not be recorded accurately. The company has confirmed that the issue will be fixed in the next update."
      },
      {
        id: 18,
        title: "Delayed AI Response in Virtual Assistant",
        description: "AI virtual assistant took longer than expected to respond...",
        severity: "Low",
        reported_at: "2025-03-22T14:30:00Z",
        long_description: "A virtual assistant app experienced delays in processing certain queries, resulting in a frustrating user experience. The delay was caused by an increase in server load and high query volume. The issue has been temporarily resolved by adding more server capacity, with a permanent fix in progress."
      },
      {
        id: 19,
        title: "Incorrect Facial Recognition in Security System",
        description: "Facial recognition system failed to recognize authorized users...",
        severity: "Low",
        reported_at: "2025-03-25T09:00:00Z",
        long_description: "A facial recognition-based security system began incorrectly flagging authorized personnel as unrecognized. The issue was traced to poor lighting conditions and the angle of the camera in certain environments. The company is working on an update to improve detection accuracy in diverse conditions."
      },
      {
        id: 20,
        title: "AI-Powered Content Censorship",
        description: "Content censorship algorithm flagged harmless posts as inappropriate...",
        severity: "Low",
        reported_at: "2025-04-10T15:00:00Z",
        long_description: "An AI-powered content censorship tool mistakenly flagged posts related to freedom of speech and education as harmful content. The algorithm was overly aggressive in identifying 'dangerous' words and ideas, resulting in the removal of harmless material. The moderation team is adjusting the model to improve content filtering accuracy."
      },
      {
        id: 21,
        title: "Overprediction of Customer Churn",
        description: "AI tool overpredicted customer churn rates, affecting business decisions...",
        severity: "Medium",
        reported_at: "2025-04-12T11:45:00Z",
        long_description: "An AI model used by a subscription-based service inaccurately predicted high churn rates, leading to unnecessary offers and retention efforts. The issue stemmed from an outdated dataset that did not account for recent user behavior trends. The data team is working on retraining the model with more recent and relevant data."
      },
      {
        id: 22,
        title: "Unintended Bias in Loan Approval Algorithm",
        description: "Loan approval algorithm unintentionally favored certain demographics...",
        severity: "Medium",
        reported_at: "2025-04-14T13:00:00Z",
        long_description: "A loan approval algorithm showed bias towards certain income levels and geographic locations, leading to unfair denial rates. The algorithm was trained on historical data that contained biased patterns. The company is working on a fix to remove the bias and ensure more equitable loan approval processes."
      },
      {
        id: 23,
        title: "Recommendation Algorithm Misjudged User Preferences",
        description: "AI recommendation engine suggested irrelevant products...",
        severity: "Medium",
        reported_at: "2025-04-15T14:30:00Z",
        long_description: "A popular e-commerce platform's AI-powered recommendation engine incorrectly suggested products that users were not interested in, resulting in lower conversion rates. The issue was traced to improper data mapping and an error in the personalization algorithm. The development team is making adjustments to improve product relevance."
      },
      {
        id: 24,
        title: "Automated Email Campaign Sent to Wrong Audience",
        description: "AI-based email marketing campaign sent to irrelevant audience segments...",
        severity: "Medium",
        reported_at: "2025-04-16T09:15:00Z",
        long_description: "An automated email campaign based on user behavior was mistakenly sent to an irrelevant segment of users. The AI model misinterpreted the data and categorized users incorrectly, leading to ineffective campaigns. The marketing team is reviewing the algorithm to ensure proper segmentation and targeting in the future."
      },
      {
        id: 25,
        title: "Flawed AI Pricing Model in Online Store",
        description: "AI pricing model set incorrect prices for certain products...",
        severity: "Medium",
        reported_at: "2025-04-18T16:00:00Z",
        long_description: "An AI-powered pricing model in an online store caused some products to be priced too high or too low due to faulty calculations. This issue resulted in financial losses and customer dissatisfaction. The pricing model is being adjusted and optimized to improve price accuracy and fairness."
      },
    {
      id: 26,
      title: "Biased Recommendation Algorithm",
      description: "Algorithm consistently favored certain demographics...",
      severity: "Medium",
      reported_at: "2025-03-15T10:00:00Z",
      long_description: "The recommendation algorithm used by the platform showed a strong bias towards certain demographics, such as age and location, resulting in unfair content suggestions. This issue was traced back to the dataset used for training, which was not diverse enough and lacked representation from various groups. The team has started working on a fix by diversifying the dataset and testing it against a broader range of users."
    },
    {
      id: 27,
      title: "Inaccurate Data Reporting in Health App",
      description: "Health app recorded incorrect steps and activity data...",
      severity: "Medium",
      reported_at: "2025-03-20T11:00:00Z",
      long_description: "A popular health app began showing incorrect step counts and activity data after a recent update. Users reported discrepancies in their daily steps and calorie calculations. A bug in the algorithm caused certain movements to not be recorded accurately. The company has confirmed that the issue will be fixed in the next update."
    },
    {
      id: 28,
      title: "Delayed AI Response in Virtual Assistant",
      description: "AI virtual assistant took longer than expected to respond...",
      severity: "Medium",
      reported_at: "2025-03-22T14:30:00Z",
      long_description: "A virtual assistant app experienced delays in processing certain queries, resulting in a frustrating user experience. The delay was caused by an increase in server load and high query volume. The issue has been temporarily resolved by adding more server capacity, with a permanent fix in progress."
    },
    {
      id: 29,
      title: "Incorrect Facial Recognition in Security System",
      description: "Facial recognition system failed to recognize authorized users...",
      severity: "medium",
      reported_at: "2025-03-25T09:00:00Z",
      long_description: "A facial recognition-based security system began incorrectly flagging authorized personnel as unrecognized. The issue was traced to poor lighting conditions and the angle of the camera in certain environments. The company is working on an update to improve detection accuracy in diverse conditions."
    },
    {
      id: 30,
      title: "Critical Security Vulnerability in AI-Powered System",
      description: "A critical security flaw was discovered in AI-powered systems...",
      severity: "Medium",
      reported_at: "2025-04-10T17:30:00Z",
      long_description: "A vulnerability in an AI-powered system allowed unauthorized users to bypass security protocols and access sensitive data. The flaw was traced to a loophole in the model's training data, which failed to account for specific attack vectors. The company has issued an urgent patch and is monitoring the system for potential exploits."
    },
    {
      id: 31,
      title: "AI Model Generates Inaccurate Financial Predictions",
      description: "AI-generated financial predictions caused significant market impact...",
      severity: "High",
      reported_at: "2025-04-12T18:00:00Z",
      long_description: "An AI model used to predict stock market trends produced highly inaccurate predictions, causing significant financial losses for investors. The model's data inputs were flawed, and the algorithm failed to adapt to real-time market changes. A full audit of the model and its data sources is underway."
    },
    {
      id: 32,
      title: "Automated AI System Discriminated Against Minorities in Hiring",
      description: "The AI hiring system showed biased hiring patterns...",
      severity: "High",
      reported_at: "2025-04-14T16:30:00Z",
      long_description: "A major tech company's AI-based hiring system was found to have a significant bias against minority groups, particularly women and ethnic minorities, when recommending candidates. This issue was traced back to a biased historical dataset used to train the model. The company has suspended the system and is conducting a full review to address the issue."
    },
    {
      id: 33,
      title: "AI-Driven Healthcare Tool Misdiagnosed Critical Conditions",
      description: "AI healthcare tool misdiagnosed several critical illnesses...",
      severity: "High",
      reported_at: "2025-04-16T11:00:00Z",
      long_description: "An AI-driven healthcare tool was found to misdiagnose patients with critical conditions such as cancer and heart disease, leading to delayed treatments and adverse outcomes. The tool was trained on outdated medical data, leading to inaccuracies in diagnosis. The healthcare provider has pulled the tool from use while investigating the problem."
    },
    {
      id: 34,
      title: "Data Privacy Breach via AI System",
      description: "AI system inadvertently exposed private user data...",
      severity: "High",
      reported_at: "2025-04-17T19:30:00Z",
      long_description: "An AI system used by a popular social media platform was discovered to have inadvertently exposed private user data, including personal identifiers and location information. This breach was caused by a flaw in the data processing model, which allowed unauthorized access to sensitive information. The platform has notified affected users and is working on enhancing security measures."
    },
    {
      id: 35,
      title: "AI Algorithm Caused Widespread Power Grid Failure",
      description: "An AI system controlling the power grid failed during peak demand...",
      severity: "High",
      reported_at: "2025-04-20T08:00:00Z",
      long_description: "A major power grid operated by AI-controlled systems experienced a widespread failure during peak demand hours, leaving millions without power. The failure was caused by a misprediction in the load balancing algorithm, which failed to account for sudden fluctuations in demand. The utility company is working to restore power and ensure such failures do not occur again."
    }
  ];
  