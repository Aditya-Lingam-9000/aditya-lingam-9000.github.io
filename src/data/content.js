// Single source of truth for all site content. Pages read from here; edit text here only.

export const profile = {
  name: 'Jyothiradithya Lingam',
  // Spelling used on the arXiv record; highlighted in author lists.
  authorAliases: ['Jyothiradithya Lingam', 'Jyothiraditya Lingam'],
  photo: 'profile.jpg',
  photoAlt: 'Portrait of Jyothiradithya Lingam',
  captionTitle: 'B.Tech Student',
  captionSubtitle: 'Artificial Intelligence and Machine Learning',
  cv: 'cv.pdf',
};

// Home hero band.
export const hero = {
  eyebrow: [''],
  // B.Tech, Artificial Intelligence & Machine Learning', 'Rajiv Gandhi University of Knowledge Technologies
  statement: '',
  // I work on computer vision, robust deep learning and medical image analysis, mostly through international research challenges.
  primary: { label: 'View research', to: '/research' },
  secondary: { label: 'Download CV', to: 'cv.pdf' },
};

// Figures shown in the stats row under the hero.
export const stats = [
  { value: '3rd', label: 'ICRA 2026 GOOSE Challenge' },
  { value: '70.08%', label: 'Composite mIoU, GOOSE-M2F' },
  { value: '4', label: 'International research challenges' },
  { value: '9.1', label: 'B.Tech CGPA' },
];

// Three highlighted items on Home. `to` is an internal route or an external URL.
export const selectedWork = [
  {
    kind: 'Publication',
    badge: 'ICRA 2026',
    badgeKind: 'robotics',
    title: 'GOOSE-M2F',
    summary: 'A long-tail-aware Mask2Former for fine-grained semantic segmentation of unstructured outdoor terrain. 3rd place, 70.08% composite mIoU.',
    to: '/research',
  },
  {
    kind: 'Research challenge',
    badge: 'MICCAI 2026',
    badgeKind: 'medical',
    title: 'Multi-organ ultrasound analysis',
    summary: 'A unified multi-branch framework for ultrasound segmentation and diagnostic classification across B-mode, CEUS and video.',
    to: '/research',
  },
  {
    kind: 'Hackathon',
    badge: 'MacBook Pro Award',
    badgeKind: 'award',
    title: 'Satyamev-Bot',
    summary: 'A multimodal AI fact-checking system, recognised among the Top 34 of 3,000+ teams at Build for Good 2026.',
    to: '/achievements',
  },
];

// Closing call to action (footer band).
export const contactCta = {
  title: 'Open to research internships and collaborations.',
  text: 'Computer vision, medical imaging and robust deep learning.',
  email: 'adityalingam9000@gmail.com',
};

// Inner page headers.
export const pages = {
  research: {
    num: '02',
    label: 'Research',
    title: 'Research',
    intro: 'Publications and benchmark challenge work in computer vision, medical image analysis and robust deep learning.',
  },
  achievements: {
    num: '03',
    label: 'Achievements',
    title: 'Achievements',
    intro: 'Placements in international research challenges and national hackathons.',
  },
  cv: {
    num: '04',
    label: 'CV',
    title: 'Curriculum Vitae',
    intro: 'The full CV as a PDF, with a summary alongside.',
  },
};

