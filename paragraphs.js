// paragraphs array for all the levels and their texts
const paragraphs = [
    "Art Tutor the greatest man to ever live.",
    
    "Fun fact about Art Tutor, he walks 10km per day! and thats simply amazing.",
    
    "Learning to appreciate Art Tutor is like learning how to drink water, you basically have to do it to live.",
    
    "Good typing skills are essential in today's digital world. They help you work faster, communicate better, and save time on everyday tasks.",
    
    "Typing is a valuable skill that everyone should develop. Whether you're writing emails, creating documents, or chatting online, faster typing means more productivity and less frustration.",
    
    "Success doesn't come from what you do occasionally, it comes from what you do consistently. When you practice typing every day, you build muscle memory. Your fingers learn where the keys are without thinking, and your speed improves naturally over time.",
    
    "Typists often handle confidential documents. Treat sensitive information with the utmost care. Follow company policies regarding data security and privacy. Securely store or destroy confidential documents as instructed. Professional integrity is essential in maintaining trust and credibility.",
    
    "A growth mindset is the belief that intelligence and abilities can be developed through effort and dedication. This mindset is essential for academic success, as it encourages students to embrace challenges, persevere through setbacks, and see failure as an opportunity for growth and learning rather than a permanent limitation.",
    
    "Failure is not the end; it's a detour on the road to success. Everyone stumbles and falls along the way, but what truly matters is how you respond. Instead of letting setbacks discourage you, view them as valuable learning experiences. Analyze what went wrong, extract the lessons, adjust your approach, and keep moving forward with renewed determination and confidence.",
    
    "The way you perceive the world and yourself has a profound impact on your reality. Your thoughts are like seeds, and the ones you nurture will ultimately blossom into your life experiences. Train your mind to focus on the positive aspects of yourself, your accomplishments, and the possibilities that lie ahead. Practice gratitude daily, affirming your worth and visualizing your success in all endeavors.",
    
    "A virtual assistant typically abbreviated to VA is generally self employed and provides professional administrative, technical, or creative assistance to clients remotely from a home office. Virtual assistants perform various tasks including email management, scheduling appointments, data entry, social media management, customer service, bookkeeping, and content creation. They must possess excellent communication skills, time management abilities, and proficiency with various software applications.",
    
    "Effective communication is the cornerstone of successful teamwork. Team members must actively listen to each other, share ideas openly, and provide constructive feedback. Clear communication prevents misunderstandings and ensures everyone is aligned with project goals. Regular team meetings, collaborative tools, and open channels of communication foster a positive work environment. When team members feel heard and valued, they become more engaged and productive. Building strong communication skills takes practice but yields tremendous benefits.",
    
    "When we talk about motivating others, the justification is the end result either we want to avoid the pain or go towards pleasure or what we want to get the person to do. How we achieve the end result, are our alternatives. As a manager, we need to understand the other person's justification and then come up with alternatives. We may then choose the right alternative. However, in general, we choose the first or the emotionally satisfying one. Typically people stop at this level of analysis and start to act. But a good manager would think of the following also.",
    
    "Communication is the lifeblood of any organization. In the workplace, effective communication is essential for collaboration, problem solving, and building strong relationships. It involves not only verbal and written communication but also nonverbal cues like body language and tone of voice. Typists play a crucial role in workplace communication by creating clear, concise, and professional documents. Whether it's drafting emails, reports, presentations, or meeting minutes, their work helps convey information accurately and efficiently. Beyond typing skills, effective communicators possess strong interpersonal skills.",
    
    "The Master of Business Administration MBA or M.B.A. degree originated in the United States in the early twentieth century when the country industrialized and companies sought scientific approaches to management. The core courses in an MBA program cover various areas of business such as accounting, applied statistics, business communication, business ethics, business law, finance, managerial economics, management, entrepreneurship, marketing and operations in a manner most relevant to management analysis and strategy. Most programs also include elective courses and concentrations for further study in a particular area.",
    
    "A paralegal is a person trained in legal matters who performs tasks requiring knowledge of the law and legal procedures. A paralegal is not a lawyer but can be employed by a law office or work freelance at a company or law firm. Paralegals are not allowed to offer legal services directly to the public on their own and must perform their legal work under an attorney or law firm. Their responsibilities include conducting legal research, drafting legal documents, organizing case files, interviewing clients and witnesses, and assisting attorneys during trials. Paralegals must maintain strict confidentiality, demonstrate attention to detail, and stay current with changes in laws.",
    
    "After working tirelessly at a marketing firm for three years, Rachel was disappointed when her annual review resulted in only a one percent raise. Feeling undervalued, she decided to update her resume and explore other opportunities. Within a few weeks, she received an offer from a competitor for a twenty percent salary increase and a more senior position. Rachel's decision to advocate for herself led to a significant career advancement and financial gain, proving the importance of knowing your worth in the job market. This experience taught her valuable lessons about negotiation, self advocacy, and the importance of recognizing when it's time to move on from a position that no longer serves your professional growth.",
    
    "Organizational culture significantly influences employee satisfaction, productivity, and retention. A positive workplace culture promotes collaboration, innovation, and mutual respect among team members. Leaders play a critical role in shaping culture through their actions, decisions, and communication styles. They must model the behaviors and values they wish to see throughout the organization. Creating an inclusive environment where diverse perspectives are valued leads to better problem solving and decision making. Companies with strong cultures invest in employee development, recognize achievements, and maintain transparent communication channels. Regular feedback, professional development opportunities, and work life balance initiatives contribute to a healthy organizational culture.",
    
    "Communication is the lifeblood of any organization. In the workplace, effective communication is essential for collaboration, problem solving, and building strong relationships. It involves not only verbal and written communication but also nonverbal cues like body language and tone of voice. Typists play a crucial role in workplace communication by creating clear, concise, and professional documents. Whether it's drafting emails, reports, presentations, or meeting minutes, their work helps convey information accurately and efficiently. Beyond typing skills, effective communicators possess strong interpersonal skills, active listening abilities, and the ability to adapt their communication style to different audiences. They understand the importance of building rapport, resolving conflicts, and fostering a positive work environment.",
    
    "When we talk about motivating others, the justification is the end result either we want to avoid the pain or go towards pleasure or what we want to get the person to do. How we achieve the end result, are our alternatives. As a manager, we need to understand the other person's justification and then come up with alternatives. We may then choose the right alternative. However, in general, we choose the first or the emotionally satisfying one. Typically people stop at this level of analysis and start to act. But a good manager would think of the following also: Will the action guarantee the consequence? What about other unintended consequences? This requires a certain experience. Are we capable of doing this action? Intention and the selection of the most ideal alternative do not guarantee execution, if we do not have the skills and the experience. Most motivational tactics fail, because without execution capability, they is only wishful thinking. Therefore, comprehensive planning and skill development are essential."
];

// level information array for all the levels and their data
const levelinformation = [
    { difficulty: "Easy", time: 60, description: "" },
    { difficulty: "Easy", time: 60, description: "" },
    { difficulty: "Easy", time: 60, description: "" },
    { difficulty: "Easy", time: 60, description: "" },
    { difficulty: "Easy", time: 60, description: "" },
    
    { difficulty: "Medium", time: 90, description: "" },
    { difficulty: "Medium", time: 90, description: "" },
    { difficulty: "Medium", time: 90, description: "" },
    { difficulty: "Medium", time: 90, description: "" },
    { difficulty: "Medium", time: 90, description: "" },
    { difficulty: "Medium", time: 90, description: "" },
    { difficulty: "Medium", time: 90, description: "" },
    
    { difficulty: "Hard", time: 120, description: "" },
    { difficulty: "Hard", time: 120, description: "" },
    { difficulty: "Hard", time: 120, description: "" },
    { difficulty: "Hard", time: 120, description: "" },
    
    { difficulty: "Expert", time: 150, description: "" },
    { difficulty: "Expert", time: 150, description: "" },
    { difficulty: "Expert", time: 150, description: "" },
    { difficulty: "Expert", time: 150, description: "" }
];