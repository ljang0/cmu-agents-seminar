export const seminar = {
  semester: 'Fall 2026',
  day: 'Mondays',
  time: '12:30–2 PM',
  room: 'GHC 8102',
  email: 'ljang@cs.cmu.edu',
  contacts: ['kohjingyu', 'PranjalAggarw16', 'stephofx', 'ianwu97'],
};

export type Session = {
  /** Weekly Monday slot, in YYYY-MM-DD format. */
  date: string;
  title?: string;
  speaker?: string;
  speakerUrl?: string;
  speakerImage?: string;
  abstract?: string[];
  affiliation?: string;
  /** Optional link to the paper, talk page, or recording. */
  url?: string;
  /** Replaces the talk fields for a break or schedule announcement. */
  notice?: string;
};

// Seminar Mondays in the Fall 2026 teaching semester, starting October 26.
// Talk fields remain TBD until confirmed.
// CMU's calendar ends classes December 4:
// https://www.cmu.edu/hub/calendar/docs/2627-academic-calendar.pdf
export const sessions: Session[] = [
  { date: '2026-10-26', notice: 'Social' },
  {
    date: '2026-11-02',
    speaker: 'Ian Wu',
    speakerUrl: 'https://ianyhwu.github.io/',
    affiliation: 'CMU',
    speakerImage: '/ian-wu.jpeg',
    title: 'Scaling Test-Time Compute by Learning to Orchestrate Exploration',
    abstract: [
      "Solving difficult, open-ended problems often requires exploring a large space of possible directions, where it is unclear in advance which directions will be useful. Multi-agent systems offer a promising way to scale this exploration: rather than having a single model work through a problem sequentially, an orchestrator agent can identify and delegate exploration directions to subagents, gather their findings, and decide what to investigate next. But how good are today's LLMs at orchestrating this process?",
      'In this talk, we study how LLMs coordinate multi-agent exploration on difficult mathematical and scientific reasoning problems. We find that models struggle to explore effectively: they assign repeated work, converge on suboptimal solutions too early, and spend substantial effort solving problems themselves instead of directing their subagents. We argue that effective orchestration requires a different set of behaviors and skills from conventional CoT-based problem-solving, and that these behaviors and skills can be explicitly trained. We introduce LOrE (Learning to Orchestrate Exploration), a method that combines midtraining on synthetic data with multi-turn reinforcement learning to teach models to coordinate exploration. Our results show that a trained orchestrator can explore more effectively and achieve substantial improvements as we scale test-time compute.',
    ],
  },
  { date: '2026-11-09' },
  {
    date: '2026-11-16',
    speaker: 'Daman Arora',
    speakerUrl: 'https://daman1209arora.github.io/',
    affiliation: 'CMU',
    speakerImage: '/daman-arora.jpg',
    title: 'Training Language Models to Fail Gracefully',
    abstract: [
      'Reinforcement learning has become a cornerstone of training increasingly capable language models. However, as these models are deployed in more complex and high-stakes environments, improving their capabilities alone is not enough. A central challenge is ensuring that models behave reliably, particularly when faced with uncertainty or situations where they are likely to make mistakes.',
      'In this talk, we will discuss a broader line of research that reconsiders the optimization landscape induced by the classical REINFORCE algorithm. By examining how conventional policy-gradient objectives shape learning dynamics, this research develops alternative objectives that address fundamental limitations of standard reinforcement learning providing a unifying perspective on recent methods such as MaxRL, TailRL, and GracefulRL. The main focus of the talk will be GracefulRL, a framework for training models to recognize when they are likely to fail and choose safer alternatives without sacrificing their ability to succeed. Through theoretical insights and experiments across diverse decision-making and reasoning tasks, the talk will illustrate how RL when done right can lead to not only more capable but also more reliable AI systems.',
    ],
  },
  { date: '2026-11-23' },
  { date: '2026-11-30' },
];