export const contacts = [
  { icon: 'location', label: 'Nuzvid, Andhra Pradesh, India' },
  { icon: 'university', label: 'Rajiv Gandhi University of Knowledge Technologies, Nuzvid (IIIT)' },
  { icon: 'email', label: 'adityalingam9000@gmail.com', href: 'mailto:adityalingam9000@gmail.com' },
  { icon: 'github', label: 'GitHub', href: 'https://github.com/Aditya-Lingam-9000' },
  { icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/aditya-lingam' },
  { icon: 'scholar', label: 'Google Scholar', href: 'https://scholar.google.com/citations?hl=en&user=WtGwXCwAAAAJ' },
  { icon: 'orcid', label: 'ORCID', href: 'https://orcid.org/0009-0000-7883-6906' },
  { icon: 'file', label: 'CV', href: 'cv.pdf' },
];

export const socials = [
  { icon: 'github', label: 'GitHub', href: 'https://github.com/Aditya-Lingam-9000' },
  { icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/aditya-lingam' },
  { icon: 'scholar', label: 'Google Scholar', href: 'https://scholar.google.com/citations?hl=en&user=WtGwXCwAAAAJ' },
  { icon: 'orcid', label: 'ORCID', href: 'https://orcid.org/0009-0000-7883-6906' },
  { icon: 'email', label: 'Email', href: 'mailto:adityalingam9000@gmail.com' },
];

// Bio paragraphs. Inline segments: plain strings, { b: 'bold text' } or { text, href }.
export const bio = [
  [
    "Hello, I'm Jyothiradithya Lingam, a second-year B.Tech student in Artificial Intelligence and Machine Learning at ",
    { text: 'Rajiv Gandhi University of Knowledge Technologies, Nuzvid', href: 'https://www.rguktn.ac.in/' },
    ', where I hold a CGPA of 9.1. My work focuses on computer vision, robust deep learning and medical image analysis.',
  ],
  [
    'Most of my research has taken shape through international benchmark challenges hosted at ',
    { b: 'ICRA' }, ', ', { b: 'ECCV' }, ', ', { b: 'MICCAI' }, ' and ', { b: 'WACV' },
    '. These range from long-tailed semantic segmentation of unstructured outdoor terrain and Parkinsonian gait severity prediction to multi-organ ultrasound analysis and cross-domain person retrieval. My team placed ',
    { b: '3rd at the ICRA 2026 GOOSE 2D Fine-Grained Semantic Segmentation Challenge' },
    ' with GOOSE-M2F, and the method is available as a preprint on ',
    { text: 'arXiv', href: 'https://arxiv.org/abs/2606.15937' },
    '.',
  ],
  [
    'Beyond research challenges, I enjoy building applied AI systems. I received a ',
    { b: 'MacBook Pro Award' },
    ' at the Build for Good Hackathon 2026 for Satyamev-Bot, a multimodal fact-checking system, and was a ',
    { b: 'Top 10 Finalist' },
    ' at Megathon 2026, IIIT Hyderabad.',
  ],
  [
    "I'm open to ", { b: 'research internships and collaborations' },
    ' in computer vision and medical imaging. Please feel free to reach out.',
  ],
];

export const researchInterests = ['Computer Vision', 'Robust Deep Learning', 'Medical Image Analysis'];

// Newest first. Inline segments follow the same format as bio.
export const news = [
  { date: 'Oct 2026', parts: ['Top 10 Finalist at ', { text: 'Megathon 2026, IIIT Hyderabad', href: 'https://www.linkedin.com/feed/update/urn:li:activity:7516477167237763072/' }, ' for a multilingual Android AI application built on Bhashini AI.'] },
  { date: 'Oct 2026', parts: ['Ranked 33rd among 695 submissions in the ', { text: 'WACV 2027 UPAR Challenge', href: 'https://www.codabench.org/competitions/18196/' }, ' (Track 2: Attribute-based Person Retrieval).'] },
  { date: 'Aug 2026', parts: ['Received the MacBook Pro Award at the ', { text: 'Build for Good Hackathon 2026', href: 'https://www.linkedin.com/feed/update/urn:li:activity:7496968478638329856/' }, ', among the Top 34 of 3,000+ teams, for Satyamev-Bot.'] },
  { date: 'Aug 2026', parts: ['Placed 18th in the ', { text: 'MICCAI Deep-Breath 2026 UUSIVC Challenge', href: 'https://www.codabench.org/competitions/17263/' }, ' for multi-organ ultrasound analysis.'] },
  { date: 'Aug 2026', parts: ['Placed 16th in the ', { text: 'ECCV 2026 MoCha Challenge', href: 'https://www.codabench.org/competitions/16752/' }, ' on Parkinsonian gait severity prediction.'] },
  { date: 'Jun 2026', parts: [{ text: 'GOOSE-M2F', href: 'https://arxiv.org/abs/2606.15937' }, ' preprint released on arXiv.'] },
  { date: 'May 2026', parts: ['Secured 3rd place in the ', { text: 'ICRA 2026 GOOSE 2D Fine-Grained Semantic Segmentation Challenge', href: 'https://www.codabench.org/competitions/14257/' }, ' with 70.08% composite mIoU.'] },
];

export const education = [
  {
    title: 'B.Tech in Artificial Intelligence and Machine Learning',
    period: 'July 2025 – May 2029',
    institution: 'Rajiv Gandhi University of Knowledge Technologies, Nuzvid (IIIT)',
    details: 'CGPA: 9.1 · Currently in 2nd year',
  },
  {
    title: 'Pre-University Course (PUC)',
    period: '2023 – 2025',
    institution: 'Rajiv Gandhi University of Knowledge Technologies, Nuzvid (IIIT)',
    details: 'CGPA: 9.82',
  },
];

export const skills = [
  { group: 'Programming', items: ['Python', 'Java', 'C'] },
  { group: 'Technologies', items: ['Computer Vision', 'Deep Learning', 'Machine Learning', 'AI Engineering', 'LLMs', 'VLMs'] },
  { group: 'Frameworks', items: ['PyTorch', 'TensorFlow', 'OpenCV', 'Hugging Face Ecosystem', 'CUDA', 'timm'] },
  { group: 'Tools', items: ['VS Code', 'Git', 'Kaggle', 'Colab', 'TensorBoard', 'Weights & Biases'] },
];

export const languages = ['English', 'Hindi', 'Telugu'];

// Badge colour keys: 'robotics' | 'vision' | 'medical' | 'preprint' (muted solid fills, see theme.css).
export const publications = [
  {
    id: 'goose-m2f',
    badge: 'ICRA 2026',
    badgeKind: 'robotics',
    title: 'GOOSE-M2F: Adapting Mask2Former for High-Fidelity, Long-Tailed Fine-Grained Semantic Segmentation in Unstructured Outdoor Terrain',
    url: 'https://arxiv.org/abs/2606.15937',
    authors: ['Jyothiraditya Lingam', 'Nikhileswara Rao Sulake', 'Sai Manikanta Eswar Machara'],
    venue: 'arXiv preprint, 2026 · ICRA 2026 GOOSE 2D Fine-Grained Semantic Segmentation Challenge',
    result: '3rd Place · 70.08% composite mIoU',
    links: [
      { label: 'arXiv', href: 'https://arxiv.org/abs/2606.15937' },
      { label: 'Code', href: 'https://github.com/Aditya-Lingam-9000/GOOSE-M2F' },
      { label: 'Model', href: 'https://huggingface.co/XYZ9843/GOOSE-M2F' },
      { label: 'Challenge', href: 'https://www.codabench.org/competitions/14257/' },
    ],
  },
];

// Research challenge work, newest first.
export const challenges = [
  {
    id: 'upar-2027',
    domain: 'Computer Vision',
    badge: 'WACV 2027',
    badgeKind: 'vision',
    title: 'Cross-Domain Attribute-Based Person Retrieval',
    challenge: 'RWS2027 - UPAR Challenge Track 2: Attribute-based Person Retrieval',
    period: 'September 2026 – October 2026',
    result: '33rd among 695 submissions',
    summary: 'Developed a cross-domain person retrieval framework combining visual representations, attribute-aware learning, domain-shift calibration, and cascaded reranking for fine-grained surveillance retrieval.',
    tags: ['Person Retrieval', 'Domain Shift', 'Attribute Learning', 'Re-ranking'],
    links: [
      { label: 'Code', href: 'https://github.com/Aditya-Lingam-9000/upar_challenge_26_rws27' },
      { label: 'Challenge', href: 'https://www.codabench.org/competitions/18196/' },
    ],
  },
  {
    id: 'deep-breath-2026',
    domain: 'Medical AI',
    badge: 'MICCAI 2026',
    badgeKind: 'medical',
    title: 'Unified Multi-Branch Framework for Multi-Organ Ultrasound Analysis',
    challenge: 'Deep-Breath 2026 - Universal UltraSound Image and Video Analysis Challenge (UUSIVC)',
    period: 'June 2026 – August 2026',
    result: '18th Place',
    summary: 'Developed a unified multi-branch deep learning framework integrating EfficientNet-B5–UNet++ segmentation, temporal CEUS perfusion modeling, and morphological refinement for multi-organ ultrasound segmentation and diagnostic classification across B-mode, CEUS and video modalities.',
    tags: ['Medical Imaging', 'Ultrasound', 'Segmentation', 'UNet++'],
    links: [
      { label: 'Code', href: 'https://github.com/Aditya-Lingam-9000/uusivc2026' },
      { label: 'Challenge', href: 'https://www.codabench.org/competitions/17263/' },
    ],
  },
  {
    id: 'mocha-2026',
    domain: 'Medical AI',
    badge: 'ECCV 2026',
    badgeKind: 'vision',
    title: 'Cross-Site Parkinsonian Gait Severity Prediction',
    challenge: 'MoCha2026 - Benchmark and Challenge on Parkinsonian Gait',
    period: 'May 2026 – August 2026',
    result: '16th Place',
    summary: 'Worked on a cross-site Parkinsonian gait severity prediction pipeline integrating BiGRU/MoMask motion embeddings, biomechanical feature engineering, adversarial feature selection, and calibrated ensemble learning.',
    tags: ['Gait Analysis', 'Motion Embeddings', 'BiGRU', 'Ensemble Learning'],
    links: [
      { label: 'Code', href: 'https://github.com/Aditya-Lingam-9000/MoCha-26' },
      { label: 'Challenge', href: 'https://www.codabench.org/competitions/16752/' },
    ],
  },
  {
    id: 'goose-2026',
    domain: 'Robotics',
    badge: 'ICRA 2026',
    badgeKind: 'robotics',
    title: 'GOOSE-M2F: Long-Tail-Aware Fine-Grained Semantic Segmentation',
    challenge: 'GOOSE 2D Fine-Grained Semantic Segmentation Challenge',
    period: 'March 2026 – May 2026',
    result: '3rd Place · 70.08% composite mIoU',
    summary: 'Developed GOOSE-M2F, a long-tail-aware Mask2Former framework integrating attention-based feature refinement, rare-class supervision, and imbalance-aware optimization for fine-grained semantic segmentation in unstructured outdoor environments.',
    tags: ['Semantic Segmentation', 'Mask2Former', 'Long-Tail Learning', 'Robotics'],
    links: [
      { label: 'arXiv', href: 'https://arxiv.org/abs/2606.15937' },
      { label: 'Code', href: 'https://github.com/Aditya-Lingam-9000/GOOSE-M2F' },
      { label: 'Model', href: 'https://huggingface.co/XYZ9843/GOOSE-M2F' },
      { label: 'Challenge', href: 'https://www.codabench.org/competitions/14257/' },
    ],
  },
];

// Ranked results, in the order shown on the CV. `rank` + `suffix` drive the large ordinal; `context` is optional.
export const rankings = [
  { rank: '3', suffix: 'rd', place: '3rd Place', event: 'ICRA 2026', badgeKind: 'robotics', name: 'GOOSE 2D Fine-Grained Semantic Segmentation Challenge', metric: '70.08% composite mIoU', note: 'attaining 70.08% official composite mIoU with GOOSE-M2F.', href: 'https://www.codabench.org/competitions/14257/' },
  { rank: '16', suffix: 'th', place: '16th Place', event: 'ECCV 2026', badgeKind: 'vision', name: 'MoCha Challenge', note: 'for cross-site Parkinsonian gait severity prediction using fused BiGRU/MoMask motion representations and biomechanical features.', href: 'https://www.codabench.org/competitions/16752/' },
  { rank: '18', suffix: 'th', place: '18th Place', event: 'Deep-Breath 2026 at MICCAI', badgeKind: 'medical', name: 'UUSIVC Challenge', note: 'for multi-organ ultrasound segmentation and diagnostic classification across B-mode, CEUS, and video modalities.', href: 'https://www.codabench.org/competitions/17263/' },
  { rank: '33', suffix: 'rd', context: 'of 695 submissions', place: '33rd among 695 Submissions', event: 'WACV 2027', badgeKind: 'vision', name: 'UPAR Challenge', note: 'for cross-domain attribute-based person retrieval across real-world surveillance datasets.', href: 'https://www.codabench.org/competitions/18196/' },
];

// Hackathon projects and awards.
export const hackathons = [
  {
    id: 'satyamev-bot',
    award: 'MacBook Pro Award',
    event: 'Build for Good Hackathon 2026',
    date: 'Aug 2026',
    title: 'Satyamev-Bot: Multimodal AI Fact-Checking System',
    summary: 'Recognised among the Top 34 teams out of 3,000+ nationwide for developing Satyamev-Bot, a multimodal AI fact-checking system.',
    tags: ['Multimodal AI', 'Fact-Checking', 'LLMs'],
    link: { label: 'View Announcement', href: 'https://www.linkedin.com/feed/update/urn:li:activity:7496968478638329856/' },
  },
  {
    id: 'megathon-2026',
    award: 'Top 10 Finalist',
    event: 'Megathon 2026, IIIT Hyderabad',
    date: 'Oct 2026',
    title: 'Multilingual AI Assistant for Android',
    summary: 'An Android-based multilingual AI application integrating Bhashini AI for machine translation, automatic speech recognition, text-to-speech and OCR.',
    tags: ['Android', 'Bhashini AI', 'Speech', 'OCR', 'Translation'],
    link: { label: 'View Announcement', href: 'https://www.linkedin.com/feed/update/urn:li:activity:7516477167237763072/' },
  },
];

export const navLinks = [
  { to: '/', label: 'About', num: '01' },
  { to: '/research', label: 'Research', num: '02' },
  { to: '/achievements', label: 'Achievements', num: '03' },
  { to: '/cv', label: 'CV', num: '04' },
];

// Domains used by the Research page filter (must match challenge.domain values).
export const researchDomains = ['Computer Vision', 'Medical AI', 'Robotics'];
