export interface Publication {
  title: string;
  authors: string;
  venue: string;
  venueAcronym?: string;
  year: number;
  abstract?: string;
  bibtex?: string;
  pdfLink?: string;
  doiLink?: string;
  codeLink?: string;
  thumbnailUrl?: string;
}


export const publicationsData: Publication[] = [
  {
    title: "Induct-Learn: Short Phrase Prompting with Instruction Induction",
    authors: "Po-Chun Chen, Sheng-Lun Wei, Hen-Hsen Huang, Hsin-Hsi Chen",
    venue: "Empirical Methods in Natural Language Processing (EMNLP)",
    venueAcronym: "EMNLP 2024",
    year: 2024,
    abstract: "Large Language Models (LLMs) have demonstrated capability in “instruction induction,” generating instructions from demonstrations (input-output pairs). However, existing methods often rely on large datasets or numerous examples, which is impractical and costly in real-world scenarios. In this work, we propose a low-cost, task-level framework called Induct-Learn. It induces pseudo instructions from a few demonstrations and a short phrase, adding a CoT process into existing demonstrations. When encountering new problems, the learned pseudo instructions and demonstrations with the pseudo CoT process can be combined into a prompt to guide the LLM’s problem-solving process. We validate our approach on the BBH-Induct and Evals-Induct datasets, and the results show that the Induct-Learn framework outperforms state-of-the-art methods. We also exhibit cross-model adaptability and achieve superior performance at a lower cost compared to existing methods.",
    bibtex: `@inproceedings{chen-etal-2024-induct,
    title = "Induct-Learn: Short Phrase Prompting with Instruction Induction",
    author = "Chen, Po-Chun  and Wei, Sheng-Lun  and Huang, Hen-Hsen  and Chen, Hsin-Hsi",
    booktitle = "Proceedings of the 2024 Conference on Empirical Methods in Natural Language Processing",
    year = "2024"
}`,
    pdfLink: "https://aclanthology.org/2024.emnlp-main.297",
    // thumbnailUrl: "https://picsum.photos/seed/largelang/128",
  },
  {
    title: "Unveiling Selection Biases: Exploring Order and Token Sensitivity in Large Language Models",
    authors: "Sheng-Lun Wei, Cheng-Kuang Wu, Hen-Hsen Huang, Hsin-Hsi Chen",
    venue: "Findings of the Association for Computational Linguistics (ACL)",
    venueAcronym: "ACL 2024",
    year: 2024,
    abstract: "In this paper, we investigate the phenomena of “selection biases” in Large Language Models (LLMs), focusing on problems where models are tasked with choosing the optimal option from an ordered sequence. We delve into biases related to option order and token usage, which significantly impact LLMs’ decision-making processes. We also quantify the impact of these biases through an extensive empirical analysis across multiple models and tasks. Furthermore, we propose mitigation strategies to enhance model performance. Our key contributions are threefold: 1) Precisely quantifying the influence of option order and token on LLMs, 2) Developing strategies to mitigate the impact of token and order sensitivity to enhance robustness, and 3) Offering a detailed analysis of sensitivity across models and tasks, which informs the creation of more stable and reliable LLM applications for selection problems.",
    bibtex: `@inproceedings{wei-etal-2024-unveiling,
    title = "Unveiling Selection Biases: Exploring Order and Token Sensitivity in Large Language Models",
    author = "Wei, Sheng-Lun  and Wu, Cheng-Kuang  and Huang, Hen-Hsen  and Chen, Hsin-Hsi",
    booktitle = "Findings of the Association for Computational Linguistics: ACL 2024",
    year = "2024",
}`,
    pdfLink: "https://aclanthology.org/2024.findings-acl.333",
    codeLink: "https://github.com/Kevinweisl/unveiling-selection-biases",
    // thumbnailUrl: "https://picsum.photos/seed/anotherpaper/128",
  },
  {
    title: "Disease Classification on Admission and on Discharge with Residual CNN-Transformer",
    authors: "Yu-Ting Lin*, Sheng-Lun Wei*, Hen-Hsen Huang, Hui-Chih Wang, Hsin-Hsi Chen",
    venue: "International Conference on Web Intelligence and Intelligent Agent Technology",
    venueAcronym: "WI-IAT 2021",
    year: 2021,
    abstract: "Clinical professionals perform disease classification on both admission and discharge of a patient, but previous works ignore the former. Physicians make a preliminary diagnosis based solely on current observations such as chief complaint and present illness at the admission time. Only limited information is available to decide which examination or treatment to make afterward. On discharge, complete medical records during hospitalization are available for deciding the International Classification of Diseases (ICD) code. Either occasion should be covered in a comprehensive disease classification system to meet the reality. Besides, from the technical perspective, previous state-of-the-art models employ the per-label attention mechanism to aggregate the contextualized vectors, less capable of handling the multi-label classification task up to 8,921 codes. In this paper, we conduct a comprehensive study on disease classification on both the admission and the discharge of patients. Furthermore, we propose a novel multi-head label decoding method that can replace the per-label attention module adopted by previous works. Experimental results show that our model achieves state-of-the-art performance in both admission and discharge scenarios.",
    bibtex: `@inproceedings{10.1145/3486622.3493946,
    title = {Disease Classification on Admission and on Discharge with Residual CNN-Transformer},
    author = {Lin, Yu-Ting and Wei, Sheng-Lun and Huang, Hen-Hsen and Wang, Hui-Chih and Chen, Hsin-Hsi},
    booktitle = {IEEE/WIC/ACM International Conference on Web Intelligence and Intelligent Agent Technology},
    year = {2021}
}`,
    pdfLink: "https://dl.acm.org/doi/10.1145/3486622.3493946",
    // thumbnailUrl: "https://picsum.photos/seed/anotherpaper/128",
  },
  {
    title: "NL2KB: Resolving Vocabulary Gap between Natural Language and Knowledge Base in Knowledge Base Construction and Retrieval",
    authors: "Sheng-Lun Wei, Yen-Pin Chiu, Hen-Hsen Huang, Hsin-Hsi Chen",
    venue: "International Conference on Computational Linguistics: System Demonstrations",
    venueAcronym: "COLING 2016",
    year: 2016,
    abstract: "Words to express relations in natural language (NL) statements may be different from those to represent properties in knowledge bases (KB). The vocabulary gap becomes barriers for knowledge base construction and retrieval. With the demo system called NL2KB in this paper, users can browse which properties in KB side may be mapped to for a given relational pattern in NL side. Besides, they can retrieve the sets of relational patterns in NL side for a given property in KB side. We describe how the mapping is established in detail. Although the mined patterns are used for Chinese knowledge base applications, the methodology can be extended to other languages.",
    bibtex: `@inproceedings{wei-etal-2016-nl2kb,
    title = "{NL}2{KB}: Resolving Vocabulary Gap between Natural Language and Knowledge Base in Knowledge Base Construction and Retrieval",
    author = "Wei, Sheng-Lun  and Chiu, Yen-Pin  and Huang, Hen-Hsen  and Chen, Hsin-Hsi",
    booktitle = "Proceedings of {COLING} 2016, the 26th International Conference on Computational Linguistics: System Demonstrations",
    year={2016}
}`,
    pdfLink: "https://aclanthology.org/C16-2059",
    // thumbnailUrl: "https://picsum.photos/seed/anotherpaper/128",
  },
  {
    title: "NTUNLP approaches to recognizing and disambiguating entities in long and short text at the ERD challenge 2014",
    authors: "Yen-Pin Chiu, Yong-Siang Shih, Yang-Yin Lee, Chih-Chieh Shao, Ming-Lun Cai, Sheng-Lun Wei, Hsin-Hsi Chen",
    venue: "International ACM SIGIR Conference Workshop on Entity recognition & disambiguation",
    venueAcronym: "SIGIR 2014",
    year: 2014,
    abstract: "This paper presents the NTUNLP systems in the long track and the short track of the Entity Recognition and Disambiguation Challenge 2014. We first create a dictionary that contains the possible surface forms of Freebase Ids, then scan the given text from left to right with the longest match strategy to detect the mentions, and eliminate the unwanted surface forms based on a stop word list. Methods to link to the most relevant entities and select the best candidate are proposed for these two tracks, respectively. The outside resources such as DBpedia Spotlight and TAGME are integrated to our basic NTUNLP systems. Various experimental setups are presented and discussed with the development set. In the formal run, one NTUNLP system wins the first prize in the short track and another NTUNLP system gets the fourth place in the long track.",
    bibtex: `@inproceedings{10.1145/2633211.2634363,
    title = {NTUNLP approaches to recognizing and disambiguating entities in long and short text at the ERD challenge 2014},
    author = {Chiu, Yen-Pin and Shih, Yong-Siang and Lee, Yang-Yin and Shao, Chih-Chieh and Cai, Ming-Lun and Wei, Sheng-Lun and Chen, Hsin-Hsi},
    booktitle = {Proceedings of the First International Workshop on Entity Recognition \& Disambiguation},
    year = {2014}
}`,
    pdfLink: "https://dl.acm.org/doi/10.1145/2633211.2634363",
    // thumbnailUrl: "https://picsum.photos/seed/anotherpaper/128",
  }
  // Add more publications here
];
