// le personalizzazioni per i tool a seconda del campo. titolo-descrizione-link al tool-colore pallino-icona pallino
 window.toolDataByField = window.toolDataByField || {
    generic: [
      {
        title: "Data Reliability",
        description: "Calculates how much different raters agree, adjusting for chance and giving more weight to reliable ratings.",
        url: "https://datareliability2.eu.pythonanywhere.com/",
        dotColor: "bg-blue-300",
        dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/dataReliability.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"
      },
      {
        title: "Data Similarity",
        description: "To measure and visualize how similar two datasets are using the Ψ (psi) index.",
        url: "https://datasimilarity2.eu.pythonanywhere.com/",
        dotColor: "bg-blue-300",
        dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/dataSimilarity.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"
      },
      {
        title: "Model Calibration",
        description: "To assess and visualize the calibration of a machine learning model.",
        url: "https://modelcalib2.eu.pythonanywhere.com/",
        dotColor: "bg-blue-300",
        dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/modelCalibration.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"
      },
      {
        title: "Model Utility",
        description: "Tool to assess how useful a classifier is, based on its performance and the value of its predictions.",
        url: "https://modelutility2.eu.pythonanywhere.com/",
        dotColor: "bg-blue-300",
        dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/modelUtility.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"
      },
      {
        title: "Model Robustness",
        description: "Generates the Potential Robustness Diagram (PRD) and the External Performance Diagram (EPD).",
        url: "https://modelrobustness2.eu.pythonanywhere.com/",
        dotColor: "bg-blue-300",
        dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/modelRobustness.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"
      },
      {
        title: "Human Interaction",
        description: "Evaluates Human-AI collaboration in yes/no tasks using benefit and reliance diagrams.",
        url: "https://haiiassessment2.eu.pythonanywhere.com/",
        dotColor: "bg-blue-300",
        dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/humanInteraction.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"
      }
    ],
    medical: [
      {
        title: "Data Reliability",
        description: "Make sure how accurate the same prognoses from multiple doctors are.",
        url: "https://datareliability2.eu.pythonanywhere.com/",
        dotColor: "bg-red-300",
        dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/dataReliability.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"

      },
      {
        title: "Model Calibration",
        description: "See if a model is properly calibrated for any clinical event estimates.",
        url: "https://modelcalib2.eu.pythonanywhere.com/",
        dotColor: "bg-red-300",
        dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/modelCalibration.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"

      },
      {
        title: "Data Similarity",
        description: "Check if two patients have similar profiles to suggest treatments based on a previous case.",
        url: "https://datasimilarity2.eu.pythonanywhere.com/",
        dotColor: "bg-red-300",
        dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/dataSimilarity.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"

      },
      {
        title: "Model Utility",
        description: "Evaluate how effectly a model supports real medical decision-making.",
        url: "https://modelutility2.eu.pythonanywhere.com/",
        dotColor: "bg-red-300",
        dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/modelUtility.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"
      },
      {
        title: "Model Robustness",
        description: "Test how a model performs with its training medical data or an indipendent dataset.",
        url: "https://modelrobustness2.eu.pythonanywhere.com/",
        dotColor: "bg-red-300",
        dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/modelRobustness.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"
      },
      {
        title: "Human Interaction",
        description: "See if doctors are trusting AI decisions too much, or ignoring them when they shouldn't.",
        url: "https://haiiassessment2.eu.pythonanywhere.com/",
        dotColor: "bg-red-300",
        dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/humanInteraction.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"

      }
    ],
    financial: [
      {
        title: "Model Calibration",
        description: "See if a model is properly calibrated to prevent fraud and default probability.",
        url: "https://modelcalib2.eu.pythonanywhere.com/",
        dotColor: "bg-green-300",
        dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/modelCalibration.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"
      },
      {
        title: "Data Reliability",
        description: "Check if financial data forecasting from multiple sources is accurate.",
        url: "https://datareliability2.eu.pythonanywhere.com/",
        dotColor: "bg-green-300",
        dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/dataReliability.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"
      },
      {
        title: "Model Utility",
        description: "Assess how a model helps in real decisions such as investments or risk management.",
        url: "https://modelutility2.eu.pythonanywhere.com/",
        dotColor: "bg-green-300",
        dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/modelUtility.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"
      },
      {
        title: "Data Similarity",
        description: "Compare two clients profiles in order to detect fraud or marketing compatibility.",
        url: "https://datasimilarity2.eu.pythonanywhere.com/",
        dotColor: "bg-green-300",
        dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/dataSimilarity.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"
      },
      {
        title: "Model Robustness",
        description: "Test how a model performs under financial stress scenarios.",
        url: "https://datasimilarity2.eu.pythonanywhere.com/",
        dotColor: "bg-green-300",
        dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/modelRobustness.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"
      },
      {
        title: "Human Interaction",
        description: "See if analysts and decision-makers are trusting AI too much or ignoring it.",
        url: "https://haiiassessment2.eu.pythonanywhere.com/",
        dotColor: "bg-green-300",
        dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/humanInteraction.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"

      }
      
    ],
    management: [
      {
        title: "Model Utility",
        description: "Recognize if a model is actually helping with hiring, budget management or planning.",
        url: "https://modelutility2.eu.pythonanywhere.com/",
        dotColor: "bg-yellow-300",
        dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/modelUtility.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"
      },
      {
        title: "Human Interaction",
        description: "See if managers are making reckless decisions caused by following or not following AI suggestions.",
        url: "https://haiiassessment2.eu.pythonanywhere.com/",
        dotColor: "bg-yellow-300",
        dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/humanInteraction.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"

      },
      {
        title: "Data Similarity",
        description: "Compare two departments or teams to identify high performers using objective data.",
        url: "https://datasimilarity2.eu.pythonanywhere.com/",
        dotColor: "bg-yellow-300",
        dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/dataSimilarity.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"
      },
      {
        title: "Data Reliability",
        description: "Compare teams or departements working on the same data in order to trust their judgement.",
        url: "https://datareliability2.eu.pythonanywhere.com/",
        dotColor: "bg-yellow-300",
        dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/dataReliability.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"
      },
      {
        title: "Model Calibration",
        description: "Check if a model is capable of making fine-tune forecasts.",
        url: "https://modelcalib2.eu.pythonanywhere.com/",
        dotColor: "bg-yellow-300",
        dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/modelCalibration.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"

      },
      {
        title: "Model Robustness",
        description: "Ensure your decision-support model remains reliable under changing business conditions.",
        url: "https://datasimilarity2.eu.pythonanywhere.com/",
        dotColor: "bg-yellow-300",
        dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/modelRobustness.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"
      },
    ],
    datascience: [
       {
        title: "Model Robustness",
        description: "Test model performance across datasets and prevent overfitting (caused by too much parameters).",
        url: "https://modelrobustness2.eu.pythonanywhere.com/",
        dotColor: "bg-purple-300",
        dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/modelRobustness.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"
      },
      {
        title: "Data Similarity",
        description: "Analyze whether similar data points receive similar model predictions, ensuring consistency and fairness in the model's behavior.",
        url: "https://datasimilarity2.eu.pythonanywhere.com/",
        dotColor: "bg-purple-300",
        dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/dataSimilarity.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"
      },
      {
        title: "Model Utility",
        description: "Measure the real-world value of a model in terms of accuracy and business impact.",
        url: "https://modelutility2.eu.pythonanywhere.com/",
        dotColor: "bg-purple-300",
        dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/modelUtility.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"
      },
     {
        title: "Data Reliability",
        description: "Identify errors or inconsistencies in datasets before training.",
        url: "https://datareliability2.eu.pythonanywhere.com/",
        dotColor: "bg-purple-300",
        dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/dataReliability.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"

      },
       {
        title: "Model Calibration",
        description: "Refine a model probabilistic predictions to match real outcome distributions.",
        url: "https://modelcalib2.eu.pythonanywhere.com/",
        dotColor: "bg-purple-300",
        dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/modelCalibration.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"
      },
      {
        title: "Human Interaction",
        description: "Examine how users interpret and respond to model outputs to detect over-reliance or distrust, helping adjust how results are communicated.",
        url: "https://haiiassessment2.eu.pythonanywhere.com/",
        dotColor: "bg-purple-300",
        dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/humanInteraction.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"

      }
    ],
    uxdesigner: [
      {
        title: "Human Interaction",
        description: "Evaluates how UI design shapes user trust in AI and influences decision-making quality.",
        url: "https://haiiassessment2.eu.pythonanywhere.com/",
        dotColor: "bg-cyan-300",
        dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/humanInteraction.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"

      },
      {
        title: "Model Utility",
        description: "Assesses if AI outputs are understandable and useful for better decisions and user experience.",
        url: "https://modelutility2.eu.pythonanywhere.com/",
        dotColor: "bg-cyan-300",
        dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/modelUtility.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"
      },
      {
        title: "Data Similarity",
        description: "Verifies if users with similar behavior receive consistent outputs across profiles.",
        url: "https://datasimilarity2.eu.pythonanywhere.com/",
        dotColor: "bg-cyan-300",
        dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/dataSimilarity.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"
      },
     {
        title: "Data Reliability",
        description: "Ensures that user or system-generated data is consistent, reliable, and accurate.",
        url: "https://datareliability2.eu.pythonanywhere.com/",
        dotColor: "bg-cyan-300",
        dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/dataReliability.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"

      },
       {
        title: "Model Calibration",
        description: "Measures how well model confidence aligns with user expectations and actual reliability.",
        url: "https://modelcalib2.eu.pythonanywhere.com/",
        dotColor: "bg-cyan-300",
        dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/modelCalibration.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"
      },
      {
        title: "Model Robustness",
        description: "Checks if the model gives stable outputs when input conditions change across the UI.",
        url: "https://modelrobustness2.eu.pythonanywhere.com/",
        dotColor: "bg-cyan-300",
        dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/modelRobustness.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"
      }
      ]
  };
