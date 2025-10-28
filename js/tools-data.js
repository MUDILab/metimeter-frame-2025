// URL costanti
const URL_DATA_RELIABILITY = "https://datareliability-metimeter.eu.pythonanywhere.com/";
const URL_DATA_SIMILARITY = "https://datasimilarity-metimeter.eu.pythonanywhere.com/";
const URL_MODEL_CALIBRATION = "https://modelcalib-metimeter.eu.pythonanywhere.com/";
const URL_MODEL_UTILITY = "https://modelutility-metimeter.eu.pythonanywhere.com/";
const URL_MODEL_ROBUSTNESS = "https://modelrobustness-metimeter.eu.pythonanywhere.com/";
const URL_HUMAN_INTERACTION = "https://haiiassessment-metimeter.eu.pythonanywhere.com/";

// le personalizzazioni per i tool a seconda del campo. titolo-descrizione-link al tool-colore pallino-icona pallino
window.toolDataByField = window.toolDataByField || {
  generic: [
    {
      title: "Data Reliability",
      description: "Calculates how much different raters agree, adjusting for chance and giving more weight to reliable ratings.",
      url: URL_DATA_RELIABILITY,
      dotColor: "bg-blue-300",
      dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/dataReliability.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"
    },
    {
      title: "Data Similarity",
      description: "To measure and visualize how similar two datasets are using the Ψ (psi) index.",
      url: URL_DATA_SIMILARITY,
      dotColor: "bg-blue-300",
      dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/dataSimilarity.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"
    },
    {
      title: "Model Calibration",
      description: "To assess and visualize the calibration of a machine learning model.",
      url: URL_MODEL_CALIBRATION,
      dotColor: "bg-blue-300",
      dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/modelCalibration.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"
    },
    {
      title: "Model Utility",
      description: "Tool to assess how useful a classifier is, based on its performance and the value of its predictions.",
      url: URL_MODEL_UTILITY,
      dotColor: "bg-blue-300",
      dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/modelUtility.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"
    },
    {
      title: "Model Robustness",
      description: "Generates the Potential Robustness Diagram (PRD) and the External Performance Diagram (EPD).",
      url: URL_MODEL_ROBUSTNESS,
      dotColor: "bg-blue-300",
      dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/modelRobustness.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"
    },
    {
      title: "Human Interaction",
      description: "Evaluates Human-AI collaboration in yes/no tasks using benefit and reliance diagrams.",
      url: URL_HUMAN_INTERACTION,
      dotColor: "bg-blue-300",
      dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/humanInteraction.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"
    }
  ],
  medical: [
    {
      title: "Model Calibration",
      description: "Check whether predicted risks match observed outcomes (calibration).",
      url: URL_MODEL_CALIBRATION,
      dotColor: "bg-red-300",
      dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/modelCalibration.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"
    },
    {
      title: "Model Utility",
      description: "Estimate how much the model actually supports clinical decision-making.",
      url: URL_MODEL_UTILITY,
      dotColor: "bg-red-300",
      dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/modelUtility.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"
    },
    {
      title: "Data Reliability",
      description: "Assess the reliability of clinical labels (e.g., inter-rater agreement/quality).",
      url: URL_DATA_RELIABILITY,
      dotColor: "bg-red-300",
      dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/dataReliability.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"
    },
    {
      title: "Model Robustness",
      description: "Test performance across shifts: new cohorts, sites, or perturbed data.",
      url: URL_MODEL_ROBUSTNESS,
      dotColor: "bg-red-300",
      dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/modelRobustness.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"
    },
    {
      title: "Data Similarity",
      description: "Compare cohorts/datasets or find look-alike patients to judge applicability.",
      url: URL_DATA_SIMILARITY,
      dotColor: "bg-red-300",
      dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/dataSimilarity.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"
    },
    {
      title: "Human Interaction",
      description: "Monitor over-/under-trust and how clinicians use the DSS in practice.",
      url: URL_HUMAN_INTERACTION,
      dotColor: "bg-red-300",
      dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/humanInteraction.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"
    }
  ],
  financial: [
    {
      title: "Model Calibration",
      description: "Check if a model is properly calibrated to assess fraud risk and default probability.",
      url: URL_MODEL_CALIBRATION,
      dotColor: "bg-green-300",
      dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/modelCalibration.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"
    },
    {
      title: "Model Robustness",
      description: "Test how models perform under financial stress scenarios and market shifts.",
      url: URL_MODEL_ROBUSTNESS,
      dotColor: "bg-green-300",
      dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/modelRobustness.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"
    },
    {
      title: "Data Reliability",
      description: "Verify the accuracy and consistency of financial data from multiple sources.",
      url: URL_DATA_RELIABILITY,
      dotColor: "bg-green-300",
      dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/dataReliability.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"
    },
    {
      title: "Data Similarity",
      description: "Compare client or portfolio profiles to detect fraud or market compatibility.",
      url: URL_DATA_SIMILARITY,
      dotColor: "bg-green-300",
      dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/dataSimilarity.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"
    },
    {
      title: "Model Utility",
      description: "Evaluate how effectively the model supports investment and risk management decisions.",
      url: URL_MODEL_UTILITY,
      dotColor: "bg-green-300",
      dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/modelUtility.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"
    },
    {
      title: "Human Interaction",
      description: "Monitor how much analysts and decision-makers rely on or ignore AI recommendations.",
      url: URL_HUMAN_INTERACTION,
      dotColor: "bg-green-300",
      dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/humanInteraction.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"
    }
  ],
  management: [
    {
      title: "Model Utility",
      description: "Assess whether the model truly supports hiring, budget planning, and strategic decisions.",
      url: URL_MODEL_UTILITY,
      dotColor: "bg-yellow-300",
      dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/modelUtility.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"
    },
    {
      title: "Human Interaction",
      description: "Check if managers are over-trusting or ignoring AI advice, leading to inconsiderate decisions.",
      url: URL_HUMAN_INTERACTION,
      dotColor: "bg-yellow-300",
      dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/humanInteraction.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"
    },
    {
      title: "Data Reliability",
      description: "Compare how different teams use the same data to ensure trustworthy judgments.",
      url: URL_DATA_RELIABILITY,
      dotColor: "bg-yellow-300",
      dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/dataReliability.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"
    },
    {
      title: "Data Similarity",
      description: "Benchmark departments or teams by comparing performance with objective data.",
      url: URL_DATA_SIMILARITY,
      dotColor: "bg-yellow-300",
      dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/dataSimilarity.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"
    },
    {
      title: "Model Robustness",
      description: "Ensure the decision-support model remains reliable under changing business or market conditions.",
      url: URL_MODEL_ROBUSTNESS,
      dotColor: "bg-yellow-300",
      dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/modelRobustness.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"
    },
    {
      title: "Model Calibration",
      description: "Verify whether the model is capable of fine-tuned forecasts aligned with real outcomes.",
      url: URL_MODEL_CALIBRATION,
      dotColor: "bg-yellow-300",
      dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/modelCalibration.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"
    }
  ],
  datascience: [
    {
      title: "Data Reliability",
      description: "Detect errors, inconsistencies, or noise in datasets before training or validation.",
      url: URL_DATA_RELIABILITY,
      dotColor: "bg-purple-300",
      dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/dataReliability.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"
    },
    {
      title: "Data Similarity",
      description: "Check whether similar data points receive consistent predictions, ensuring fairness and stability.",
      url: URL_DATA_SIMILARITY,
      dotColor: "bg-purple-300",
      dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/dataSimilarity.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"
    },
    {
      title: "Model Calibration",
      description: "Refine probabilistic outputs so that predicted risks match observed outcome distributions.",
      url: URL_MODEL_CALIBRATION,
      dotColor: "bg-purple-300",
      dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/modelCalibration.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"
    },
    {
      title: "Model Robustness",
      description: "Evaluate performance across datasets and stress scenarios to prevent overfitting.",
      url: URL_MODEL_ROBUSTNESS,
      dotColor: "bg-purple-300",
      dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/modelRobustness.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"
    },
    {
      title: "Model Utility",
      description: "Measure the real-world value of a model by combining accuracy with business or application impact.",
      url: URL_MODEL_UTILITY,
      dotColor: "bg-purple-300",
      dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/modelUtility.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"
    },
    {
      title: "Human Interaction",
      description: "Analyze how end-users interpret outputs to detect over-reliance or distrust, informing communication strategies.",
      url: URL_HUMAN_INTERACTION,
      dotColor: "bg-purple-300",
      dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/humanInteraction.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"
    }
  ],
  uxdesigner: [
    {
      title: "Human Interaction",
      description: "Evaluate how UI design shapes user trust in AI and impacts decision-making quality.",
      url: URL_HUMAN_INTERACTION,
      dotColor: "bg-cyan-300",
      dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/humanInteraction.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"
    },
    {
      title: "Model Utility",
      description: "Assess whether AI outputs are understandable and contribute to better decisions and user experience.",
      url: URL_MODEL_UTILITY,
      dotColor: "bg-cyan-300",
      dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/modelUtility.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"
    },
    {
      title: "Data Similarity",
      description: "Verify that users with similar behaviors receive consistent outputs across profiles.",
      url: URL_DATA_SIMILARITY,
      dotColor: "bg-cyan-300",
      dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/dataSimilarity.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"
    },
    {
      title: "Model Calibration",
      description: "Check how well model confidence aligns with user expectations and actual outcomes.",
      url: URL_MODEL_CALIBRATION,
      dotColor: "bg-cyan-300",
      dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/modelCalibration.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"
    },
    {
      title: "Model Robustness",
      description: "Test whether model outputs remain stable when input conditions or UI contexts vary.",
      url: URL_MODEL_ROBUSTNESS,
      dotColor: "bg-cyan-300",
      dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/modelRobustness.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"
    },
    {
      title: "Data Reliability",
      description: "Ensure that user- or system-generated data remains consistent, accurate, and reliable.",
      url: URL_DATA_RELIABILITY,
      dotColor: "bg-cyan-300",
      dotIcon: "<div class=\"w-8 h-8\"><object data=\"src/icons/tools/dataReliability.svg\" type=\"image/svg+xml\" class=\"w-full h-full p-0.5 pointer-events-none\"></object></div>"
    }
  ]
};
